"use strict";(self.webpackChunkzjiaahui_github_io_source=self.webpackChunkzjiaahui_github_io_source||[]).push([[3003],{3905:function(A,t,e){e.d(t,{Zo:function(){return o},kt:function(){return k}});var n=e(7294);function l(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function c(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,n)}return e}function a(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){l(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function r(A,t){if(null==A)return{};var e,n,l=function(A,t){if(null==A)return{};var e,n,l={},c=Object.keys(A);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||(l[e]=A[e]);return l}(A,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(A);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(l[e]=A[e])}return l}var i=n.createContext({}),u=function(A){var t=n.useContext(i),e=t;return A&&(e="function"==typeof A?A(t):a(a({},t),A)),e},o=function(A){var t=u(A.components);return n.createElement(i.Provider,{value:t},A.children)},g={inlineCode:"code",wrapper:function(A){var t=A.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(A,t){var e=A.components,l=A.mdxType,c=A.originalType,i=A.parentName,o=r(A,["components","mdxType","originalType","parentName"]),p=u(e),k=l,m=p["".concat(i,".").concat(k)]||p[k]||g[k]||c;return e?n.createElement(m,a(a({ref:t},o),{},{components:e})):n.createElement(m,a({ref:t},o))}));function k(A,t){var e=arguments,l=t&&t.mdxType;if("string"==typeof A||l){var c=e.length,a=new Array(c);a[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=A,r.mdxType="string"==typeof A?A:l,a[1]=r;for(var u=2;u<c;u++)a[u]=e[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},9887:function(A,t,e){e.r(t),e.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var n=e(7462),l=e(3366),c=(e(7294),e(3905)),a=["components"],r={id:"01git",title:"\u57fa\u7840\u5165\u95e8",slug:"./01git.html"},i=void 0,u={unversionedId:"notes/git/01git",id:"notes/git/01git",isDocsHomePage:!1,title:"\u57fa\u7840\u5165\u95e8",description:"1.\u7b80\u4ecb",source:"@site/docs/notes/git/01-git.md",sourceDirName:"notes/git",slug:"/notes/git/01git.html",permalink:"/docs/notes/git/01git.html",version:"current",sidebarPosition:1,frontMatter:{id:"01git",title:"\u57fa\u7840\u5165\u95e8",slug:"./01git.html"},sidebar:"tutorialSidebar",previous:{title:"\u5207\u56fe\u4ed4",permalink:"/docs/notes/development-process/01ps.html"},next:{title:"\u5173\u8054\u540c\u6b65\u8fdc\u7a0b\u4ed3\u5e93Github",permalink:"/docs/notes/git/02git.html"}},o=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",children:[]},{value:"2\u3001\u5b89\u88c5",id:"2\u3001\u5b89\u88c5",children:[{value:"2.1\u3001windows\u4e0a\u5b89\u88c5git",id:"21\u3001windows\u4e0a\u5b89\u88c5git",children:[]},{value:"2.2\u3001\u914d\u7f6egit/\u4fee\u6539git\u914d\u7f6e",id:"22\u3001\u914d\u7f6egit\u4fee\u6539git\u914d\u7f6e",children:[]}]},{value:"3\u3001\u672c\u5730\u4ed3\u5e93",id:"3\u3001\u672c\u5730\u4ed3\u5e93",children:[{value:"3.1\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93",id:"31\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93",children:[]},{value:"3.2\u3001\u5c06\u9879\u76ee\u6587\u4ef6\u6dfb\u52a0\u5230\u672c\u5730\u4ed3\u5e93",id:"32\u3001\u5c06\u9879\u76ee\u6587\u4ef6\u6dfb\u52a0\u5230\u672c\u5730\u4ed3\u5e93",children:[]}]},{value:"5\u3001\u8bed\u6cd5\u5c0f\u7ed3",id:"5\u3001\u8bed\u6cd5\u5c0f\u7ed3",children:[]}],g={toc:o};function p(A){var t=A.components,r=(0,l.Z)(A,a);return(0,c.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1\u7b80\u4ecb"},"1.\u7b80\u4ecb"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002Git \u4e0e\u5e38\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177 CVS, Subversion \u7b49\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u7248\u672c\u5e93\u7684\u65b9\u5f0f\uff0c\u4e0d\u5fc5\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\u652f\u6301\u3002")),(0,c.kt)("h2",{id:"2\u3001\u5b89\u88c5"},"2\u3001\u5b89\u88c5"),(0,c.kt)("h3",{id:"21\u3001windows\u4e0a\u5b89\u88c5git"},"2.1\u3001windows\u4e0a\u5b89\u88c5git"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff081\uff09\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u5305\uff1a",(0,c.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,c.kt)("li",{parentName:"ul"},"\uff082\uff09 \u7136\u540e\u6309\u9ed8\u8ba4\u9009\u9879\u5b89\u88c5\u5373\u53ef",(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u5f00\u59cb\u83dc\u5355\u91cc\u627e\u5230\u201cGit\u201d->\u201cGit Bash\u201d\u6216\u684c\u9762\u53f3\u952e\u9f20\u6807->\u201cGit Bash\u201d\uff0c\u5f39\u51fa\u547d\u4ee4\u7a97\u53e3\u5373\u8bf4\u660eGit\u5b89\u88c5\u6210\u529f\uff01")))),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"img",src:e(5743).Z})),(0,c.kt)("h3",{id:"22\u3001\u914d\u7f6egit\u4fee\u6539git\u914d\u7f6e"},"2.2\u3001\u914d\u7f6egit/\u4fee\u6539git\u914d\u7f6e"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff081\uff09\u67e5\u770b\u5f53\u524d\u914d\u7f6e\u4fe1\u606f")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},"#\u663e\u793a\u5f53\u524d\u914d\u7f6e\ngit config --list\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff082\uff09\u5728\u547d\u4ee4\u884c\u5de5\u5177\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u914d\u7f6e\uff1a")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},'git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"\n')),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8fd8\u9700\u8981\u6700\u540e\u4e00\u6b65\u8bbe\u7f6e\u4f7f\u7528\u4eba\u7684\u7528\u6237\u540d\u548c\u8054\u7cfb\u90ae\u7bb1\u544a\u8bc9git\u4f60\u662f\u8c01\u600e\u4e48\u8054\u7cfb\u4f60\uff0c--global\u8868\u793a\u4e3a\u5168\u5c40\u914d\u7f6e\u7684\u610f\u601d\uff0c\u6b64\u8bbe\u5907\u4e0a\u7684\u6240\u6709\u521b\u5e93\u5c06\u4f7f\u7528\u8be5\u7528\u6237\u540d\u548c\u90ae\u7bb1\u63d0\u4ea4")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff083\uff09\u4fee\u6539\u548c\u914d\u7f6e\u672c\u5730\u7528\u6237\u540d\u548c\u90ae\u7bb1")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},'git config --global --replace-all user.name "Your Name"\ngit config --global --replace-all user.email "email@example.com"\n')),(0,c.kt)("h2",{id:"3\u3001\u672c\u5730\u4ed3\u5e93"},"3\u3001\u672c\u5730\u4ed3\u5e93"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u4ed3\u5e93\u5373\u5de5\u4f5c\u76ee\u5f55\uff0c\u4e14\u8fd9\u4e2a\u76ee\u5f55\u91cc\u9762\u7684\u6240\u6709\u6587\u4ef6\u90fd\u53ef\u4ee5\u88abGit\u7ba1\u7406\u8d77\u6765\uff0c\u6bcf\u4e2a\u6587\u4ef6\u7684\u4fee\u6539\u3001\u5220\u9664\uff0cGit\u90fd\u80fd\u8ddf\u8e2a\uff0c\u4ee5\u4fbf\u4efb\u4f55\u65f6\u523b\u90fd\u53ef\u4ee5\u8ffd\u8e2a\u5386\u53f2\uff0c\u6216\u8005\u5728\u5c06\u6765\u67d0\u4e2a\u65f6\u523b\u53ef\u4ee5\u201c\u8fd8\u539f\u201d\u3002")),(0,c.kt)("h3",{id:"31\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93"},"3.1\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff081\uff09\u76f4\u63a5\u521d\u59cb\u5316\u4ed3\u5e93")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},"# \u65b9\u5f0f\u4e00\uff1a\u5728\u5f53\u524d\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2aGit\u4ee3\u7801\u5e93\ngit init\n# \u65b9\u5f0f\u4e8c\uff1a\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u5c06\u5176\u521d\u59cb\u5316\u4e3aGit\u4ee3\u7801\u5e93\ngit init [project-name]\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u4ed3\u5e93\u5efa\u597d\u4e86\u540e\uff0c\u800c\u4e14\u662f\u4e00\u4e2a\u7a7a\u7684\u4ed3\u5e93\uff0c\u6b64\u65f6\u5f53\u524d\u76ee\u5f55\u4e0b\u591a\u4e86\u4e00\u4e2a.git\u7684\u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u662fGit\u6765\u8ddf\u8e2a\u7ba1\u7406\u7248\u672c\u5e93\u7684\uff0c\u7981\u6b62\u624b\u52a8\u4fee\u6539\u8fd9\u4e2a\u76ee\u5f55\u91cc\u9762\u7684\u6587\u4ef6\u4f1a\u628aGit\u4ed3\u5e93\u7ed9\u7834\u574f\u3002\u5982\u679c\u6ca1\u6709\u770b\u5230.git\u76ee\u5f55\uff0c\u90a3\u662f\u56e0\u4e3a\u8fd9\u4e2a\u76ee\u5f55\u9ed8\u8ba4\u662f\u9690\u85cf\u7684\uff0c\u5982\u679c\u662fwindows\u7cfb\u7edf\u5219\u5c06\u663e\u793a\u9690\u85cf\u9879\u76ee\u6253\u5f00\u5373\u53ef\u770b\u5230\u3002")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff082\uff09\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u514b\u9686\u5230\u672c\u5730")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},"# \u65b9\u5f0f\u4e09\uff1a\u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\u9879\u76ee\u548c\u5b83\u7684\u6574\u4e2a\u4ee3\u7801\u5386\u53f2\ngit clone [url:\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740]\n")),(0,c.kt)("h3",{id:"32\u3001\u5c06\u9879\u76ee\u6587\u4ef6\u6dfb\u52a0\u5230\u672c\u5730\u4ed3\u5e93"},"3.2\u3001\u5c06\u9879\u76ee\u6587\u4ef6\u6dfb\u52a0\u5230\u672c\u5730\u4ed3\u5e93"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff081\uff09\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230\u7f13\u5b58\u533a")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},"# \u65b9\u5f0f\u4e00\uff1a\u544a\u8bc9git\u6dfb\u52a0\u6307\u5b9a\u54ea\u4e9b\u6587\u4ef6\u5230\u6682\u5b58\u533a\uff08\u6267\u884c\u591a\u6b21\u5373\u591a\u4e2a\u6587\u4ef6\uff09\ngit add [\u6587\u4ef6\u540d]\n#\u65b9\u5f0f\u4e8c\uff1a\u6dfb\u52a0\u6240\u6709\u53d8\u52a8\u7684\u6587\u4ef6\u5230\u6682\u5b58\u533a\ngit add .\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\uff082\uff09\u5c06\u6587\u4ef6\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-git"},'git commit -m "\u9879\u76ee\u521d\u59cb\u5316"\n')),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Git\u53ea\u80fd\u8ddf\u8e2a\u6587\u672c\u6587\u4ef6\u7684\u6539\u52a8\uff0c\u6bd4\u5982TXT\u6587\u4ef6\uff0c\u7f51\u9875\uff0c\u6240\u6709\u7684\u7a0b\u5e8f\u4ee3\u7801\u7b49\u7b49\uff0c\u800c\u56fe\u7247\u3001\u89c6\u9891\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u867d\u7136\u4e5f\u80fd\u7531\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7ba1\u7406\uff0c\u4f46\u6ca1\u6cd5\u8ddf\u8e2a\u6587\u4ef6\u7684\u53d8\u5316\uff0c\u53ea\u77e5\u9053\u56fe\u7247\u4ece10KB\u6539\u6210\u4e8620KB\uff0c\u5176\u5b83\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u5e76\u4e0d\u77e5\u9053\u3002")),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"5\u3001\u8bed\u6cd5\u5c0f\u7ed3"},"5\u3001\u8bed\u6cd5\u5c0f\u7ed3"),(0,c.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-git"},'#\u67e5\u770b\u5f53\u524d\u914d\u7f6e\u5217\u8868\ngit config --list\n#\u914d\u7f6eGit\u7528\u6237\u540d\u548c\u90ae\u7bb1\ngit config --global user.name "Your Name"\ngit config --global user.email "email@example.com"\n#\u4fee\u6539\u914d\u7f6e\u7684\u7528\u6237\u540d\u548c\u90ae\u7bb1\ngit config --global --replace-all user.name "Your Name"\ngit config --global --replace-all user.email "email@example.com"\n')),(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-git"},"#\u521b\u5efa\u4ed3\u5e93\n# \u65b9\u5f0f\u4e00\uff1a\u5728\u5f53\u524d\u76ee\u5f55\u65b0\u5efa\u4e00\u4e2aGit\u4ee3\u7801\u5e93\ngit init\n# \u65b9\u5f0f\u4e8c\uff1a\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff0c\u5c06\u5176\u521d\u59cb\u5316\u4e3aGit\u4ee3\u7801\u5e93\ngit init [project-name]\n# \u65b9\u5f0f\u4e09\uff1a\u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\u9879\u76ee\u548c\u5b83\u7684\u6574\u4e2a\u4ee3\u7801\u5386\u53f2\ngit clone [url:\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740]\n")),(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-git"},"#\u63d0\u4ea4\u6587\u4ef6\u5230\u6682\u5b58\u533a\ngit add . \n\u6216 \ngit add [\u6587\u4ef6\u540d]\n")),(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-git"},"#\u5c06\u6682\u5b58\u533a\u6240\u6709\u6587\u4ef6\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\ngit commit -m '\u63d0\u4ea4\u8bf4\u660e' \n")))))}p.isMDXComponent=!0},5743:function(A,t){t.Z="data:image/png;base64,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CQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFHIJABCFXAIARCGXAABRyCUAQBRyCQAQhVwCAEQhlwAAUcglAEAUcgkAEIVcAgBEIZcAAFHIJQBAFIu5ZHt7u1tqde0AAA7aaC7pR5OuHQDAQVuWS5K82rUDADhoo98v6YJJG026dgAAB23Z9167YLK93bUDADhoy3JJIpcAAIdqRS5J5BIA4PCsziVJ1w4A4KDJJQBAFHIJABCFXAIARCGXAABRyCUAQBS75JKLF/8/yc83qruOlnMAAAAASUVORK5CYII="}}]);