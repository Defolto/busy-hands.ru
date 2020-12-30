/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Header.jsx":
/*!*******************************!*\
  !*** ./Components/Header.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _img_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/setting.svg */ \"./img/setting.svg\");\n/* harmony import */ var _img_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_setting_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/header.scss */ \"./styles/header.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Header = /*#__PURE__*/function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    _classCallCheck(this, Header);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      test: \"шапка\"\n    };\n    return _this;\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, this.props.infoUser.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Busy-hands.ru\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"name-settings\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, this.props.infoUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        className: \"ava\",\n        src: \"server/img/\" + this.props.infoUser.img,\n        alt: \"\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        className: \"setting\",\n        src: (_img_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()),\n        alt: \"\"\n      })));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack:///./Components/Header.jsx?");

/***/ }),

/***/ "./Components/Main.jsx":
/*!*****************************!*\
  !*** ./Components/Main.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => /* binding */ Main\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _js_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/functions */ \"./js/functions.js\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ \"../node_modules/underscore/modules/index-all.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar User = __webpack_require__(/*! ../server/models/User */ \"./server/models/User.js\");\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"updateStory\", function (story) {\n      _this.setState({\n        story: story\n      });\n    });\n\n    _this.state = {\n      pointMenu: \"chat\",\n      story: false\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-left\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"news\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0422\\u0443\\u0442 \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Calendar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-right\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"menu\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"active\"\n      }, \"\\u0427\\u0430\\u0442\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0417\\u0430\\u043C\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u041D\\u0430\\u043F\\u043E\\u043C\\u0438\\u043D\\u0430\\u043D\\u0438\\u044F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\u0421\\u043E\\u0442\\u0440\\u0443\\u0434\\u043D\\u0438\\u043A\\u0438: 5 \\u043E\\u043D\\u043B\\u0430\\u0439\\u043D, 4 \\u043E\\u0444\\u0444\\u043B\\u0430\\u0439\\u043D\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Display, {\n        state: this.state.pointMenu,\n        userChats: this.props.infoUser.chats,\n        userEmail: this.props.infoUser.email,\n        updateStory: this.updateStory,\n        story: this.state.story\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nfunction Calendar(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"\\u041A\\u0430\\u043B\\u0435\\u043D\\u0434\\u0430\\u0440\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__month\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0414\\u0435\\u043A\\u0430\\u0431\\u0440\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u041D\\u0430\\u0437\\u0430\\u0434\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0414\\u0430\\u043B\\u0435\\u0435\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__dates\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__dates-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"4\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"6\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"7\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__dates-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"8\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"12\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"13\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"14\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__dates-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"15\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"16\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"17\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"18\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"19\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"20\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"21\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"calendar-wrapper__dates-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"22\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"23\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"24\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"25\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"26\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"27\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"28\")))));\n}\n\nfunction Display(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      activeChatStory = _useState2[0],\n      setActiveStory = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      activeEmail = _useState4[0],\n      setActiveEmail = _useState4[1];\n\n  fetch('/getUsersChat', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      date: {\n        chats: props.userChats\n      }\n    })\n  }).then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    var users = [];\n    res.forEach(function (element) {\n      users.push(new User(element));\n    });\n\n    if (!underscore__WEBPACK_IMPORTED_MODULE_3__.default.isEqual(users, props.story)) {\n      console.log(users);\n      props.updateStory(users);\n    }\n  });\n\n  var activeChat = function activeChat(email) {\n    props.userChats.forEach(function (element) {\n      if (element.email == email) {\n        var newActiveChatStory = element.story.map(function (element, index) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n            key: index,\n            className: element.way == 'in' ? \"message in\" : \"message out\"\n          }, element.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n            className: \"date\"\n          }, element.date));\n        });\n        setActiveStory(newActiveChatStory);\n        setActiveEmail(email);\n      }\n    });\n  };\n\n  console.log(activeEmail);\n  var userChats;\n\n  if (props.story) {\n    userChats = props.story.map(function (element, index) {\n      var userChat = element.getUsersChats(props.userEmail);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        key: index,\n        onClick: function onClick() {\n          return activeChat(userChat.email);\n        },\n        className: \"chat-choose__people\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: \"server/img/\" + userChat.img\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"name\"\n      }, userChat.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"lastMessage\"\n      }, userChat.lastMessage)));\n    });\n  }\n\n  if (props.state == \"chat\") {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"display chat\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"chat-choose\"\n    }, userChats), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"chat-messages\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"chat-messages__wrapper\"\n    }, activeChatStory), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      onSubmit: function onSubmit(event) {\n        event.preventDefault();\n        (0,_js_functions__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(document.querySelector(\"#sendMessage__text\").value);\n        (0,_js_functions__WEBPACK_IMPORTED_MODULE_2__.cleareInput)(\"sendMessage__text\");\n      },\n      method: \"post\",\n      id: \"sendMessage\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      className: \"text\",\n      type: \"text\",\n      id: \"sendMessage__text\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      className: \"submit\",\n      type: \"submit\",\n      value: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"\n    }))));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\u0443\");\n  }\n}\n\n//# sourceURL=webpack:///./Components/Main.jsx?");

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var _Components_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Header.jsx */ \"./Components/Header.jsx\");\n/* harmony import */ var _Components_Main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Main.jsx */ \"./Components/Main.jsx\");\n/* harmony import */ var _styles_general_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/general.scss */ \"./styles/general.scss\");\n/* harmony import */ var _styles_login_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/login.scss */ \"./styles/login.scss\");\n/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts */ \"./scripts.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar BusyHands = /*#__PURE__*/function (_React$Component) {\n  _inherits(BusyHands, _React$Component);\n\n  var _super = _createSuper(BusyHands);\n\n  function BusyHands(props) {\n    var _this;\n\n    _classCallCheck(this, BusyHands);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      login: false,\n      errorLogin: false,\n      user: {\n        name: \"\",\n        img: \"\",\n        company: \"\"\n      }\n    };\n    return _this;\n  } // для оптимизации высоты блоков main и chat-choose\n\n\n  _createClass(BusyHands, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      if (this.state.login) {\n        (0,_scripts__WEBPACK_IMPORTED_MODULE_6__.setHeightMain)();\n        (0,_scripts__WEBPACK_IMPORTED_MODULE_6__.setHeightChatChoose)();\n      }\n    }\n  }, {\n    key: \"login\",\n    value: function login(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      fetch('/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          date: {\n            email: document.querySelector(\"#login-email\").value,\n            password: document.querySelector(\"#login-password\").value\n          }\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        // если пользователь найден\n        if (res) {\n          _this2.setState({\n            login: true,\n            errorLogin: false,\n            user: {\n              name: res.name,\n              img: res.img,\n              company: res.company,\n              chats: res.chats\n            }\n          });\n        } else {\n          _this2.setState({\n            login: false,\n            errorLogin: true\n          });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      // проверка на вход пользователя\n      if (this.state.login) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Header_jsx__WEBPACK_IMPORTED_MODULE_2__.Header, {\n          infoUser: this.state.user\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Main_jsx__WEBPACK_IMPORTED_MODULE_3__.Main, {\n          infoUser: this.state.user\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"footer\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Created by Maxim Egorov\")));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"login\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Busy-hands\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"\\u0423\\u0434\\u043E\\u0431\\u043D\\u043E\\u0435 \\u0438 \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E\\u0435 \\u0432\\u0435\\u0434\\u0435\\u043D\\u0438\\u0435 \\u0431\\u0438\\u0437\\u043D\\u0435\\u0441\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n          onSubmit: function onSubmit(event) {\n            _this3.login(event);\n          },\n          method: \"post\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          id: \"login-email\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          id: \"login-password\"\n        })), this.state.errorLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"errorLogin active\"\n        }, \"\\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"errorLogin pass\"\n        }, \"\\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n          type: \"submit\",\n          value: \"\\u0412\\u043E\\u0439\\u0442\\u0438\"\n        })));\n      }\n    }\n  }]);\n\n  return BusyHands;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BusyHands, null), document.querySelector('#Busy-hands'));\n\n//# sourceURL=webpack:///./index.jsx?");

