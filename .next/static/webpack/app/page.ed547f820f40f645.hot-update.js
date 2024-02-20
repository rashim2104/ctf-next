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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Task2 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [validationResults, setValidationResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        answer1: false,\n        answer2: false,\n        answer3: false\n    });\n    const soloCheck = async (userAnswer, tag)=>{\n        try {\n            const response = await fetch(\"/api/task2\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer,\n                    tag\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message == \"Correct answer.\") {\n                    switch(tag){\n                        case 1:\n                            setValidationResults({\n                                ...validationResults,\n                                answer1: true\n                            });\n                            break;\n                        case 2:\n                            setValidationResults({\n                                ...validationResults,\n                                answer2: true\n                            });\n                            break;\n                        case 3:\n                            setValidationResults({\n                                ...validationResults,\n                                answer3: true\n                            });\n                            break;\n                    }\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    const handleCheck = async ()=>{\n        const userAnswer1 = taskanswers.task2_1;\n        const userAnswer2 = taskanswers.task2_2;\n        const userAnswer3 = taskanswers.task2_3;\n        try {\n            const response = await fetch(\"/api/task2all\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer1,\n                    userAnswer2,\n                    userAnswer3\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message === \"All answers are correct. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Flag 1\",\n                        required: true,\n                        value: taskanswers.task2_1,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_1: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: validationResults.answer1,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_1, 1);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Flag 2\",\n                        required: true,\n                        value: taskanswers.task2_2,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_2: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: validationResults.answer2,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_2, 2);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Flag 3\",\n                        required: true,\n                        value: taskanswers.task2_3,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task2_3: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: validationResults.answer3,\n                        onClick: ()=>{\n                            soloCheck(taskanswers.task2_3, 3);\n                        },\n                        children: \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined),\n                    validationResults.answer3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Correct!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCheck,\n                children: \"Check All\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task2.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task2, \"d/7xfyiwOlyAm2i3u4Fd5NpVaNQ=\");\n_c = Task2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task2);\nvar _c;\n$RefreshReg$(_c, \"Task2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7UUFDdkRRLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFFQSxNQUFNQyxZQUFZLE9BQU1DLFlBQVlDO1FBQ2hDLElBQUc7WUFDQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDdkNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUjtvQkFBWUM7Z0JBQUk7WUFDM0M7WUFDQSxJQUFHQyxTQUFTTyxFQUFFLEVBQUM7Z0JBQ1gsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO2dCQUNoQ0MsTUFBTUYsS0FBS0csT0FBTztnQkFDbEIsSUFBR0gsS0FBS0csT0FBTyxJQUFJLG1CQUFrQjtvQkFDakMsT0FBT1o7d0JBQ0gsS0FBSzs0QkFDRE4scUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUUsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREQscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUcsU0FBUzs0QkFBSTs0QkFDekQ7d0JBQ0osS0FBSzs0QkFDREYscUJBQXFCO2dDQUFDLEdBQUdELGlCQUFpQjtnQ0FBRUksU0FBUzs0QkFBSTs0QkFDekQ7b0JBQ1I7Z0JBQ0o7WUFDSjtRQUNKLEVBQUMsT0FBTWdCLE9BQU07WUFDVEYsTUFBTTtRQUNWO0lBQ0o7SUFHQSxNQUFNRyxjQUFjO1FBQ2hCLE1BQU1DLGNBQWMxQixZQUFZMkIsT0FBTztRQUN2QyxNQUFNQyxjQUFjNUIsWUFBWTZCLE9BQU87UUFDdkMsTUFBTUMsY0FBYzlCLFlBQVkrQixPQUFPO1FBR3ZDLElBQUc7WUFDQyxNQUFNbkIsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtnQkFDMUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUTtvQkFBYUU7b0JBQWFFO2dCQUFZO1lBQ2pFO1lBQ0EsSUFBR2xCLFNBQVNPLEVBQUUsRUFBQztnQkFDWCxNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ2hDQyxNQUFNRixLQUFLRyxPQUFPO2dCQUNsQixJQUFHSCxLQUFLRyxPQUFPLEtBQUssOERBQTZEO29CQUM3RXBCO2dCQUNKO1lBQ0o7UUFDSixFQUFDLE9BQU1xQixPQUFNO1lBQ1RGLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7a0NBQ0csOERBQUNFO3dCQUVHQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxRQUFRO3dCQUNSQyxPQUFPdEMsWUFBWTJCLE9BQU87d0JBQzFCWSxVQUFVLENBQUNDLFFBQVV2QyxlQUFlO2dDQUFFLEdBQUdELFdBQVc7Z0NBQUUyQixTQUFTYSxNQUFNQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7OztrQ0FFdEYsOERBQUNJO3dCQUFPQyxVQUFVdkMsa0JBQWtCRSxPQUFPO3dCQUFFc0MsU0FBUzs0QkFDbERuQyxVQUFVVCxZQUFZMkIsT0FBTyxFQUFFO3dCQUNuQztrQ0FBRzs7Ozs7O29CQUNsQnZCLGtCQUFrQkUsT0FBTyxrQkFBSSw4REFBQ3VDO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNkOztrQ0FDRyw4REFBQ0U7d0JBQ0dDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLE9BQU90QyxZQUFZNkIsT0FBTzt3QkFDMUJVLFVBQVUsQ0FBQ0MsUUFBVXZDLGVBQWU7Z0NBQUUsR0FBR0QsV0FBVztnQ0FBRTZCLFNBQVNXLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7O2tDQUV0Riw4REFBQ0k7d0JBQU9DLFVBQVV2QyxrQkFBa0JHLE9BQU87d0JBQUVxQyxTQUFTOzRCQUNsRG5DLFVBQVVULFlBQVk2QixPQUFPLEVBQUU7d0JBQ25DO2tDQUFHOzs7Ozs7b0JBQ2xCekIsa0JBQWtCRyxPQUFPLGtCQUFJLDhEQUFDc0M7a0NBQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOzs7OzswQkFDRCw4REFBQ2Q7O2tDQUNHLDhEQUFDRTt3QkFDR0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsT0FBT3RDLFlBQVkrQixPQUFPO3dCQUMxQlEsVUFBVSxDQUFDQyxRQUFVdkMsZUFBZTtnQ0FBRSxHQUFHRCxXQUFXO2dDQUFFK0IsU0FBU1MsTUFBTUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7a0NBRXRGLDhEQUFDSTt3QkFBT0MsVUFBVXZDLGtCQUFrQkksT0FBTzt3QkFBRW9DLFNBQVM7NEJBQ2xEbkMsVUFBVVQsWUFBWStCLE9BQU8sRUFBRTt3QkFDbkM7a0NBQUc7Ozs7OztvQkFDbEIzQixrQkFBa0JJLE9BQU8sa0JBQUksOERBQUNxQztrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDSjtnQkFBT0UsU0FBU25COzBCQUFhOzs7Ozs7Ozs7Ozs7QUFJMUM7R0FsSE0xQjtLQUFBQTtBQW1ITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rhc2syLmpzeD8wNTE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUYXNrMiA9ICh7IHRhc2thbnN3ZXJzLCBzZXRUYXNrQW5zd2Vycywgc3RlcCwgaGFuZGxlSW5jcmVtZW50U3RlcCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvblJlc3VsdHMsIHNldFZhbGlkYXRpb25SZXN1bHRzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhbnN3ZXIxOiBmYWxzZSxcclxuICAgICAgICBhbnN3ZXIyOiBmYWxzZSxcclxuICAgICAgICBhbnN3ZXIzOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc29sb0NoZWNrID0gYXN5bmModXNlckFuc3dlciwgdGFnKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS90YXNrMlwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckFuc3dlciwgdGFnIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJDb3JyZWN0IGFuc3dlci5cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpb25SZXN1bHRzKHsuLi52YWxpZGF0aW9uUmVzdWx0cywgYW5zd2VyMTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpb25SZXN1bHRzKHsuLi52YWxpZGF0aW9uUmVzdWx0cywgYW5zd2VyMjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbGlkYXRpb25SZXN1bHRzKHsuLi52YWxpZGF0aW9uUmVzdWx0cywgYW5zd2VyMzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2sgPSBhc3luYygpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyQW5zd2VyMSA9IHRhc2thbnN3ZXJzLnRhc2syXzE7XHJcbiAgICAgICAgY29uc3QgdXNlckFuc3dlcjIgPSB0YXNrYW5zd2Vycy50YXNrMl8yO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBbnN3ZXIzID0gdGFza2Fuc3dlcnMudGFzazJfMztcclxuXHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdGFzazJhbGxcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJBbnN3ZXIxLCB1c2VyQW5zd2VyMiwgdXNlckFuc3dlcjMgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PT0gXCJBbGwgYW5zd2VycyBhcmUgY29ycmVjdC4gWW91IGhhdmUgdW5sb2NrZWQgdGhlIG5leHQgbGV2ZWwuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay0yJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ZsYWcgMSdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8xfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIxfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxue3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjEgJiYgPHNwYW4+Q29ycmVjdCE8L3NwYW4+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdGbGFnIDInXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFza2Fuc3dlcnMudGFzazJfMn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUYXNrQW5zd2Vycyh7IC4uLnRhc2thbnN3ZXJzLCB0YXNrMl8yOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyMn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvbG9DaGVjayh0YXNrYW5zd2Vycy50YXNrMl8yLCAyKTtcclxuICAgICAgICAgICAgICAgIH19PkNoZWNrPC9idXR0b24+XHJcbnt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIyICYmIDxzcGFuPkNvcnJlY3QhPC9zcGFuPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmxhZyAzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2thbnN3ZXJzLnRhc2syXzN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGFza0Fuc3dlcnMoeyAuLi50YXNrYW5zd2VycywgdGFzazJfMzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3ZhbGlkYXRpb25SZXN1bHRzLmFuc3dlcjN9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb2xvQ2hlY2sodGFza2Fuc3dlcnMudGFzazJfMywgMyk7XHJcbiAgICAgICAgICAgICAgICB9fT5DaGVjazwvYnV0dG9uPlxyXG57dmFsaWRhdGlvblJlc3VsdHMuYW5zd2VyMyAmJiA8c3Bhbj5Db3JyZWN0ITwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGVja30+Q2hlY2sgQWxsPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGFzazI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhc2syIiwidGFza2Fuc3dlcnMiLCJzZXRUYXNrQW5zd2VycyIsInN0ZXAiLCJoYW5kbGVJbmNyZW1lbnRTdGVwIiwidmFsaWRhdGlvblJlc3VsdHMiLCJzZXRWYWxpZGF0aW9uUmVzdWx0cyIsImFuc3dlcjEiLCJhbnN3ZXIyIiwiYW5zd2VyMyIsInNvbG9DaGVjayIsInVzZXJBbnN3ZXIiLCJ0YWciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImFsZXJ0IiwibWVzc2FnZSIsImVycm9yIiwiaGFuZGxlQ2hlY2siLCJ1c2VyQW5zd2VyMSIsInRhc2syXzEiLCJ1c2VyQW5zd2VyMiIsInRhc2syXzIiLCJ1c2VyQW5zd2VyMyIsInRhc2syXzMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwic3BhbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task2.jsx\n"));

/***/ })

});