(window.webpackJsonp=window.webpackJsonp||[]).push([[102,22],{234:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),m=t(243),c=t(248),i=t(239);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(247);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,i=Object(l.default)().siteConfig.title,g=a.blogDescription,u=a.blogTitle,E="/"===a.permalink?i:u;return r.a.createElement(m.a,{title:E,description:g,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},244:function(e,a,t){"use strict";var n=t(240);t.d(a,"a",(function(){return n.a}))},248:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(237),m=t(236),c=t(24),i=t(239),o=t(249),s=t(241),g=t(55),u=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,g,d,v=e.children,p=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,h=void 0!==N&&N,f=b.date,k=b.permalink,w=b.tags,y=b.readingTime,M=p.author,P=p.title,T=p.image,J=p.keywords,O=p.author_url||p.authorURL,j=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL,F=Object(s.a)(T,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,J&&J.length&&r.a.createElement("meta",{name:"keywords",content:J.join(",")}),T&&r.a.createElement("meta",{property:"og:image",content:F}),T&&r.a.createElement("meta",{name:"twitter:image",content:F}),T&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+P})),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],g=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},h?P:r.a.createElement(i.a,{to:k},P)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:u.a.blogPostDate},g," ",d,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:x,alt:M})),r.a.createElement("div",{className:"avatar__intro"},M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},M)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},v)),(w.length>0||_)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:b.permalink,"aria-label":"Read more about "+P},r.a.createElement("strong",null,"\u9605\u8bfb\u5168\u6587"))))))}}}]);