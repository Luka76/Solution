/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scss/styles.scss":
/*!******************************!*\
  !*** ./src/Scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://solution/./src/Scss/styles.scss?");

/***/ }),

/***/ "./src/Slider.js":
/*!***********************!*\
  !*** ./src/Slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n    #slider;\r\n    #rightButton;\r\n    #leftButton;\r\n\r\n    constructor(slider, leftButton, rightButton) {\r\n        this.#slider = slider;\r\n        this.#rightButton = rightButton;\r\n        this.#leftButton = leftButton;\r\n\r\n        this.#rightButton.on('click', this.next.bind(this))\r\n        this.#leftButton.on('click', this.previous.bind(this))\r\n\r\n    }\r\n\r\n    previous() {\r\n        if (this.#isTransitionInProgress()) {\r\n            return;\r\n        }\r\n\r\n        const first = this.#firstImage();\r\n        const duplicated = first.clone();\r\n\r\n        this.#insertElement(duplicated, 'end')\r\n        this.#removeElement(first)\r\n    }\r\n\r\n    next() {\r\n        if (this.#isTransitionInProgress()) {\r\n            return;\r\n        }\r\n\r\n        const last = this.#lastImage();\r\n        const duplicated = last.clone();\r\n\r\n        this.#removeElement(last)\r\n        this.#insertElement(duplicated)\r\n    }\r\n\r\n    #isTransitionInProgress() {\r\n        return this.#slider.find('.fade-in,.fade-out').length > 0\r\n    }\r\n\r\n    #lastImage() {\r\n        return this.#slider.children().last();\r\n    }\r\n\r\n    #firstImage() {\r\n        return this.#slider.children().first();\r\n    }\r\n\r\n    #insertElement(el, position = 'start') {\r\n        el.addClass('fade-in');\r\n\r\n        if (position === 'start') {\r\n            this.#slider.prepend(el);\r\n        } else {\r\n            this.#slider.append(el)\r\n        }\r\n\r\n        el.on('animationend', function() {\r\n            el.removeClass('fade-in');\r\n        });\r\n    }\r\n\r\n    #removeElement(el) {\r\n        el.on('animationend', function() {\r\n            el.remove()\r\n        });\r\n\r\n        el.addClass('fade-out');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://solution/./src/Slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scss/styles.scss */ \"./src/Scss/styles.scss\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./src/Slider.js\");\n\r\n\r\n\r\n$(document).ready(function (){\r\n    const sliders = $('.slider');\r\n    const leftBtn = $('#left-button');\r\n    const rightBtn = $('#right-button')\r\n\r\n    new _Slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n        $(sliders[0]),\r\n        leftBtn,\r\n        rightBtn\r\n\r\n    );\r\n\r\n    new _Slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n        $(sliders[1]),\r\n        leftBtn,\r\n        rightBtn\r\n    );\r\n\r\n});\r\n\n\n//# sourceURL=webpack://solution/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;