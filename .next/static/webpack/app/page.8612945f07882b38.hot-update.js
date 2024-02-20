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

/***/ "(app-pages-browser)/./components/task1.jsx":
/*!******************************!*\
  !*** ./components/task1.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Task1 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCheck = async ()=>{\n        const userAnswer = taskanswers.task1_1;\n        setIsLoading(true); // Set loading state to true\n        try {\n            const response = await fetch(\"/api/task1\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message === \"Correct answer. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        } finally{\n            setIsLoading(false); // Reset loading state\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"task1name\",\n                    children: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam fuga quis corporis ea, vel doloremque dolores sequi nam cupiditate dignissimos, beatae nisi illum qui? Magni, consequuntur. Laudantium ea quia id?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"environment\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"task-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                        // placeholder='Flag 1'\n                        required: true,\n                        value: taskanswers.task1_1,\n                        onChange: (event)=>setTaskAnswers({\n                                ...taskanswers,\n                                task1_1: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-54\",\n                        onClick: handleCheck,\n                        disabled: isLoading,\n                        children: isLoading ? \"Loading...\" : \"Check\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"hint-button\",\n                onClick: ()=>alert(\"Follow the rules da Kanna\"),\n                children: \"Hint\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proj\\\\ctf-nextjs\\\\ctf-demo\\\\ctf-next\\\\components\\\\task1.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task1, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = Task1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task1);\nvar _c;\n$RefreshReg$(_c, \"Task1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazEuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUSxjQUFjO1FBQ2hCLE1BQU1DLGFBQWFQLFlBQVlRLE9BQU87UUFDdENILGFBQWEsT0FBTyw0QkFBNEI7UUFDaEQsSUFBSTtZQUNBLE1BQU1JLFdBQVcsTUFBTUMsTUFBTSxjQUFjO2dCQUN2Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVSO2dCQUFXO1lBQ3RDO1lBQ0EsSUFBSUUsU0FBU08sRUFBRSxFQUFFO2dCQUNiLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtnQkFDaENDLE1BQU1GLEtBQUtHLE9BQU87Z0JBQ2xCLElBQUlILEtBQUtHLE9BQU8sS0FBSyxxREFBcUQ7b0JBQ3RFakI7Z0JBQ0o7WUFDSjtRQUNKLEVBQUUsT0FBT2tCLE9BQU87WUFDWkYsTUFBTTtRQUNWLFNBQVU7WUFDTmQsYUFBYSxRQUFRLHNCQUFzQjtRQUMvQztJQUNKO0lBRUEscUJBQ0ksOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQU8sNEVBQUNDO29CQUFFRixXQUFVOzhCQUFZOzs7Ozs7Ozs7OzswQkFFakMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNHO3dCQUNHSCxXQUFVO3dCQUNWLHVCQUF1Qjt3QkFDdkJJLFFBQVE7d0JBQ1JDLE9BQU81QixZQUFZUSxPQUFPO3dCQUMxQnFCLFVBQVUsQ0FBQ0MsUUFBVTdCLGVBQWU7Z0NBQUUsR0FBR0QsV0FBVztnQ0FBRVEsU0FBU3NCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7O2tDQUd0Riw4REFBQ0k7Ozs7O2tDQUNELDhEQUFDQzt3QkFBT1YsV0FBVTt3QkFBWVcsU0FBUzVCO3dCQUFhNkIsVUFBVS9CO2tDQUN6REEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7MEJBR3BDLDhEQUFDNkI7Z0JBQU9WLFdBQVU7Z0JBQWNXLFNBQVMsSUFBTWYsTUFBTTswQkFBOEI7Ozs7Ozs7Ozs7OztBQUsvRjtHQXZETXBCO0tBQUFBO0FBeUROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFzazEuanN4PzdhOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFzazEgPSAoeyB0YXNrYW5zd2Vycywgc2V0VGFza0Fuc3dlcnMsIHN0ZXAsIGhhbmRsZUluY3JlbWVudFN0ZXAgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVjayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyQW5zd2VyID0gdGFza2Fuc3dlcnMudGFzazFfMTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7IC8vIFNldCBsb2FkaW5nIHN0YXRlIHRvIHRydWVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS90YXNrMVwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckFuc3dlciB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09PSBcIkNvcnJlY3QgYW5zd2VyLiBZb3UgaGF2ZSB1bmxvY2tlZCB0aGUgbmV4dCBsZXZlbC5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vIFJlc2V0IGxvYWRpbmcgc3RhdGVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rhc2sxJz5cclxuICAgICAgICAgICAgPGNlbnRlcj48cCBjbGFzc05hbWU9J3Rhc2sxbmFtZSc+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXNxdWFtIGZ1Z2EgcXVpcyBjb3Jwb3JpcyBlYSwgdmVsIGRvbG9yZW1xdWUgZG9sb3JlcyBzZXF1aSBuYW0gY3VwaWRpdGF0ZSBkaWduaXNzaW1vcywgYmVhdGFlIG5pc2kgaWxsdW0gcXVpPyBNYWduaSwgY29uc2VxdXVudHVyLiBMYXVkYW50aXVtIGVhIHF1aWEgaWQ/PC9wPjwvY2VudGVyPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiZ2xpdGNoXCIgZGF0YS10ZXh0PVwiVW5ha3UgUHVkaWNoYWRoYSBQb2R1XCI+VW5ha3UgUHVkaWNoYWRoYSBQb2R1PC9wPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW52aXJvbm1lbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGgyIGNsYXNzTmFtZT1cImhlcm8gZ2xpdGNoIGxheWVyc1wiIGRhdGEtdGV4dD1cIlVuYWt1IFB1ZGljaGFkaGEgUG9kdVwiPjxzcGFuPlVuYWt1IFB1ZGljaGFkaGEgUG9kdTwvc3Bhbj48L2gyPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzay0xJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWItNiBwZWVyIGgtZnVsbCB3LTEvMiByb3VuZGVkLVs3cHhdICAhYm9yZGVyICAhYm9yZGVyLWdyYXktMzAwIGJvcmRlci10LXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IGJnLXdoaXRlIHB4LTMgcHktMi41IGZvbnQtc2FucyB0ZXh0LXNtIGZvbnQtbm9ybWFsIHRleHQtYmx1ZS1ncmF5LTcwMCAgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTkwMC81IG91dGxpbmUgb3V0bGluZS0wIHJpbmctNCByaW5nLXRyYW5zcGFyZW50IHRyYW5zaXRpb24tYWxsIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci1ibHVlLWdyYXktMjAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlci10LWJsdWUtZ3JheS0yMDAgZm9jdXM6Ym9yZGVyLTIgIGZvY3VzOiFib3JkZXItZ3JheS05MDAgZm9jdXM6Ym9yZGVyLXQtdHJhbnNwYXJlbnQgZm9jdXM6IWJvcmRlci10LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtMCBmb2N1czpyaW5nLWdyYXktOTAwLzEwIGRpc2FibGVkOmJvcmRlci0wIGRpc2FibGVkOmJnLWJsdWUtZ3JheS01MCBpbnB1dGZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj0nRmxhZyAxJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2thbnN3ZXJzLnRhc2sxXzF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGFza0Fuc3dlcnMoeyAuLi50YXNrYW5zd2VycywgdGFzazFfMTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLTU0JyBvbkNsaWNrPXtoYW5kbGVDaGVja30gZGlzYWJsZWQ9e2lzTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdDaGVjayd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoaW50LWJ1dHRvbicgb25DbGljaz17KCkgPT4gYWxlcnQoJ0ZvbGxvdyB0aGUgcnVsZXMgZGEgS2FubmEnKX0+XHJcbiAgICAgICAgICAgICAgICBIaW50XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2sxO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhc2sxIiwidGFza2Fuc3dlcnMiLCJzZXRUYXNrQW5zd2VycyIsInN0ZXAiLCJoYW5kbGVJbmNyZW1lbnRTdGVwIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlQ2hlY2siLCJ1c2VyQW5zd2VyIiwidGFzazFfMSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXIiLCJwIiwiaW5wdXQiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task1.jsx\n"));

/***/ })

});