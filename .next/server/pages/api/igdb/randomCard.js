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
exports.id = "pages/api/igdb/randomCard";
exports.ids = ["pages/api/igdb/randomCard"];
exports.modules = {

/***/ "(api)/./pages/api/igdb/randomCard.js":
/*!**************************************!*\
  !*** ./pages/api/igdb/randomCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const url = \"https://api.igdb.com/v4/games\";\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Client-ID\": process.env.IGDB_CLIENT_ID,\n            \"Authorization\": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`\n        },\n        body: `fields name, slug, cover.url ; limit ${req.query.nb}; where rating != null & cover != null;`\n    };\n    const response = await fetch(url, options);\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWdkYi9yYW5kb21DYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsVUFBVTtRQUNkQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7WUFDdkMsaUJBQWlCLENBQUMsT0FBTyxFQUFFRixRQUFRQyxHQUFHLENBQUNFLGlCQUFpQixDQUFDLENBQUM7UUFDNUQ7UUFDQUMsTUFBTSxDQUFDLHFDQUFxQyxFQUFFVixJQUFJVyxLQUFLLENBQUNDLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztJQUNyRztJQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTVosS0FBS0M7SUFDbEMsTUFBTVksT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBRWhDZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLXNlYXJjaC8uL3BhZ2VzL2FwaS9pZ2RiL3JhbmRvbUNhcmQuanM/MWYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5pZ2RiLmNvbS92NC9nYW1lcyc7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NsaWVudC1JRCc6IHByb2Nlc3MuZW52LklHREJfQ0xJRU5UX0lELFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuSUdEQl9BQ0NFU1NfVE9LRU59YCxcbiAgICB9LFxuICAgIGJvZHk6IGBmaWVsZHMgbmFtZSwgc2x1ZywgY292ZXIudXJsIDsgbGltaXQgJHtyZXEucXVlcnkubmJ9OyB3aGVyZSByYXRpbmcgIT0gbnVsbCAmIGNvdmVyICE9IG51bGw7YCxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJJR0RCX0NMSUVOVF9JRCIsIklHREJfQUNDRVNTX1RPS0VOIiwiYm9keSIsInF1ZXJ5IiwibmIiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/igdb/randomCard.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/igdb/randomCard.js"));
module.exports = __webpack_exports__;

})();