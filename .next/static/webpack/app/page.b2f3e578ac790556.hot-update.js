"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_task1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/task1 */ \"(app-pages-browser)/./components/task1.jsx\");\n/* harmony import */ var _components_task2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/task2 */ \"(app-pages-browser)/./components/task2.jsx\");\n/* harmony import */ var _components_task3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/task3 */ \"(app-pages-browser)/./components/task3.jsx\");\n/* harmony import */ var _components_task4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/task4 */ \"(app-pages-browser)/./components/task4.jsx\");\n/* harmony import */ var _components_task5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/task5 */ \"(app-pages-browser)/./components/task5.jsx\");\n/* harmony import */ var _components_task6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/task6 */ \"(app-pages-browser)/./components/task6.jsx\");\n/* harmony import */ var _components_task7__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/task7 */ \"(app-pages-browser)/./components/task7.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst VideoBG = \"/videos/VideoBG.mp4\";\n\n\n\n\n\n\n\nfunction Form() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const TaskTitles = [\n        \"Chumma\",\n        \"Inspect\",\n        \"VisualCrypto\",\n        \"NestedHex\",\n        \"MorseCode\",\n        \"QR\",\n        \"MP3\",\n        \"Congratulations\"\n    ];\n    const [taskanswers, setTaskAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        task1_1: \"\",\n        task2_1: \"\",\n        task2_2: \"\",\n        task2_3: \"\",\n        task3_1: \"\",\n        task4_1: \"\",\n        task4_2: \"\",\n        task4_3: \"\",\n        task5_1: \"\",\n        task5_2: \"\",\n        task6_1: \"\",\n        task7_1: \"\"\n    });\n    const handleIncrementStep = ()=>{\n        if (step < TaskTitles.length - 1) {\n            setStep((prevStep)=>prevStep + 1);\n        }\n    };\n    const PageDisplay = ()=>{\n        switch(step){\n            case 0:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this);\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task4__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task5__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, this);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task6__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, this);\n            case 6:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task7__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    taskanswers: taskanswers,\n                    setTaskAnswers: setTaskAnswers,\n                    step: step,\n                    handleIncrementStep: handleIncrementStep\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 86,\n                    columnNumber: 21\n                }, this);\n            case 7:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Congratulations! You have completed all the tasks.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 94,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, this);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                playsInline: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: VideoBG,\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this),\n                    \"Your browser does not support the video tag.\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hero-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"environment\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 20\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"hero glitch layers\",\n                                    \"data-text\": \"CTF CHanllenge\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"CTF CHanllenge\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 82\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 20\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                            lineNumber: 110,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rainbow-wrapper\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"rainbow-text\",\n                                    children: TaskTitles[step]\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                            lineNumber: 116,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur-background\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"body\",\n                        children: PageDisplay()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                        lineNumber: 123,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\app\\\\page.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_s(Form, \"GL590s7dt97zi36oN+V89zMuwXA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFVLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJMUQsOERBQUNxQjt3QkFBSUUsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FBUUg7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUFJRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0FsSFN4QjtLQUFBQTtBQW9IVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFZpZGVvQkcgPSAnL3ZpZGVvcy9WaWRlb0JHLm1wNCc7XG5pbXBvcnQgVGFzazEgZnJvbSAnQC9jb21wb25lbnRzL3Rhc2sxJztcbmltcG9ydCBUYXNrMiBmcm9tICdAL2NvbXBvbmVudHMvdGFzazInO1xuaW1wb3J0IFRhc2szIGZyb20gJ0AvY29tcG9uZW50cy90YXNrMyc7XG5pbXBvcnQgVGFzazQgZnJvbSAnQC9jb21wb25lbnRzL3Rhc2s0JztcbmltcG9ydCBUYXNrNSBmcm9tICdAL2NvbXBvbmVudHMvdGFzazUnO1xuaW1wb3J0IFRhc2s2IGZyb20gJ0AvY29tcG9uZW50cy90YXNrNic7XG5pbXBvcnQgVGFzazcgZnJvbSAnQC9jb21wb25lbnRzL3Rhc2s3JztcblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBUYXNrVGl0bGVzID0gW1wiQ2h1bW1hXCIsIFwiSW5zcGVjdFwiLCBcIlZpc3VhbENyeXB0b1wiLCBcIk5lc3RlZEhleFwiLCBcIk1vcnNlQ29kZVwiLCBcIlFSXCIsIFwiTVAzXCIsIFwiQ29uZ3JhdHVsYXRpb25zXCJdO1xuICAgIGNvbnN0IFt0YXNrYW5zd2Vycywgc2V0VGFza0Fuc3dlcnNdID0gdXNlU3RhdGUoe1xuICAgICAgICB0YXNrMV8xOlwiXCIsXG4gICAgICAgIHRhc2syXzE6XCJcIixcbiAgICAgICAgdGFzazJfMjpcIlwiLFxuICAgICAgICB0YXNrMl8zOlwiXCIsXG4gICAgICAgIHRhc2szXzE6XCJcIixcbiAgICAgICAgdGFzazRfMTpcIlwiLFxuICAgICAgICB0YXNrNF8yOlwiXCIsXG4gICAgICAgIHRhc2s0XzM6XCJcIixcbiAgICAgICAgdGFzazVfMTpcIlwiLFxuICAgICAgICB0YXNrNV8yOlwiXCIsXG4gICAgICAgIHRhc2s2XzE6XCJcIixcbiAgICAgICAgdGFzazdfMTpcIlwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlSW5jcmVtZW50U3RlcCA9ICgpID0+IHtcbiAgICAgICAgaWYoc3RlcCA8IFRhc2tUaXRsZXMubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICBzZXRTdGVwKChwcmV2U3RlcCkgPT4gcHJldlN0ZXAgKyAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBQYWdlRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFzazEgXG4gICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICBzZXRUYXNrQW5zd2Vycz17c2V0VGFza0Fuc3dlcnN9ICBcbiAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrMiBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrMyBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrNCBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrNSBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrNiBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrNyBcbiAgICAgICAgICAgICAgICAgICAgdGFza2Fuc3dlcnM9e3Rhc2thbnN3ZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFza0Fuc3dlcnM9e3NldFRhc2tBbnN3ZXJzfSAgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXA9e2hhbmRsZUluY3JlbWVudFN0ZXB9Lz4pO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q29uZ3JhdHVsYXRpb25zISBZb3UgaGF2ZSBjb21wbGV0ZWQgYWxsIHRoZSB0YXNrcy48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0nPlxuICAgICAgICAgICAgPHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgcGxheXNJbmxpbmU+XG4gICAgICAgICAgICA8c291cmNlIHNyYz17VmlkZW9CR30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW52aXJvbm1lbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVybyBnbGl0Y2ggbGF5ZXJzXCIgZGF0YS10ZXh0PVwiQ1RGIENIYW5sbGVuZ2VcIj48c3Bhbj5DVEYgQ0hhbmxsZW5nZTwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWluYm93LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8Y2VudGVyPjxoMiBjbGFzc05hbWU9J3JhaW5ib3ctdGV4dCc+e1Rhc2tUaXRsZXNbc3RlcF19PC9oMj48L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmx1ci1iYWNrZ3JvdW5kJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+e1BhZ2VEaXNwbGF5KCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJWaWRlb0JHIiwiVGFzazEiLCJUYXNrMiIsIlRhc2szIiwiVGFzazQiLCJUYXNrNSIsIlRhc2s2IiwiVGFzazciLCJGb3JtIiwic3RlcCIsInNldFN0ZXAiLCJUYXNrVGl0bGVzIiwidGFza2Fuc3dlcnMiLCJzZXRUYXNrQW5zd2VycyIsInRhc2sxXzEiLCJ0YXNrMl8xIiwidGFzazJfMiIsInRhc2syXzMiLCJ0YXNrM18xIiwidGFzazRfMSIsInRhc2s0XzIiLCJ0YXNrNF8zIiwidGFzazVfMSIsInRhc2s1XzIiLCJ0YXNrNl8xIiwidGFzazdfMSIsImhhbmRsZUluY3JlbWVudFN0ZXAiLCJsZW5ndGgiLCJwcmV2U3RlcCIsIlBhZ2VEaXNwbGF5IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ2aWRlbyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiaDIiLCJkYXRhLXRleHQiLCJzcGFuIiwiY2VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});