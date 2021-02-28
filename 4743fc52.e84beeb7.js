(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(148)),a={id:"01webpack",title:"webpack5",sidebar_label:"webpack",slug:"./01webpack.html"},i={unversionedId:"notes/notes_webpack/01webpack",id:"notes/notes_webpack/01webpack",isDocsHomePage:!1,title:"webpack5",description:"1\u3001\u9884\u5907",source:"@site/docs\\notes\\notes_webpack\\01.md",slug:"/notes/notes_webpack/01webpack.html",permalink:"/docs/notes/notes_webpack/01webpack.html",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/notes/notes_webpack/01.md",version:"current",sidebar_label:"webpack",sidebar:"notes_webpack",previous:{title:"\u6559\u7a0b\u7b14\u8bb0\u7b80\u4ecb",permalink:"/docs/notes/tutorial-notes"},next:{title:"ES6",permalink:"/docs/notes/notes_es6/01es6.html"}},p=[{value:"1\u3001\u9884\u5907",id:"1\u3001\u9884\u5907",children:[{value:"1.1\u3001\u73af\u5883\u53c2\u6570",id:"11\u3001\u73af\u5883\u53c2\u6570",children:[]},{value:"1.2\u3001\u9884\u5907\u6280\u80fd",id:"12\u3001\u9884\u5907\u6280\u80fd",children:[]}]},{value:"2\u3001WebPack\u7b80\u4ecb",id:"2\u3001webpack\u7b80\u4ecb",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1\u3001\u9884\u5907"},"1\u3001\u9884\u5907"),Object(c.b)("h3",{id:"11\u3001\u73af\u5883\u53c2\u6570"},"1.1\u3001\u73af\u5883\u53c2\u6570"),Object(c.b)("p",null,"\uff081\uff09\u3001Nodejs\u7248\u672c10\u4ee5\u4e0a\uff082\uff09\u3001Webpack\u7248\u672c4.26\u4ee5\u4e0a "),Object(c.b)("h3",{id:"12\u3001\u9884\u5907\u6280\u80fd"},"1.2\u3001\u9884\u5907\u6280\u80fd"),Object(c.b)("p",null,"\uff081\uff09\u3001\u57fa\u672c\u7684Nodejs\u77e5\u8bc6\n\uff082\uff09\u3001\u57fa\u672c\u7684npm\u6307\u4ee4\n\uff083\uff09\u3001\u719f\u6089ES6\u8bed\u6cd5"),Object(c.b)("h2",{id:"2\u3001webpack\u7b80\u4ecb"},"2\u3001WebPack\u7b80\u4ecb"),Object(c.b)("p",null,"webpack \u662f\u4e00\u4e2a\u7528\u4e8e\u73b0\u4ee3 JavaScript \u5e94\u7528\u7a0b\u5e8f\u7684",Object(c.b)("strong",{parentName:"p"},"\u9759\u6001\u6a21\u5757\u6253\u5305\u5de5\u5177"),"\u8ba9\u6211\u4eec\u53ef\u4ee5\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u5e76\u5e2e\u6211\u4e48\u5904\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\n"))}s.isMDXComponent=!0}}]);