"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_ui"] = self["webpackChunkweb_ui"] || []).push([["stores_auth_localStore_ts"],{

/***/ "./reducers/auth/baseStates/authentication-base-state.ts":
/*!***************************************************************!*\
  !*** ./reducers/auth/baseStates/authentication-base-state.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authentication_initialState: () => (/* binding */ authentication_initialState)\n/* harmony export */ });\nvar authentication_initialState = {\n  authentication: {\n    user: \"chutiya\"\n  }\n};\n\n//# sourceURL=webpack://web-ui/./reducers/auth/baseStates/authentication-base-state.ts?");

/***/ }),

/***/ "./reducers/auth/baseStates/management-base-state.ts":
/*!***********************************************************!*\
  !*** ./reducers/auth/baseStates/management-base-state.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   management_initialState: () => (/* binding */ management_initialState)\n/* harmony export */ });\nvar management_initialState = {\n  \"management\": {\n    user: \"chutiya\"\n  }\n};\n\n//# sourceURL=webpack://web-ui/./reducers/auth/baseStates/management-base-state.ts?");

/***/ }),

/***/ "./reducers/auth/index.ts":
/*!********************************!*\
  !*** ./reducers/auth/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authSlice: () => (/* binding */ authSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/.pnpm/@reduxjs+toolkit@2.0.0-rc.3_react-redux@9.1.0_react@18.2.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var _baseStates_authentication_base_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseStates/authentication-base-state */ \"./reducers/auth/baseStates/authentication-base-state.ts\");\n/* harmony import */ var _reducers_authentication_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/authentication-reducers */ \"./reducers/auth/reducers/authentication-reducers.ts\");\n/* harmony import */ var _baseStates_management_base_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseStates/management-base-state */ \"./reducers/auth/baseStates/management-base-state.ts\");\n/* harmony import */ var _reducers_management_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/management-reducers */ \"./reducers/auth/reducers/management-reducers.ts\");\n\n\n\n\n\nvar authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({\n  name: \"auth\",\n  initialState: {\n    authentication_initialState: _baseStates_authentication_base_state__WEBPACK_IMPORTED_MODULE_0__.authentication_initialState,\n    management_initialState: _baseStates_management_base_state__WEBPACK_IMPORTED_MODULE_2__.management_initialState\n  },\n  reducers: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({\n    authentication: _reducers_authentication_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    management: _reducers_management_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  })\n});\nvar auth = authSlice.reducer;\n\n//# sourceURL=webpack://web-ui/./reducers/auth/index.ts?");

/***/ }),

/***/ "./reducers/auth/reducers/authentication-reducers.ts":
/*!***********************************************************!*\
  !*** ./reducers/auth/reducers/authentication-reducers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  handleauthupClick: function handleauthupClick(_state, action) {\n    console.log(\"AUTHENTICATION_authup Payload is\", action.payload);\n  },\n  handleauthinClick: function handleauthinClick(_state, action) {\n    console.log(\"AUTHENTICATION_authin Payload is\", action.payload);\n  }\n});\n\n//# sourceURL=webpack://web-ui/./reducers/auth/reducers/authentication-reducers.ts?");

/***/ }),

/***/ "./reducers/auth/reducers/management-reducers.ts":
/*!*******************************************************!*\
  !*** ./reducers/auth/reducers/management-reducers.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  handleauthupClick: function handleauthupClick(_state, action) {\n    console.log(\"MANAGEMENT_authup Payload is\", action.payload);\n  },\n  handleauthinClick: function handleauthinClick(_state, action) {\n    console.log(\"MANAGEMENT_authin Payload is\", action.payload);\n  }\n});\n\n//# sourceURL=webpack://web-ui/./reducers/auth/reducers/management-reducers.ts?");

/***/ }),

/***/ "./sagas/auth/_consts/index.ts":
/*!*************************************!*\
  !*** ./sagas/auth/_consts/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AUTH_AUTHENTICATION_EVENT: () => (/* binding */ AUTH_AUTHENTICATION_EVENT),\n/* harmony export */   AUTH_AUTHENTICATION_EVENT_FAIL: () => (/* binding */ AUTH_AUTHENTICATION_EVENT_FAIL),\n/* harmony export */   AUTH_AUTHENTICATION_EVENT_SUCCESS: () => (/* binding */ AUTH_AUTHENTICATION_EVENT_SUCCESS),\n/* harmony export */   AUTH_SIGNUP_EVENT: () => (/* binding */ AUTH_SIGNUP_EVENT),\n/* harmony export */   AUTH_SIGNUP_EVENT_FAIL: () => (/* binding */ AUTH_SIGNUP_EVENT_FAIL),\n/* harmony export */   AUTH_SIGNUP_EVENT_SUCCESS: () => (/* binding */ AUTH_SIGNUP_EVENT_SUCCESS)\n/* harmony export */ });\nvar AUTH_SIGNUP_EVENT = \"AUTH_SIGNUP_EVENT\";\nvar AUTH_SIGNUP_EVENT_SUCCESS = \"AUTH_SIGNUP_EVENT_SUCCESS\";\nvar AUTH_SIGNUP_EVENT_FAIL = \"AUTH_SIGNUP_EVENT_FAIL\";\nvar AUTH_AUTHENTICATION_EVENT = 'AUTH_AUTHENTICATION_EVENT';\nvar AUTH_AUTHENTICATION_EVENT_SUCCESS = 'AUTH_AUTHENTICATION_EVENT_SUCCESS';\nvar AUTH_AUTHENTICATION_EVENT_FAIL = 'AUTH_AUTHENTICATION_EVENT_FAIL';\n\n//# sourceURL=webpack://web-ui/./sagas/auth/_consts/index.ts?");

