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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var hydroModal = document.getElementById("hydroModal");
  var thermoModal = document.getElementById("thermoModal");
  var solarModal = document.getElementById("solarModal"); // Get the button that opens the modal

  var btn = document.getElementById("myBtn");
  var hbtn = document.getElementById("hBtn");
  var tbtn = document.getElementById("tBtn");
  var sbtn = document.getElementById("sBtn");
  var wbtn = document.getElementById("wBtn"); // Get the <span> element that closes the modal

  var span = document.getElementsByClassName("close")[0];
  var spanW = document.getElementsByClassName("close")[1];
  var spanS = document.getElementsByClassName("close")[2];
  var spanT = document.getElementsByClassName("close")[3];
  var spanH = document.getElementsByClassName("close")[4];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  hbtn.onclick = function () {
    hydroModal.style.display = "block";
  };

  tbtn.onclick = function () {
    thermoModal.style.display = "block";
  };

  sbtn.onclick = function () {
    solarModal.style.display = "block";
  };

  wbtn.onclick = function () {
    windModal.style.display = "block";
  }; // When the user clicks on <span> (x), close the modal


  span.onclick = function () {
    modal.style.display = "none";
  };

  spanH.onclick = function () {
    hydroModal.style.display = "none";
  };

  spanT.onclick = function () {
    thermoModal.style.display = "none";
  };

  spanS.onclick = function () {
    solarModal.style.display = "none";
  };

  spanW.onclick = function () {
    windModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal || event.target == hydroModal || event.target === thermoModal || event.target === solarModal || event.target === windModal) {
      event.target.style.display = "none";
    }
  };
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoeWRyb01vZGFsIiwidGhlcm1vTW9kYWwiLCJzb2xhck1vZGFsIiwiYnRuIiwiaGJ0biIsInRidG4iLCJzYnRuIiwid2J0biIsInNwYW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3BhblciLCJzcGFuUyIsInNwYW5UIiwic3BhbkgiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZE1vZGFsIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUMvQyxNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFaO0FBQ0EsTUFBSUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxNQUFJRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUNBLE1BQUlHLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCLENBSitDLENBTzlDOztBQUNELE1BQUlJLEdBQUcsR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVY7QUFDQSxNQUFJSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsTUFBSU0sSUFBSSxHQUFHUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBLE1BQUlPLElBQUksR0FBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDQSxNQUFJUSxJQUFJLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFYLENBWitDLENBZTlDOztBQUNELE1BQUlTLElBQUksR0FBR1YsUUFBUSxDQUFDVyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHWixRQUFRLENBQUNXLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQVo7QUFDQSxNQUFJRSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ1csc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBWjtBQUNBLE1BQUlHLEtBQUssR0FBR2QsUUFBUSxDQUFDVyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFaO0FBQ0EsTUFBSUksS0FBSyxHQUFHZixRQUFRLENBQUNXLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQVo7O0FBRUNOLEtBQUcsQ0FBQ1csT0FBSixHQUFjLFlBQVk7QUFDdEJqQixTQUFLLENBQUNrQixLQUFOLENBQVlDLE9BQVosR0FBc0IsT0FBdEI7QUFDSCxHQUZEOztBQUlBWixNQUFJLENBQUNVLE9BQUwsR0FBZSxZQUFZO0FBQ3ZCZCxjQUFVLENBQUNlLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCO0FBQ0gsR0FGRDs7QUFJQVgsTUFBSSxDQUFDUyxPQUFMLEdBQWUsWUFBWTtBQUN2QmIsZUFBVyxDQUFDYyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixPQUE1QjtBQUNILEdBRkQ7O0FBSUFWLE1BQUksQ0FBQ1EsT0FBTCxHQUFlLFlBQVk7QUFDdkJaLGNBQVUsQ0FBQ2EsS0FBWCxDQUFpQkMsT0FBakIsR0FBMkIsT0FBM0I7QUFDSCxHQUZEOztBQUlBVCxNQUFJLENBQUNPLE9BQUwsR0FBZSxZQUFZO0FBQ3ZCRyxhQUFTLENBQUNGLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE9BQTFCO0FBQ0gsR0FGRCxDQXRDOEMsQ0EwQzlDOzs7QUFDQVIsTUFBSSxDQUFDTSxPQUFMLEdBQWUsWUFBWTtBQUN2QmpCLFNBQUssQ0FBQ2tCLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNILEdBRkQ7O0FBSUFILE9BQUssQ0FBQ0MsT0FBTixHQUFnQixZQUFZO0FBQ3hCZCxjQUFVLENBQUNlLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0gsR0FGRDs7QUFJQUosT0FBSyxDQUFDRSxPQUFOLEdBQWdCLFlBQVk7QUFDeEJiLGVBQVcsQ0FBQ2MsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7QUFDSCxHQUZEOztBQUlBTCxPQUFLLENBQUNHLE9BQU4sR0FBZ0IsWUFBWTtBQUN4QlosY0FBVSxDQUFDYSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNILEdBRkQ7O0FBSUFOLE9BQUssQ0FBQ0ksT0FBTixHQUFnQixZQUFZO0FBQ3hCRyxhQUFTLENBQUNGLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0gsR0FGRDs7QUFJQXJCLFFBQU0sQ0FBQ21CLE9BQVAsR0FBaUIsVUFBVUksS0FBVixFQUFpQjtBQUM5QixRQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0J0QixLQUFoQixJQUF5QnFCLEtBQUssQ0FBQ0MsTUFBTixJQUFnQm5CLFVBQXpDLElBQXVEa0IsS0FBSyxDQUFDQyxNQUFOLEtBQWlCbEIsV0FBeEUsSUFBdUZpQixLQUFLLENBQUNDLE1BQU4sS0FBaUJqQixVQUF4RyxJQUFzSGdCLEtBQUssQ0FBQ0MsTUFBTixLQUFpQkYsU0FBM0ksRUFBc0o7QUFDbEpDLFdBQUssQ0FBQ0MsTUFBTixDQUFhSixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNIO0FBQ0osR0FKRDtBQU1ILENBckVELEU7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgbGV0IGh5ZHJvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh5ZHJvTW9kYWxcIik7XG4gICBsZXQgdGhlcm1vTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZXJtb01vZGFsXCIpO1xuICAgbGV0IHNvbGFyTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbGFyTW9kYWxcIik7XG5cblxuICAgIC8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG4gICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJ0blwiKTtcbiAgIGxldCBoYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoQnRuXCIpO1xuICAgbGV0IHRidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRCdG5cIik7XG4gICBsZXQgc2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic0J0blwiKTtcbiAgIGxldCB3YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3QnRuXCIpO1xuXG5cbiAgICAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICBsZXQgc3BhblcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMV07XG4gICBsZXQgc3BhblMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMl07XG4gICBsZXQgc3BhblQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbM107XG4gICBsZXQgc3BhbkggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbNF07XG5cbiAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBoYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh5ZHJvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICB0YnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoZXJtb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgc2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzb2xhck1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgd2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBzcGFuSC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBoeWRyb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBzcGFuVC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGVybW9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgc3BhblMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29sYXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgc3Bhblcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsIHx8IGV2ZW50LnRhcmdldCA9PSBoeWRyb01vZGFsIHx8IGV2ZW50LnRhcmdldCA9PT0gdGhlcm1vTW9kYWwgfHwgZXZlbnQudGFyZ2V0ID09PSBzb2xhck1vZGFsIHx8IGV2ZW50LnRhcmdldCA9PT0gd2luZE1vZGFsKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG59KVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=