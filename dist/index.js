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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.ts":
/*!**********************!*\
  !*** ./src/clock.ts ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\nvar Clock = /** @class */ (function () {\r\n    function Clock() {\r\n        this.showSeconds = true;\r\n        this.dateFormat = \"mm/dd/yyyy\";\r\n    }\r\n    Clock.prototype.getShowSeconds = function () {\r\n        return this.showSeconds;\r\n    };\r\n    Clock.prototype.getDateFormat = function () {\r\n        return this.dateFormat;\r\n    };\r\n    Clock.prototype.getHour = function () {\r\n        var hours = this.getCurrentHours();\r\n        var minutes = \":\" + this.getCurrentMinutes();\r\n        var seconds = this.showSeconds ? \":\" + this.getCurrentSeconds() : '';\r\n        return hours + minutes + seconds;\r\n    };\r\n    Clock.prototype.getDate = function () {\r\n        var today = new Date();\r\n        var dd = String(today.getDate()).padStart(2, '0');\r\n        var mm = String(today.getMonth() + 1).padStart(2, '0');\r\n        var yyyy = today.getFullYear();\r\n        var weekDay = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"];\r\n        var month = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\r\n        if (this.dateFormat === \"ddmmyyyy\") {\r\n            return dd + \"/\" + mm + \"/\" + yyyy;\r\n        }\r\n        else if (this.dateFormat === \"string\") {\r\n            return weekDay[today.getDay()] + \" \" + dd + \", \" + month[today.getMonth()] + \" \" + yyyy;\r\n        }\r\n        else {\r\n            return mm + \"/\" + dd + \"/\" + yyyy;\r\n        }\r\n    };\r\n    Clock.prototype.setShowSeconds = function (showSeconds) {\r\n        this.showSeconds = showSeconds;\r\n    };\r\n    Clock.prototype.setDateFormat = function (dateFormat) {\r\n        this.dateFormat = dateFormat;\r\n    };\r\n    // private utilities\r\n    Clock.prototype.getCurrentHours = function () {\r\n        var currentHours = (new Date()).getHours();\r\n        if (currentHours < 10) {\r\n            return \"0\" + currentHours;\r\n        }\r\n        else {\r\n            return \"\" + currentHours;\r\n        }\r\n    };\r\n    Clock.prototype.getCurrentMinutes = function () {\r\n        var currentMinutes = (new Date()).getMinutes();\r\n        if (currentMinutes < 10) {\r\n            return \"0\" + currentMinutes;\r\n        }\r\n        else {\r\n            return \"\" + currentMinutes;\r\n        }\r\n    };\r\n    Clock.prototype.getCurrentSeconds = function () {\r\n        var currentSeconds = (new Date()).getSeconds();\r\n        if (currentSeconds < 10) {\r\n            return \"0\" + currentSeconds;\r\n        }\r\n        else {\r\n            return \"\" + currentSeconds;\r\n        }\r\n    };\r\n    return Clock;\r\n}());\r\n\r\n;\r\n\n\n//# sourceURL=webpack:///./src/clock.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/clock.ts\");\n\r\n// Init\r\nvar clock = new _clock__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\r\ninitPreferences();\r\nvar hours = document.getElementById(\"hours\");\r\nvar date = document.getElementById(\"date\");\r\nsetInterval(function () {\r\n    hours.textContent = clock.getHour();\r\n    date.textContent = clock.getDate();\r\n}, 1000);\r\n// Elements\r\nvar secondsToggler = document.getElementById('toggle-seconds');\r\nvar searchBarToggler = document.getElementById('toggle-search');\r\nvar backgroundToggler = document.querySelectorAll('.background-sample');\r\nvar dateToggler = document.querySelectorAll('.date-format');\r\nvar reset = document.getElementById('reset');\r\n// Event listener\r\nsecondsToggler.addEventListener('change', function () {\r\n    toggleSecondsIndicator(this.checked);\r\n});\r\nsearchBarToggler.addEventListener('change', function () {\r\n    toggleSearchBar(this.checked);\r\n});\r\nbackgroundToggler.forEach(function (backgroundSample) {\r\n    backgroundSample.addEventListener('click', function () {\r\n        var backgroundHexCode = this.dataset.background;\r\n        var fontHexCode = this.dataset.color;\r\n        setBackgroundColor(backgroundHexCode);\r\n        setFontColor(fontHexCode);\r\n    });\r\n});\r\ndateToggler.forEach(function (dateToggler) {\r\n    dateToggler.addEventListener('click', function () {\r\n        var dateFormat = this.dataset.format;\r\n        toggleDateFormat(dateFormat);\r\n    });\r\n});\r\nreset.addEventListener(\"click\", function () {\r\n    localStorage.removeItem(\"font-color\");\r\n    localStorage.removeItem(\"searchbar\");\r\n    localStorage.removeItem(\"date_format\");\r\n    localStorage.removeItem(\"seconds_indicator\");\r\n    localStorage.removeItem(\"background-color\");\r\n    location.reload();\r\n});\r\n// Functions\r\nfunction toggleSecondsIndicator(toggleState) {\r\n    clock.setShowSeconds(toggleState);\r\n    // store the state in localStorage\r\n    localStorage.setItem(\"seconds_indicator\", \"\" + toggleState);\r\n}\r\nfunction toggleDateFormat(toggleState) {\r\n    clock.setDateFormat(toggleState);\r\n    var nodeList = document.querySelectorAll(\".date-format\");\r\n    nodeList.forEach(function (date) {\r\n        if (date.dataset.format === toggleState) {\r\n            date.classList.add(\"date-format-active\");\r\n        }\r\n        else {\r\n            date.classList.remove(\"date-format-active\");\r\n        }\r\n    });\r\n    // store the state in localStorage\r\n    localStorage.setItem(\"date_format\", \"\" + toggleState);\r\n}\r\nfunction toggleSearchBar(toggleState) {\r\n    var searchBar = document.getElementById(\"search-bar\");\r\n    if (toggleState) {\r\n        searchBar.hidden = false;\r\n    }\r\n    else {\r\n        searchBar.hidden = true;\r\n    }\r\n    // store the state in localStorage\r\n    localStorage.setItem('searchbar', \"\" + toggleState);\r\n}\r\nfunction setBackgroundColor(hexCode) {\r\n    document.body.style.background = hexCode;\r\n    // store the state in localStorage\r\n    localStorage.setItem('background-color', \"\" + hexCode);\r\n}\r\nfunction setFontColor(hexCode) {\r\n    var elements = document.querySelector('#content').querySelectorAll('*');\r\n    elements.forEach(function (element) {\r\n        element.style.color = hexCode;\r\n    });\r\n    document.getElementById('settings-icon').style.color = hexCode;\r\n    // store the state in localStorage\r\n    localStorage.setItem('font-color', \"\" + hexCode);\r\n}\r\nfunction initPreferences() {\r\n    if (localStorage.getItem('seconds_indicator')) {\r\n        toggleSecondsIndicator(localStorage.getItem(\"seconds_indicator\") === 'true');\r\n        toggleDateFormat(localStorage.getItem(\"date_format\"));\r\n        var secondsToggler_1 = document.getElementById('toggle-seconds');\r\n        secondsToggler_1.checked = localStorage.getItem(\"seconds_indicator\") === 'true';\r\n    }\r\n    else {\r\n        toggleSecondsIndicator(true);\r\n        var secondsToggler_2 = document.getElementById('toggle-seconds');\r\n        secondsToggler_2.checked = true;\r\n    }\r\n    if (localStorage.getItem('searchbar')) {\r\n        toggleSearchBar(localStorage.getItem(\"searchbar\") === \"true\");\r\n        var searchBarToggler_1 = document.getElementById('toggle-search');\r\n        searchBarToggler_1.checked = localStorage.getItem('searchbar') === \"true\";\r\n    }\r\n    else {\r\n        toggleSearchBar(true);\r\n        var searchBarToggler_2 = document.getElementById('toggle-search');\r\n        searchBarToggler_2.checked = true;\r\n    }\r\n    if (localStorage.getItem('background-color')) {\r\n        setBackgroundColor(localStorage.getItem('background-color'));\r\n    }\r\n    if (localStorage.getItem('font-color')) {\r\n        setFontColor(localStorage.getItem('font-color'));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/style.css\");\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/index.ts ./src/styles/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\nmodule.exports = __webpack_require__(/*! ./src/styles/style.scss */\"./src/styles/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts_./src/styles/style.scss?");

/***/ })

/******/ });