/***/ }),

/***/ "./styles/general.scss":
/*!*****************************!*\
  !*** ./styles/general.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/general.scss?");

/***/ }),

/***/ "./styles/header.scss":
/*!****************************!*\
  !*** ./styles/header.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/header.scss?");

/***/ }),

/***/ "./styles/login.scss":
/*!***************************!*\
  !*** ./styles/login.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/login.scss?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./img/setting.svg":
/*!*************************!*\
  !*** ./img/setting.svg ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' id='Icons' viewBox='0 0 74 74' width='512' height='512'%3e%3cpath d='M39.45,69.265h-.01A33.641,33.641,0,0,1,7.282,26.928a1,1,0,1,1,1.932.515A31.641,31.641,0,0,0,39.459,67.265a1,1,0,0,1-.009,2Z'/%3e%3cpath d='M12.271,19.056a1,1,0,0,1-.841-1.54,33.775,33.775,0,0,1,4.563-5.665,33.632,33.632,0,0,1,47.564,0,1,1,0,0,1-1.414,1.414,31.633,31.633,0,0,0-44.736,0,31.844,31.844,0,0,0-4.293,5.33A1,1,0,0,1,12.271,19.056Z'/%3e%3cpath d='M72.379,35.75a1,1,0,0,1-1-.974,31.563,31.563,0,0,0-4.234-15.013,1,1,0,1,1,1.728-1.006,33.567,33.567,0,0,1,4.505,15.967,1,1,0,0,1-.973,1.026Z'/%3e%3cpath d='M66.7,55.07a1,1,0,0,1-.822-1.569c.524-.758,1.025-1.567,1.488-2.405a1,1,0,1,1,1.75.968c-.495.9-1.031,1.762-1.592,2.574A1,1,0,0,1,66.7,55.07Z'/%3e%3cpath d='M48.23,68.16a1,1,0,0,1-.2-1.982,31.575,31.575,0,0,0,13.246-7.35,1,1,0,1,1,1.362,1.464,33.562,33.562,0,0,1-14.153,7.834A.978.978,0,0,1,48.23,68.16Z'/%3e%3cpath d='M70.991,46.141a1.013,1.013,0,0,1-.3-.045,1,1,0,0,1-.66-1.251A28.884,28.884,0,0,0,70.75,42a1,1,0,0,1,1.96.4c-.222,1.1-.472,2.09-.764,3.038A1,1,0,0,1,70.991,46.141Z'/%3e%3cpath d='M62.85,13.558H55.158a1,1,0,0,1,0-2H61.85V4.866a1,1,0,0,1,2,0v7.692A1,1,0,0,1,62.85,13.558Z'/%3e%3cpath d='M12.1,34.848a1,1,0,0,1-.867-.5L7.887,28.553,2.092,31.9a1,1,0,0,1-1-1.732l6.661-3.846a1,1,0,0,1,1.367.366l3.845,6.661a1,1,0,0,1-.865,1.5Z'/%3e%3cpath d='M54.881,72a1,1,0,0,1-.5-.134l-6.661-3.845a1,1,0,0,1-.367-1.367L51.2,59.993a1,1,0,0,1,1.733,1l-3.346,5.795,5.795,3.346a1,1,0,0,1-.5,1.866Z'/%3e%3cpath d='M41.7,58H37.3a1.636,1.636,0,0,1-1.575-1.2l-.8-2.953a18.737,18.737,0,0,1-5.151-2.13l-2.655,1.519a1.632,1.632,0,0,1-1.965-.264L22.03,49.854a1.635,1.635,0,0,1-.263-1.965l1.519-2.655a18.737,18.737,0,0,1-2.13-5.151l-2.952-.8A1.636,1.636,0,0,1,17,37.7V33.3a1.636,1.636,0,0,1,1.2-1.575l2.953-.8a18.737,18.737,0,0,1,2.13-5.151l-1.519-2.655a1.633,1.633,0,0,1,.264-1.965l3.115-3.116a1.631,1.631,0,0,1,1.965-.263l2.655,1.519a18.737,18.737,0,0,1,5.151-2.13l.8-2.952A1.636,1.636,0,0,1,37.3,13H41.7a1.636,1.636,0,0,1,1.575,1.2l.8,2.953a18.737,18.737,0,0,1,5.151,2.13l2.655-1.519a1.634,1.634,0,0,1,1.965.264l3.116,3.115a1.635,1.635,0,0,1,.263,1.965l-1.519,2.655a18.737,18.737,0,0,1,2.13,5.151l2.952.8A1.636,1.636,0,0,1,62,33.3V37.7a1.636,1.636,0,0,1-1.2,1.575l-2.953.8a18.737,18.737,0,0,1-2.13,5.151l1.519,2.655a1.633,1.633,0,0,1-.264,1.965L53.854,52.97a1.634,1.634,0,0,1-1.965.263l-2.655-1.519a18.737,18.737,0,0,1-5.151,2.13l-.8,2.952A1.636,1.636,0,0,1,41.7,58Zm-4.127-2h3.846l.887-3.259a1,1,0,0,1,.757-.716,16.727,16.727,0,0,0,5.6-2.316,1,1,0,0,1,1.038-.027l2.929,1.675,2.719-2.719-1.675-2.929a1,1,0,0,1,.027-1.038,16.727,16.727,0,0,0,2.316-5.6,1,1,0,0,1,.716-.757L60,37.423V33.577l-3.259-.887a1,1,0,0,1-.716-.757,16.727,16.727,0,0,0-2.316-5.6,1,1,0,0,1-.027-1.038l1.675-2.929-2.719-2.719-2.929,1.675a1,1,0,0,1-1.038-.027,16.727,16.727,0,0,0-5.6-2.316,1,1,0,0,1-.757-.716L41.423,15H37.577l-.887,3.259a1,1,0,0,1-.757.716,16.727,16.727,0,0,0-5.6,2.316,1,1,0,0,1-1.038.027l-2.929-1.675-2.719,2.719,1.675,2.929a1,1,0,0,1-.027,1.038,16.727,16.727,0,0,0-2.316,5.6,1,1,0,0,1-.716.757L19,33.577v3.846l3.259.887a1,1,0,0,1,.716.757,16.727,16.727,0,0,0,2.316,5.6,1,1,0,0,1,.027,1.038l-1.675,2.929,2.719,2.719,2.929-1.675a1,1,0,0,1,1.038.027,16.727,16.727,0,0,0,5.6,2.316,1,1,0,0,1,.757.716Z'/%3e%3cpath d='M39.5,48.91A13.41,13.41,0,1,1,52.91,35.5,13.424,13.424,0,0,1,39.5,48.91Zm0-24.82A11.41,11.41,0,1,0,50.91,35.5,11.422,11.422,0,0,0,39.5,24.09Z'/%3e%3c/svg%3e\"\n\n//# sourceURL=webpack:///./img/setting.svg?");

/***/ }),

