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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Task2 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [validationResults, setValidationResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        answer1: false,\n        answer2: false,\n        answer3: false\n    });\n    const soloCheck = async (userAnswer, tag)=>{\n        try {\n            const response = await fetch(\"/api/task2\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer,\n                    tag\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message == \"Correct answer.\") {\n                    switch(tag){\n                        case 1:\n                            setValidationResults({\n                                ...validationResults,\n                                answer1: true\n                            });\n                            break;\n                        case 2:\n                            setValidationResults({\n                                ...validationResults,\n                                answer2: true\n                            });\n                            break;\n                        case 3:\n                            setValidationResults({\n                                ...validationResults,\n                                answer3: true\n                            });\n                            break;\n                    }\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    const handleCheck = async ()=>{\n        const userAnswer1 = taskanswers.task2_1;\n        const userAnswer2 = taskanswers.task2_2;\n        const userAnswer3 = taskanswers.task2_3;\n        try {\n            const response = await fetch(\"/api/task2all\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer1,\n                    userAnswer2,\n                    userAnswer3\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message === \"All answers are correct. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_1,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_1: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54\",\n                        disabled: validationResults.answer1,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_1, 1);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_2,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_2: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54\",\n                        disabled: validationResults.answer2,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_2, 2);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        type: \"text\",\n                        required: true,\n                        value: taskanswers.task2_3,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_3: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54 w-1/2\",\n                        disabled: validationResults.answer3,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_3, 3);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button-54\",\n                onClick: handleCheck,\n                children: \"Check All\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task2, \"d/7xfyiwOlyAm2i3u4Fd5NpVaNQ=\");\n_c = Task2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task2);\nvar _c;\n$RefreshReg$(_c, \"Task2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7UUFDdkRRLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFFQSxNQUFNQyxZQUFZLE9BQU1DLFlBQVlDO1FBQ2hDLElBQUc7WUFDQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDdkNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUjtvQkFBWUM7Z0JBQUk7WUFDM0M7WUFDQSxJQUFHQyxTQUFTTyxFQUFFLEVBQUM7Z0JBQ1gsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO2dCQUNoQ0MsTUFBTUYsS0FBS0csT0FBTztnQkFDbEIsSUFBR0gsS0FBS0csT0FBTyxJQUFJLG1CQUFrQjtvQkFDakMsT0FBT1o7d0JBQ0gsS0FBSzs0QkFDRE4scUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUUsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREQscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUcsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREYscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUksU0FBUzs0QkFBSTs0QkFDekQ7b0JBQ1I7Z0JBQ0o7WUFDSjtRQUNKLEVBQUMsT0FBTWdCLE9BQU07WUFDVEYsTUFBTTtRQUNWO0lBQ0o7SUFHQSxNQUFNRyxjQUFjO1FBQ2hCLE1BQU1DLGNBQWMxQixZQUFZMkIsT0FBTztRQUN2QyxNQUFNQyxjQUFjNUIsWUFBWTZCLE9BQU87UUFDdkMsTUFBTUMsY0FBYzlCLFlBQVkrQixPQUFPO1FBR3ZDLElBQUc7WUFDQyxNQUFNbkIsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtnQkFDMUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUTtvQkFBYUU7b0JBQWFFO2dCQUFZO1lBQ2pFO1lBQ0EsSUFBR2xCLFNBQVNPLEVBQUUsRUFBQztnQkFDWCxNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ2hDQyxNQUFNRixLQUFLRyxPQUFPO2dCQUNsQixJQUFHSCxLQUFLRyxPQUFPLEtBQUssOERBQTZEO29CQUM3RXBCO2dCQUNKO1lBQ0o7UUFDSixFQUFDLE9BQU1xQixPQUFNO1lBQ1RGLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7a0NBQ0csOERBQUNFO3dCQUNHRCxXQUFVO3dCQUNWRSxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxPQUFPckMsWUFBWTJCLE9BQU87d0JBQzFCVyxVQUFVLENBQUNDLFFBQVV0QyxlQUFlO2dDQUFFLEdBQUdELFdBQVc7Z0NBQUUyQixTQUFTWSxNQUFNQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7OztrQ0FFdEYsOERBQUNJO3dCQUFPUixXQUFVO3dCQUFZUyxVQUFVdEMsa0JBQWtCRSxPQUFPO3dCQUFFcUMsU0FBUzs0QkFDeEVsQyxVQUFVVCxZQUFZMkIsT0FBTyxFQUFFO3dCQUNuQztrQ0FBRzs7Ozs7O29CQUNsQnZCLGtCQUFrQkUsT0FBTyxrQkFBSSw4REFBQ3NDO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNiOztrQ0FDRyw4REFBQ0U7d0JBQ0dELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLE9BQU9yQyxZQUFZNkIsT0FBTzt3QkFDMUJTLFVBQVUsQ0FBQ0MsUUFBVXRDLGVBQWU7Z0NBQUUsR0FBR0QsV0FBVztnQ0FBRTZCLFNBQVNVLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7O2tDQUV0Riw4REFBQ0k7d0JBQU9SLFdBQVU7d0JBQVlTLFVBQVV0QyxrQkFBa0JHLE9BQU87d0JBQUVvQyxTQUFTOzRCQUN4RWxDLFVBQVVULFlBQVk2QixPQUFPLEVBQUU7d0JBQ25DO2tDQUFHOzs7Ozs7b0JBQ2xCekIsa0JBQWtCRyxPQUFPLGtCQUFJLDhEQUFDcUM7a0NBQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOzs7OzswQkFDRCw4REFBQ2I7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFDR0QsV0FBVTt3QkFDVkUsTUFBSzt3QkFDTEMsUUFBUTt3QkFDUkMsT0FBT3JDLFlBQVkrQixPQUFPO3dCQUMxQk8sVUFBVSxDQUFDQyxRQUFVdEMsZUFBZTtnQ0FBRSxHQUFHRCxXQUFXO2dDQUFFK0IsU0FBU1EsTUFBTUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7a0NBRXRGLDhEQUFDSTt3QkFBT1IsV0FBVTt3QkFBa0JTLFVBQVV0QyxrQkFBa0JJLE9BQU87d0JBQUVtQyxTQUFTOzRCQUM5RWxDLFVBQVVULFlBQVkrQixPQUFPLEVBQUU7d0JBQ25DO2tDQUFHOzs7Ozs7b0JBQ2xCM0Isa0JBQWtCSSxPQUFPLGtCQUFJLDhEQUFDb0M7a0NBQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQU9SLFdBQVU7Z0JBQVlVLFNBQVNsQjswQkFBYTs7Ozs7Ozs7Ozs7O0FBSWhFO0dBakhNMUI7S0FBQUE7QUFrSE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrMi5qc3g/MDUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFzazIgPSAoeyB0YXNrYW5zd2Vycywgc2V0VGFza0Fuc3dlcnMsIHN0ZXAsIGhhbmRsZUluY3JlbWVudFN0ZXAgfSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25SZXN1bHRzLCBzZXRWYWxpZGF0aW9uUmVzdWx0c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYW5zd2VyMTogZmFsc2UsXHJcbiAgICAgICAgYW5zd2VyMjogZmFsc2UsXHJcbiAgICAgICAgYW5zd2VyMzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNvbG9DaGVjayA9IGFzeW5jKHVzZXJBbnN3ZXIsIHRhZykgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdGFzazJcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJBbnN3ZXIsIHRhZyB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiQ29ycmVjdCBhbnN3ZXIuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0YWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW9uUmVzdWx0cyh7Li4udmFsaWRhdGlvblJlc3VsdHMsIGFuc3dlcjE6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW9uUmVzdWx0cyh7Li4udmFsaWRhdGlvblJlc3VsdHMsIGFuc3dlcjI6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0aW9uUmVzdWx0cyh7Li4udmFsaWRhdGlvblJlc3VsdHMsIGFuc3dlcjM6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlckFuc3dlcjEgPSB0YXNrYW5zd2Vycy50YXNrMl8xO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBbnN3ZXIyID0gdGFza2Fuc3dlcnMudGFzazJfMjtcclxuICAgICAgICBjb25zdCB1c2VyQW5zd2VyMyA9IHRhc2thbnN3ZXJzLnRhc2syXzM7XHJcblxyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Rhc2syYWxsXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyQW5zd2VyMSwgdXNlckFuc3dlcjIsIHVzZXJBbnN3ZXIzIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT09IFwiQWxsIGFuc3dlcnMgYXJlIGNvcnJlY3QuIFlvdSBoYXZlIHVubG9ja2VkIHRoZSBuZXh0IGxldmVsLlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbmNyZW1lbnRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2stMic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1iLTYgcGVlciBoLWZ1bGwgdy0xLzIgcm91bmRlZC1bN3B4XSAgIWJvcmRlciAgIWJvcmRlci1ncmF5LTMwMCBib3JkZXItdC10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBiZy13aGl0ZSBweC0zIHB5LTIuNSBmb250LXNhbnMgdGV4dC1zbSBmb250LW5vcm1hbCB0ZXh0LWJsdWUtZ3JheS03MDAgIHNoYWRvdy1sZyBzaGFkb3ctZ3JheS05MDAvNSBvdXRsaW5lIG91dGxpbmUtMCByaW5nLTQgcmluZy10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlciBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItYmx1ZS1ncmF5LTIwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItdC1ibHVlLWdyYXktMjAwIGZvY3VzOmJvcmRlci0yICBmb2N1czohYm9yZGVyLWdyYXktOTAwIGZvY3VzOmJyZGVyLXQtdHJhbnNwYXJlbnQgZm9jdXM6IWJvcmRlci10LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtMCBmb2N1czpyaW5nLWdyYXktOTAwLzEwIGRpc2FibGVkOmJvcmRlci0wIGRpc2FibGVkOmJnLWJsdWUtZ3JheS01MCBpbnB1dGZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2thbnN3ZXJzLnRhc2syXzF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGFza0Fuc3dlcnMoeyAuLi50YXNrYW5zd2VycywgdGFzazJfMTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLTU0XCIgZGlzYWJsZWQ9e3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjF9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb2xvQ2hlY2sodGFza2Fuc3dlcnMudGFzazJfMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9fT5DaGVjazwvYnV0dG9uPlxyXG57dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyMSAmJiA8c3Bhbj5Db3JyZWN0ITwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWItNiBwZWVyIGgtZnVsbCB3LTEvMiByb3VuZGVkLVs3cHhdICAhYm9yZGVyICAhYm9yZGVyLWdyYXktMzAwIGJvcmRlci10LXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IGJnLXdoaXRlIHB4LTMgcHktMi41IGZvbnQtc2FucyB0ZXh0LXNtIGZvbnQtbm9ybWFsIHRleHQtYmx1ZS1ncmF5LTcwMCAgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTkwMC81IG91dGxpbmUgb3V0bGluZS0wIHJpbmctNCByaW5nLXRyYW5zcGFyZW50IHRyYW5zaXRpb24tYWxsIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci1ibHVlLWdyYXktMjAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci10LWJsdWUtZ3JheS0yMDAgZm9jdXM6Ym9yZGVyLTIgIGZvY3VzOiFib3JkZXItZ3JheS05MDAgZm9jdXM6YnJkZXItdC10cmFuc3BhcmVudCBmb2N1czohYm9yZGVyLXQtZ3JheS05MDAgZm9jdXM6b3V0bGluZS0wIGZvY3VzOnJpbmctZ3JheS05MDAvMTAgZGlzYWJsZWQ6Ym9yZGVyLTAgZGlzYWJsZWQ6YmctYmx1ZS1ncmF5LTUwIGlucHV0ZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFza2Fuc3dlcnMudGFzazJfMn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUYXNrQW5zd2Vycyh7IC4uLnRhc2thbnN3ZXJzLCB0YXNrMl8yOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tNTRcIiBkaXNhYmxlZD17dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyMn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbG9DaGVjayh0YXNrYW5zd2Vycy50YXNrMl8yLCAyKTtcclxuICAgICAgICAgICAgICAgIH19PkNoZWNrPC9idXR0b24+XHJcbnt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIyICYmIDxzcGFuPkNvcnJlY3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWItNiBwZWVyIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1bN3B4XSAgIWJvcmRlciAgIWJvcmRlci1ncmF5LTMwMCBib3JkZXItdC10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBiZy13aGl0ZSBweC0zIHB5LTIuNSBmb250LXNhbnMgdGV4dC1zbSBmb250LW5vcm1hbCB0ZXh0LWJsdWUtZ3JheS03MDAgIHNoYWRvdy1sZyBzaGFkb3ctZ3JheS05MDAvNSBvdXRsaW5lIG91dGxpbmUtMCByaW5nLTQgcmluZy10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlciBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItYmx1ZS1ncmF5LTIwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItdC1ibHVlLWdyYXktMjAwIGZvY3VzOmJvcmRlci0yICBmb2N1czohYm9yZGVyLWdyYXktOTAwIGZvY3VzOmJyZGVyLXQtdHJhbnNwYXJlbnQgZm9jdXM6IWJvcmRlci10LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtMCBmb2N1czpyaW5nLWdyYXktOTAwLzEwIGRpc2FibGVkOmJvcmRlci0wIGRpc2FibGVkOmJnLWJsdWUtZ3JheS01MCBpbnB1dGZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2thbnN3ZXJzLnRhc2syXzN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGFza0Fuc3dlcnMoeyAuLi50YXNrYW5zd2VycywgdGFzazJfMzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLTU0IHctMS8yXCIgZGlzYWJsZWQ9e3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjN9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb2xvQ2hlY2sodGFza2Fuc3dlcnMudGFzazJfMywgMyk7XHJcbiAgICAgICAgICAgICAgICB9fT5DaGVjazwvYnV0dG9uPlxyXG57dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyMyAmJiA8c3Bhbj5Db3JyZWN0ITwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tNTRcIiBvbkNsaWNrPXtoYW5kbGVDaGVja30+Q2hlY2sgQWxsPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGFzazI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhc2syIiwidGFza2Fuc3dlcnMiLCJzZXRUYXNrQW5zd2VycyIsInN0ZXAiLCJoYW5kbGVJbmNyZW1lbnRTdGVwIiwidmFsaWRhdGlvblJlc3VsdHMiLCJzZXRWYWxpZGF0aW9uUmVzdWx0cyIsImFuc3dlcjEiLCJhbnN3ZXIyIiwiYW5zd2VyMyIsInNvbG9DaGVjayIsInVzZXJBbnN3ZXIiLCJ0YWciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImFsZXJ0IiwibWVzc2FnZSIsImVycm9yIiwiaGFuZGxlQ2hlY2siLCJ1c2VyQW5zd2VyMSIsInRhc2syXzEiLCJ1c2VyQW5zd2VyMiIsInRhc2syXzIiLCJ1c2VyQW5zd2VyMyIsInRhc2syXzMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInNwYW4iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task2.jsx\n"));

/***/ })

});