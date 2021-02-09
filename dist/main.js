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
/* harmony import */ var _scripts_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/arrow */ "./src/scripts/arrow.js");





window.onload = function () {
  var framesPerSecond = 30;
  setInterval(function () {
    Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawCanvas"])(), Object(_scripts_ui__WEBPACK_IMPORTED_MODULE_1__["drawUi"])();
    Object(_scripts_character__WEBPACK_IMPORTED_MODULE_2__["moveChar"])(), Object(_scripts_character__WEBPACK_IMPORTED_MODULE_2__["animate"])(), Object(_scripts_arrow__WEBPACK_IMPORTED_MODULE_3__["animateArrows"])();
  }, 1000 / framesPerSecond);
};

/***/ }),

/***/ "./src/scripts/arrow.js":
/*!******************************!*\
  !*** ./src/scripts/arrow.js ***!
  \******************************/
/*! exports provided: animateArrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateArrows", function() { return animateArrows; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ "./src/scripts/character.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var arrowSprite = new Image();
arrowSprite.src = "src/sprites/Huntress/Sprites/Arrow/Move.png";

var Arrow = /*#__PURE__*/function () {
  function Arrow(x, y, speed, width, height, frameX, sprite, angle) {
    _classCallCheck(this, Arrow);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.frameX = frameX;
    this.sprite = sprite;
    this.angle = angle;
  }

  _createClass(Arrow, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x, this.y);
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.angle);
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(-this.x, -this.y);
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(arrowSprite, this.width * this.frameX, 0, this.width, this.height, this.x, this.y, this.width * (_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * .001), this.height * (_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * .001));
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.x = this.x + this.speed.x;
      this.y = this.y + this.speed.y;
    }
  }]);

  return Arrow;
}();

