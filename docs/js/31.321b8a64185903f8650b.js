webpackJsonp([31],{458:function(e,t,s){e.exports=s(520)},520:function(e,t,s){var a=s(11)(null,s(521),null,null,null);e.exports=a.exports},521:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",{attrs:{id:"Post-compile"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-Post-compile-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" Post-compile")]),e._v(" "),s("p",[e._v("Post-compile means the NPM packages don't need to be compiled before published, and they will be compiled along with the application's compiling.")]),e._v(" "),e._m(0),e._v(" "),s("h3",{attrs:{id:"Background"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-Background-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" Background")]),e._v(" "),s("p",[e._v("More and more applications are developed with webpack + babel, and commonly use NPM to manage packages. With the growing of the number of package dependencies which are also developed with ES2015+ and need to be compiled before published, the final compiled code usually contains a lot of compiling code. Therefore, to eliminate the redundancy, we recommend post-compile.")]),e._v(" "),s("h3",{attrs:{id:"Prosandcons"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-Prosandcons-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" Pros and cons")]),e._v(" "),s("p",[e._v("Pros:")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Cons:")]),e._v(" "),e._m(2),e._v(" "),s("h3",{attrs:{id:"Rules"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-Rules-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" Rules")]),e._v(" "),s("p",[e._v("Considering some applications can not use post-compile, cube-ui used the rule:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Post-compile is used by default if you use webpack 2+. Of course, you can use the webpack alias configuration to change the default behavior.")]),e._v(" "),s("h3",{attrs:{id:"webpackdemo"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-webpackdemo-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" webpack demo")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("An example of your application webpack configuration:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("blockquote",[s("p",[e._v("Notes: For more detailed content about post-compile, see "),s("a",{attrs:{href:"https://github.com/DDFE/DDFE-blog/issues/23"}},[e._v("webpack 应用编译优化之路")]),e._v(".")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Common dependencies can be shared and only need to be compiled once.")]),e._v(" "),s("li",[e._v("Only one copy of babel-plugin-transform-runtime or babel-polyfill code.")]),e._v(" "),s("li",[e._v("The NPM packages don't need to be compiled before published.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("The application's babel configuration needs to be compatible with  the NPM packages' babel configuration.")]),e._v(" "),s("li",[e._v("The NPM packages can't use alias and DefinePlugin (you can use them and compiled before published but don't need to use babel).")]),e._v(" "),s("li",[e._v("The application's compiling time will be longer.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("blockquote",[s("p",[e._v("The main field in package.json is the compiled entry point and the module field is the source entry point.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("em",[e._v("About "),s("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/pkg.module"}},[e._v("pkg.module")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("a",{attrs:{href:"https://www.npmjs.com/package/webpack-post-compile-plugin"}},[e._v("webpack-post-compile-plugin")]),e._v(" is used to resolve the nested post-compile NPM packages.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-comment"}},[e._v("// webpack.config.js")]),e._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" PostCompilePlugin = "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("require")]),e._v("("),s("span",{attrs:{class:"hljs-string"}},[e._v("'webpack-post-compile-plugin'")]),e._v(")\n\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("module")]),e._v(".exports = {\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n  "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("module")]),e._v(": {\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("rules")]),e._v(": [\n      "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n      {\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("test")]),e._v(": "),s("span",{attrs:{class:"hljs-regexp"}},[e._v("/\\.js$/")]),e._v(",\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("loader")]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v("'babel-loader'")]),e._v(",\n        "),s("span",{attrs:{class:"hljs-attr"}},[e._v("include")]),e._v(": [\n          resolve("),s("span",{attrs:{class:"hljs-string"}},[e._v("'src'")]),e._v(")\n        ]\n      },\n      "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n    ]\n  },\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n  plugins: [\n    "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" PostCompilePlugin()\n  ]\n}\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Add "),s("code",{pre:!0},[e._v("compileDependencies：")]),e._v(" to the application's package.json:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-comment"}},[e._v("// package.json")]),e._v("\n{\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n  "),s("span",{attrs:{class:"hljs-string"}},[e._v('"compileDependencies"')]),e._v(": ["),s("span",{attrs:{class:"hljs-string"}},[e._v('"A"')]),e._v(", "),s("span",{attrs:{class:"hljs-string"}},[e._v('"B"')]),e._v("]\n  "),s("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n}\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("If "),s("code",{pre:!0},[e._v("A")]),e._v(" package have a dependency on "),s("code",{pre:!0},[e._v("C")]),e._v(" which is needed to be post compiled, just add "),s("code",{pre:!0},[e._v("compileDependencies")]),e._v(" to "),s("code",{pre:!0},[e._v("A")]),e._v("'s  package.json:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-json"}},[e._v("// A package.json\n{\n  // ...\n  "),s("span",{attrs:{class:"hljs-attr"}},[e._v('"compileDependencies"')]),e._v(": ["),s("span",{attrs:{class:"hljs-string"}},[e._v('"C"')]),e._v("]\n  // ...\n}\n")])])}]}}});