//all imports needed
import React from "react";
import Select from "react-select";
import style from "../styles/home.module.scss";
//import hooks
import { useState, useEffect, useId } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import MyComponent from "./component/loadgames";
import Link from "next/link"; 


//this function is used to display all games from an API by calling them with the fetct method
export default function DisplayGames() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [randomGames, setGames] = useState([]);

  const loadAnyGames = async (nb) => {
    const response = await fetch(`/api/igdb/randomCard?nb=${nb}`);
    const data = await response.json();
    setGames(data);
  };

  useEffect(() => {
    loadAnyGames(10);
  }, []);

  const onGameSelect = (game) => {
    router.push(`/game/${game.value}`);
  };


  //function to call the API
  const SearchGames = async (query) => {
    try {
      const response = await fetch(`/api/igdb/games?query=${query}`);
      const data = await response.json();
      const result = data.map((game) => ({ label: game.name, value: game.slug }));
      setOptions(result);
    } catch (error) {
      console.error("Error fetching games: ", error);
    }
  };
  

  const HandleSelect = debounce((e) => {
    setInputValue(e);
    SearchGames(e);
  }, 800 );
  
  return (
    <>
      <main>
        <div className={style.contain}>
          <h1 className="p-2 mb-1 text-white text-center">
            Et si vous découvriez un nouveau jeu?
          </h1>
          <Select
          placeholder="type your game"
            instanceId={useId()}
            options={options}
            onInputChange={HandleSelect}
            value={inputValue}
            onChange={onGameSelect}
          />
          <div className="row mt-3 justify-content-center gy-4">
            {randomGames.map((game, i) => (
              
              <div key={i} className="col-md-2">
                <div className="position-relative">
                <Link href={"game/" + `${game.slug}`}>
                <MyComponent url={game.cover.url}></MyComponent>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}