var arrows = [];
function animateArrows() {
  arrows.forEach(function (arrow) {
    arrow.update();
  });
}
window.addEventListener('click', function (event) {
  var angle = Math.atan2(event.clientY - (_character__WEBPACK_IMPORTED_MODULE_1__["char"].y + _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .19 / 2), event.clientX - (_character__WEBPACK_IMPORTED_MODULE_1__["char"].x + _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2 / 2));
  var speed = {
    x: Math.cos(angle) * (_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .05),
    y: Math.sin(angle) * (_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .05)
  };
  arrows.push(new Arrow(_character__WEBPACK_IMPORTED_MODULE_1__["char"].x + _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2 / 2, _character__WEBPACK_IMPORTED_MODULE_1__["char"].y + _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .19 / 2, speed, 24, 5, 0, arrowSprite, angle));
});

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
/*! exports provided: char, drawSprite, animate, moveChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSprite", function() { return drawSprite; });
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
  frameX: 0,
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
  drawSprite(charSprite, char.width * char.frameX, 0, char.width, char.height, char.x, char.y, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * .2);
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
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'black';
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(uiSideGap, uiSideGap, uiWidth, uiHeight);
  var dungeonWidth = uiWidth;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'black';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdWkuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZnJhbWVzUGVyU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJkcmF3Q2FudmFzIiwiZHJhd1VpIiwibW92ZUNoYXIiLCJhbmltYXRlIiwiYW5pbWF0ZUFycm93cyIsImFycm93U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJBcnJvdyIsIngiLCJ5Iiwic3BlZWQiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lWCIsInNwcml0ZSIsImFuZ2xlIiwiY3R4Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsImNhbnZhcyIsInJlc3RvcmUiLCJkcmF3IiwiYXJyb3dzIiwiZm9yRWFjaCIsImFycm93IiwidXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiTWF0aCIsImF0YW4yIiwiY2xpZW50WSIsImNoYXIiLCJjbGllbnRYIiwiY29zIiwic2luIiwicHVzaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWN0dWFsU2NhbGUiLCJmcmFtZVkiLCJtb3ZpbmciLCJjaGFyU3ByaXRlIiwiZHJhd1Nwcml0ZSIsImltZyIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJoYW5kbGVTcHJpdGVGcmFtZSIsImtleXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJkdW5nZW9uSGVpZ2h0IiwidWlTaWRlR2FwIiwidWlXaWR0aCIsInVpSGVpZ2h0IiwiZHVuZ2VvbldpZHRoIiwidWlCb3hTaXplcyIsImRyYXdVaUJveGVzIiwiYm94U2l6ZXMiLCJ1aUJveEdhcCIsInVpVG9wUG9zIiwidG90YWxMZWZ0UG9zIiwic2l6ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDdkIsTUFBSUMsZUFBZSxHQUFHLEVBQXRCO0FBQ0FDLGFBQVcsQ0FBQyxZQUFXO0FBQ25CQyxzRUFBVSxJQUNWQywwREFBTSxFQUROO0FBRUFDLHVFQUFRLElBQ1JDLGtFQUFPLEVBREMsRUFFUkMsb0VBQWEsRUFGYjtBQUdILEdBTlUsRUFNUixPQUFLTixlQU5HLENBQVg7QUFP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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7ZHJhd0NhbnZhc30gZnJvbSAnLi9zY3JpcHRzL2NhbnZhcyc7XG5pbXBvcnQge2RyYXdVaX0gZnJvbSAnLi9zY3JpcHRzL3VpJztcbmltcG9ydCB7YW5pbWF0ZSwgbW92ZUNoYXJ9IGZyb20gJy4vc2NyaXB0cy9jaGFyYWN0ZXInO1xuaW1wb3J0IHthbmltYXRlQXJyb3dzfSBmcm9tIFwiLi9zY3JpcHRzL2Fycm93XCI7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnJhbWVzUGVyU2Vjb25kID0gMzA7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRyYXdDYW52YXMoKSxcbiAgICAgICAgZHJhd1VpKClcbiAgICAgICAgbW92ZUNoYXIoKSxcbiAgICAgICAgYW5pbWF0ZSgpLFxuICAgICAgICBhbmltYXRlQXJyb3dzKClcbiAgICB9LCAxMDAwL2ZyYW1lc1BlclNlY29uZCk7XG59XG4iLCJpbXBvcnQge2N0eCwgY2FudmFzfSBmcm9tICcuL2NhbnZhcydcbmltcG9ydCB7Y2hhcn0gZnJvbSAnLi9jaGFyYWN0ZXInXG5jb25zdCBhcnJvd1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYXJyb3dTcHJpdGUuc3JjID0gXCJzcmMvc3ByaXRlcy9IdW50cmVzcy9TcHJpdGVzL0Fycm93L01vdmUucG5nXCI7XG5cblxuY2xhc3MgQXJyb3cge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHNwZWVkLCB3aWR0aCwgaGVpZ2h0LCBmcmFtZVgsIHNwcml0ZSwgYW5nbGUpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmZyYW1lWCA9IGZyYW1lWFxuICAgICAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGN0eC5zYXZlKClcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSlcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKVxuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGFycm93U3ByaXRlLCBcbiAgICAgICAgdGhpcy53aWR0aCAqIHRoaXMuZnJhbWVYLFxuICAgICAgICAwLCBcbiAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgIHRoaXMuaGVpZ2h0LCBcbiAgICAgICAgdGhpcy54LCBcbiAgICAgICAgdGhpcy55LCBcbiAgICAgICAgdGhpcy53aWR0aCooY2FudmFzLndpZHRoKi4wMDEpLCBcbiAgICAgICAgdGhpcy5oZWlnaHQqKGNhbnZhcy53aWR0aCouMDAxKSlcbiAgICAgICAgY3R4LnJlc3RvcmUoKSAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5zcGVlZC54XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuc3BlZWQueVxuICAgIH1cbn1cblxuXG5jb25zdCBhcnJvd3MgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVBcnJvd3MoKSB7XG4gICAgYXJyb3dzLmZvckVhY2goYXJyb3cgPT4ge1xuICAgICAgICBhcnJvdy51cGRhdGUoKVxuICAgIH0pIFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoXG4gICAgICAgIGV2ZW50LmNsaWVudFkgLSAoY2hhci55ICsgKGNhbnZhcy5oZWlnaHQqLjE5LzIpKSwgXG4gICAgICAgIGV2ZW50LmNsaWVudFggLSAoY2hhci54ICsgKGNhbnZhcy5oZWlnaHQqLjIvMikpKVxuICAgIGNvbnN0IHNwZWVkID0ge1xuICAgICAgICB4OiBNYXRoLmNvcyhhbmdsZSkgKiAoY2FudmFzLmhlaWdodCouMDUpLFxuICAgICAgICB5OiBNYXRoLnNpbihhbmdsZSkgKiAoY2FudmFzLmhlaWdodCouMDUpXG4gICAgfVxuXG4gICAgYXJyb3dzLnB1c2gobmV3IEFycm93KCBcbiAgICAgICAgY2hhci54ICsgKGNhbnZhcy5oZWlnaHQqLjIvMiksIFxuICAgICAgICBjaGFyLnkgKyAoY2FudmFzLmhlaWdodCouMTkvMiksIFxuICAgICAgICBzcGVlZCwgXG4gICAgICAgIDI0LCBcbiAgICAgICAgNSwgXG4gICAgICAgIDAsIFxuICAgICAgICBhcnJvd1Nwcml0ZSxcbiAgICAgICAgYW5nbGUpKVxufSlcblxuXG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAyMDtcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDtcblxuY29uc3QgZHJhd0NhbnZhcyA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2FudmFzLFxuICAgIGN0eCxcbiAgICBkcmF3Q2FudmFzXG59XG5cbiAgICAgIiwiaW1wb3J0IHtjdHgsIGNhbnZhc30gZnJvbSAnLi9jYW52YXMnXG5pbXBvcnQge3VpU2lkZUdhcCwgZHVuZ2VvbkhlaWdodCB9IGZyb20gJy4vdWknO1xuXG5leHBvcnQgY29uc3QgY2hhciA9IHtcbiAgICB4OiAoY2FudmFzLndpZHRoICogLjEpLFxuICAgIHk6IChjYW52YXMuaGVpZ2h0ICogLjYpLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgYWN0dWFsU2NhbGU6IGNhbnZhcy5oZWlnaHQqLjIvMTAwLFxuICAgIGZyYW1lWDogMCxcbiAgICBmcmFtZVk6IDAsXG4gICAgc3BlZWQ6IChjYW52YXMuaGVpZ2h0Ki4wMiksXG4gICAgbW92aW5nOiBmYWxzZVxufTtcblxuY29uc3QgY2hhclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuY2hhclNwcml0ZS5zcmMgPSBcInNyYy9zcHJpdGVzL0h1bnRyZXNzL1Nwcml0ZXMvQ2hhcmFjdGVyL1J1bi5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcHJpdGUoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgIGRyYXdTcHJpdGUoY2hhclNwcml0ZSwgY2hhci53aWR0aCAqIGNoYXIuZnJhbWVYLCAwLCBjaGFyLndpZHRoLCBjaGFyLmhlaWdodCwgY2hhci54LCBjaGFyLnksIChjYW52YXMuaGVpZ2h0Ki4yKSwgKGNhbnZhcy5oZWlnaHQqLjIpKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTcHJpdGVGcmFtZSgpIHtcbiAgICBpZiAoY2hhci5mcmFtZVggPCA3ICkgY2hhci5mcmFtZVgrKztcbiAgICBlbHNlIGNoYXIuZnJhbWVYID0gMDtcbn1cblxuXG5jb25zdCBrZXlzID0ge1xuICAgICdBcnJvd1VwJzogZmFsc2UsXG4gICAgJ0Fycm93RG93bic6IGZhbHNlLFxuICAgICdBcnJvd0xlZnQnIDogZmFsc2UsXG4gICAgJ0Fycm93UmlnaHQnIDogZmFsc2UsXG4gICAgJ3cnOiBmYWxzZSxcbiAgICAnYSc6IGZhbHNlLFxuICAgICdzJzogZmFsc2UsXG4gICAgJ2QnOiBmYWxzZSxcbn07XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAga2V5c1tlLmtleV0gPSB0cnVlO1xuICAgIC8vIGNoYXIubW92aW5nID0gdHJ1ZTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGtleXNbZS5rZXldID0gZmFsc2U7XG4gICAgLy8gY2hhci5tb3ZpbmcgPSBmYWxzZTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUNoYXIoKSB7XG4gICAgaWYgKChrZXlzWydBcnJvd1VwJ10gfHwga2V5c1tcIndcIl0pICYmIChjaGFyLnkgPiAoY2FudmFzLmhlaWdodCAtIGR1bmdlb25IZWlnaHQtIDQwKmNoYXIuYWN0dWFsU2NhbGUpKSkge1xuICAgICAgICBjaGFyLnkgLT0gY2hhci5zcGVlZDtcbiAgICAgICAgaGFuZGxlU3ByaXRlRnJhbWUoKX1cbiAgICBpZiAoKGtleXNbJ0Fycm93RG93biddIHx8IGtleXNbXCJzXCJdKSAmJiAoY2hhci55IDwgKGNhbnZhcy5oZWlnaHQtKHVpU2lkZUdhcCktNzUqY2hhci5hY3R1YWxTY2FsZSkpKSB7XG4gICAgICAgIGNoYXIueSArPSBjaGFyLnNwZWVkO1xuICAgICAgICBoYW5kbGVTcHJpdGVGcmFtZSgpfSBcbiAgICBpZiAoKGtleXNbJ0Fycm93TGVmdCddIHx8IGtleXNbXCJhXCJdKSAmJiAoY2hhci54ID4gKCh1aVNpZGVHYXApLTMwKmNoYXIuYWN0dWFsU2NhbGUpKSkge1xuICAgICAgICBjaGFyLnggLT0gY2hhci5zcGVlZDtcbiAgICAgICAgaGFuZGxlU3ByaXRlRnJhbWUoKX0gXG4gICAgaWYgKChrZXlzWydBcnJvd1JpZ2h0J10gfHwga2V5c1tcImRcIl0pICYmIChjaGFyLnggPCAoY2FudmFzLndpZHRoLSh1aVNpZGVHYXApLTcwKmNoYXIuYWN0dWFsU2NhbGUpKSkge1xuICAgICAgICBjaGFyLnggKz0gY2hhci5zcGVlZDtcbiAgICAgICAgaGFuZGxlU3ByaXRlRnJhbWUoKX0gXG59XG5cblxuIiwiaW1wb3J0IHtjdHgsIGNhbnZhc30gZnJvbSAnLi9jYW52YXMnXG5cbmNvbnN0IHVpV2lkdGggPSBjYW52YXMud2lkdGggKiAuOTc1O1xuZXhwb3J0IGNvbnN0IHVpU2lkZUdhcCA9IChjYW52YXMud2lkdGggLSB1aVdpZHRoKS8yO1xuZXhwb3J0IGNvbnN0IGR1bmdlb25IZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogLjc3NVxuXG5leHBvcnQgY29uc3QgZHJhd1VpID0gKCkgPT4geyAgICBcbiAgICBjb25zdCB1aUhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKiAuMTU7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxSZWN0KHVpU2lkZUdhcCx1aVNpZGVHYXAsdWlXaWR0aCx1aUhlaWdodClcblxuICAgIGNvbnN0IGR1bmdlb25XaWR0aCA9IHVpV2lkdGg7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxSZWN0KHVpU2lkZUdhcCwgdWlTaWRlR2FwKjIgKyB1aUhlaWdodCwgZHVuZ2VvbldpZHRoLCBkdW5nZW9uSGVpZ2h0KVxuXG4gICAgY29uc3QgdWlCb3hTaXplcyA9IFsuMjUsIC4yNSwgLjA3NSwgLjA3NSwgLjI3NzVdO1xuXG4gICAgY29uc3QgZHJhd1VpQm94ZXMgPSAoYm94U2l6ZXMpID0+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdWlIZWlnaHQgKiAuODtcbiAgICAgICAgY29uc3QgdWlCb3hHYXAgPSAodWlIZWlnaHQgLSBoZWlnaHQpLzI7XG4gICAgICAgIGNvbnN0IHVpVG9wUG9zID0gdWlTaWRlR2FwICsgdWlCb3hHYXBcbiAgICAgICAgbGV0IHRvdGFsTGVmdFBvcyA9IHVpU2lkZUdhcCArIHVpQm94R2FwXG4gICAgICAgIFxuICAgICAgICBib3hTaXplcy5mb3JFYWNoKHNpemUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB1aVdpZHRoICogc2l6ZTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCh0b3RhbExlZnRQb3MsIHVpVG9wUG9zLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgdG90YWxMZWZ0UG9zICs9IHVpU2lkZUdhcCArIHdpZHRoXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhd1VpQm94ZXModWlCb3hTaXplcyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=