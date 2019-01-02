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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/src/pug/result/index.pug");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/src/pug/result/index.pug":
/*!*****************************************!*\
  !*** ./static/src/pug/result/index.pug ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/pug-html-loader/lib/index.js):\\nError: /home/sukamo/demo/NckuA9/static/src/pug/layout/base.pug:15:29\\n    13|       window.dataLayer = window.dataLayer || [];\\n    14|       function gtag(){dataLayer.push(arguments);}\\n  > 15|       gtag('js', new Date());\\n------------------------------------^\\n    16| \\n    17|       gtag('config', 'UA-130655622-2');\\n    18|     </script>\\n\\nunexpected text \\\";\\n\\n  \\\"\\n    at makeError (/home/sukamo/demo/NckuA9/node_modules/pug-error/index.js:32:13)\\n    at Lexer.error (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:59:15)\\n    at Lexer.fail (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:1441:10)\\n    at Lexer.advance (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:1501:15)\\n    at Lexer.callLexerFunction (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:1456:23)\\n    at Lexer.getTokens (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:1512:12)\\n    at lex (/home/sukamo/demo/NckuA9/node_modules/pug-lexer/index.js:12:42)\\n    at Object.lex (/home/sukamo/demo/NckuA9/node_modules/pug/lib/index.js:99:27)\\n    at Function.loadString [as string] (/home/sukamo/demo/NckuA9/node_modules/pug-load/index.js:44:24)\\n    at /home/sukamo/demo/NckuA9/node_modules/pug-load/index.js:31:27\\n    at walkAST (/home/sukamo/demo/NckuA9/node_modules/pug-walk/index.js:23:18)\\n    at /home/sukamo/demo/NckuA9/node_modules/pug-walk/index.js:104:20\\n    at Array.reduce (<anonymous>)\\n    at walkAndMergeNodes (/home/sukamo/demo/NckuA9/node_modules/pug-walk/index.js:103:18)\\n    at walkAST (/home/sukamo/demo/NckuA9/node_modules/pug-walk/index.js:37:19)\\n    at load (/home/sukamo/demo/NckuA9/node_modules/pug-load/index.js:13:10)\\n    at Function.loadString [as string] (/home/sukamo/demo/NckuA9/node_modules/pug-load/index.js:46:10)\\n    at compileBody (/home/sukamo/demo/NckuA9/node_modules/pug/lib/index.js:86:18)\\n    at Object.exports.compile (/home/sukamo/demo/NckuA9/node_modules/pug/lib/index.js:242:16)\\n    at Object.module.exports (/home/sukamo/demo/NckuA9/node_modules/pug-html-loader/lib/index.js:30:22)\");\n\n//# sourceURL=webpack:///./static/src/pug/result/index.pug?");

/***/ })

/******/ });