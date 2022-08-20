/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/countries.js":
/*!**************************!*\
  !*** ./src/countries.js ***!
  \**************************/
/***/ (() => {

const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei ", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/**
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value
 * @param  {...Node} children - Variable number of child nodes
 */
function createElement(type) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = document.createElement(type); // Props

  for (const [key, value] of Object.entries(props)) {
    element.setAttribute(key, value);
  } // Children Nodes


  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.forEach(child => element.append(child));
  return element;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", "",{"version":3,"sources":["webpack://./src/meyerReset.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0, 0%, 95%);\n  --base-black: hsl(0, 0%, 10%);\n  --base-success: #008000;\n  --base-fail: #900; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  min-height: 100vh;\n  color: var(--base-black, black);\n  background-color: var(--base-white, white); }\n\nh1 {\n  text-align: center;\n  font-size: 2.2rem; }\n\n#custom-form {\n  border: 2px solid var(--base-black, black);\n  padding: 1em;\n  margin: 1em auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  width: 50%;\n  min-width: 250px; }\n  #custom-form > * {\n    width: 80%; }\n  #custom-form label {\n    display: flex;\n    flex-direction: column; }\n  #custom-form input:focus {\n    outline: 2px solid var(--base-black, black); }\n    #custom-form input:focus:invalid {\n      outline: none; }\n  #custom-form input:invalid {\n    border: 2px solid var(--base-fail, red); }\n  #custom-form .error {\n    width: 100%;\n    padding: 0;\n    font-size: 80%;\n    color: var(--base-white, white);\n    background-color: var(--base-fail, red);\n    border-radius: 5px 5px 0 0;\n    box-sizing: border-box; }\n  #custom-form .error.active {\n    padding: 0.3em; }\n  #custom-form #password-required-states .password-required-state-item {\n    padding: 0.2em 0.5em;\n    background-color: red; }\n    #custom-form #password-required-states .password-required-state-item .password-required-state-item-message {\n      display: block; }\n      #custom-form #password-required-states .password-required-state-item .password-required-state-item-message::before {\n        content: '\\2715';\n        padding-right: 0.5em; }\n    #custom-form #password-required-states .password-required-state-item.valid {\n      background-color: green; }\n      #custom-form #password-required-states .password-required-state-item.valid .password-required-state-item-message::before {\n        content: '\\2713'; }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,6BAAa;EACb,6BAAa;EACb,uBAAe;EACf,iBAAY,EAAA;;AAGhB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,iBAAiB;EACjB,+BAA+B;EAC/B,0CAA0C,EAAA;;AAG9C;EACI,kBAAkB;EAClB,iBAAiB,EAAA;;AAGrB;EACI,0CAA0C;EAC1C,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,gBAAgB,EAAA;EATpB;IAYQ,UAAU,EAAA;EAZlB;IAgBQ,aAAa;IACb,sBAAsB,EAAA;EAjB9B;IAuBY,2CAA2C,EAAA;IAvBvD;MA0BgB,aAAa,EAAA;EA1B7B;IA+BY,uCAAuC,EAAA;EA/BnD;IAoCQ,WAAa;IACb,UAAU;IACV,cAAc;IACd,+BAA+B;IAC/B,uCAAuC;IACvC,0BAA2B;IAC3B,sBAAsB,EAAA;EA1C9B;IA8CQ,cAAc,EAAA;EA9CtB;IAmDY,oBAAoB;IACpB,qBAAqB,EAAA;IApDjC;MAuDgB,cAAc,EAAA;MAvD9B;QA0DoB,gBAAgB;QAChB,oBAAoB,EAAA;IA3DxC;MAgEgB,uBAAuB,EAAA;MAhEvC;QAqEwB,gBAAgB,EAAA","sourcesContent":[":root {\r\n    --base-white: hsl(0, 0%, 95%);\r\n    --base-black: hsl(0, 0%, 10%);\r\n    --base-success: #008000;\r\n    --base-fail: #900;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%; // 1rem = 10px\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem; // 16px\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    min-height: 100vh;\r\n    color: var(--base-black, black);\r\n    background-color: var(--base-white, white);\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 2.2rem;\r\n}\r\n\r\n#custom-form {\r\n    border: 2px solid var(--base-black, black);\r\n    padding: 1em;\r\n    margin: 1em auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 50%;\r\n    min-width: 250px;\r\n\r\n    & > * {\r\n        width: 80%;\r\n    }\r\n\r\n    label {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    input {\r\n\r\n        &:focus {\r\n            outline: 2px solid var(--base-black, black);\r\n\r\n            &:invalid {\r\n                outline: none;\r\n            }\r\n        }\r\n\r\n        &:invalid {\r\n            border: 2px solid var(--base-fail, red);\r\n        }\r\n    }\r\n\r\n    .error {\r\n        width  : 100%;\r\n        padding: 0; // Non-zero padding would show up with empty textContent\r\n        font-size: 80%;\r\n        color: var(--base-white, white);\r\n        background-color: var(--base-fail, red);\r\n        border-radius: 5px 5px 0 0 ;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .error.active {\r\n        padding: 0.3em;\r\n    }\r\n\r\n    #password-required-states {\r\n        .password-required-state-item {\r\n            padding: 0.2em 0.5em;\r\n            background-color: red;\r\n\r\n            .password-required-state-item-message {\r\n                display: block;\r\n                \r\n                &::before {\r\n                    content: '\\2715';\r\n                    padding-right: 0.5em;\r\n                }\r\n            }\r\n\r\n            &.valid {\r\n                background-color: green;\r\n\r\n                .password-required-state-item-message {\r\n\r\n                    &::before {\r\n                        content: '\\2713';\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/meyerReset.scss":
/*!*****************************!*\
  !*** ./src/meyerReset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./meyerReset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _meyerReset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meyerReset.scss */ "./src/meyerReset.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries.js */ "./src/countries.js");
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countries_js__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






(function () {
  class FormInput {
    constructor(labelElement) {
      let errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FormInput.defaultErrors;
      let customErrorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.labelTitleElement = labelElement.querySelector('.label-title');
      this.inputElement = labelElement.querySelector('input');
      this.errorElement = labelElement.querySelector('.error');
      this.errors = errors;
      this.customErrorHandler = customErrorHandler;
      this.init();
    }

    init() {
      this.inputElement.addEventListener('input', this.checkValidity.bind(this), false);
    }

    checkValidity() {
      let invalidStateArr = [];
      let validObj = {}; // Add invalid state messages from this.errors property

      if (!this.inputElement.validity.valid) {
        invalidStateArr = Object.entries(this.errors) // Get [key, value] pairs of ERRORS in array
        .filter(entry => this.inputElement.validity[entry[0]]) // Filter by invalid errors from input element
        .map(entry => entry[1]); // Map to array of error messages to display
      } // Add invalid state messages from custom error handler method


      if (this.customErrorHandler) {
        validObj = this.customErrorHandler(this.inputElement);

        if (!validObj.valid) {
          invalidStateArr = invalidStateArr.concat(validObj.invalidMsgArr);
        }
      } // Set input element valid state


      if (invalidStateArr.length || validObj.hasOwnProperty('valid') && !validObj.valid) {
        this.inputElement.setCustomValidity('invalid');
      } else {
        this.inputElement.setCustomValidity('');
      } // Clear error messages, if any


      while (this.errorElement.firstElementChild) {
        this.errorElement.firstElementChild.remove();
      } // Display/hide error messages


      if (invalidStateArr.length) {
        // Display error
        this.errorElement.append(...invalidStateArr.map(invalidState => (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, invalidState)));
        this.errorElement.className = 'error active';
      } else {
        // Else NO invalid messages to display
        // Hide error
        this.errorElement.className = 'error';
      }
    }

  }

  _defineProperty(FormInput, "defaultErrors", {
    patternMismatch: 'Wrong pattern!',
    tooLong: 'Too long!',
    tooShort: 'Too short!',
    rangeOverflow: 'Number must be lower!',
    rangeUnderflow: 'Number must be higher!',
    typeMismatch: 'Wrong type!',
    valueMissing: 'Value required!',
    badInput: 'Bad input!'
  });

  class CustomForm {
    constructor(formElement) {
      this.element = formElement;
      this.init();
    }

    handleEmailValidation(inputElement) {
      let outputMessagesArr = [];
      let outputMessagesPerValidityState;

      if (inputElement.validity.typeMismatch) {
        outputMessagesPerValidityState = []; // Valid character sequence: character followed by '@' symbol followed by another character
        // x@y or x@y.z
        // Check if '@' symbol is present

        const bIncludesAtSymbol = inputElement.value.includes('@');
        let bSingleAtSymbol;

        if (bIncludesAtSymbol) {
          // Check if more than one '@' symbol (if reach here, guaranteed to have at least one '@' symbol)
          bSingleAtSymbol = inputElement.value.split('@').length === 2;

          if (bSingleAtSymbol) {
            // Check if value is just '@'
            if (inputElement.value.length === 1) {
              outputMessagesPerValidityState.push('Must include more than just an "@" symbol!');
            } else {
              // Else includes '@' symbol and at least one other character
              if (inputElement.value.startsWith('@')) {
                outputMessagesPerValidityState.push('Must NOT start with "@" symbol!');
              } else if (inputElement.value.endsWith('@')) {
                outputMessagesPerValidityState.push('Must NOT end with "@" symbol!');
              } else {// Else '@' symbol is sandwiched on either side by at least one character
                //console.error('Email should be valid if reach here!');
              }
            }
          } else {
            // Else multiple instances of '@' symbol
            outputMessagesPerValidityState.push('Must include only 1 "@" symbol!');
          }
        } else {
          // Else '@' symbol is NOT present
          outputMessagesPerValidityState.push('Must include an "@" symbol!');
        } // Check if '.' is present


        if (inputElement.value.includes('.')) {
          // Check if valid characters before ('@' cannot be before '.')
          if (bSingleAtSymbol && /@\./.test(inputElement.value)) {
            outputMessagesPerValidityState.push('Must not follow "@" symbol with "." symbol!');
          } // Check if valid characters after (any characters after are valid but must NOT end with '.' symbol)


          if (inputElement.value.endsWith('.')) {
            outputMessagesPerValidityState.push('Must NOT end with "." symbol!');
          }
        } // If NO custom error messages added, use generic message related to validity state


        if (outputMessagesPerValidityState.length) {
          outputMessagesArr.push.apply(outputMessagesArr, outputMessagesPerValidityState);
        } else {
          outputMessagesArr.push('Must be a valid email address type!');
        }
      }

      return {
        valid: outputMessagesArr.length == 0,
        invalidMsgArr: outputMessagesArr
      };
    }

    handleZipCodeValidation(inputElement) {
      let outputMessagesArr = [];
      let outputMessagesPerValidityState;

      if (inputElement.validity.patternMismatch) {
        outputMessagesPerValidityState = []; // Valid character sequence: 
        // Regex: ^([0-9]{5})[-\s]?([0-9]{4}|)$
        // 5 digits followed by optional space or hyphen followed by optional 4 digits
        // Check if any non-valid characters are present (valid characters: 0-9, -, \s)

        if (/[^0-9\s-]/.test(inputElement.value)) {
          outputMessagesPerValidityState.push('Must be numbered digits separated by optional space or hyphen!');
        } else {
          // Else all characters are valid
          // Check for more than one separating character (dash or space)
          if (/[\s-][0-9]*[\s-]/.test(inputElement.value)) {
            outputMessagesPerValidityState.push('Must NOT have more than 1 separating character (dash or space)!');
          } else {
            // Else only one separating character (dash or space)
            // Get two separate sections of digits
            const digitMatch = inputElement.value.match(/([0-9]*)[\s-]?([0-9]*)/);
          }
        }

        if (outputMessagesPerValidityState.length) {
          outputMessagesArr.push.apply(outputMessagesArr, outputMessagesPerValidityState);
        } else {
          outputMessagesArr.push('Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!');
        }
      }

      return {
        valid: outputMessagesArr.length == 0,
        invalidMsgArr: outputMessagesArr
      };
    }

    handlePasswordValidation(inputElement) {
      /** Password Requirements:
       *  - Minimum 8 characters
       *  - At least one uppercase letter
       *  - At least one lowercase letter
       *  - At least one special character
       *  - At least one number
       */
      // Object to hold boolean value for each password validation
      const validations = {};
      const invalidMessageArr = []; // Minimum 8 characters

      validations.minChars = inputElement.value.length >= 8;

      if (!validations.minChars) {
        invalidMessageArr.push('Must have minimum 8 characters!');
      } // At least one uppercase letter


      validations.uppercaseLetter = /[A-Z]/.test(inputElement.value);

      if (!validations.uppercaseLetter) {
        invalidMessageArr.push('Must have at least one uppercase letter!');
      } // At least one lowercase letter


      validations.lowercaseLetter = /[a-z]/.test(inputElement.value);

      if (!validations.lowercaseLetter) {
        invalidMessageArr.push('Must have at least one lowercase letter!');
      } // At least one number


      validations.number = /[0-9]/.test(inputElement.value);

      if (!validations.number) {
        invalidMessageArr.push('Must have at least one number!');
      } // At least one special character


      validations.specialChar = /[~`!@#$%^&*()_\-+={[}\]|\:;"'<,>.?/]/.test(inputElement.value);

      if (!validations.specialChar) {
        invalidMessageArr.push('Must have at least one special character!');
      }

      if (invalidMessageArr.length) {
        inputElement.setCustomValidity('invalid');
      } else {
        inputElement.setCustomValidity('');
      }

      this.updatePasswordRequiredStatesElement(validations);
      return {
        valid: invalidMessageArr.length == 0,
        invalidMsgArr: []
      };
    }

    handlePasswordConfirmationValidation(passwordConfirmInputElement, passwordInputElement) {
      let outputMessagesArr = [];

      if (passwordConfirmInputElement.value !== passwordInputElement.value) {
        outputMessagesArr.push('Passwords do NOT match!');
      }

      return {
        valid: outputMessagesArr.length == 0,
        invalidMsgArr: outputMessagesArr
      };
    }
    /**
     * Updates element holding password required states given an object of key/value pairs with boolean value of a state validity.
     * @param {Object} stateValidity - Keys are matching data attribute of message element and values are boolean of whether state is valid
     */


    updatePasswordRequiredStatesElement(stateValidity) {
      // Return if NO element to display required states
      if (!this.passwordRequiredStatesElement) return;
      const requiredStatesElements = this.passwordRequiredStatesElement.querySelectorAll('.password-required-state-item');
      requiredStatesElements.forEach(element => {
        if (stateValidity[element.dataset.requiredState]) {
          element.classList.add('valid');
        } else {
          element.classList.remove('valid');
        }
      });
    }

    init() {
      // Password Required States
      this.passwordRequiredStatesElement = document.getElementById('password-required-states'); // Email

      const emailElement = this.element.querySelector('label[for="email"]');

      if (emailElement) {
        new FormInput(emailElement, {
          //typeMismatch: 'Must be a valid email address!',
          valueMissing: 'Email required!'
        }, this.handleEmailValidation.bind(this));
      } // Country


      const countryElement = this.element.querySelector('label[for="country"]');

      if (countryElement) {
        new FormInput(countryElement, {
          typeMismatch: 'Must be a valid country name!',
          valueMissing: 'Country required!',
          tooLong: 'Country name too long!'
        });
      } // Zipcode


      const zipcodeElement = this.element.querySelector('label[for="zipcode"]');

      if (zipcodeElement) {
        new FormInput(zipcodeElement, {
          //patternMismatch: 'Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!',
          valueMissing: 'Zipcode required!'
        }, this.handleZipCodeValidation.bind(this));
      } // Password


      const passwordElement = this.element.querySelector('label[for="password"]');

      if (passwordElement) {
        new FormInput(passwordElement, {}, this.handlePasswordValidation.bind(this));
      } // Password Confirm


      const passwordConfirmElement = this.element.querySelector('label[for="password-confirm"]');

      if (passwordConfirmElement) {
        new FormInput(passwordConfirmElement, {
          //patternMismatch: 'Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!',
          valueMissing: 'Zipcode required!'
        }, passwordConfirmInputElement => {
          return this.handlePasswordConfirmationValidation(passwordConfirmInputElement, this.element.querySelector('input[name="password"]'));
        });
      }
    }

  }

  new CustomForm(document.getElementById('custom-form'));
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBRyxDQUNkLGFBRGMsRUFFZCxTQUZjLEVBR2QsU0FIYyxFQUlkLFNBSmMsRUFLZCxRQUxjLEVBTWQscUJBTmMsRUFPZCxXQVBjLEVBUWQsU0FSYyxFQVNkLFdBVGMsRUFVZCxTQVZjLEVBV2QsWUFYYyxFQVlkLFNBWmMsRUFhZCxTQWJjLEVBY2QsWUFkYyxFQWVkLFVBZmMsRUFnQmQsU0FoQmMsRUFpQmQsU0FqQmMsRUFrQmQsUUFsQmMsRUFtQmQsT0FuQmMsRUFvQmQsUUFwQmMsRUFxQmQsU0FyQmMsRUFzQmQsd0JBdEJjLEVBdUJkLFVBdkJjLEVBd0JkLFFBeEJjLEVBeUJkLFNBekJjLEVBMEJkLFVBMUJjLEVBMkJkLGNBM0JjLEVBNEJkLFNBNUJjLEVBNkJkLGVBN0JjLEVBOEJkLFlBOUJjLEVBK0JkLFVBL0JjLEVBZ0NkLFVBaENjLEVBaUNkLFFBakNjLEVBa0NkLDBCQWxDYyxFQW1DZCxNQW5DYyxFQW9DZCxPQXBDYyxFQXFDZCxPQXJDYyxFQXNDZCxVQXRDYyxFQXVDZCxTQXZDYyxFQXdDZCwyQkF4Q2MsRUF5Q2QsWUF6Q2MsRUEwQ2QsU0ExQ2MsRUEyQ2QsTUEzQ2MsRUE0Q2QsUUE1Q2MsRUE2Q2QsMEJBN0NjLEVBOENkLGtDQTlDYyxFQStDZCxTQS9DYyxFQWdEZCxVQWhEYyxFQWlEZCxVQWpEYyxFQWtEZCxvQkFsRGMsRUFtRGQsU0FuRGMsRUFvRGQsT0FwRGMsRUFxRGQsYUFyRGMsRUFzRGQsbUJBdERjLEVBdURkLFNBdkRjLEVBd0RkLFNBeERjLEVBeURkLCtCQXpEYyxFQTBEZCxVQTFEYyxFQTJEZCxNQTNEYyxFQTREZCxTQTVEYyxFQTZEZCxRQTdEYyxFQThEZCxPQTlEYyxFQStEZCxRQS9EYyxFQWdFZCxTQWhFYyxFQWlFZCxTQWpFYyxFQWtFZCxPQWxFYyxFQW1FZCxRQW5FYyxFQW9FZCxTQXBFYyxFQXFFZCxXQXJFYyxFQXNFZCxRQXRFYyxFQXVFZCxlQXZFYyxFQXdFZCxRQXhFYyxFQXlFZCxPQXpFYyxFQTBFZCxVQTFFYyxFQTJFZCxVQTNFYyxFQTRFZCxTQTVFYyxFQTZFZCxTQTdFYyxFQThFZCxPQTlFYyxFQStFZCxXQS9FYyxFQWdGZCxNQWhGYyxFQWlGZCxNQWpGYyxFQWtGZCxTQWxGYyxFQW1GZCxRQW5GYyxFQW9GZCxPQXBGYyxFQXFGZCxTQXJGYyxFQXNGZCxPQXRGYyxFQXVGZCxRQXZGYyxFQXdGZCxZQXhGYyxFQXlGZCxPQXpGYyxFQTBGZCxVQTFGYyxFQTJGZCxRQTNGYyxFQTRGZCxZQTVGYyxFQTZGZCxNQTdGYyxFQThGZCxRQTlGYyxFQStGZCxTQS9GYyxFQWdHZCxTQWhHYyxFQWlHZCxTQWpHYyxFQWtHZCxPQWxHYyxFQW1HZCxlQW5HYyxFQW9HZCxXQXBHYyxFQXFHZCxZQXJHYyxFQXNHZCxZQXRHYyxFQXVHZCxRQXZHYyxFQXdHZCxVQXhHYyxFQXlHZCxVQXpHYyxFQTBHZCxNQTFHYyxFQTJHZCxPQTNHYyxFQTRHZCxrQkE1R2MsRUE2R2QsWUE3R2MsRUE4R2QsV0E5R2MsRUErR2QsUUEvR2MsRUFnSGQsWUFoSGMsRUFpSGQsU0FqSGMsRUFrSGQsUUFsSGMsRUFtSGQsVUFuSGMsRUFvSGQsWUFwSGMsRUFxSGQsU0FySGMsRUFzSGQsWUF0SGMsRUF1SGQsMEJBdkhjLEVBd0hkLFNBeEhjLEVBeUhkLE9BekhjLEVBMEhkLE9BMUhjLEVBMkhkLGFBM0hjLEVBNEhkLGFBNUhjLEVBNkhkLFdBN0hjLEVBOEhkLE9BOUhjLEVBK0hkLFNBL0hjLEVBZ0lkLGFBaEljLEVBaUlkLGlCQWpJYyxFQWtJZCxRQWxJYyxFQW1JZCxNQW5JYyxFQW9JZCxVQXBJYyxFQXFJZCxPQXJJYyxFQXNJZCxpQkF0SWMsRUF1SWQsUUF2SWMsRUF3SWQsa0JBeEljLEVBeUlkLFVBekljLEVBMElkLE1BMUljLEVBMklkLGFBM0ljLEVBNElkLFFBNUljLEVBNklkLFVBN0ljLEVBOElkLE9BOUljLEVBK0lkLFNBL0ljLEVBZ0pkLFFBaEpjLEVBaUpkLFFBakpjLEVBa0pkLHVCQWxKYyxFQW1KZCxhQW5KYyxFQW9KZCxrQ0FwSmMsRUFxSmQsT0FySmMsRUFzSmQsWUF0SmMsRUF1SmQsdUJBdkpjLEVBd0pkLGNBeEpjLEVBeUpkLFNBekpjLEVBMEpkLFFBMUpjLEVBMkpkLFlBM0pjLEVBNEpkLGNBNUpjLEVBNkpkLFdBN0pjLEVBOEpkLFVBOUpjLEVBK0pkLFVBL0pjLEVBZ0tkLGlCQWhLYyxFQWlLZCxTQWpLYyxFQWtLZCxjQWxLYyxFQW1LZCxhQW5LYyxFQW9LZCxhQXBLYyxFQXFLZCxPQXJLYyxFQXNLZCxXQXRLYyxFQXVLZCxPQXZLYyxFQXdLZCxVQXhLYyxFQXlLZCxRQXpLYyxFQTBLZCxhQTFLYyxFQTJLZCxPQTNLYyxFQTRLZCxZQTVLYyxFQTZLZCxVQTdLYyxFQThLZCxVQTlLYyxFQStLZCxhQS9LYyxFQWdMZCxNQWhMYyxFQWlMZCxPQWpMYyxFQWtMZCxxQkFsTGMsRUFtTGQsU0FuTGMsRUFvTGQsUUFwTGMsRUFxTGQsY0FyTGMsRUFzTGQsUUF0TGMsRUF1TGQsUUF2TGMsRUF3TGQsU0F4TGMsRUF5TGQsc0JBekxjLEVBMExkLGdCQTFMYyxFQTJMZCwwQkEzTGMsRUE0TGQsU0E1TGMsRUE2TGQsWUE3TGMsRUE4TGQsU0E5TGMsRUErTGQsV0EvTGMsRUFnTWQsU0FoTWMsRUFpTWQsT0FqTWMsRUFrTWQsUUFsTWMsRUFtTWQsVUFuTWMsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixFQUFzRDtFQUFBLElBQXpCQyxLQUF5Qix1RUFBakIsRUFBaUI7RUFDMUQsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNKLGFBQVQsQ0FBdUJDLElBQXZCLENBQWhCLENBRDBELENBRzFEOztFQUNBLEtBQUssTUFBTSxDQUFDSSxHQUFELEVBQU1DLEtBQU4sQ0FBWCxJQUEyQkMsTUFBTSxDQUFDQyxPQUFQLENBQWVOLEtBQWYsQ0FBM0IsRUFBa0Q7SUFDOUNDLE9BQU8sQ0FBQ00sWUFBUixDQUFxQkosR0FBckIsRUFBMEJDLEtBQTFCO0VBQ0gsQ0FOeUQsQ0FRMUQ7OztFQVIwRCxrQ0FBVkksUUFBVTtJQUFWQSxRQUFVO0VBQUE7O0VBUzFEQSxRQUFRLENBQUNDLE9BQVQsQ0FBa0JDLEtBQUQsSUFBV1QsT0FBTyxDQUFDVSxNQUFSLENBQWVELEtBQWYsQ0FBNUI7RUFFQSxPQUFPVCxPQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlwQkFBaXBCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsK0JBQStCLGlKQUFpSixxQkFBcUIsVUFBVSxxQkFBcUIsWUFBWSx1QkFBdUIsbUJBQW1CLG1CQUFtQiw2REFBNkQsZ0JBQWdCLG9CQUFvQixXQUFXLDhCQUE4Qix3QkFBd0IsU0FBUyx3RkFBd0YsS0FBSyxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixZQUFZLE1BQU0sZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLDZxQkFBNnFCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEtBQUssc0pBQXNKLHFCQUFxQixLQUFLLFVBQVUscUJBQXFCLEtBQUssWUFBWSx1QkFBdUIsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssK0RBQStELGtCQUFrQixvQkFBb0IsS0FBSyxXQUFXLGdDQUFnQyx3QkFBd0IsS0FBSyxtQkFBbUI7QUFDenhGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0NBQWtDLGtDQUFrQyw0QkFBNEIsd0JBQXdCLFVBQVUscUJBQXFCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLFVBQVUsc0JBQXNCLDZJQUE2SSxzQkFBc0Isb0NBQW9DLGlEQUFpRCxRQUFRLHVCQUF1Qix3QkFBd0Isa0JBQWtCLCtDQUErQyxpQkFBaUIscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsZUFBZSx1QkFBdUIsc0JBQXNCLG1CQUFtQix3QkFBd0Isb0JBQW9CLCtCQUErQiw4QkFBOEIsb0RBQW9ELHdDQUF3Qyx3QkFBd0IsZ0NBQWdDLGdEQUFnRCx5QkFBeUIsa0JBQWtCLGlCQUFpQixxQkFBcUIsc0NBQXNDLDhDQUE4QyxpQ0FBaUMsK0JBQStCLGdDQUFnQyx1QkFBdUIsMEVBQTBFLDJCQUEyQiw4QkFBOEIsa0hBQWtILHlCQUF5Qiw0SEFBNEgsNEJBQTRCLGlDQUFpQyxrRkFBa0Ysa0NBQWtDLGtJQUFrSSw4QkFBOEIsU0FBUyxrRkFBa0YsV0FBVyxXQUFXLFdBQVcsaUJBQWlCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxXQUFXLGlCQUFpQixPQUFPLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8saUJBQWlCLE9BQU8sY0FBYyxrQkFBa0IsT0FBTyxtQkFBbUIsT0FBTyw4Q0FBOEMsc0NBQXNDLHNDQUFzQyxnQ0FBZ0MsMEJBQTBCLEtBQUssY0FBYywwQkFBMEIsNkNBQTZDLEtBQUssZ0NBQWdDLDRCQUE0QixLQUFLLGNBQWMsMkJBQTJCLHdKQUF3SiwwQkFBMEIsd0NBQXdDLG1EQUFtRCxLQUFLLFlBQVksMkJBQTJCLDBCQUEwQixLQUFLLHNCQUFzQixtREFBbUQscUJBQXFCLHlCQUF5QixzQkFBc0IsK0JBQStCLDRCQUE0QixrQkFBa0IsbUJBQW1CLHlCQUF5QixtQkFBbUIsdUJBQXVCLFNBQVMsbUJBQW1CLDBCQUEwQixtQ0FBbUMsU0FBUyxtQkFBbUIseUJBQXlCLDREQUE0RCwrQkFBK0Isa0NBQWtDLGlCQUFpQixhQUFhLDJCQUEyQix3REFBd0QsYUFBYSxTQUFTLG9CQUFvQiwwQkFBMEIsd0JBQXdCLG1GQUFtRiw0Q0FBNEMsb0RBQW9ELHdDQUF3QyxtQ0FBbUMsU0FBUywrQkFBK0IsMkJBQTJCLFNBQVMsdUNBQXVDLDJDQUEyQyxxQ0FBcUMsc0NBQXNDLDJEQUEyRCxtQ0FBbUMsbURBQW1ELDBDQUEwQyw2Q0FBNkMscUJBQXFCLGlCQUFpQiw2QkFBNkIsNENBQTRDLCtEQUErRCx1Q0FBdUMsOENBQThDLHlCQUF5QixxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLHVCQUF1QjtBQUNqK0s7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpSjtBQUNqSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSTJGO0FBQ25ILE9BQU8saUVBQWUsaUlBQU8sSUFBSSx3SUFBYyxHQUFHLHdJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE2STtBQUM3STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSXVGO0FBQy9HLE9BQU8saUVBQWUsNkhBQU8sSUFBSSxvSUFBYyxHQUFHLG9JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFlBQVc7RUFDUixNQUFNVyxTQUFOLENBQWdCO0lBQ1pDLFdBQVcsQ0FBQ0MsWUFBRCxFQUE0RTtNQUFBLElBQTdEQyxNQUE2RCx1RUFBcERILFNBQVMsQ0FBQ0ksYUFBMEM7TUFBQSxJQUEzQkMsa0JBQTJCLHVFQUFOLElBQU07TUFDbkYsS0FBS0MsaUJBQUwsR0FBeUJKLFlBQVksQ0FBQ0ssYUFBYixDQUEyQixjQUEzQixDQUF6QjtNQUNBLEtBQUtDLFlBQUwsR0FBb0JOLFlBQVksQ0FBQ0ssYUFBYixDQUEyQixPQUEzQixDQUFwQjtNQUNBLEtBQUtFLFlBQUwsR0FBb0JQLFlBQVksQ0FBQ0ssYUFBYixDQUEyQixRQUEzQixDQUFwQjtNQUVBLEtBQUtKLE1BQUwsR0FBY0EsTUFBZDtNQUVBLEtBQUtFLGtCQUFMLEdBQTBCQSxrQkFBMUI7TUFFQSxLQUFLSyxJQUFMO0lBQ0g7O0lBYURBLElBQUksR0FBRztNQUNILEtBQUtGLFlBQUwsQ0FBa0JHLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE1QyxFQUEyRSxLQUEzRTtJQUNIOztJQUVERCxhQUFhLEdBQUc7TUFDWixJQUFJRSxlQUFlLEdBQUcsRUFBdEI7TUFDQSxJQUFJQyxRQUFRLEdBQUcsRUFBZixDQUZZLENBSVo7O01BQ0EsSUFBSSxDQUFDLEtBQUtQLFlBQUwsQ0FBa0JRLFFBQWxCLENBQTJCQyxLQUFoQyxFQUF1QztRQUNuQ0gsZUFBZSxHQUFHckIsTUFBTSxDQUFDQyxPQUFQLENBQWUsS0FBS1MsTUFBcEIsRUFBNEI7UUFBNUIsQ0FDYmUsTUFEYSxDQUNOQyxLQUFLLElBQUksS0FBS1gsWUFBTCxDQUFrQlEsUUFBbEIsQ0FBMkJHLEtBQUssQ0FBQyxDQUFELENBQWhDLENBREgsRUFDeUM7UUFEekMsQ0FFYkMsR0FGYSxDQUVURCxLQUFLLElBQUlBLEtBQUssQ0FBQyxDQUFELENBRkwsQ0FBbEIsQ0FEbUMsQ0FHUDtNQUMvQixDQVRXLENBV1o7OztNQUNBLElBQUksS0FBS2Qsa0JBQVQsRUFBNkI7UUFDekJVLFFBQVEsR0FBRyxLQUFLVixrQkFBTCxDQUF3QixLQUFLRyxZQUE3QixDQUFYOztRQUNBLElBQUksQ0FBQ08sUUFBUSxDQUFDRSxLQUFkLEVBQXFCO1VBQ2pCSCxlQUFlLEdBQUdBLGVBQWUsQ0FBQ08sTUFBaEIsQ0FBdUJOLFFBQVEsQ0FBQ08sYUFBaEMsQ0FBbEI7UUFDSDtNQUNKLENBakJXLENBbUJaOzs7TUFDQSxJQUFJUixlQUFlLENBQUNTLE1BQWhCLElBQTJCUixRQUFRLENBQUNTLGNBQVQsQ0FBd0IsT0FBeEIsS0FBb0MsQ0FBQ1QsUUFBUSxDQUFDRSxLQUE3RSxFQUFxRjtRQUNqRixLQUFLVCxZQUFMLENBQWtCaUIsaUJBQWxCLENBQW9DLFNBQXBDO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsS0FBS2pCLFlBQUwsQ0FBa0JpQixpQkFBbEIsQ0FBb0MsRUFBcEM7TUFDSCxDQXhCVyxDQTBCWjs7O01BQ0EsT0FBTyxLQUFLaEIsWUFBTCxDQUFrQmlCLGlCQUF6QixFQUE0QztRQUN4QyxLQUFLakIsWUFBTCxDQUFrQmlCLGlCQUFsQixDQUFvQ0MsTUFBcEM7TUFDSCxDQTdCVyxDQStCWjs7O01BQ0EsSUFBSWIsZUFBZSxDQUFDUyxNQUFwQixFQUE0QjtRQUN4QjtRQUNBLEtBQUtkLFlBQUwsQ0FBa0JWLE1BQWxCLENBQXlCLEdBQUdlLGVBQWUsQ0FBQ00sR0FBaEIsQ0FBb0JRLFlBQVksSUFBSTFDLHlEQUFhLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVTBDLFlBQVYsQ0FBakQsQ0FBNUI7UUFDQSxLQUFLbkIsWUFBTCxDQUFrQm9CLFNBQWxCLEdBQThCLGNBQTlCO01BQ0gsQ0FKRCxNQUlPO1FBQUU7UUFDTDtRQUNBLEtBQUtwQixZQUFMLENBQWtCb0IsU0FBbEIsR0FBOEIsT0FBOUI7TUFDSDtJQUNKOztFQXBFVzs7RUFEUixnQkFDRjdCLFNBREUsbUJBY21CO0lBQ25COEIsZUFBZSxFQUFFLGdCQURFO0lBRW5CQyxPQUFPLEVBQUUsV0FGVTtJQUduQkMsUUFBUSxFQUFFLFlBSFM7SUFJbkJDLGFBQWEsRUFBRSx1QkFKSTtJQUtuQkMsY0FBYyxFQUFFLHdCQUxHO0lBTW5CQyxZQUFZLEVBQUUsYUFOSztJQU9uQkMsWUFBWSxFQUFFLGlCQVBLO0lBUW5CQyxRQUFRLEVBQUU7RUFSUyxDQWRuQjs7RUF3RVIsTUFBTUMsVUFBTixDQUFpQjtJQUNickMsV0FBVyxDQUFDc0MsV0FBRCxFQUFjO01BQ3JCLEtBQUtsRCxPQUFMLEdBQWVrRCxXQUFmO01BRUEsS0FBSzdCLElBQUw7SUFDSDs7SUFFRDhCLHFCQUFxQixDQUFDaEMsWUFBRCxFQUFlO01BQ2hDLElBQUlpQyxpQkFBaUIsR0FBRyxFQUF4QjtNQUNBLElBQUlDLDhCQUFKOztNQUVBLElBQUlsQyxZQUFZLENBQUNRLFFBQWIsQ0FBc0JtQixZQUExQixFQUF3QztRQUNwQ08sOEJBQThCLEdBQUcsRUFBakMsQ0FEb0MsQ0FHcEM7UUFDQTtRQUVBOztRQUNBLE1BQU1DLGlCQUFpQixHQUFHbkMsWUFBWSxDQUFDaEIsS0FBYixDQUFtQm9ELFFBQW5CLENBQTRCLEdBQTVCLENBQTFCO1FBQ0EsSUFBSUMsZUFBSjs7UUFDQSxJQUFJRixpQkFBSixFQUF1QjtVQUNuQjtVQUNBRSxlQUFlLEdBQUdyQyxZQUFZLENBQUNoQixLQUFiLENBQW1Cc0QsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJ2QixNQUE5QixLQUF5QyxDQUEzRDs7VUFDQSxJQUFJc0IsZUFBSixFQUFxQjtZQUNqQjtZQUNBLElBQUlyQyxZQUFZLENBQUNoQixLQUFiLENBQW1CK0IsTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7Y0FDakNtQiw4QkFBOEIsQ0FBQ0ssSUFBL0IsQ0FBb0MsNENBQXBDO1lBQ0gsQ0FGRCxNQUVPO2NBQUU7Y0FDTCxJQUFJdkMsWUFBWSxDQUFDaEIsS0FBYixDQUFtQndELFVBQW5CLENBQThCLEdBQTlCLENBQUosRUFBd0M7Z0JBQ3BDTiw4QkFBOEIsQ0FBQ0ssSUFBL0IsQ0FBb0MsaUNBQXBDO2NBQ0gsQ0FGRCxNQUVPLElBQUl2QyxZQUFZLENBQUNoQixLQUFiLENBQW1CeUQsUUFBbkIsQ0FBNEIsR0FBNUIsQ0FBSixFQUFzQztnQkFDekNQLDhCQUE4QixDQUFDSyxJQUEvQixDQUFvQywrQkFBcEM7Y0FDSCxDQUZNLE1BRUEsQ0FBRTtnQkFDTDtjQUNIO1lBQ0o7VUFDSixDQWJELE1BYU87WUFBRTtZQUNMTCw4QkFBOEIsQ0FBQ0ssSUFBL0IsQ0FBb0MsaUNBQXBDO1VBQ0g7UUFDSixDQW5CRCxNQW1CTztVQUFFO1VBQ0xMLDhCQUE4QixDQUFDSyxJQUEvQixDQUFvQyw2QkFBcEM7UUFDSCxDQTlCbUMsQ0FnQ3BDOzs7UUFDQSxJQUFJdkMsWUFBWSxDQUFDaEIsS0FBYixDQUFtQm9ELFFBQW5CLENBQTRCLEdBQTVCLENBQUosRUFBc0M7VUFDbEM7VUFDQSxJQUFJQyxlQUFlLElBQUksTUFBTUssSUFBTixDQUFXMUMsWUFBWSxDQUFDaEIsS0FBeEIsQ0FBdkIsRUFBdUQ7WUFDbkRrRCw4QkFBOEIsQ0FBQ0ssSUFBL0IsQ0FBb0MsNkNBQXBDO1VBQ0gsQ0FKaUMsQ0FLbEM7OztVQUNBLElBQUl2QyxZQUFZLENBQUNoQixLQUFiLENBQW1CeUQsUUFBbkIsQ0FBNEIsR0FBNUIsQ0FBSixFQUFzQztZQUNsQ1AsOEJBQThCLENBQUNLLElBQS9CLENBQW9DLCtCQUFwQztVQUNIO1FBQ0osQ0ExQ21DLENBNENwQzs7O1FBQ0EsSUFBSUwsOEJBQThCLENBQUNuQixNQUFuQyxFQUEyQztVQUN2Q2tCLGlCQUFpQixDQUFDTSxJQUFsQixDQUF1QkksS0FBdkIsQ0FBNkJWLGlCQUE3QixFQUFnREMsOEJBQWhEO1FBQ0gsQ0FGRCxNQUVPO1VBQ0hELGlCQUFpQixDQUFDTSxJQUFsQixDQUF1QixxQ0FBdkI7UUFDSDtNQUNKOztNQUVELE9BQU87UUFDSDlCLEtBQUssRUFBRXdCLGlCQUFpQixDQUFDbEIsTUFBbEIsSUFBNEIsQ0FEaEM7UUFFSEQsYUFBYSxFQUFFbUI7TUFGWixDQUFQO0lBSUg7O0lBRURXLHVCQUF1QixDQUFDNUMsWUFBRCxFQUFlO01BQ2xDLElBQUlpQyxpQkFBaUIsR0FBRyxFQUF4QjtNQUNBLElBQUlDLDhCQUFKOztNQUVBLElBQUlsQyxZQUFZLENBQUNRLFFBQWIsQ0FBc0JjLGVBQTFCLEVBQTJDO1FBQ3ZDWSw4QkFBOEIsR0FBRyxFQUFqQyxDQUR1QyxDQUd2QztRQUNBO1FBQ0E7UUFFQTs7UUFDQSxJQUFJLFlBQVlRLElBQVosQ0FBaUIxQyxZQUFZLENBQUNoQixLQUE5QixDQUFKLEVBQTBDO1VBQ3RDa0QsOEJBQThCLENBQUNLLElBQS9CLENBQW9DLGdFQUFwQztRQUNILENBRkQsTUFFTztVQUFFO1VBQ0w7VUFDQSxJQUFJLG1CQUFtQkcsSUFBbkIsQ0FBd0IxQyxZQUFZLENBQUNoQixLQUFyQyxDQUFKLEVBQWlEO1lBQzdDa0QsOEJBQThCLENBQUNLLElBQS9CLENBQW9DLGlFQUFwQztVQUNILENBRkQsTUFFTztZQUFFO1lBQ0w7WUFDQSxNQUFNTSxVQUFVLEdBQUc3QyxZQUFZLENBQUNoQixLQUFiLENBQW1COEQsS0FBbkIsQ0FBeUIsd0JBQXpCLENBQW5CO1VBQ0g7UUFDSjs7UUFFRCxJQUFJWiw4QkFBOEIsQ0FBQ25CLE1BQW5DLEVBQTJDO1VBQ3ZDa0IsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCSSxLQUF2QixDQUE2QlYsaUJBQTdCLEVBQWdEQyw4QkFBaEQ7UUFDSCxDQUZELE1BRU87VUFDSEQsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLHNGQUF2QjtRQUNIO01BQ0o7O01BRUQsT0FBTztRQUNIOUIsS0FBSyxFQUFFd0IsaUJBQWlCLENBQUNsQixNQUFsQixJQUE0QixDQURoQztRQUVIRCxhQUFhLEVBQUVtQjtNQUZaLENBQVA7SUFJSDs7SUFFRGMsd0JBQXdCLENBQUMvQyxZQUFELEVBQWU7TUFDbkM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDWTtNQUNBLE1BQU1nRCxXQUFXLEdBQUcsRUFBcEI7TUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxFQUExQixDQVZtQyxDQVluQzs7TUFDQUQsV0FBVyxDQUFDRSxRQUFaLEdBQXVCbEQsWUFBWSxDQUFDaEIsS0FBYixDQUFtQitCLE1BQW5CLElBQTZCLENBQXBEOztNQUNBLElBQUksQ0FBQ2lDLFdBQVcsQ0FBQ0UsUUFBakIsRUFBMkI7UUFDdkJELGlCQUFpQixDQUFDVixJQUFsQixDQUF1QixpQ0FBdkI7TUFDSCxDQWhCa0MsQ0FrQm5DOzs7TUFDQVMsV0FBVyxDQUFDRyxlQUFaLEdBQThCLFFBQVFULElBQVIsQ0FBYTFDLFlBQVksQ0FBQ2hCLEtBQTFCLENBQTlCOztNQUNBLElBQUksQ0FBQ2dFLFdBQVcsQ0FBQ0csZUFBakIsRUFBa0M7UUFDOUJGLGlCQUFpQixDQUFDVixJQUFsQixDQUF1QiwwQ0FBdkI7TUFDSCxDQXRCa0MsQ0F3Qm5DOzs7TUFDQVMsV0FBVyxDQUFDSSxlQUFaLEdBQThCLFFBQVFWLElBQVIsQ0FBYTFDLFlBQVksQ0FBQ2hCLEtBQTFCLENBQTlCOztNQUNBLElBQUksQ0FBQ2dFLFdBQVcsQ0FBQ0ksZUFBakIsRUFBa0M7UUFDOUJILGlCQUFpQixDQUFDVixJQUFsQixDQUF1QiwwQ0FBdkI7TUFDSCxDQTVCa0MsQ0E4Qm5DOzs7TUFDQVMsV0FBVyxDQUFDSyxNQUFaLEdBQXFCLFFBQVFYLElBQVIsQ0FBYTFDLFlBQVksQ0FBQ2hCLEtBQTFCLENBQXJCOztNQUNBLElBQUksQ0FBQ2dFLFdBQVcsQ0FBQ0ssTUFBakIsRUFBeUI7UUFDckJKLGlCQUFpQixDQUFDVixJQUFsQixDQUF1QixnQ0FBdkI7TUFDSCxDQWxDa0MsQ0FvQ25DOzs7TUFDQVMsV0FBVyxDQUFDTSxXQUFaLEdBQTBCLHVDQUF1Q1osSUFBdkMsQ0FBNEMxQyxZQUFZLENBQUNoQixLQUF6RCxDQUExQjs7TUFDQSxJQUFJLENBQUNnRSxXQUFXLENBQUNNLFdBQWpCLEVBQThCO1FBQzFCTCxpQkFBaUIsQ0FBQ1YsSUFBbEIsQ0FBdUIsMkNBQXZCO01BQ0g7O01BRUQsSUFBSVUsaUJBQWlCLENBQUNsQyxNQUF0QixFQUE4QjtRQUMxQmYsWUFBWSxDQUFDaUIsaUJBQWIsQ0FBK0IsU0FBL0I7TUFDSCxDQUZELE1BRU87UUFDSGpCLFlBQVksQ0FBQ2lCLGlCQUFiLENBQStCLEVBQS9CO01BQ0g7O01BRUQsS0FBS3NDLG1DQUFMLENBQXlDUCxXQUF6QztNQUVBLE9BQU87UUFDSHZDLEtBQUssRUFBRXdDLGlCQUFpQixDQUFDbEMsTUFBbEIsSUFBNEIsQ0FEaEM7UUFFSEQsYUFBYSxFQUFFO01BRlosQ0FBUDtJQUlIOztJQUVEMEMsb0NBQW9DLENBQUNDLDJCQUFELEVBQThCQyxvQkFBOUIsRUFBb0Q7TUFDcEYsSUFBSXpCLGlCQUFpQixHQUFHLEVBQXhCOztNQUVBLElBQUl3QiwyQkFBMkIsQ0FBQ3pFLEtBQTVCLEtBQXNDMEUsb0JBQW9CLENBQUMxRSxLQUEvRCxFQUFzRTtRQUNsRWlELGlCQUFpQixDQUFDTSxJQUFsQixDQUF1Qix5QkFBdkI7TUFDSDs7TUFFRCxPQUFPO1FBQ0g5QixLQUFLLEVBQUV3QixpQkFBaUIsQ0FBQ2xCLE1BQWxCLElBQTRCLENBRGhDO1FBRUhELGFBQWEsRUFBRW1CO01BRlosQ0FBUDtJQUlIO0lBRUQ7QUFDUjtBQUNBO0FBQ0E7OztJQUNRc0IsbUNBQW1DLENBQUNJLGFBQUQsRUFBZ0I7TUFDL0M7TUFDQSxJQUFJLENBQUMsS0FBS0MsNkJBQVYsRUFBeUM7TUFFekMsTUFBTUMsc0JBQXNCLEdBQUcsS0FBS0QsNkJBQUwsQ0FBbUNFLGdCQUFuQyxDQUFvRCwrQkFBcEQsQ0FBL0I7TUFFQUQsc0JBQXNCLENBQUN4RSxPQUF2QixDQUErQlIsT0FBTyxJQUFJO1FBQ3RDLElBQUk4RSxhQUFhLENBQUM5RSxPQUFPLENBQUNrRixPQUFSLENBQWdCQyxhQUFqQixDQUFqQixFQUFrRDtVQUM5Q25GLE9BQU8sQ0FBQ29GLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE9BQXRCO1FBQ0gsQ0FGRCxNQUVPO1VBQ0hyRixPQUFPLENBQUNvRixTQUFSLENBQWtCOUMsTUFBbEIsQ0FBeUIsT0FBekI7UUFDSDtNQUNKLENBTkQ7SUFPSDs7SUFFRGpCLElBQUksR0FBRztNQUNIO01BQ0EsS0FBSzBELDZCQUFMLEdBQXFDOUUsUUFBUSxDQUFDcUYsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBckMsQ0FGRyxDQUlIOztNQUNBLE1BQU1DLFlBQVksR0FBRyxLQUFLdkYsT0FBTCxDQUFha0IsYUFBYixDQUEyQixvQkFBM0IsQ0FBckI7O01BQ0EsSUFBSXFFLFlBQUosRUFBa0I7UUFDZCxJQUFJNUUsU0FBSixDQUNJNEUsWUFESixFQUVJO1VBQ0k7VUFDQXhDLFlBQVksRUFBRTtRQUZsQixDQUZKLEVBTUksS0FBS0kscUJBQUwsQ0FBMkIzQixJQUEzQixDQUFnQyxJQUFoQyxDQU5KO01BUUgsQ0FmRSxDQWlCSDs7O01BQ0EsTUFBTWdFLGNBQWMsR0FBRyxLQUFLeEYsT0FBTCxDQUFha0IsYUFBYixDQUEyQixzQkFBM0IsQ0FBdkI7O01BQ0EsSUFBSXNFLGNBQUosRUFBb0I7UUFDaEIsSUFBSTdFLFNBQUosQ0FDSTZFLGNBREosRUFFSTtVQUNJMUMsWUFBWSxFQUFFLCtCQURsQjtVQUVJQyxZQUFZLEVBQUUsbUJBRmxCO1VBR0lMLE9BQU8sRUFBRTtRQUhiLENBRko7TUFRSCxDQTVCRSxDQThCSDs7O01BQ0EsTUFBTStDLGNBQWMsR0FBRyxLQUFLekYsT0FBTCxDQUFha0IsYUFBYixDQUEyQixzQkFBM0IsQ0FBdkI7O01BQ0EsSUFBSXVFLGNBQUosRUFBb0I7UUFDaEIsSUFBSTlFLFNBQUosQ0FDSThFLGNBREosRUFFSTtVQUNJO1VBQ0ExQyxZQUFZLEVBQUU7UUFGbEIsQ0FGSixFQU1JLEtBQUtnQix1QkFBTCxDQUE2QnZDLElBQTdCLENBQWtDLElBQWxDLENBTko7TUFRSCxDQXpDRSxDQTJDSDs7O01BQ0EsTUFBTWtFLGVBQWUsR0FBRyxLQUFLMUYsT0FBTCxDQUFha0IsYUFBYixDQUEyQix1QkFBM0IsQ0FBeEI7O01BQ0EsSUFBSXdFLGVBQUosRUFBcUI7UUFDakIsSUFBSS9FLFNBQUosQ0FDSStFLGVBREosRUFFSSxFQUZKLEVBR0ksS0FBS3hCLHdCQUFMLENBQThCMUMsSUFBOUIsQ0FBbUMsSUFBbkMsQ0FISjtNQUtILENBbkRFLENBcURIOzs7TUFDQSxNQUFNbUUsc0JBQXNCLEdBQUcsS0FBSzNGLE9BQUwsQ0FBYWtCLGFBQWIsQ0FBMkIsK0JBQTNCLENBQS9COztNQUNBLElBQUl5RSxzQkFBSixFQUE0QjtRQUN4QixJQUFJaEYsU0FBSixDQUNJZ0Ysc0JBREosRUFFSTtVQUNJO1VBQ0E1QyxZQUFZLEVBQUU7UUFGbEIsQ0FGSixFQU1LNkIsMkJBQUQsSUFBaUM7VUFDN0IsT0FBTyxLQUFLRCxvQ0FBTCxDQUNIQywyQkFERyxFQUVILEtBQUs1RSxPQUFMLENBQWFrQixhQUFiLENBQTJCLHdCQUEzQixDQUZHLENBQVA7UUFJSCxDQVhMO01BYUg7SUFDSjs7RUF4UVk7O0VBMlFqQixJQUFJK0IsVUFBSixDQUFlaEQsUUFBUSxDQUFDcUYsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0gsQ0FwVkQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vc3JjL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWZvcm0tdmFsaWRhdGlvbi13aXRoLWphdmFzY3JpcHQvLi9zcmMvbWV5ZXJSZXNldC5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vc3JjL21leWVyUmVzZXQuc2Nzcz82NGQwIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWZvcm0tdmFsaWRhdGlvbi13aXRoLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWZvcm0tdmFsaWRhdGlvbi13aXRoLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWZvcm0tdmFsaWRhdGlvbi13aXRoLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWZvcm0tdmFsaWRhdGlvbi13aXRoLWphdmFzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1mb3JtLXZhbGlkYXRpb24td2l0aC1qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZm9ybS12YWxpZGF0aW9uLXdpdGgtamF2YXNjcmlwdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT1VOVFJJRVMgPSBbXHJcbiAgICBcIkFmZ2hhbmlzdGFuXCIsXHJcbiAgICBcIkFsYmFuaWFcIixcclxuICAgIFwiQWxnZXJpYVwiLFxyXG4gICAgXCJBbmRvcnJhXCIsXHJcbiAgICBcIkFuZ29sYVwiLFxyXG4gICAgXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXHJcbiAgICBcIkFyZ2VudGluYVwiLFxyXG4gICAgXCJBcm1lbmlhXCIsXHJcbiAgICBcIkF1c3RyYWxpYVwiLFxyXG4gICAgXCJBdXN0cmlhXCIsXHJcbiAgICBcIkF6ZXJiYWlqYW5cIixcclxuICAgIFwiQmFoYW1hc1wiLFxyXG4gICAgXCJCYWhyYWluXCIsXHJcbiAgICBcIkJhbmdsYWRlc2hcIixcclxuICAgIFwiQmFyYmFkb3NcIixcclxuICAgIFwiQmVsYXJ1c1wiLFxyXG4gICAgXCJCZWxnaXVtXCIsXHJcbiAgICBcIkJlbGl6ZVwiLFxyXG4gICAgXCJCZW5pblwiLFxyXG4gICAgXCJCaHV0YW5cIixcclxuICAgIFwiQm9saXZpYVwiLFxyXG4gICAgXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXHJcbiAgICBcIkJvdHN3YW5hXCIsXHJcbiAgICBcIkJyYXppbFwiLFxyXG4gICAgXCJCcnVuZWkgXCIsXHJcbiAgICBcIkJ1bGdhcmlhXCIsXHJcbiAgICBcIkJ1cmtpbmEgRmFzb1wiLFxyXG4gICAgXCJCdXJ1bmRpXCIsXHJcbiAgICBcIkPDtHRlIGQnSXZvaXJlXCIsXHJcbiAgICBcIkNhYm8gVmVyZGVcIixcclxuICAgIFwiQ2FtYm9kaWFcIixcclxuICAgIFwiQ2FtZXJvb25cIixcclxuICAgIFwiQ2FuYWRhXCIsXHJcbiAgICBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLFxyXG4gICAgXCJDaGFkXCIsXHJcbiAgICBcIkNoaWxlXCIsXHJcbiAgICBcIkNoaW5hXCIsXHJcbiAgICBcIkNvbG9tYmlhXCIsXHJcbiAgICBcIkNvbW9yb3NcIixcclxuICAgIFwiQ29uZ28gKENvbmdvLUJyYXp6YXZpbGxlKVwiLFxyXG4gICAgXCJDb3N0YSBSaWNhXCIsXHJcbiAgICBcIkNyb2F0aWFcIixcclxuICAgIFwiQ3ViYVwiLFxyXG4gICAgXCJDeXBydXNcIixcclxuICAgIFwiQ3plY2hpYSAoQ3plY2ggUmVwdWJsaWMpXCIsXHJcbiAgICBcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsXHJcbiAgICBcIkRlbm1hcmtcIixcclxuICAgIFwiRGppYm91dGlcIixcclxuICAgIFwiRG9taW5pY2FcIixcclxuICAgIFwiRG9taW5pY2FuIFJlcHVibGljXCIsXHJcbiAgICBcIkVjdWFkb3JcIixcclxuICAgIFwiRWd5cHRcIixcclxuICAgIFwiRWwgU2FsdmFkb3JcIixcclxuICAgIFwiRXF1YXRvcmlhbCBHdWluZWFcIixcclxuICAgIFwiRXJpdHJlYVwiLFxyXG4gICAgXCJFc3RvbmlhXCIsXHJcbiAgICBcIkVzd2F0aW5pIChmbXIuIFxcXCJTd2F6aWxhbmRcXFwiKVwiLFxyXG4gICAgXCJFdGhpb3BpYVwiLFxyXG4gICAgXCJGaWppXCIsXHJcbiAgICBcIkZpbmxhbmRcIixcclxuICAgIFwiRnJhbmNlXCIsXHJcbiAgICBcIkdhYm9uXCIsXHJcbiAgICBcIkdhbWJpYVwiLFxyXG4gICAgXCJHZW9yZ2lhXCIsXHJcbiAgICBcIkdlcm1hbnlcIixcclxuICAgIFwiR2hhbmFcIixcclxuICAgIFwiR3JlZWNlXCIsXHJcbiAgICBcIkdyZW5hZGFcIixcclxuICAgIFwiR3VhdGVtYWxhXCIsXHJcbiAgICBcIkd1aW5lYVwiLFxyXG4gICAgXCJHdWluZWEtQmlzc2F1XCIsXHJcbiAgICBcIkd1eWFuYVwiLFxyXG4gICAgXCJIYWl0aVwiLFxyXG4gICAgXCJIb2x5IFNlZVwiLFxyXG4gICAgXCJIb25kdXJhc1wiLFxyXG4gICAgXCJIdW5nYXJ5XCIsXHJcbiAgICBcIkljZWxhbmRcIixcclxuICAgIFwiSW5kaWFcIixcclxuICAgIFwiSW5kb25lc2lhXCIsXHJcbiAgICBcIklyYW5cIixcclxuICAgIFwiSXJhcVwiLFxyXG4gICAgXCJJcmVsYW5kXCIsXHJcbiAgICBcIklzcmFlbFwiLFxyXG4gICAgXCJJdGFseVwiLFxyXG4gICAgXCJKYW1haWNhXCIsXHJcbiAgICBcIkphcGFuXCIsXHJcbiAgICBcIkpvcmRhblwiLFxyXG4gICAgXCJLYXpha2hzdGFuXCIsXHJcbiAgICBcIktlbnlhXCIsXHJcbiAgICBcIktpcmliYXRpXCIsXHJcbiAgICBcIkt1d2FpdFwiLFxyXG4gICAgXCJLeXJneXpzdGFuXCIsXHJcbiAgICBcIkxhb3NcIixcclxuICAgIFwiTGF0dmlhXCIsXHJcbiAgICBcIkxlYmFub25cIixcclxuICAgIFwiTGVzb3Rob1wiLFxyXG4gICAgXCJMaWJlcmlhXCIsXHJcbiAgICBcIkxpYnlhXCIsXHJcbiAgICBcIkxpZWNodGVuc3RlaW5cIixcclxuICAgIFwiTGl0aHVhbmlhXCIsXHJcbiAgICBcIkx1eGVtYm91cmdcIixcclxuICAgIFwiTWFkYWdhc2NhclwiLFxyXG4gICAgXCJNYWxhd2lcIixcclxuICAgIFwiTWFsYXlzaWFcIixcclxuICAgIFwiTWFsZGl2ZXNcIixcclxuICAgIFwiTWFsaVwiLFxyXG4gICAgXCJNYWx0YVwiLFxyXG4gICAgXCJNYXJzaGFsbCBJc2xhbmRzXCIsXHJcbiAgICBcIk1hdXJpdGFuaWFcIixcclxuICAgIFwiTWF1cml0aXVzXCIsXHJcbiAgICBcIk1leGljb1wiLFxyXG4gICAgXCJNaWNyb25lc2lhXCIsXHJcbiAgICBcIk1vbGRvdmFcIixcclxuICAgIFwiTW9uYWNvXCIsXHJcbiAgICBcIk1vbmdvbGlhXCIsXHJcbiAgICBcIk1vbnRlbmVncm9cIixcclxuICAgIFwiTW9yb2Njb1wiLFxyXG4gICAgXCJNb3phbWJpcXVlXCIsXHJcbiAgICBcIk15YW5tYXIgKGZvcm1lcmx5IEJ1cm1hKVwiLFxyXG4gICAgXCJOYW1pYmlhXCIsXHJcbiAgICBcIk5hdXJ1XCIsXHJcbiAgICBcIk5lcGFsXCIsXHJcbiAgICBcIk5ldGhlcmxhbmRzXCIsXHJcbiAgICBcIk5ldyBaZWFsYW5kXCIsXHJcbiAgICBcIk5pY2FyYWd1YVwiLFxyXG4gICAgXCJOaWdlclwiLFxyXG4gICAgXCJOaWdlcmlhXCIsXHJcbiAgICBcIk5vcnRoIEtvcmVhXCIsXHJcbiAgICBcIk5vcnRoIE1hY2Vkb25pYVwiLFxyXG4gICAgXCJOb3J3YXlcIixcclxuICAgIFwiT21hblwiLFxyXG4gICAgXCJQYWtpc3RhblwiLFxyXG4gICAgXCJQYWxhdVwiLFxyXG4gICAgXCJQYWxlc3RpbmUgU3RhdGVcIixcclxuICAgIFwiUGFuYW1hXCIsXHJcbiAgICBcIlBhcHVhIE5ldyBHdWluZWFcIixcclxuICAgIFwiUGFyYWd1YXlcIixcclxuICAgIFwiUGVydVwiLFxyXG4gICAgXCJQaGlsaXBwaW5lc1wiLFxyXG4gICAgXCJQb2xhbmRcIixcclxuICAgIFwiUG9ydHVnYWxcIixcclxuICAgIFwiUWF0YXJcIixcclxuICAgIFwiUm9tYW5pYVwiLFxyXG4gICAgXCJSdXNzaWFcIixcclxuICAgIFwiUndhbmRhXCIsXHJcbiAgICBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxyXG4gICAgXCJTYWludCBMdWNpYVwiLFxyXG4gICAgXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFxyXG4gICAgXCJTYW1vYVwiLFxyXG4gICAgXCJTYW4gTWFyaW5vXCIsXHJcbiAgICBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxyXG4gICAgXCJTYXVkaSBBcmFiaWFcIixcclxuICAgIFwiU2VuZWdhbFwiLFxyXG4gICAgXCJTZXJiaWFcIixcclxuICAgIFwiU2V5Y2hlbGxlc1wiLFxyXG4gICAgXCJTaWVycmEgTGVvbmVcIixcclxuICAgIFwiU2luZ2Fwb3JlXCIsXHJcbiAgICBcIlNsb3Zha2lhXCIsXHJcbiAgICBcIlNsb3ZlbmlhXCIsXHJcbiAgICBcIlNvbG9tb24gSXNsYW5kc1wiLFxyXG4gICAgXCJTb21hbGlhXCIsXHJcbiAgICBcIlNvdXRoIEFmcmljYVwiLFxyXG4gICAgXCJTb3V0aCBLb3JlYVwiLFxyXG4gICAgXCJTb3V0aCBTdWRhblwiLFxyXG4gICAgXCJTcGFpblwiLFxyXG4gICAgXCJTcmkgTGFua2FcIixcclxuICAgIFwiU3VkYW5cIixcclxuICAgIFwiU3VyaW5hbWVcIixcclxuICAgIFwiU3dlZGVuXCIsXHJcbiAgICBcIlN3aXR6ZXJsYW5kXCIsXHJcbiAgICBcIlN5cmlhXCIsXHJcbiAgICBcIlRhamlraXN0YW5cIixcclxuICAgIFwiVGFuemFuaWFcIixcclxuICAgIFwiVGhhaWxhbmRcIixcclxuICAgIFwiVGltb3ItTGVzdGVcIixcclxuICAgIFwiVG9nb1wiLFxyXG4gICAgXCJUb25nYVwiLFxyXG4gICAgXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXHJcbiAgICBcIlR1bmlzaWFcIixcclxuICAgIFwiVHVya2V5XCIsXHJcbiAgICBcIlR1cmttZW5pc3RhblwiLFxyXG4gICAgXCJUdXZhbHVcIixcclxuICAgIFwiVWdhbmRhXCIsXHJcbiAgICBcIlVrcmFpbmVcIixcclxuICAgIFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcclxuICAgIFwiVW5pdGVkIEtpbmdkb21cIixcclxuICAgIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsXHJcbiAgICBcIlVydWd1YXlcIixcclxuICAgIFwiVXpiZWtpc3RhblwiLFxyXG4gICAgXCJWYW51YXR1XCIsXHJcbiAgICBcIlZlbmV6dWVsYVwiLFxyXG4gICAgXCJWaWV0bmFtXCIsXHJcbiAgICBcIlllbWVuXCIsXHJcbiAgICBcIlphbWJpYVwiLFxyXG4gICAgXCJaaW1iYWJ3ZVwiXHJcbl07XHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIEVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBFbGVtZW50IGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZVxyXG4gKiBAcGFyYW0gIHsuLi5Ob2RlfSBjaGlsZHJlbiAtIFZhcmlhYmxlIG51bWJlciBvZiBjaGlsZCBub2Rlc1xyXG4gKi9cclxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAvLyBQcm9wc1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hpbGRyZW4gTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZChjaGlsZCkpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZXllclJlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUV6QixnREFBQTtBQUNBOztFQUVDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFlBQVksRUFBQTs7QUFFYjs7RUFFQyxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYXNlLXdoaXRlOiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTtcXG4gIC0tYmFzZS1zdWNjZXNzOiAjMDA4MDAwO1xcbiAgLS1iYXNlLWZhaWw6ICM5MDA7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB2YXIoLS1iYXNlLWJsYWNrLCBibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlLCB3aGl0ZSk7IH1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuMnJlbTsgfVxcblxcbiNjdXN0b20tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYXNlLWJsYWNrLCBibGFjayk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMjUwcHg7IH1cXG4gICNjdXN0b20tZm9ybSA+ICoge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAjY3VzdG9tLWZvcm0gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAjY3VzdG9tLWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYmFzZS1ibGFjaywgYmxhY2spOyB9XFxuICAgICNjdXN0b20tZm9ybSBpbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAjY3VzdG9tLWZvcm0gaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2UtZmFpbCwgcmVkKTsgfVxcbiAgI2N1c3RvbS1mb3JtIC5lcnJvciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUsIHdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1mYWlsLCByZWQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgI2N1c3RvbS1mb3JtIC5lcnJvci5hY3RpdmUge1xcbiAgICBwYWRkaW5nOiAwLjNlbTsgfVxcbiAgI2N1c3RvbS1mb3JtICNwYXNzd29yZC1yZXF1aXJlZC1zdGF0ZXMgLnBhc3N3b3JkLXJlcXVpcmVkLXN0YXRlLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuICAgICNjdXN0b20tZm9ybSAjcGFzc3dvcmQtcmVxdWlyZWQtc3RhdGVzIC5wYXNzd29yZC1yZXF1aXJlZC1zdGF0ZS1pdGVtIC5wYXNzd29yZC1yZXF1aXJlZC1zdGF0ZS1pdGVtLW1lc3NhZ2Uge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgICAgI2N1c3RvbS1mb3JtICNwYXNzd29yZC1yZXF1aXJlZC1zdGF0ZXMgLnBhc3N3b3JkLXJlcXVpcmVkLXN0YXRlLWl0ZW0gLnBhc3N3b3JkLXJlcXVpcmVkLXN0YXRlLWl0ZW0tbWVzc2FnZTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICdcXFxcMjcxNSc7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTsgfVxcbiAgICAjY3VzdG9tLWZvcm0gI3Bhc3N3b3JkLXJlcXVpcmVkLXN0YXRlcyAucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbS52YWxpZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IH1cXG4gICAgICAjY3VzdG9tLWZvcm0gI3Bhc3N3b3JkLXJlcXVpcmVkLXN0YXRlcyAucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbS52YWxpZCAucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbS1tZXNzYWdlOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJ1xcXFwyNzEzJzsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLDZCQUFhO0VBQ2IsNkJBQWE7RUFDYix1QkFBZTtFQUNmLGlCQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQix3SUFBd0k7RUFDeEksaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiwwQ0FBMEMsRUFBQTs7QUFHOUM7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMENBQTBDO0VBQzFDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtFQVRwQjtJQVlRLFVBQVUsRUFBQTtFQVpsQjtJQWdCUSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFqQjlCO0lBdUJZLDJDQUEyQyxFQUFBO0lBdkJ2RDtNQTBCZ0IsYUFBYSxFQUFBO0VBMUI3QjtJQStCWSx1Q0FBdUMsRUFBQTtFQS9CbkQ7SUFvQ1EsV0FBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2QywwQkFBMkI7SUFDM0Isc0JBQXNCLEVBQUE7RUExQzlCO0lBOENRLGNBQWMsRUFBQTtFQTlDdEI7SUFtRFksb0JBQW9CO0lBQ3BCLHFCQUFxQixFQUFBO0lBcERqQztNQXVEZ0IsY0FBYyxFQUFBO01BdkQ5QjtRQTBEb0IsZ0JBQWdCO1FBQ2hCLG9CQUFvQixFQUFBO0lBM0R4QztNQWdFZ0IsdUJBQXVCLEVBQUE7TUFoRXZDO1FBcUV3QixnQkFBZ0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYmFzZS13aGl0ZTogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTtcXHJcXG4gICAgLS1iYXNlLXN1Y2Nlc3M6ICMwMDgwMDA7XFxyXFxuICAgIC0tYmFzZS1mYWlsOiAjOTAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTsgLy8gMXJlbSA9IDEwcHhcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTsgLy8gMTZweFxcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJhc2UtYmxhY2ssIGJsYWNrKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS13aGl0ZSwgd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXN0b20tZm9ybSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2UtYmxhY2ssIGJsYWNrKTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuXFxyXFxuICAgICYgPiAqIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGFiZWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJhc2UtYmxhY2ssIGJsYWNrKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmludmFsaWQge1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6aW52YWxpZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFzZS1mYWlsLCByZWQpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lcnJvciB7XFxyXFxuICAgICAgICB3aWR0aCAgOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMDsgLy8gTm9uLXplcm8gcGFkZGluZyB3b3VsZCBzaG93IHVwIHdpdGggZW1wdHkgdGV4dENvbnRlbnRcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUsIHdoaXRlKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtZmFpbCwgcmVkKTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwIDtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5lcnJvci5hY3RpdmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMC4zZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Bhc3N3b3JkLXJlcXVpcmVkLXN0YXRlcyB7XFxyXFxuICAgICAgICAucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcblxcclxcbiAgICAgICAgICAgIC5wYXNzd29yZC1yZXF1aXJlZC1zdGF0ZS1pdGVtLW1lc3NhZ2Uge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxcXDI3MTUnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi52YWxpZCB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbS1tZXNzYWdlIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcXFwyNzEzJztcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuaW1wb3J0ICcuL21leWVyUmVzZXQuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7IENPVU5UUklFUyB9IGZyb20gJy4vY291bnRyaWVzLmpzJztcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIGNsYXNzIEZvcm1JbnB1dCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobGFiZWxFbGVtZW50LCBlcnJvcnMgPSBGb3JtSW5wdXQuZGVmYXVsdEVycm9ycywgY3VzdG9tRXJyb3JIYW5kbGVyID0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVGl0bGVFbGVtZW50ID0gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC10aXRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudCA9IGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yRWxlbWVudCA9IGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXN0b21FcnJvckhhbmRsZXIgPSBjdXN0b21FcnJvckhhbmRsZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBkZWZhdWx0RXJyb3JzID0ge1xyXG4gICAgICAgICAgICBwYXR0ZXJuTWlzbWF0Y2g6ICdXcm9uZyBwYXR0ZXJuIScsXHJcbiAgICAgICAgICAgIHRvb0xvbmc6ICdUb28gbG9uZyEnLFxyXG4gICAgICAgICAgICB0b29TaG9ydDogJ1RvbyBzaG9ydCEnLFxyXG4gICAgICAgICAgICByYW5nZU92ZXJmbG93OiAnTnVtYmVyIG11c3QgYmUgbG93ZXIhJyxcclxuICAgICAgICAgICAgcmFuZ2VVbmRlcmZsb3c6ICdOdW1iZXIgbXVzdCBiZSBoaWdoZXIhJyxcclxuICAgICAgICAgICAgdHlwZU1pc21hdGNoOiAnV3JvbmcgdHlwZSEnLFxyXG4gICAgICAgICAgICB2YWx1ZU1pc3Npbmc6ICdWYWx1ZSByZXF1aXJlZCEnLFxyXG4gICAgICAgICAgICBiYWRJbnB1dDogJ0JhZCBpbnB1dCEnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGVja1ZhbGlkaXR5LmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoZWNrVmFsaWRpdHkoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnZhbGlkU3RhdGVBcnIgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkT2JqID0ge307XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBZGQgaW52YWxpZCBzdGF0ZSBtZXNzYWdlcyBmcm9tIHRoaXMuZXJyb3JzIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRTdGF0ZUFyciA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZXJyb3JzKSAvLyBHZXQgW2tleSwgdmFsdWVdIHBhaXJzIG9mIEVSUk9SUyBpbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZW50cnkgPT4gdGhpcy5pbnB1dEVsZW1lbnQudmFsaWRpdHlbZW50cnlbMF1dKSAvLyBGaWx0ZXIgYnkgaW52YWxpZCBlcnJvcnMgZnJvbSBpbnB1dCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeVsxXSkgLy8gTWFwIHRvIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzIHRvIGRpc3BsYXlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGludmFsaWQgc3RhdGUgbWVzc2FnZXMgZnJvbSBjdXN0b20gZXJyb3IgaGFuZGxlciBtZXRob2RcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tRXJyb3JIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZE9iaiA9IHRoaXMuY3VzdG9tRXJyb3JIYW5kbGVyKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRPYmoudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkU3RhdGVBcnIgPSBpbnZhbGlkU3RhdGVBcnIuY29uY2F0KHZhbGlkT2JqLmludmFsaWRNc2dBcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaW5wdXQgZWxlbWVudCB2YWxpZCBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAoaW52YWxpZFN0YXRlQXJyLmxlbmd0aCB8fCAodmFsaWRPYmouaGFzT3duUHJvcGVydHkoJ3ZhbGlkJykgJiYgIXZhbGlkT2JqLnZhbGlkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ2ludmFsaWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgZXJyb3IgbWVzc2FnZXMsIGlmIGFueVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5lcnJvckVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5L2hpZGUgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAgICAgaWYgKGludmFsaWRTdGF0ZUFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3JcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbGVtZW50LmFwcGVuZCguLi5pbnZhbGlkU3RhdGVBcnIubWFwKGludmFsaWRTdGF0ZSA9PiBjcmVhdGVFbGVtZW50KCdwJywge30sIGludmFsaWRTdGF0ZSkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9ICdlcnJvciBhY3RpdmUnO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBFbHNlIE5PIGludmFsaWQgbWVzc2FnZXMgdG8gZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBlcnJvclxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBDdXN0b21Gb3JtIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihmb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlRW1haWxWYWxpZGF0aW9uKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0TWVzc2FnZXNBcnIgPSBbXTtcclxuICAgICAgICAgICAgbGV0IG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRNZXNzYWdlc1BlclZhbGlkaXR5U3RhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWYWxpZCBjaGFyYWN0ZXIgc2VxdWVuY2U6IGNoYXJhY3RlciBmb2xsb3dlZCBieSAnQCcgc3ltYm9sIGZvbGxvd2VkIGJ5IGFub3RoZXIgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAvLyB4QHkgb3IgeEB5LnpcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiAnQCcgc3ltYm9sIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJJbmNsdWRlc0F0U3ltYm9sID0gaW5wdXRFbGVtZW50LnZhbHVlLmluY2x1ZGVzKCdAJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYlNpbmdsZUF0U3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJJbmNsdWRlc0F0U3ltYm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbW9yZSB0aGFuIG9uZSAnQCcgc3ltYm9sIChpZiByZWFjaCBoZXJlLCBndWFyYW50ZWVkIHRvIGhhdmUgYXQgbGVhc3Qgb25lICdAJyBzeW1ib2wpXHJcbiAgICAgICAgICAgICAgICAgICAgYlNpbmdsZUF0U3ltYm9sID0gaW5wdXRFbGVtZW50LnZhbHVlLnNwbGl0KCdAJykubGVuZ3RoID09PSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiU2luZ2xlQXRTeW1ib2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaXMganVzdCAnQCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZS5wdXNoKCdNdXN0IGluY2x1ZGUgbW9yZSB0aGFuIGp1c3QgYW4gXCJAXCIgc3ltYm9sIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBFbHNlIGluY2x1ZGVzICdAJyBzeW1ib2wgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsdWUuc3RhcnRzV2l0aCgnQCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlLnB1c2goJ011c3QgTk9UIHN0YXJ0IHdpdGggXCJAXCIgc3ltYm9sIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dEVsZW1lbnQudmFsdWUuZW5kc1dpdGgoJ0AnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZS5wdXNoKCdNdXN0IE5PVCBlbmQgd2l0aCBcIkBcIiBzeW1ib2whJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBFbHNlICdAJyBzeW1ib2wgaXMgc2FuZHdpY2hlZCBvbiBlaXRoZXIgc2lkZSBieSBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKCdFbWFpbCBzaG91bGQgYmUgdmFsaWQgaWYgcmVhY2ggaGVyZSEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEVsc2UgbXVsdGlwbGUgaW5zdGFuY2VzIG9mICdAJyBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlLnB1c2goJ011c3QgaW5jbHVkZSBvbmx5IDEgXCJAXCIgc3ltYm9sIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEVsc2UgJ0AnIHN5bWJvbCBpcyBOT1QgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZS5wdXNoKCdNdXN0IGluY2x1ZGUgYW4gXCJAXCIgc3ltYm9sIScpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiAnLicgaXMgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsaWQgY2hhcmFjdGVycyBiZWZvcmUgKCdAJyBjYW5ub3QgYmUgYmVmb3JlICcuJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYlNpbmdsZUF0U3ltYm9sICYmIC9AXFwuLy50ZXN0KGlucHV0RWxlbWVudC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlLnB1c2goJ011c3Qgbm90IGZvbGxvdyBcIkBcIiBzeW1ib2wgd2l0aCBcIi5cIiBzeW1ib2whJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbGlkIGNoYXJhY3RlcnMgYWZ0ZXIgKGFueSBjaGFyYWN0ZXJzIGFmdGVyIGFyZSB2YWxpZCBidXQgbXVzdCBOT1QgZW5kIHdpdGggJy4nIHN5bWJvbClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50LnZhbHVlLmVuZHNXaXRoKCcuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlLnB1c2goJ011c3QgTk9UIGVuZCB3aXRoIFwiLlwiIHN5bWJvbCEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgTk8gY3VzdG9tIGVycm9yIG1lc3NhZ2VzIGFkZGVkLCB1c2UgZ2VuZXJpYyBtZXNzYWdlIHJlbGF0ZWQgdG8gdmFsaWRpdHkgc3RhdGVcclxuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRNZXNzYWdlc1BlclZhbGlkaXR5U3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNBcnIucHVzaC5hcHBseShvdXRwdXRNZXNzYWdlc0Fyciwgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZXNBcnIucHVzaCgnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MgdHlwZSEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBvdXRwdXRNZXNzYWdlc0Fyci5sZW5ndGggPT0gMCxcclxuICAgICAgICAgICAgICAgIGludmFsaWRNc2dBcnI6IG91dHB1dE1lc3NhZ2VzQXJyLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlWmlwQ29kZVZhbGlkYXRpb24oaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXRNZXNzYWdlc0FyciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFZhbGlkIGNoYXJhY3RlciBzZXF1ZW5jZTogXHJcbiAgICAgICAgICAgICAgICAvLyBSZWdleDogXihbMC05XXs1fSlbLVxcc10/KFswLTldezR9fCkkXHJcbiAgICAgICAgICAgICAgICAvLyA1IGRpZ2l0cyBmb2xsb3dlZCBieSBvcHRpb25hbCBzcGFjZSBvciBoeXBoZW4gZm9sbG93ZWQgYnkgb3B0aW9uYWwgNCBkaWdpdHNcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhbnkgbm9uLXZhbGlkIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQgKHZhbGlkIGNoYXJhY3RlcnM6IDAtOSwgLSwgXFxzKVxyXG4gICAgICAgICAgICAgICAgaWYgKC9bXjAtOVxccy1dLy50ZXN0KGlucHV0RWxlbWVudC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRNZXNzYWdlc1BlclZhbGlkaXR5U3RhdGUucHVzaCgnTXVzdCBiZSBudW1iZXJlZCBkaWdpdHMgc2VwYXJhdGVkIGJ5IG9wdGlvbmFsIHNwYWNlIG9yIGh5cGhlbiEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEVsc2UgYWxsIGNoYXJhY3RlcnMgYXJlIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG1vcmUgdGhhbiBvbmUgc2VwYXJhdGluZyBjaGFyYWN0ZXIgKGRhc2ggb3Igc3BhY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9bXFxzLV1bMC05XSpbXFxzLV0vLnRlc3QoaW5wdXRFbGVtZW50LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRNZXNzYWdlc1BlclZhbGlkaXR5U3RhdGUucHVzaCgnTXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMSBzZXBhcmF0aW5nIGNoYXJhY3RlciAoZGFzaCBvciBzcGFjZSkhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gRWxzZSBvbmx5IG9uZSBzZXBhcmF0aW5nIGNoYXJhY3RlciAoZGFzaCBvciBzcGFjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHR3byBzZXBhcmF0ZSBzZWN0aW9ucyBvZiBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlnaXRNYXRjaCA9IGlucHV0RWxlbWVudC52YWx1ZS5tYXRjaCgvKFswLTldKilbXFxzLV0/KFswLTldKikvKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dE1lc3NhZ2VzUGVyVmFsaWRpdHlTdGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRNZXNzYWdlc0Fyci5wdXNoLmFwcGx5KG91dHB1dE1lc3NhZ2VzQXJyLCBvdXRwdXRNZXNzYWdlc1BlclZhbGlkaXR5U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRNZXNzYWdlc0Fyci5wdXNoKCdNdXN0IGJlIDUgZGlnaXRzIGZvbGxvd2VkIGJ5IG9wdGlvbmFsIHNwYWNlIG9yIGh5cGhlbiBmb2xsb3dlZCBieSBvcHRpb25hbCA0IGRpZ2l0cyEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBvdXRwdXRNZXNzYWdlc0Fyci5sZW5ndGggPT0gMCxcclxuICAgICAgICAgICAgICAgIGludmFsaWRNc2dBcnI6IG91dHB1dE1lc3NhZ2VzQXJyLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlUGFzc3dvcmRWYWxpZGF0aW9uKGlucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAvKiogUGFzc3dvcmQgUmVxdWlyZW1lbnRzOlxyXG4gICAgICAgICAgICAgKiAgLSBNaW5pbXVtIDggY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgKiAgLSBBdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlclxyXG4gICAgICAgICAgICAgKiAgLSBBdCBsZWFzdCBvbmUgbG93ZXJjYXNlIGxldHRlclxyXG4gICAgICAgICAgICAgKiAgLSBBdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICogIC0gQXQgbGVhc3Qgb25lIG51bWJlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gT2JqZWN0IHRvIGhvbGQgYm9vbGVhbiB2YWx1ZSBmb3IgZWFjaCBwYXNzd29yZCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlQXJyID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyBNaW5pbXVtIDggY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9ucy5taW5DaGFycyA9IGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGggPj0gODtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9ucy5taW5DaGFycykge1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZE1lc3NhZ2VBcnIucHVzaCgnTXVzdCBoYXZlIG1pbmltdW0gOCBjaGFyYWN0ZXJzIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlclxyXG4gICAgICAgICAgICB2YWxpZGF0aW9ucy51cHBlcmNhc2VMZXR0ZXIgPSAvW0EtWl0vLnRlc3QoaW5wdXRFbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9ucy51cHBlcmNhc2VMZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGludmFsaWRNZXNzYWdlQXJyLnB1c2goJ011c3QgaGF2ZSBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXJcclxuICAgICAgICAgICAgdmFsaWRhdGlvbnMubG93ZXJjYXNlTGV0dGVyID0gL1thLXpdLy50ZXN0KGlucHV0RWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbnMubG93ZXJjYXNlTGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkTWVzc2FnZUFyci5wdXNoKCdNdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXIhJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IG9uZSBudW1iZXJcclxuICAgICAgICAgICAgdmFsaWRhdGlvbnMubnVtYmVyID0gL1swLTldLy50ZXN0KGlucHV0RWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbnMubnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkTWVzc2FnZUFyci5wdXNoKCdNdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG51bWJlciEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25zLnNwZWNpYWxDaGFyID0gL1t+YCFAIyQlXiYqKClfXFwtKz17W31cXF18XFw6O1wiJzwsPi4/L10vLnRlc3QoaW5wdXRFbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9ucy5zcGVjaWFsQ2hhcikge1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZE1lc3NhZ2VBcnIucHVzaCgnTXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3RlciEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGludmFsaWRNZXNzYWdlQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhc3N3b3JkUmVxdWlyZWRTdGF0ZXNFbGVtZW50KHZhbGlkYXRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZDogaW52YWxpZE1lc3NhZ2VBcnIubGVuZ3RoID09IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkTXNnQXJyOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZVBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdGlvbihwYXNzd29yZENvbmZpcm1JbnB1dEVsZW1lbnQsIHBhc3N3b3JkSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXRNZXNzYWdlc0FyciA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkQ29uZmlybUlucHV0RWxlbWVudC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dEVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2VzQXJyLnB1c2goJ1Bhc3N3b3JkcyBkbyBOT1QgbWF0Y2ghJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZDogb3V0cHV0TWVzc2FnZXNBcnIubGVuZ3RoID09IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkTXNnQXJyOiBvdXRwdXRNZXNzYWdlc0FycixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgZWxlbWVudCBob2xkaW5nIHBhc3N3b3JkIHJlcXVpcmVkIHN0YXRlcyBnaXZlbiBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIHdpdGggYm9vbGVhbiB2YWx1ZSBvZiBhIHN0YXRlIHZhbGlkaXR5LlxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVZhbGlkaXR5IC0gS2V5cyBhcmUgbWF0Y2hpbmcgZGF0YSBhdHRyaWJ1dGUgb2YgbWVzc2FnZSBlbGVtZW50IGFuZCB2YWx1ZXMgYXJlIGJvb2xlYW4gb2Ygd2hldGhlciBzdGF0ZSBpcyB2YWxpZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZVBhc3N3b3JkUmVxdWlyZWRTdGF0ZXNFbGVtZW50KHN0YXRlVmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGlmIE5PIGVsZW1lbnQgdG8gZGlzcGxheSByZXF1aXJlZCBzdGF0ZXNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkUmVxdWlyZWRTdGF0ZXNFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZFN0YXRlc0VsZW1lbnRzID0gdGhpcy5wYXNzd29yZFJlcXVpcmVkU3RhdGVzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc3dvcmQtcmVxdWlyZWQtc3RhdGUtaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWlyZWRTdGF0ZXNFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlVmFsaWRpdHlbZWxlbWVudC5kYXRhc2V0LnJlcXVpcmVkU3RhdGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgLy8gUGFzc3dvcmQgUmVxdWlyZWQgU3RhdGVzXHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlZFN0YXRlc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtcmVxdWlyZWQtc3RhdGVzJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbWFpbFxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZW1haWxcIl0nKTtcclxuICAgICAgICAgICAgaWYgKGVtYWlsRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmV3IEZvcm1JbnB1dChcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbEVsZW1lbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90eXBlTWlzbWF0Y2g6ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU1pc3Npbmc6ICdFbWFpbCByZXF1aXJlZCEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW1haWxWYWxpZGF0aW9uLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvdW50cnlcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiY291bnRyeVwiXScpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRyeUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBGb3JtSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeUVsZW1lbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU1pc21hdGNoOiAnTXVzdCBiZSBhIHZhbGlkIGNvdW50cnkgbmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU1pc3Npbmc6ICdDb3VudHJ5IHJlcXVpcmVkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb0xvbmc6ICdDb3VudHJ5IG5hbWUgdG9vIGxvbmchJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBaaXBjb2RlXHJcbiAgICAgICAgICAgIGNvbnN0IHppcGNvZGVFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cInppcGNvZGVcIl0nKTtcclxuICAgICAgICAgICAgaWYgKHppcGNvZGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgRm9ybUlucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgIHppcGNvZGVFbGVtZW50LCBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcGF0dGVybk1pc21hdGNoOiAnTXVzdCBiZSA1IGRpZ2l0cyBmb2xsb3dlZCBieSBvcHRpb25hbCBzcGFjZSBvciBoeXBoZW4gZm9sbG93ZWQgYnkgb3B0aW9uYWwgNCBkaWdpdHMhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVNaXNzaW5nOiAnWmlwY29kZSByZXF1aXJlZCEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlWmlwQ29kZVZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGFzc3dvcmRcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cInBhc3N3b3JkXCJdJyk7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBGb3JtSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFbGVtZW50LCBcclxuICAgICAgICAgICAgICAgICAgICB7fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZFZhbGlkYXRpb24uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGFzc3dvcmQgQ29uZmlybVxyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZENvbmZpcm1FbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cInBhc3N3b3JkLWNvbmZpcm1cIl0nKTtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkQ29uZmlybUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBGb3JtSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtRWxlbWVudCwgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3BhdHRlcm5NaXNtYXRjaDogJ011c3QgYmUgNSBkaWdpdHMgZm9sbG93ZWQgYnkgb3B0aW9uYWwgc3BhY2Ugb3IgaHlwaGVuIGZvbGxvd2VkIGJ5IG9wdGlvbmFsIDQgZGlnaXRzIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTWlzc2luZzogJ1ppcGNvZGUgcmVxdWlyZWQhJyxcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAocGFzc3dvcmRDb25maXJtSW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybUlucHV0RWxlbWVudCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZXcgQ3VzdG9tRm9ybShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWZvcm0nKSk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbIkNPVU5UUklFUyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwicHJvcHMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImFwcGVuZCIsIkZvcm1JbnB1dCIsImNvbnN0cnVjdG9yIiwibGFiZWxFbGVtZW50IiwiZXJyb3JzIiwiZGVmYXVsdEVycm9ycyIsImN1c3RvbUVycm9ySGFuZGxlciIsImxhYmVsVGl0bGVFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RWxlbWVudCIsImVycm9yRWxlbWVudCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tWYWxpZGl0eSIsImJpbmQiLCJpbnZhbGlkU3RhdGVBcnIiLCJ2YWxpZE9iaiIsInZhbGlkaXR5IiwidmFsaWQiLCJmaWx0ZXIiLCJlbnRyeSIsIm1hcCIsImNvbmNhdCIsImludmFsaWRNc2dBcnIiLCJsZW5ndGgiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEN1c3RvbVZhbGlkaXR5IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmUiLCJpbnZhbGlkU3RhdGUiLCJjbGFzc05hbWUiLCJwYXR0ZXJuTWlzbWF0Y2giLCJ0b29Mb25nIiwidG9vU2hvcnQiLCJyYW5nZU92ZXJmbG93IiwicmFuZ2VVbmRlcmZsb3ciLCJ0eXBlTWlzbWF0Y2giLCJ2YWx1ZU1pc3NpbmciLCJiYWRJbnB1dCIsIkN1c3RvbUZvcm0iLCJmb3JtRWxlbWVudCIsImhhbmRsZUVtYWlsVmFsaWRhdGlvbiIsIm91dHB1dE1lc3NhZ2VzQXJyIiwib3V0cHV0TWVzc2FnZXNQZXJWYWxpZGl0eVN0YXRlIiwiYkluY2x1ZGVzQXRTeW1ib2wiLCJpbmNsdWRlcyIsImJTaW5nbGVBdFN5bWJvbCIsInNwbGl0IiwicHVzaCIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRlc3QiLCJhcHBseSIsImhhbmRsZVppcENvZGVWYWxpZGF0aW9uIiwiZGlnaXRNYXRjaCIsIm1hdGNoIiwiaGFuZGxlUGFzc3dvcmRWYWxpZGF0aW9uIiwidmFsaWRhdGlvbnMiLCJpbnZhbGlkTWVzc2FnZUFyciIsIm1pbkNoYXJzIiwidXBwZXJjYXNlTGV0dGVyIiwibG93ZXJjYXNlTGV0dGVyIiwibnVtYmVyIiwic3BlY2lhbENoYXIiLCJ1cGRhdGVQYXNzd29yZFJlcXVpcmVkU3RhdGVzRWxlbWVudCIsImhhbmRsZVBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdGlvbiIsInBhc3N3b3JkQ29uZmlybUlucHV0RWxlbWVudCIsInBhc3N3b3JkSW5wdXRFbGVtZW50Iiwic3RhdGVWYWxpZGl0eSIsInBhc3N3b3JkUmVxdWlyZWRTdGF0ZXNFbGVtZW50IiwicmVxdWlyZWRTdGF0ZXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhc2V0IiwicmVxdWlyZWRTdGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwiZW1haWxFbGVtZW50IiwiY291bnRyeUVsZW1lbnQiLCJ6aXBjb2RlRWxlbWVudCIsInBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkQ29uZmlybUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9