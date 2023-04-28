"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/igdb/games";
exports.ids = ["pages/api/igdb/games"];
exports.modules = {

/***/ "(api)/./pages/api/igdb/games.js":
/*!*********************************!*\
  !*** ./pages/api/igdb/games.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const url = \"https://api.igdb.com/v4/games\";\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Client-ID\": process.env.IGDB_CLIENT_ID,\n            \"Authorization\": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`\n        },\n        body: `fields name, slug; search \"${req.query.query}\"; limit 10; where cover != null;`\n    };\n    const response = await fetch(url, options);\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWdkYi9nYW1lcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsTUFBTTtJQUNaLE1BQU1DLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1lBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sRUFBRUYsUUFBUUMsR0FBRyxDQUFDRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVEO1FBQ0FDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRVYsSUFBSVcsS0FBSyxDQUFDQSxLQUFLLENBQUMsaUNBQWlDLENBQUM7SUFDeEY7SUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1YLEtBQUtDO0lBQ2xDLE1BQU1XLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQ2QsSUFBSWUsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLXNlYXJjaC8uL3BhZ2VzL2FwaS9pZ2RiL2dhbWVzLmpzP2I1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5pZ2RiLmNvbS92NC9nYW1lcyc7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2xpZW50LUlEJzogcHJvY2Vzcy5lbnYuSUdEQl9DTElFTlRfSUQsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Byb2Nlc3MuZW52LklHREJfQUNDRVNTX1RPS0VOfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogYGZpZWxkcyBuYW1lLCBzbHVnOyBzZWFyY2ggXCIke3JlcS5xdWVyeS5xdWVyeX1cIjsgbGltaXQgMTA7IHdoZXJlIGNvdmVyICE9IG51bGw7YCxcbiAgICB9O1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIklHREJfQ0xJRU5UX0lEIiwiSUdEQl9BQ0NFU1NfVE9LRU4iLCJib2R5IiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/igdb/games.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/igdb/games.js"));
module.exports = __webpack_exports__;

})();