(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{254:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(237),m=t(236),c=t(24),o=t(239),s=t(248),i=t(241),g=t(60),u=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,g,h,d=e.children,b=e.frontMatter,p=e.metadata,v=e.truncated,_=e.isBlogPostPage,N=void 0!==_&&_,k=p.date,w=p.permalink,f=p.tags,y=p.readingTime,J=b.author,T=b.title,F=b.image,I=b.keywords,M=b.author_url||b.authorURL,P=b.author_title||b.authorTitle,j=b.author_image_url||b.authorImageURL,O=Object(i.a)(F,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,I&&I.length&&n.a.createElement("meta",{name:"keywords",content:I.join(",")}),F&&n.a.createElement("meta",{property:"og:image",content:O}),F&&n.a.createElement("meta",{name:"twitter:image",content:O}),F&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=k.substring(0,10).split("-"),r=t[0],g=E[parseInt(t[1],10)-1],h=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},N?T:n.a.createElement(o.a,{to:w},T)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:k,className:u.a.blogPostDate},g," ",h,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:J})),n.a.createElement("div",{className:"avatar__intro"},J&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},J)),n.a.createElement("small",{className:"avatar__subtitle"},P)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},d)),(f.length>0||v)&&n.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),f.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:p.permalink,"aria-label":"Read more about "+T},n.a.createElement("strong",null,"\u9605\u8bfb\u5168\u6587"))))))}}}]);