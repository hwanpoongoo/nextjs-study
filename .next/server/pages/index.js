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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst API_KEY = \"266d41f1f37bf4cbd51b1e8929e15eeb\";\nfunction Home({ serverSideResults  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { /*#__PURE__*/ 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async ()=>{\n            //const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);\n            //const json = await response.json();\n            const { results  } = await (//await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)\n            await fetch(`/api/movies`)).json();\n            setMovies(results);\n            console.log(results);\n        })();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    \"color\": \"red\"\n                },\n                className: \"jsx-cd211a6430fd0cbc\",\n                children: \"csr화면입니다\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-cd211a6430fd0cbc\" + \" \" + \"container\",\n                children: [\n                    !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-cd211a6430fd0cbc\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 18\n                    }, this),\n                    movies === null || movies === void 0 ? void 0 : movies.map((movie)=>//return으로 뽑아낸점\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-cd211a6430fd0cbc\" + \" \" + \"movie\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,\n                                    className: \"jsx-cd211a6430fd0cbc\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"jsx-cd211a6430fd0cbc\",\n                                    children: movie.original_title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, movie.id, true, {\n                            fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hwanp\\\\OneDrive\\\\바탕 화면\\\\nextjs study\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"cd211a6430fd0cbc\",\n                children: \".container.jsx-cd211a6430fd0cbc{display:grid;\\nplace-items:center;\\ngrid-template-columns:1fr 1fr;\\npadding:20px;\\ngap:20px}\\n.movie.jsx-cd211a6430fd0cbc{cursor:pointer}\\n.movie.jsx-cd211a6430fd0cbc img.jsx-cd211a6430fd0cbc{max-width:100%;\\nborder-radius:12px;\\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\\ntransition:transform 0.2s ease-in-out;\\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\\n.movie.jsx-cd211a6430fd0cbc:hover img.jsx-cd211a6430fd0cbc{-webkit-transform:scale(1.05) translateY(-10px);\\n-moz-transform:scale(1.05) translateY(-10px);\\n-ms-transform:scale(1.05) translateY(-10px);\\ntransform:scale(1.05) translateY(-10px)}\\n.movie.jsx-cd211a6430fd0cbc h4.jsx-cd211a6430fd0cbc{font-size:18px;\\ntext-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNOO0FBR3JDLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQWtDO0FBRW5DLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUFBLGlCQUFpQixHQUFDLEVBQUUsQ0FBQztJQUNqRCxLQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsS0FBSyxvQkFBRUssTUFBTSxNQUFDQyxTQUFTLE1BQUlQLCtDQUFRO0lBQ25DRCxnREFBUyxLQUFLLENBQUM7bUJBQ0EsQ0FBQztZQUNaLEVBQWdHO1lBQ2hHLEVBQXFDO1lBRXJDLEtBQUssQ0FBQyxDQUFDUyxDQUFBQSxPQUFPLEdBQUMsR0FBRyxLQUFLLEVBQ25CLEVBQThFO1lBQzlFLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLFdBQVcsSUFDeEJDLElBQUk7WUFDTkgsU0FBUyxDQUFDQyxPQUFPO1lBQ2pCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTztRQUN2QixDQUFDO0lBQ0osQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUdILE1BQU07O3dGQUVMSyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQSxDQUFPLFFBQUMsQ0FBSztnQkFBQSxDQUFDOzswQkFBRSxDQUFROzs7Ozs7d0ZBQ3ZCQyxDQUFQOzBEQUFhLENBQVc7O3FCQUV4QlQsTUFBTSxnRkFBS1UsQ0FBRTs7a0NBQUMsQ0FBVTs7Ozs7O29CQUN6QlYsTUFBTSxhQUFOQSxNQUFNLEtBQU5BLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsTUFBTSxDQUFFVyxHQUFHLEVBQUVDLEtBQUssR0FDakIsRUFBZTtvR0FDYkgsQ0FBRztzRUFBVyxDQUFPOzs0R0FDbkJJLENBQUc7b0NBQUNDLEdBQUcsR0FBRyxtQ0FBbUMsRUFBRUYsS0FBSyxDQUFDRyxXQUFXOzs7Ozs7OzRHQUNoRUMsQ0FBRTs7OENBQUVKLEtBQUssQ0FBQ0ssY0FBYzs7Ozs7OzsyQkFGQ0wsS0FBSyxDQUFDTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQzVDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5cbmNvbnN0IEFQSV9LRVkgPSBcIjI2NmQ0MWYxZjM3YmY0Y2JkNTFiMWU4OTI5ZTE1ZWViXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3NlcnZlclNpZGVSZXN1bHRzfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21vdmllcyxzZXRNb3ZpZXNdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICAgICAgLy9jb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBjb25zdCB7cmVzdWx0c30gPSBhd2FpdCAoXG4gICAgICAgICAgLy9hd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWApXG4gICAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvbW92aWVzYClcbiAgICAgICAgKS5qc29uKCk7ICAgIFxuICAgICAgICBzZXRNb3ZpZXMocmVzdWx0cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXG4gICAgfSkoKTtcbiB9LFtdKTtcblxuIFxuICByZXR1cm4gKFxuICA8PiBcbiAgPHAgc3R5bGU9e3tcImNvbG9yXCI6XCJyZWRcIn19PmNzcu2ZlOuptOyeheuLiOuLpDwvcD5cbiAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cbiAgICBcbiAgICAgeyFtb3ZpZXMgJiYgPGgxPkxvYWRpbmcuLi48L2gxPn1cbiAgICAge21vdmllcz8ubWFwKChtb3ZpZSk9PihcbiAgICAgICAvL3JldHVybuycvOuhnCDrvZHslYTrgrjsoJBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiIGtleT17bW92aWUuaWR9PlxuICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWB9IC8+XG4gICAgICAgICAgPGg0Pnttb3ZpZS5vcmlnaW5hbF90aXRsZX08L2g0PlxuICAgICAgICA8L2Rpdj4gICBcbiAgICAgKSl9XG4gICA8L2Rpdj5cblxuICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXMgOiBjZW50ZXI7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cblxuICAgIC5tb3ZpZSB7XG4gICAgICBjdXJzb3IgOnBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5tb3ZpZSBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcbiAgICB9XG4gICAgLm1vdmllOmhvdmVyIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIH1cbiAgICAubW92aWUgaDQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuICApXG59XG5cbiBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkFQSV9LRVkiLCJIb21lIiwic2VydmVyU2lkZVJlc3VsdHMiLCJyb3V0ZXIiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJyZXN1bHRzIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsInAiLCJzdHlsZSIsImRpdiIsImgxIiwibWFwIiwibW92aWUiLCJpbWciLCJzcmMiLCJwb3N0ZXJfcGF0aCIsImg0Iiwib3JpZ2luYWxfdGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();