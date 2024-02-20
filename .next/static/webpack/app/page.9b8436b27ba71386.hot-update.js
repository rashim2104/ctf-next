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

/***/ "(app-pages-browser)/./components/task2.jsx":
/*!******************************!*\
  !*** ./components/task2.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Task2 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [validationResults, setValidationResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        answer1: false,\n        answer2: false,\n        answer3: false\n    });\n    const soloCheck = async (userAnswer, tag)=>{\n        try {\n            const response = await fetch(\"/api/task2\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer,\n                    tag\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message == \"Correct answer.\") {\n                    switch(tag){\n                        case 1:\n                            setValidationResults({\n                                ...validationResults,\n                                answer1: true\n                            });\n                            break;\n                        case 2:\n                            setValidationResults({\n                                ...validationResults,\n                                answer2: true\n                            });\n                            break;\n                        case 3:\n                            setValidationResults({\n                                ...validationResults,\n                                answer3: true\n                            });\n                            break;\n                    }\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    const handleCheck = async ()=>{\n        const userAnswer1 = taskanswers.task2_1;\n        const userAnswer2 = taskanswers.task2_2;\n        const userAnswer3 = taskanswers.task2_3;\n        try {\n            const response = await fetch(\"/api/task2all\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer1,\n                    userAnswer2,\n                    userAnswer3\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message === \"All answers are correct. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_1,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_1: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54\",\n                        disabled: validationResults.answer1,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_1, 1);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col  items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_2,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_2: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54 w-1/2\",\n                        disabled: validationResults.answer2,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_2, 2);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col  items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_3,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_3: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54 w-1/2 \",\n                        disabled: validationResults.answer3,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_3, 3);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button-54\",\n                onClick: handleCheck,\n                children: \"Check All\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task2, \"d/7xfyiwOlyAm2i3u4Fd5NpVaNQ=\");\n_c = Task2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task2);\nvar _c;\n$RefreshReg$(_c, \"Task2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7UUFDdkRRLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFFQSxNQUFNQyxZQUFZLE9BQU1DLFlBQVlDO1FBQ2hDLElBQUc7WUFDQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDdkNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUjtvQkFBWUM7Z0JBQUk7WUFDM0M7WUFDQSxJQUFHQyxTQUFTTyxFQUFFLEVBQUM7Z0JBQ1gsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO2dCQUNoQ0MsTUFBTUYsS0FBS0csT0FBTztnQkFDbEIsSUFBR0gsS0FBS0csT0FBTyxJQUFJLG1CQUFrQjtvQkFDakMsT0FBT1o7d0JBQ0gsS0FBSzs0QkFDRE4scUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUUsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREQscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUcsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREYscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUksU0FBUzs0QkFBSTs0QkFDekQ7b0JBQ1I7Z0JBQ0o7WUFDSjtRQUNKLEVBQUMsT0FBTWdCLE9BQU07WUFDVEYsTUFBTTtRQUNWO0lBQ0o7SUFHQSxNQUFNRyxjQUFjO1FBQ2hCLE1BQU1DLGNBQWMxQixZQUFZMkIsT0FBTztRQUN2QyxNQUFNQyxjQUFjNUIsWUFBWTZCLE9BQU87UUFDdkMsTUFBTUMsY0FBYzlCLFlBQVkrQixPQUFPO1FBR3ZDLElBQUc7WUFDQyxNQUFNbkIsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtnQkFDMUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUTtvQkFBYUU7b0JBQWFFO2dCQUFZO1lBQ2pFO1lBQ0EsSUFBR2xCLFNBQVNPLEVBQUUsRUFBQztnQkFDWCxNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ2hDQyxNQUFNRixLQUFLRyxPQUFPO2dCQUNsQixJQUFHSCxLQUFLRyxPQUFPLEtBQUssOERBQTZEO29CQUM3RXBCO2dCQUNKO1lBQ0o7UUFDSixFQUFDLE9BQU1xQixPQUFNO1lBQ1RGLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7a0NBQ0csOERBQUNFO3dCQUNHRCxXQUFVO3dCQUNWRSxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxPQUFPckMsWUFBWTJCLE9BQU87d0JBQzFCVyxVQUFVLENBQUNDLFFBQVV0QyxlQUFlO2dDQUFFLEdBQUdELFdBQVc7Z0NBQUUyQixTQUFTWSxNQUFNQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7OztrQ0FFdEYsOERBQUNJO3dCQUFPUixXQUFVO3dCQUFZUyxVQUFVdEMsa0JBQWtCRSxPQUFPO3dCQUFFcUMsU0FBUzs0QkFDeEVsQyxVQUFVVCxZQUFZMkIsT0FBTyxFQUFFO3dCQUNuQztrQ0FBRzs7Ozs7O29CQUNsQnZCLGtCQUFrQkUsT0FBTyxrQkFBSSw4REFBQ3NDO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNiO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQ0dELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLE9BQU9yQyxZQUFZNkIsT0FBTzt3QkFDMUJTLFVBQVUsQ0FBQ0MsUUFBVXRDLGVBQWU7Z0NBQUUsR0FBR0QsV0FBVztnQ0FBRTZCLFNBQVNVLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7O2tDQUV0Riw4REFBQ0k7d0JBQU9SLFdBQVU7d0JBQWtCUyxVQUFVdEMsa0JBQWtCRyxPQUFPO3dCQUFFb0MsU0FBUzs0QkFDOUVsQyxVQUFVVCxZQUFZNkIsT0FBTyxFQUFFO3dCQUNuQztrQ0FBRzs7Ozs7O29CQUNsQnpCLGtCQUFrQkcsT0FBTyxrQkFBSSw4REFBQ3FDO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNiO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQ0dELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLE9BQU9yQyxZQUFZK0IsT0FBTzt3QkFDMUJPLFVBQVUsQ0FBQ0MsUUFBVXRDLGVBQWU7Z0NBQUUsR0FBR0QsV0FBVztnQ0FBRStCLFNBQVNRLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7O2tDQUV0Riw4REFBQ0k7d0JBQU9SLFdBQVU7d0JBQW1CUyxVQUFVdEMsa0JBQWtCSSxPQUFPO3dCQUFFbUMsU0FBUzs0QkFDL0VsQyxVQUFVVCxZQUFZK0IsT0FBTyxFQUFFO3dCQUNuQztrQ0FBRzs7Ozs7O29CQUNsQjNCLGtCQUFrQkksT0FBTyxrQkFBSSw4REFBQ29DO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNKO2dCQUFPUixXQUFVO2dCQUFZVSxTQUFTbEI7MEJBQWE7Ozs7Ozs7Ozs7OztBQUloRTtHQWpITTFCO0tBQUFBO0FBa0hOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFzazIuanN4PzA1MTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhc2syID0gKHsgdGFza2Fuc3dlcnMsIHNldFRhc2tBbnN3ZXJzLCBzdGVwLCBoYW5kbGVJbmNyZW1lbnRTdGVwIH0pID0+IHtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uUmVzdWx0cywgc2V0VmFsaWRhdGlvblJlc3VsdHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGFuc3dlcjE6IGZhbHNlLFxyXG4gICAgICAgIGFuc3dlcjI6IGZhbHNlLFxyXG4gICAgICAgIGFuc3dlcjM6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzb2xvQ2hlY2sgPSBhc3luYyh1c2VyQW5zd2VyLCB0YWcpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Rhc2syXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyQW5zd2VyLCB0YWcgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIkNvcnJlY3QgYW5zd2VyLlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGFnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIxOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIyOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVjayA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBbnN3ZXIxID0gdGFza2Fuc3dlcnMudGFzazJfMTtcclxuICAgICAgICBjb25zdCB1c2VyQW5zd2VyMiA9IHRhc2thbnN3ZXJzLnRhc2syXzI7XHJcbiAgICAgICAgY29uc3QgdXNlckFuc3dlcjMgPSB0YXNrYW5zd2Vycy50YXNrMl8zO1xyXG5cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS90YXNrMmFsbFwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckFuc3dlcjEsIHVzZXJBbnN3ZXIyLCB1c2VyQW5zd2VyMyB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09PSBcIkFsbCBhbnN3ZXJzIGFyZSBjb3JyZWN0LiBZb3UgaGF2ZSB1bmxvY2tlZCB0aGUgbmV4dCBsZXZlbC5cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLTInPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBtYi02IHBlZXIgaC1mdWxsIHctMS8yIHJvdW5kZWQtWzdweF0gICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8xfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NFwiIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIxfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxue3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjEgJiYgPHNwYW4+Q29ycmVjdCE8L3NwYW4+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1iLTYgcGVlciBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtWzdweF0gICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NCB3LTEvMlwiIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIyfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzIsIDIpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxue3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjIgJiYgPHNwYW4+Q29ycmVjdCE8L3NwYW4+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1iLTYgcGVlciBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtWzdweF0gICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NCB3LTEvMiBcIiBkaXNhYmxlZD17dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyM30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbG9DaGVjayh0YXNrYW5zd2Vycy50YXNrMl8zLCAzKTtcclxuICAgICAgICAgICAgICAgIH19PkNoZWNrPC9idXR0b24+XHJcbnt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIzICYmIDxzcGFuPkNvcnJlY3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NFwiIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfT5DaGVjayBBbGw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYXNrMjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFzazIiLCJ0YXNrYW5zd2VycyIsInNldFRhc2tBbnN3ZXJzIiwic3RlcCIsImhhbmRsZUluY3JlbWVudFN0ZXAiLCJ2YWxpZGF0aW9uUmVzdWx0cyIsInNldFZhbGlkYXRpb25SZXN1bHRzIiwiYW5zd2VyMSIsImFuc3dlcjIiLCJhbnN3ZXIzIiwic29sb0NoZWNrIiwidXNlckFuc3dlciIsInRhZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJoYW5kbGVDaGVjayIsInVzZXJBbnN3ZXIxIiwidGFzazJfMSIsInVzZXJBbnN3ZXIyIiwidGFzazJfMiIsInVzZXJBbnN3ZXIzIiwidGFzazJfMyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic3BhbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task2.jsx\n"));

/***/ })

});