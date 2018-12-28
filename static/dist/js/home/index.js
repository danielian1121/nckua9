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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/src/js/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/src/js/home/index.js":
/*!*************************************!*\
  !*** ./static/src/js/home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const course = document.getElementsByClassName('row__element--course')\nconst check = document.getElementById('checkbox')\nconst button = document.getElementById('submit')\nconst length = course.length\nlet flag = true\n\nfor (let i = 0; i < length; i++) {\n  course[i].addEventListener('click', () => {\n    if (!course[i].classList.contains('row__element--active'))\n      course[i].classList.add('row__element--active')\n    else\n      course[i].classList.remove('row__element--active')\n  })\n}\n\ncheck.addEventListener('click', () => {\n  if (flag) {\n    for (let i = 0; i < length; i++)\n      course[i].classList.add('row__element--active')\n    flag = false\n    check.innerHTML = ' 取消全選'\n  }\n  else {\n    for (let i = 0; i < length; i++)\n      course[i].classList.remove('row__element--active')\n    flag = true\n    check.innerHTML = '一鍵全選'\n  }\n})\n\nbutton.addEventListener('click', () => {\n  let time = ['','','','','']\n  let day = [1,2,3,4,5]\n  const click = document.getElementsByClassName('row__element--active')\n  const array = [...click]\n  if (!array.length){\n    Swal({\n      type: 'error',\n      title: 'Oops...',\n      text: '你沒有選擇課程時段'\n    })\n  }else {\n    array.map(value => {\n      const data = String(value.cellIndex)\n      const nowtime = value.parentElement.firstChild.getAttribute('value')\n      switch (data) {\n        case '1':\n          time[0] += nowtime\n          break\n        case '2':\n          time[1] += nowtime\n          break\n        case '3':\n          time[2] += nowtime\n          break\n        case '4':\n          time[3] += nowtime\n          break\n        case '5':\n          time[4] += nowtime\n          break\n      }\n    })\n    while (time.indexOf('') !== -1) {\n      day.splice(time.indexOf(''),1)\n      time.splice(time.indexOf(''),1)\n    }\n    let href = '/result?'\n    let hrefTime = 'time=[\"\",'\n    let hrefDay = 'day=[\"\",'\n    for (let i = 0; i < day.length; i++) {\n      hrefTime += `\\\"${time[i]}\\\",`\n      hrefDay += `\\\"${day[i]}\\\",`\n    }\n    location.href = `${href}${hrefTime.slice(0,-1)}]&${hrefDay.slice(0,-1)}]`\n  }\n})\n\n\n//# sourceURL=webpack:///./static/src/js/home/index.js?");

/***/ })

/******/ });