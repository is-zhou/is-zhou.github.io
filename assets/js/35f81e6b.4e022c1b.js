"use strict";(self.webpackChunkzjiaahui_github_io_source=self.webpackChunkzjiaahui_github_io_source||[]).push([[5278],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},Highlight:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={slug:"vue-this.$set\u2014jww",title:"\u57fa\u4e8eVue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684\u5939\u5a03\u5a03\u6e38\u620f",description:"\u57fa\u4e8eVue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684\u5939\u5a03\u5a03\u6e38\u620f",tags:["Vue2","TypeScript","\u5939\u5a03\u5a03"]},p=void 0,u={permalink:"/blog/vue-this.$set\u2014jww",source:"@site/blog\\2021-05-10-\u57fa\u4e8eVue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684\u5939\u5a03\u5a03\u6e38\u620f.md",title:"\u57fa\u4e8eVue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684\u5939\u5a03\u5a03\u6e38\u620f",description:"\u57fa\u4e8eVue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684\u5939\u5a03\u5a03\u6e38\u620f",date:"2021-05-10T00:00:00.000Z",formattedDate:"2021\u5e745\u670810\u65e5",tags:[{label:"Vue2",permalink:"/blog/tags/vue-2"},{label:"TypeScript",permalink:"/blog/tags/type-script"},{label:"\u5939\u5a03\u5a03",permalink:"/blog/tags/\u5939\u5a03\u5a03"}],readingTime:1.225,truncated:!0,prevItem:{title:"Vue2.X\u4e2d\u5c06js\u8fc1\u79fb\u4e3aTypeScript\u6b65\u9aa4\u53ca\u6ce8\u610f\u70b9",permalink:"/blog/Vue2.X-ts-jsqy"},nextItem:{title:"Vue\u4e2d\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u503c\uff0c\u5c5e\u6027\u66f4\u65b0\u4e86\u89c6\u56fe\u4e0d\u66f4\u65b0this.$set(obj, key, value)",permalink:"/blog/vue-this.$set"}},c=[{value:"1\u3001\u901a\u8fc7\u811a\u624b\u67b6VueCli3\u5feb\u901f\u521b\u5efa\u9879\u76ee",id:"1\u3001\u901a\u8fc7\u811a\u624b\u67b6vuecli3\u5feb\u901f\u521b\u5efa\u9879\u76ee",children:[{value:"1.1\u3001\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee\u547d\u4ee4",id:"11\u3001\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee\u547d\u4ee4",children:[]},{value:"1.2\u3001\u914d\u7f6e\u4ec5\u53c2\u8003",id:"12\u3001\u914d\u7f6e\u4ec5\u53c2\u8003",children:[]}]},{value:"2\u3001\u9879\u76ee\u79fb\u52a8\u7aef\u9002\u914d",id:"2\u3001\u9879\u76ee\u79fb\u52a8\u7aef\u9002\u914d",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:c,Highlight:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4f7f\u7528Vue2+TypeScript\u5b9e\u73b0\u7b80\u5355\u7684H5\u5939\u5a03\u5a03\u5c0f\u6e38\u620f\uff0c\u9879\u76ee\u5b9e\u73b0\u722a\u5b50\u4e0a\u4e0b\u4f38\u7f29\uff0c\u5a03\u5a03\u4ece\u53f3\u5411\u5de6\u5faa\u73af\u79fb\u52a8\uff0c\u722a\u5b50\u4e0b\u843d\u5230\u5e95\u90e8\u540e\u68c0\u67e5\u662f\u5426\u5939\u4e2d\u5a03\u5a03\uff1b\u5939\u4e2d\u65f6\u79fb\u52a8\u7684\u5a03\u5a03\u6d88\u5931\u4e14\u722a\u5b50\u4e0a\u663e\u793a\u5939\u4e2d\u7684\u5a03\u5a03\u4e00\u540c\u4e0a\u5347\uff0c\u672a\u5939\u4e2d\u5219\u7a7a\u722a\u4e0a\u5347"))),(0,a.kt)("h2",{id:"1\u3001\u901a\u8fc7\u811a\u624b\u67b6vuecli3\u5feb\u901f\u521b\u5efa\u9879\u76ee"},"1\u3001\u901a\u8fc7\u811a\u624b\u67b6VueCli3\u5feb\u901f\u521b\u5efa\u9879\u76ee"),(0,a.kt)("h3",{id:"11\u3001\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee\u547d\u4ee4"},"1.1\u3001\u811a\u624b\u67b6\u521b\u5efa\u9879\u76ee\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vue create \u9879\u76ee\u540d\u79f0\n")),(0,a.kt)("h3",{id:"12\u3001\u914d\u7f6e\u4ec5\u53c2\u8003"},"1.2\u3001\u914d\u7f6e\u4ec5\u53c2\u8003"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Please pick a preset: Manually select features")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Use class-style component syntax? Yes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Use history mode for router? (Requires proper server setup for index fallback in production) Yes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Pick a linter / formatter config: Airbnb")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Pick additional lint features: Lint on save")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"? Save this as a preset for future projects? No")),(0,a.kt)("h2",{id:"2\u3001\u9879\u76ee\u79fb\u52a8\u7aef\u9002\u914d"},"2\u3001\u9879\u76ee\u79fb\u52a8\u7aef\u9002\u914d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\u548cloader")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i postcss-px2rem lib-flexible \nnpm i postcss-loader --dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"postcss-px2rem"),"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"vue.config.js"),"\u6587\u4ef6\u5e76\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable @typescript-eslint/no-var-requires */\nconst px2rem = require('postcss-px2rem');\n\nmodule.exports = {\n  css: {\n    loaderOptions: {\n      css: {\n        // \u8fd9\u91cc\u7684\u9009\u9879\u4f1a\u4f20\u9012\u7ed9 css-loader\n      },\n      postcss: {\n        // \u8fd9\u91cc\u7684\u9009\u9879\u4f1a\u4f20\u9012\u7ed9 postcss-loader\n        plugins: [\n          px2rem({\n            remUnit: 37.5,\n          }),\n        ],\n      },\n    },\n  },\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5165\u53e3\u6587\u4ef6main.ts\u6587\u4ef6\u4e2d\u5bfc\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"lib-flexible"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import 'lib-flexible';\nimport Vue from 'vue';\nimport App from './App.vue';\nimport router from './router';\n\nVue.config.productionTip = false;\n\nnew Vue({\nrouter,\nrender: (h) => h(App),\n}).$mount('#app');\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5165\u53e3\u9875\u9762 index.html \u4e2d\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"<meta>"),"\u6807\u7b7e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="width=device-width,initial-scale=1.0,\n    maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">\n')))}d.isMDXComponent=!0}}]);