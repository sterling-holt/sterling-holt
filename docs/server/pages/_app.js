(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 63:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__ZK5Q_"
};


/***/ }),

/***/ 669:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "navbar_nav__I8nzZ"
};


/***/ }),

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/navbar/navbar.module.scss
var navbar_module = __webpack_require__(669);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./src/components/navbar/index.tsx



//  ------------------------
const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (navbar_module_default()).nav,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: "Branding"
        })
    });
};

// EXTERNAL MODULE: ./src/components/footer/footer.module.scss
var footer_module = __webpack_require__(63);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx



//  ------------------------
const Footer = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_module_default()).footer,
        children: "Links go here"
    });
};

;// CONCATENATED MODULE: external "dotenv"
const external_dotenv_namespaceObject = require("dotenv");
;// CONCATENATED MODULE: ./src/pages/_app.tsx
//
//	description of file
//
//	----------------------------------------
//	i.  imports


//	----------------------------------------
//	ii.  stylesheets
//	----------------------------------------
//	import 'the-new-css-reset'



//	----------------------------------------

function App({ Component , pageProps  }) {
    external_dotenv_namespaceObject.config();
    console.log(process.env);
    //	------------------------------------
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                children: "footer goes here dawg"
            })
        ]
    });
} //	------------------------------------


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(792));
module.exports = __webpack_exports__;

})();