/***/ "./js/functions.js":
/*!*************************!*\
  !*** ./js/functions.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleareInput\": () => /* binding */ cleareInput,\n/* harmony export */   \"sendMessage\": () => /* binding */ sendMessage\n/* harmony export */ });\nfunction cleareInput(id){\r\n    document.querySelector(`#${id}`).value = '';\r\n}\r\n\r\nfunction sendMessage(text, toEmail, fromEmail) {\r\n    fetch('/sendMessage', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            text: text,\r\n            toEmail: toEmail,\r\n            fromEmail: fromEmail\r\n        })\r\n    })\r\n    .then(res => res.json())\r\n    .then(res => { console.log(res);});\r\n}\r\n\n\n//# sourceURL=webpack:///./js/functions.js?");

/***/ }),

/***/ "./scripts.js":
/*!********************!*\
  !*** ./scripts.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setHeightMain\": () => /* binding */ setHeightMain,\n/* harmony export */   \"setHeightChatChoose\": () => /* binding */ setHeightChatChoose\n/* harmony export */ });\n// функция контроля высоты блока main ---------------------------------------------------\r\nfunction setHeightMain() {\r\n    const windowHeight = document.documentElement.clientHeight;\r\n    const headerFooterHeight = document.querySelector('header').clientHeight + document.querySelector('footer').clientHeight;\r\n    document.querySelector('main').style.height = windowHeight - headerFooterHeight + 'px';\r\n}\r\n// функция контроля высоты блока main ---------------------------------------------------\r\n\r\n\r\n// функция контроля высоты блока chat-choose ---------------------------------------------------\r\nfunction setHeightChatChoose() {\r\n    const colRightHeight = document.querySelector('.col-right').clientHeight;\r\n    const menuHeight = document.querySelector('.menu').clientHeight;\r\n    document.querySelector('.chat-choose').style.height = colRightHeight - menuHeight + 'px';\r\n}\r\n// функция контроля высоты блока chat-choose ---------------------------------------------------\r\n\r\nwindow.addEventListener(`resize`, ()=>{\r\n    setHeightMain();\r\n    setHeightChatChoose();\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/***/ ((module) => {

eval("class User{\r\n    constructor(object){\r\n        this.name = object.name;\r\n        this.img = object.img;\r\n        this.company = object.company;\r\n        this.chats = object.chats;\r\n        this.email = object.email;\r\n    }\r\n\r\n    getUsersChats(yourEmail){\r\n        let lastMessage = 'Сообщения нет';\r\n        this.chats.forEach(element => {\r\n            if (element.email == yourEmail) {\r\n                lastMessage = element.story[element.story.length - 1].text\r\n            }\r\n        });\r\n        return {\r\n            img: this.img,\r\n            name: this.name,\r\n            lastMessage: lastMessage,\r\n            email: this.email\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = User\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js-node_modules-f89f9c"],
/******/ 			["./index.jsx","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js-node_modules-f89f9c"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;