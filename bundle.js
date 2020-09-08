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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./concat.js":
/*!*******************!*\
  !*** ./concat.js ***!
  \*******************/
/*! exports provided: bomDia, boaTarde, boaNoite, confirmacaoSaida */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bomDia\", function() { return bomDia; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boaTarde\", function() { return boaTarde; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boaNoite\", function() { return boaNoite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmacaoSaida\", function() { return confirmacaoSaida; });\nfunction bomDia(name) {\n  return \"Bom dia \".concat(name, \"!\");\n}\n;\nfunction boaTarde(name) {\n  return \"Boa tarde \".concat(name, \"!\");\n}\n;\nfunction boaNoite(name) {\n  return \"Boa noite \".concat(name, \"!\");\n}\n;\nfunction confirmacaoSaida(name) {\n  return \"Tem certeza de que deseja sair \".concat(name, \"?\");\n}\n;\n\n//# sourceURL=webpack:///./concat.js?");

/***/ }),

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: default, mult, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mult\", function() { return mult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\nfunction div(a, b) {\n  return a / b;\n}\n;\nfunction mult(a, b) {\n  return a * b;\n}\n;\nfunction sub(a, b) {\n  return a - b;\n}\n;\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./soma.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ \"./concat.js\");\n// 'as' permite renomear função, que não está definida como 'export default'\n// função definida como 'export default' não precisa ficar entre chaves no comando de import\n // como 'soma' é export default, caso queira renomea-lá, não precisa da keyword 'as'\n\n // forma de importação pontual de funções\n\n // forma de importação total de funções\n\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(8, 2));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"mult\"])(3, 0));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(4, 2));\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, 2)); // sempre usar apenas uma opção (pontual/total), importar uma vez o documento desejado\n\nconsole.log(Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"bomDia\"])('João'));\nconsole.log(Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"boaTarde\"])('Antônia'));\nconsole.log(Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"boaNoite\"])('Larissa'));\nconsole.log(Object(_concat__WEBPACK_IMPORTED_MODULE_2__[\"confirmacaoSaida\"])('André'));\nconsole.log(_concat__WEBPACK_IMPORTED_MODULE_2__[\"bomDia\"]('João'));\nconsole.log(_concat__WEBPACK_IMPORTED_MODULE_2__[\"boaTarde\"]('Antônia'));\nconsole.log(_concat__WEBPACK_IMPORTED_MODULE_2__[\"boaNoite\"]('Larissa'));\nconsole.log(_concat__WEBPACK_IMPORTED_MODULE_2__[\"confirmacaoSaida\"]('André')); // visualizar todas as funções contidas no pacote 'funcoesMsg'\n\nconsole.log(_concat__WEBPACK_IMPORTED_MODULE_2__);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sum; });\nfunction sum(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });