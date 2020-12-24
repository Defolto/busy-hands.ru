/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./scripts.js ***!
  \********************/
eval("// функция контроля высоты блока main ---------------------------------------------------\r\nfunction setHeightMain() {\r\n    const windowHeight = document.documentElement.clientHeight;\r\n    const headerFooterHeight = document.querySelector('header').clientHeight + document.querySelector('footer').clientHeight;\r\n    document.querySelector('main').style.height = windowHeight - headerFooterHeight + 'px';\r\n}\r\n// функция контроля высоты блока main ---------------------------------------------------\r\n\r\n\r\n// функция контроля высоты блока chat-choose ---------------------------------------------------\r\nfunction setHeightChatChoose() {\r\n    const colRightHeight = document.querySelector('.col-right').clientHeight;\r\n    const menuHeight = document.querySelector('.menu').clientHeight;\r\n    document.querySelector('.chat-choose').style.height = colRightHeight - menuHeight + 'px';\r\n}\r\n// функция контроля высоты блока chat-choose ---------------------------------------------------\r\n\r\n\r\nwindow.onload = function() {\r\n    setHeightMain();\r\n    setHeightChatChoose();\r\n}\r\n\r\nwindow.addEventListener(`resize`, ()=>{\r\n    setHeightMain();\r\n    setHeightChatChoose();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./scripts.js?");
/******/ })()
;