/***/ }),

/***/ "./sagas/auth/authRootSaga.ts":
/*!************************************!*\
  !*** ./sagas/auth/authRootSaga.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authSagas: () => (/* binding */ authSagas)\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/.pnpm/redux-saga@1.3.0/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication */ \"./sagas/auth/authentication/index.ts\");\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n        case 7:\n          op = _.ops.pop();\n          _.trys.pop();\n          continue;\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n            _.ops.push(op);\n            break;\n          }\n          if (t[2]) _.ops.pop();\n          _.trys.pop();\n          continue;\n      }\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\n\nfunction authSagas() {\n  return __generator(this, function (_a) {\n    switch (_a.label) {\n      case 0:\n        return [4, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([_authentication__WEBPACK_IMPORTED_MODULE_1__[\"default\"]])];\n      case 1:\n        _a.sent();\n        return [2];\n    }\n  });\n}\n;\n\n//# sourceURL=webpack://web-ui/./sagas/auth/authRootSaga.ts?");

/***/ }),

/***/ "./sagas/auth/authentication/index.ts":
/*!********************************************!*\
  !*** ./sagas/auth/authentication/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/.pnpm/redux-saga@1.3.0/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_consts */ \"./sagas/auth/_consts/index.ts\");\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n  var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n    f,\n    y,\n    t,\n    g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n    while (g && (g = 0, op[0] && (_ = 0)), _) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n        case 7:\n          op = _.ops.pop();\n          _.trys.pop();\n          continue;\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n            _.ops.push(op);\n            break;\n          }\n          if (t[2]) _.ops.pop();\n          _.trys.pop();\n          continue;\n      }\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\n\nfunction fetchAUTH_AUTHENTICATIONSagas(action) {\n  var user, e_1;\n  return __generator(this, function (_a) {\n    switch (_a.label) {\n      case 0:\n        _a.trys.push([0, 3,, 5]);\n        return [4, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(Api().fetchAUTH_AUTHENTICATIONInfo)];\n      case 1:\n        user = _a.sent();\n        console.log(\"PAvylod\", action);\n        return [4, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n          type: _consts__WEBPACK_IMPORTED_MODULE_1__.AUTH_AUTHENTICATION_EVENT,\n          user: user\n        })];\n      case 2:\n        _a.sent();\n        return [3, 5];\n      case 3:\n        e_1 = _a.sent();\n        return [4, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n          type: _consts__WEBPACK_IMPORTED_MODULE_1__.AUTH_AUTHENTICATION_EVENT_FAIL,\n          message: e_1\n        })];\n      case 4:\n        _a.sent();\n        return [3, 5];\n      case 5:\n        return [2];\n    }\n  });\n}\nfunction Api() {\n  return {\n    fetchAUTH_AUTHENTICATIONInfo: function fetchAUTH_AUTHENTICATIONInfo() {\n      return new Promise(function (resolve, _reject) {\n        setTimeout(function () {\n          resolve({\n            name: \"Welcome\"\n          });\n        }, 2000);\n      });\n    }\n  };\n}\nfunction AUTH_AUTHENTICATIONSagas() {\n  return __generator(this, function (_a) {\n    switch (_a.label) {\n      case 0:\n        return [4, (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_consts__WEBPACK_IMPORTED_MODULE_1__.AUTH_AUTHENTICATION_EVENT, fetchAUTH_AUTHENTICATIONSagas)];\n      case 1:\n        _a.sent();\n        return [2];\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AUTH_AUTHENTICATIONSagas);\n\n//# sourceURL=webpack://web-ui/./sagas/auth/authentication/index.ts?");

/***/ }),

/***/ "./stores/auth/localStore.ts":
/*!***********************************!*\
  !*** ./stores/auth/localStore.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store),\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/.pnpm/@reduxjs+toolkit@2.0.0-rc.3_react-redux@9.1.0_react@18.2.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ \"./node_modules/.pnpm/redux-saga@1.3.0/node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sagas_auth_authRootSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sagas/auth/authRootSaga */ \"./sagas/auth/authRootSaga.ts\");\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/auth */ \"./reducers/auth/index.ts\");\n\n\n\n\n\nvar sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n  reducer: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.combineReducers)({\n    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_3__.auth\n  }),\n  middleware: function middleware(getDefaultMiddleware) {\n    return getDefaultMiddleware().concat(sagaMiddleware);\n  }\n});\nsagaMiddleware.run(_sagas_auth_authRootSaga__WEBPACK_IMPORTED_MODULE_2__.authSagas);\nvar useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch;\nvar useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\n\n//# sourceURL=webpack://web-ui/./stores/auth/localStore.ts?");

/***/ })

}]);