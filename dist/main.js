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
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ui */ "./src/scripts/ui.js");
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");




window.onload = function () {
  var framesPerSecond = 30;
  setInterval(function () {
    Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawCanvas"])(), Object(_scripts_ui__WEBPACK_IMPORTED_MODULE_1__["drawUi"])();
    Object(_scripts_character__WEBPACK_IMPORTED_MODULE_2__["moveChar"])(), Object(_scripts_character__WEBPACK_IMPORTED_MODULE_2__["animate"])();
  }, 1000 / framesPerSecond);
};

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

var drawCanvas = function drawCanvas() {
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
};

module.exports = {
  canvas: canvas,
  ctx: ctx,
  drawCanvas: drawCanvas
};

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/*! exports provided: animate, moveChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveChar", function() { return moveChar; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.js");


var char = {
  x: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * .1,
  y: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .6,
  width: 100,
  height: 100,
  actualScale: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2 / 100,
  frameX: 1,
  frameY: 0,
  speed: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .02,
  moving: false
};
var charSprite = new Image();
charSprite.src = "src/sprites/Huntress/Sprites/Character/Run.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  drawSprite(charSprite, char.width * char.frameX, 0, char.width, char.height, char.x, char.y, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2); // requestAnimationFrame(animate);
}

function handleSpriteFrame() {
  if (char.frameX < 7) char.frameX++;else char.frameX = 0;
}

var keys = {
  'ArrowUp': false,
  'ArrowDown': false,
  'ArrowLeft': false,
  'ArrowRight': false,
  'w': false,
  'a': false,
  's': false,
  'd': false
};
window.addEventListener("keydown", function (e) {
  e.preventDefault();
  keys[e.key] = true; // char.moving = true;
});
window.addEventListener("keyup", function (e) {
  e.preventDefault();
  keys[e.key] = false; // char.moving = false;
});
function moveChar() {
  if ((keys['ArrowUp'] || keys["w"]) && char.y > _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - _ui__WEBPACK_IMPORTED_MODULE_1__["dungeonHeight"] - 40 * char.actualScale) {
    char.y -= char.speed;
    handleSpriteFrame();
  }

  if ((keys['ArrowDown'] || keys["s"]) && char.y < _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - _ui__WEBPACK_IMPORTED_MODULE_1__["uiSideGap"] - 75 * char.actualScale) {
    char.y += char.speed;
    handleSpriteFrame();
  }

  if ((keys['ArrowLeft'] || keys["a"]) && char.x > _ui__WEBPACK_IMPORTED_MODULE_1__["uiSideGap"] - 30 * char.actualScale) {
    char.x -= char.speed;
    handleSpriteFrame();
  }

  if ((keys['ArrowRight'] || keys["d"]) && char.x < _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - _ui__WEBPACK_IMPORTED_MODULE_1__["uiSideGap"] - 70 * char.actualScale) {
    char.x += char.speed;
    handleSpriteFrame();
  }
}

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/*! exports provided: uiSideGap, dungeonHeight, drawUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiSideGap", function() { return uiSideGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dungeonHeight", function() { return dungeonHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawUi", function() { return drawUi; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas__WEBPACK_IMPORTED_MODULE_0__);

var uiWidth = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * .975;
var uiSideGap = (_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - uiWidth) / 2;
var dungeonHeight = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .775;
var drawUi = function drawUi() {
  var uiHeight = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .15;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'white';
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(uiSideGap, uiSideGap, uiWidth, uiHeight);
  var dungeonWidth = uiWidth;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'white';
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(uiSideGap, uiSideGap * 2 + uiHeight, dungeonWidth, dungeonHeight);
  var uiBoxSizes = [.25, .25, .075, .075, .2775];

  var drawUiBoxes = function drawUiBoxes(boxSizes) {
    var height = uiHeight * .8;
    var uiBoxGap = (uiHeight - height) / 2;
    var uiTopPos = uiSideGap + uiBoxGap;
    var totalLeftPos = uiSideGap + uiBoxGap;
    boxSizes.forEach(function (size) {
      var width = uiWidth * size;
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'lightgray';
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(totalLeftPos, uiTopPos, width, height);
      totalLeftPos += uiSideGap + width;
    });
  };

  drawUiBoxes(uiBoxSizes);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdWkuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZnJhbWVzUGVyU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJkcmF3Q2FudmFzIiwiZHJhd1VpIiwibW92ZUNoYXIiLCJhbmltYXRlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImNoYXIiLCJ4IiwieSIsImFjdHVhbFNjYWxlIiwiZnJhbWVYIiwiZnJhbWVZIiwic3BlZWQiLCJtb3ZpbmciLCJjaGFyU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJkcmF3U3ByaXRlIiwiaW1nIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsImRyYXdJbWFnZSIsImhhbmRsZVNwcml0ZUZyYW1lIiwia2V5cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJkdW5nZW9uSGVpZ2h0IiwidWlTaWRlR2FwIiwidWlXaWR0aCIsInVpSGVpZ2h0IiwiZHVuZ2VvbldpZHRoIiwidWlCb3hTaXplcyIsImRyYXdVaUJveGVzIiwiYm94U2l6ZXMiLCJ1aUJveEdhcCIsInVpVG9wUG9zIiwidG90YWxMZWZ0UG9zIiwiZm9yRWFjaCIsInNpemUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDQSxRQUFNMkMsUUFBUSxHQUFHUixTQUFTLEdBQUdPLFFBQTdCO0FBQ0EsUUFBSUUsWUFBWSxHQUFHVCxTQUFTLEdBQUdPLFFBQS9CO0FBRUFELFlBQVEsQ0FBQ0ksT0FBVCxDQUFpQixVQUFBQyxJQUFJLEVBQUk7QUFDckIsVUFBTWhELEtBQUssR0FBR3NDLE9BQU8sR0FBR1UsSUFBeEI7QUFDQWxELGlEQUFHLENBQUNNLFNBQUosR0FBZ0IsV0FBaEI7QUFDQU4saURBQUcsQ0FBQ08sUUFBSixDQUFheUMsWUFBYixFQUEyQkQsUUFBM0IsRUFBcUM3QyxLQUFyQyxFQUE0Q0UsTUFBNUM7QUFDQTRDLGtCQUFZLElBQUlULFNBQVMsR0FBR3JDLEtBQTVCO0FBQ0gsS0FMRDtBQU1ILEdBWkQ7O0FBY0EwQyxhQUFXLENBQUNELFVBQUQsQ0FBWDtBQUNILENBMUJNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtkcmF3Q2FudmFzfSBmcm9tICcuL3NjcmlwdHMvY2FudmFzJztcbmltcG9ydCB7ZHJhd1VpfSBmcm9tICcuL3NjcmlwdHMvdWknO1xuaW1wb3J0IHthbmltYXRlLCBtb3ZlQ2hhcn0gZnJvbSAnLi9zY3JpcHRzL2NoYXJhY3Rlcidcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmcmFtZXNQZXJTZWNvbmQgPSAzMDtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgZHJhd0NhbnZhcygpLFxuICAgICAgICBkcmF3VWkoKVxuICAgICAgICBtb3ZlQ2hhcigpLFxuICAgICAgICBhbmltYXRlKClcbiAgICB9LCAxMDAwL2ZyYW1lc1BlclNlY29uZCk7XG59XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAyMDtcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDtcblxuY29uc3QgZHJhd0NhbnZhcyA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2FudmFzLFxuICAgIGN0eCxcbiAgICBkcmF3Q2FudmFzXG59XG5cbiAgICAgIiwiaW1wb3J0IHtjdHgsIGNhbnZhc30gZnJvbSAnLi9jYW52YXMnXG5pbXBvcnQge3VpU2lkZUdhcCwgZHVuZ2VvbkhlaWdodCB9IGZyb20gJy4vdWknO1xuXG5jb25zdCBjaGFyID0ge1xuICAgIHg6IChjYW52YXMud2lkdGggKiAuMSksXG4gICAgeTogKGNhbnZhcy5oZWlnaHQgKiAuNiksXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBhY3R1YWxTY2FsZTogY2FudmFzLmhlaWdodCouMi8xMDAsXG4gICAgZnJhbWVYOiAxLFxuICAgIGZyYW1lWTogMCxcbiAgICBzcGVlZDogKGNhbnZhcy5oZWlnaHQqLjAyKSxcbiAgICBtb3Zpbmc6IGZhbHNlXG59O1xuXG5jb25zdCBjaGFyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5jaGFyU3ByaXRlLnNyYyA9IFwic3JjL3Nwcml0ZXMvSHVudHJlc3MvU3ByaXRlcy9DaGFyYWN0ZXIvUnVuLnBuZ1wiO1xuXG5mdW5jdGlvbiBkcmF3U3ByaXRlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoKXtcbiAgICBkcmF3U3ByaXRlKGNoYXJTcHJpdGUsIGNoYXIud2lkdGggKiBjaGFyLmZyYW1lWCwgMCwgY2hhci53aWR0aCwgY2hhci5oZWlnaHQsIGNoYXIueCwgY2hhci55LCAoY2FudmFzLmhlaWdodCouMiksIChjYW52YXMuaGVpZ2h0Ki4yKSlcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNwcml0ZUZyYW1lKCkge1xuICAgIGlmIChjaGFyLmZyYW1lWCA8IDcgKSBjaGFyLmZyYW1lWCsrO1xuICAgIGVsc2UgY2hhci5mcmFtZVggPSAwO1xufVxuXG5cbmNvbnN0IGtleXMgPSB7XG4gICAgJ0Fycm93VXAnOiBmYWxzZSxcbiAgICAnQXJyb3dEb3duJzogZmFsc2UsXG4gICAgJ0Fycm93TGVmdCcgOiBmYWxzZSxcbiAgICAnQXJyb3dSaWdodCcgOiBmYWxzZSxcbiAgICAndyc6IGZhbHNlLFxuICAgICdhJzogZmFsc2UsXG4gICAgJ3MnOiBmYWxzZSxcbiAgICAnZCc6IGZhbHNlLFxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAvLyBjaGFyLm1vdmluZyA9IHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBrZXlzW2Uua2V5XSA9IGZhbHNlO1xuICAgIC8vIGNoYXIubW92aW5nID0gZmFsc2U7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDaGFyKCkge1xuICAgIGlmICgoa2V5c1snQXJyb3dVcCddIHx8IGtleXNbXCJ3XCJdKSAmJiAoY2hhci55ID4gKGNhbnZhcy5oZWlnaHQgLSBkdW5nZW9uSGVpZ2h0LSA0MCpjaGFyLmFjdHVhbFNjYWxlKSkpIHtcbiAgICAgICAgY2hhci55IC09IGNoYXIuc3BlZWQ7XG4gICAgICAgIGhhbmRsZVNwcml0ZUZyYW1lKCl9XG4gICAgaWYgKChrZXlzWydBcnJvd0Rvd24nXSB8fCBrZXlzW1wic1wiXSkgJiYgKGNoYXIueSA8IChjYW52YXMuaGVpZ2h0LSh1aVNpZGVHYXApLTc1KmNoYXIuYWN0dWFsU2NhbGUpKSkge1xuICAgICAgICBjaGFyLnkgKz0gY2hhci5zcGVlZDtcbiAgICAgICAgaGFuZGxlU3ByaXRlRnJhbWUoKX0gXG4gICAgaWYgKChrZXlzWydBcnJvd0xlZnQnXSB8fCBrZXlzW1wiYVwiXSkgJiYgKGNoYXIueCA+ICgodWlTaWRlR2FwKS0zMCpjaGFyLmFjdHVhbFNjYWxlKSkpIHtcbiAgICAgICAgY2hhci54IC09IGNoYXIuc3BlZWQ7XG4gICAgICAgIGhhbmRsZVNwcml0ZUZyYW1lKCl9IFxuICAgIGlmICgoa2V5c1snQXJyb3dSaWdodCddIHx8IGtleXNbXCJkXCJdKSAmJiAoY2hhci54IDwgKGNhbnZhcy53aWR0aC0odWlTaWRlR2FwKS03MCpjaGFyLmFjdHVhbFNjYWxlKSkpIHtcbiAgICAgICAgY2hhci54ICs9IGNoYXIuc3BlZWQ7XG4gICAgICAgIGhhbmRsZVNwcml0ZUZyYW1lKCl9IFxufVxuXG4iLCJpbXBvcnQge2N0eCwgY2FudmFzfSBmcm9tICcuL2NhbnZhcydcblxuY29uc3QgdWlXaWR0aCA9IGNhbnZhcy53aWR0aCAqIC45NzU7XG5leHBvcnQgY29uc3QgdWlTaWRlR2FwID0gKGNhbnZhcy53aWR0aCAtIHVpV2lkdGgpLzI7XG5leHBvcnQgY29uc3QgZHVuZ2VvbkhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKiAuNzc1XG5cbmV4cG9ydCBjb25zdCBkcmF3VWkgPSAoKSA9PiB7ICAgIFxuICAgIGNvbnN0IHVpSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIC4xNTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QodWlTaWRlR2FwLHVpU2lkZUdhcCx1aVdpZHRoLHVpSGVpZ2h0KVxuXG4gICAgY29uc3QgZHVuZ2VvbldpZHRoID0gdWlXaWR0aDtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QodWlTaWRlR2FwLCB1aVNpZGVHYXAqMiArIHVpSGVpZ2h0LCBkdW5nZW9uV2lkdGgsIGR1bmdlb25IZWlnaHQpXG5cbiAgICBjb25zdCB1aUJveFNpemVzID0gWy4yNSwgLjI1LCAuMDc1LCAuMDc1LCAuMjc3NV07XG5cbiAgICBjb25zdCBkcmF3VWlCb3hlcyA9IChib3hTaXplcykgPT4ge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB1aUhlaWdodCAqIC44O1xuICAgICAgICBjb25zdCB1aUJveEdhcCA9ICh1aUhlaWdodCAtIGhlaWdodCkvMjtcbiAgICAgICAgY29uc3QgdWlUb3BQb3MgPSB1aVNpZGVHYXAgKyB1aUJveEdhcFxuICAgICAgICBsZXQgdG90YWxMZWZ0UG9zID0gdWlTaWRlR2FwICsgdWlCb3hHYXBcbiAgICAgICAgXG4gICAgICAgIGJveFNpemVzLmZvckVhY2goc2l6ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHVpV2lkdGggKiBzaXplO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRvdGFsTGVmdFBvcywgdWlUb3BQb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICB0b3RhbExlZnRQb3MgKz0gdWlTaWRlR2FwICsgd2lkdGhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3VWlCb3hlcyh1aUJveFNpemVzKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==