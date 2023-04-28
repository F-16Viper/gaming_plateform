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
exports.id = "pages/api/igdb/game";
exports.ids = ["pages/api/igdb/game"];
exports.modules = {

/***/ "(api)/./pages/api/igdb/game.js":
/*!********************************!*\
  !*** ./pages/api/igdb/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const url = \"https://api.igdb.com/v4/games\";\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Client-ID\": process.env.IGDB_CLIENT_ID,\n            \"Authorization\": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`\n        },\n        body: `fields name,summary,genres.name,cover.url,screenshots.url,videos.video_id,platforms.abbreviation,release_dates.date,rating,websites.*, involved_companies.company.name,involved_companies.developer,involved_companies.publisher; where slug = \"${req.query.query}\"; limit 1;`\n    };\n    const response = await fetch(url, options);\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWdkYi9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsVUFBVTtRQUNkQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7WUFDdkMsaUJBQWlCLENBQUMsT0FBTyxFQUFFRixRQUFRQyxHQUFHLENBQUNFLGlCQUFpQixDQUFDLENBQUM7UUFDNUQ7UUFDQUMsTUFBTSxDQUFDLGdQQUFnUCxFQUFFVixJQUFJVyxLQUFLLENBQUNBLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdlI7SUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1YLEtBQUtDO0lBQ2xDLE1BQU1XLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQ2QsSUFBSWUsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLXNlYXJjaC8uL3BhZ2VzL2FwaS9pZ2RiL2dhbWUuanM/Mjg2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmlnZGIuY29tL3Y0L2dhbWVzJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDbGllbnQtSUQnOiBwcm9jZXNzLmVudi5JR0RCX0NMSUVOVF9JRCxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuSUdEQl9BQ0NFU1NfVE9LRU59YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBgZmllbGRzIG5hbWUsc3VtbWFyeSxnZW5yZXMubmFtZSxjb3Zlci51cmwsc2NyZWVuc2hvdHMudXJsLHZpZGVvcy52aWRlb19pZCxwbGF0Zm9ybXMuYWJicmV2aWF0aW9uLHJlbGVhc2VfZGF0ZXMuZGF0ZSxyYXRpbmcsd2Vic2l0ZXMuKiwgaW52b2x2ZWRfY29tcGFuaWVzLmNvbXBhbnkubmFtZSxpbnZvbHZlZF9jb21wYW5pZXMuZGV2ZWxvcGVyLGludm9sdmVkX2NvbXBhbmllcy5wdWJsaXNoZXI7IHdoZXJlIHNsdWcgPSBcIiR7cmVxLnF1ZXJ5LnF1ZXJ5fVwiOyBsaW1pdCAxO2AsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gIH0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIklHREJfQ0xJRU5UX0lEIiwiSUdEQl9BQ0NFU1NfVE9LRU4iLCJib2R5IiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/igdb/game.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/igdb/game.js"));
module.exports = __webpack_exports__;

})();