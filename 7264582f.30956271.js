(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"Highlight",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(225)),i={slug:"Vue2.X-ts",title:"Vue2.X\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript\u6b65\u9aa4\u53ca\u6ce8\u610f\u70b9",author:"zjiaahui",author_title:"\u81ea\u5b66web\u524d\u7aef\u7684\u5c0f\u767d",author_url:"https://github.com/zjiaahui",author_image_url:"https://avatars.githubusercontent.com/u/54567123?s=60&v=4",description:"Vue2.X\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript",tags:["Vue2","TypeScript"]},c={permalink:"/blog/Vue2.X-ts",source:"@site/blog\\2021-05-16-Vue\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript.md",description:"Vue2.X\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript",date:"2021-05-16T00:00:00.000Z",tags:[{label:"Vue2",permalink:"/blog/tags/vue-2"},{label:"TypeScript",permalink:"/blog/tags/type-script"}],title:"Vue2.X\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript\u6b65\u9aa4\u53ca\u6ce8\u610f\u70b9",readingTime:1.66,truncated:!0,prevItem:{title:"vuecli3+\u811a\u624b\u67b6\u521b\u5efa\u7684\u9879\u76ee\u4e0b\u6279\u91cf\u5220\u9664console.log(xxx)",permalink:"/blog/vuecli3_consolelog"},nextItem:{title:"Vue\u4e2d\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u503c\uff0c\u5c5e\u6027\u66f4\u65b0\u4e86\u89c6\u56fe\u4e0d\u66f4\u65b0this.$set(obj, key, value)",permalink:"/blog/vue-this.$set"}},u=[],p=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:u,Highlight:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u4e3a\u4ec0\u4e48\u8981\u8fc1\u79fb\u5462\uff1f\u770b\u5230\u8fd9\u91cc\u80af\u5b9a\u4e0d\u7528\u8bf4\u4e86\uff0c\u80af\u5b9a\u662f\u7531\u81ea\u5df1\u7684\u9700\u6c42\u7684\u4e0d\u7136\u5e94\u8be5\u4e5f\u4e0d\u4f1a\u770b\u5230\u8fd9\u91cc\uff0c\u6211\u5c31\u662f\u8fd9\u6837\uff0c\u54c8\u54c8\u54c8\u3002\u90a3\u4e48\u5982\u4f55\u5c06\u5df2\u6709\u7684Vue\u9879\u76ee\uff08\u5df2\u7ecf\u6709\u4e00\u4e2a\u901a\u8fc7 vue-cli3 \u811a\u624b\u67b6\u6784\u5efa\u7684 vue \u9879\u76ee\uff09\u8fc1\u79fb\u81f3Typescript\u5462\uff1f"))))}s.isMDXComponent=!0},225:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);