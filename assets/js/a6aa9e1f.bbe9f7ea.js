"use strict";(self.webpackChunkzjiaahui_github_io_source=self.webpackChunkzjiaahui_github_io_source||[]).push([[3089,9207],{6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),o=a(6010),c="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8388:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(3366),r=a(7294),l=a(6010),i=a(5227),o=a(6742),c="sidebar_3-2F",s="sidebarItemTitle_10M-",m="sidebarItemList_3L1d",u="sidebarItem_3stU",d="sidebarItemLink_3hZO",g="sidebarItemLinkActive_1XEC",h=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(8013),b="sidebar_2CaX",E="sidebarItemTitle_SZjo",p="sidebarItemList_1h6m",_="sidebarItem_D2qy",N="sidebarItemLink_3gjl",Z="sidebarItemLinkActive_3jt8";function k(e){var t=e.sidebar;if(0===t.items.length)return null;var a=t.items.slice(0,5);return r.createElement("nav",{className:(0,l.Z)(b,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(E,"margin-bottom--md")},t.title),r.createElement("ul",{className:p},a.map((function(e){return r.createElement("li",{key:e.permalink,className:_},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:N,activeClassName:Z},e.title))}))))}var C=["sidebar","toc","children"];var T=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,C),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},!a&&r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s})},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.ZP,{toc:a}))),a&&r.createElement("div",{className:"row"},r.createElement("main",{className:(0,l.Z)("col",{"col--8 col--offset-1":s})},o),a&&r.createElement("div",{className:(0,l.Z)("col col--3")},r.createElement(k,{sidebar:t}),r.createElement(v.ZP,{toc:a})))))}},1729:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(8388),i=a(5286),o=a(6742),c=a(4973);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(1773);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},5286:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),c=a(1773),s=a(5366),m=a(1217),u=a(6146),d=a(2263),g="blogPostTitle_nmLu",h="blogPostData_3WzT",f="blogPageTopTags_New_3Y8P",v="blogPostDetailsFull_3bEF",b="hr_line_3h1R",E="blogPageTitle_New_1DzW",p="blogPageTopTagsItem_New_28jE",_="width996_New_3gIE";var N=function(e){var t,a,N,Z=(0,d.Z)().siteConfig,k=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),C=e.children,T=e.frontMatter,L=e.metadata,I=e.truncated,w=e.isBlogPostPage,P=void 0!==w&&w,A=L.date,y=L.formattedDate,R=L.permalink,F=L.tags,S=L.readingTime,M=L.title,O=L.editUrl,x=T.image,U=T.keywords,B=T.author_url||T.authorURL||Z.customFields.blogAuthorInfoDefault.authorURL,D=T.author_title||T.authorTitle||Z.customFields.blogAuthorInfoDefault.authorTitle,z=T.author_image_url||T.authorImageURL||Z.customFields.blogAuthorInfoDefault.authorImageURL,j=T.author||Z.customFields.blogAuthorInfoDefault.author;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:U,image:x}),n.createElement("article",{className:P?void 0:"margin-bottom--xl"},(N=P?"h1":"h2",n.createElement("header",null,n.createElement(N,{className:P?E:g},P?M:n.createElement(o.Z,{to:R},M)),n.createElement("div",{className:(0,r.Z)(h,"margin-vert--md")},P&&n.createElement("time",{dateTime:A},y),P&&S&&n.createElement(n.Fragment,null," \xb7 ",k(S))),P&&n.createElement("div",{className:(0,r.Z)(f,"margin-vert--md")},F.length>0&&n.createElement("div",null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),F.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:(0,r.Z)(p,"margin-horiz--sm"),to:a},t)})))),n.createElement("div",{className:"avatar margin-vert--md"},!P&&z&&n.createElement(o.Z,{className:(0,r.Z)(_,"avatar__photo-link avatar__photo"),href:B},n.createElement("img",{src:z,alt:j})),n.createElement("div",{className:(0,r.Z)(_,"avatar__intro")},!P&&j&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:B},j)),n.createElement("small",{className:"avatar__subtitle"},D))),!P&&n.createElement("div",{className:(0,r.Z)(h)},n.createElement("time",{dateTime:A},y),S&&n.createElement(n.Fragment,null," \xb7 ",k(S)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},C)),(F.length>0||I)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=P,t))},F.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),F.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),P&&O&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:O})),!P&&I&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:L.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))),n.createElement("hr",{className:(0,r.Z)(b)})))}},3507:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7462),r=a(3366),l=a(7294),i=a(3935),o=a(2263),c=a(5977),s=a(4996),m=a(6742),u=a(9105),d=a(6397),g=a(7052),h=a(6747),f=a(5613),v=a(4973),b="searchBox_1ZXk",E=["contextualSearch"],p=null;function _(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function N(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function Z(e){var t,m,d=e.contextualSearch,Z=(0,r.Z)(e,E),k=(0,o.Z)().siteMetadata,C=(0,f.Z)(),T=null!=(t=null==(m=Z.searchParameters)?void 0:m.facetFilters)?t:[],L=d?[].concat(C,T):T,I=Object.assign({},Z.searchParameters,{facetFilters:L}),w=(0,s.C)().withBaseUrl,P=(0,c.k6)(),A=(0,l.useRef)(null),y=(0,l.useRef)(null),R=(0,l.useState)(!1),F=R[0],S=R[1],M=(0,l.useState)(null),O=M[0],x=M[1],U=(0,l.useCallback)((function(){return p?Promise.resolve():Promise.all([a.e(4300).then(a.bind(a,4300)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;p=t}))}),[]),B=(0,l.useCallback)((function(){U().then((function(){A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),S(!0)}))}),[U,S]),D=(0,l.useCallback)((function(){S(!1),A.current.remove()}),[S]),z=(0,l.useCallback)((function(e){U().then((function(){S(!0),x(e.key)}))}),[U,S,x]),j=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;P.push(t)}}).current,q=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:w(""+t.pathname+t.hash)})}))})).current,H=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,n.Z)({},e,{onClose:D}))}}),[D]),X=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:F,onOpen:B,onClose:D,onInput:z,searchButtonRef:y});var Y=(0,v.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+Z.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:b},l.createElement(h.a,{onTouchStart:U,onFocus:U,onMouseOver:U,onClick:B,ref:y,translations:{buttonText:Y,buttonAriaLabel:Y}})),F&&(0,i.createPortal)(l.createElement(p,(0,n.Z)({onClose:D,initialScrollY:window.scrollY,initialQuery:O,navigator:j,transformItems:q,hitComponent:_,resultsFooterComponent:H,transformSearchClient:X},Z,{searchParameters:I})),A.current))}var k=function(){var e=(0,o.Z)().siteConfig;return l.createElement(Z,e.themeConfig.algolia)}},8013:function(e,t,a){a.d(t,{rA:function(){return g},ZP:function(){return f}});var n=a(7294),r=a(6010),l=a(1773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_rbnR",u="tableOfContentsTitle_New_24Qr",d="table-of-contents__link";function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}function h(e){var t=e.toc;e.isChild;return t.length?n.createElement("b",{className:(0,r.Z)(u)},"\u6587\u7ae0\u76ee\u5f55"):null}var f=function(e){var t=e.toc;return s(d,"table-of-contents__link--active",100),n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(h,{toc:t}),n.createElement(g,{toc:t})))}}}]);