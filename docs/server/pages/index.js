(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 398:
/***/ ((module) => {

// Exports
module.exports = {
	"intro": "intro_intro__Q1jK0",
	"text": "intro_text__KKvDg",
	"bio": "intro_bio__laxRR"
};


/***/ }),

/***/ 441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Home({ data , repos  }) {
    const [activeProject, setActiveProject] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    console.log(repos);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().intro),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Hey! I'm"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: data.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_style_intro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bio),
                        children: data.bio
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            window.open("/resume.pdf");
                        },
                        children: "Resum\xe9"
                    })
                ]
            })
        })
    });
}
//  ------------------------
const getStaticProps = async (context)=>{
    async function _git(url) {
        const res = await fetch(url, {
            method: "get",
            mode: "cors",
            headers: {
                authorization: `token ${process.env.GH_AUTH}`
            }
        });
        return res.json();
    }
    const overview = await _git("https://api.github.com/users/sterling-holt");
    const repos = await _git("https://api.github.com/users/sterling-holt/repos");
    return {
        props: {
            data: overview,
            repos: repos
        }
    };
} /*



    <section className={_projects.projects}>
            <h1 id="projects">Projects</h1>

            <div className={_projects.track}>
                {repos.map((i: any) => {


                    if (i.name !== data.login) {
                        return <div key={i.name}
                            className={`${_projects.item} ${activeProject === i.name ? _projects.active : null }`}
                            onClick={() => {
                                setActiveProject(activeProject === i.name ? null : i.name)
                            }}
                        >
                            {i.name}
                            <span><a href={i.html_url}>Link</a></span>
                        </div>
                    }
                })}
            </div>
        </section>



*/ ;


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
var __webpack_exports__ = (__webpack_exec__(441));
module.exports = __webpack_exports__;

})();