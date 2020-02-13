/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/1.svg":
/*!*********************************!*\
  !*** ./src/assets/images/1.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/1.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/1.svg?");

/***/ }),

/***/ "./src/assets/images/2.svg":
/*!*********************************!*\
  !*** ./src/assets/images/2.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/2.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/2.svg?");

/***/ }),

/***/ "./src/assets/images/3.svg":
/*!*********************************!*\
  !*** ./src/assets/images/3.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/3.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/3.svg?");

/***/ }),

/***/ "./src/assets/images/4.svg":
/*!*********************************!*\
  !*** ./src/assets/images/4.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/4.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/4.svg?");

/***/ }),

/***/ "./src/assets/images/Crayon-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/Crayon-icon.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Crayon-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Crayon-icon.png?");

/***/ }),

/***/ "./src/assets/images/Cuda.png":
/*!************************************!*\
  !*** ./src/assets/images/Cuda.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Cuda.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Cuda.png?");

/***/ }),

/***/ "./src/assets/images/Fb.png":
/*!**********************************!*\
  !*** ./src/assets/images/Fb.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Fb.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Fb.png?");

/***/ }),

/***/ "./src/assets/images/Flag-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Flag-icon.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Flag-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Flag-icon.png?");

/***/ }),

/***/ "./src/assets/images/Gears-icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/Gears-icon.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Gears-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Gears-icon.png?");

/***/ }),

/***/ "./src/assets/images/LinkedIn.png":
/*!****************************************!*\
  !*** ./src/assets/images/LinkedIn.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/LinkedIn.png\");\n\n//# sourceURL=webpack:///./src/assets/images/LinkedIn.png?");

/***/ }),

/***/ "./src/assets/images/Mail.png":
/*!************************************!*\
  !*** ./src/assets/images/Mail.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Mail.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Mail.png?");

/***/ }),

/***/ "./src/assets/images/Rocket-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/Rocket-icon.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Rocket-icon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Rocket-icon.png?");

/***/ }),

/***/ "./src/assets/images/Twitter.png":
/*!***************************************!*\
  !*** ./src/assets/images/Twitter.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Twitter.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Twitter.png?");

/***/ }),

/***/ "./src/assets/images/profileicon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/profileicon.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/profileicon.png\");\n\n//# sourceURL=webpack:///./src/assets/images/profileicon.png?");

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_Crayon_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/Crayon-icon.png */ \"./src/assets/images/Crayon-icon.png\");\n/* harmony import */ var _assets_images_Fb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/Fb.png */ \"./src/assets/images/Fb.png\");\n/* harmony import */ var _assets_images_Flag_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/Flag-icon.png */ \"./src/assets/images/Flag-icon.png\");\n/* harmony import */ var _assets_images_Gears_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/Gears-icon.png */ \"./src/assets/images/Gears-icon.png\");\n/* harmony import */ var _assets_images_LinkedIn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/LinkedIn.png */ \"./src/assets/images/LinkedIn.png\");\n/* harmony import */ var _assets_images_Mail_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/Mail.png */ \"./src/assets/images/Mail.png\");\n/* harmony import */ var _assets_images_Rocket_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/Rocket-icon.png */ \"./src/assets/images/Rocket-icon.png\");\n/* harmony import */ var _assets_images_Twitter_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/Twitter.png */ \"./src/assets/images/Twitter.png\");\n/* harmony import */ var _assets_images_Cuda_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/Cuda.png */ \"./src/assets/images/Cuda.png\");\n/* harmony import */ var _assets_images_profileicon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/profileicon.png */ \"./src/assets/images/profileicon.png\");\n/* harmony import */ var _assets_images_1_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/1.svg */ \"./src/assets/images/1.svg\");\n/* harmony import */ var _assets_images_2_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/2.svg */ \"./src/assets/images/2.svg\");\n/* harmony import */ var _assets_images_3_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/3.svg */ \"./src/assets/images/3.svg\");\n/* harmony import */ var _assets_images_4_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/4.svg */ \"./src/assets/images/4.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });