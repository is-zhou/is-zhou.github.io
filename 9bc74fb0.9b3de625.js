(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(7),r=(n(0),n(215)),b={slug:"mysql-da",title:"MySQL8.0\u6570\u636e\u5e93\u8f6f\u4ef6\u4e0b\u8f7d\u53ca\u5b89\u88c5",author:"zjiaahui",author_title:"\u81ea\u5b66web\u524d\u7aef\u7684\u5c0f\u767d",author_url:"https://github.com/zjiaahui",author_image_url:"https://avatars.githubusercontent.com/u/54567123?s=60&v=4",description:"MySQL8.0\u6570\u636e\u5e93\u8f6f\u4ef6\u4e0b\u8f7d\u53ca\u5b89\u88c5",tags:["MySQL"]},c={permalink:"/blog/mysql-da",source:"@site/blog\\2020-06-01-MySQL8.0.20\u6570\u636e\u5e93\u4e0b\u8f7d\u53ca\u5b89\u88c5.md",description:"MySQL8.0\u6570\u636e\u5e93\u8f6f\u4ef6\u4e0b\u8f7d\u53ca\u5b89\u88c5",date:"2020-06-01T00:00:00.000Z",tags:[{label:"MySQL",permalink:"/blog/tags/my-sql"}],title:"MySQL8.0\u6570\u636e\u5e93\u8f6f\u4ef6\u4e0b\u8f7d\u53ca\u5b89\u88c5",readingTime:1.47,truncated:!0,prevItem:{title:"\u524d\u7aef\u5f00\u53d1\u57fa\u672c\u73af\u5883\u914d\u7f6e",permalink:"/blog/Web-env-config"},nextItem:{title:"Docusaurus2 \u5feb\u901f\u5efa\u7ad9\u90e8\u7f72GitHub Pages",permalink:"/blog/quick-site-docusaurus2"}},i=[{value:"1\u3001MySQL\u7248\u672c\u533a\u522b",id:"1\u3001mysql\u7248\u672c\u533a\u522b",children:[]},{value:"2\u3001\u4e0b\u8f7dMySQL",id:"2\u3001\u4e0b\u8f7dmysql",children:[{value:"2.1\u3001\u5b98\u7f51\u4e0b\u8f7d",id:"21\u3001\u5b98\u7f51\u4e0b\u8f7d",children:[]}]},{value:"3\u3001\u5b89\u88c5MySQL",id:"3\u3001\u5b89\u88c5mysql",children:[{value:"3.1\u3001\u89e3\u538b\u538b\u7f29\u5305",id:"31\u3001\u89e3\u538b\u538b\u7f29\u5305",children:[]},{value:"3.2\u3001\u914d\u7f6emy.ini",id:"32\u3001\u914d\u7f6emyini",children:[]},{value:"3.3\u3001\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"33\u3001\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]},{value:"3.4\u3001\u9ed8\u8ba4\u6570\u636e\u5e93",id:"34\u3001\u9ed8\u8ba4\u6570\u636e\u5e93",children:[]},{value:"3.5\u3001\u5b89\u88c5\u670d\u52a1",id:"35\u3001\u5b89\u88c5\u670d\u52a1",children:[]},{value:"3.6\u3001\u542f\u52a8\u670d\u52a1",id:"36\u3001\u542f\u52a8\u670d\u52a1",children:[]},{value:"3.7\u3001\u767b\u5f55MySQL",id:"37\u3001\u767b\u5f55mysql",children:[]},{value:"3.8\u3001\u4fee\u6539\u5bc6\u7801",id:"38\u3001\u4fee\u6539\u5bc6\u7801",children:[]},{value:"3.9\u3001\u9000\u51fa\u6570\u636e\u5e93\u548c\u505c\u6b62\u670d\u52a1",id:"39\u3001\u9000\u51fa\u6570\u636e\u5e93\u548c\u505c\u6b62\u670d\u52a1",children:[]}]}],p={toc:i};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6458\u8981")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"MySQL\u7ba1\u7406\u8f6f\u4ef6\u793e\u533a\u7248\u3001\u4f01\u4e1a\u7248\u3001\u96c6\u7fa4\u7248\u7684\u533a\u522b\uff0c\u5e76\u4ee5MySQL8.0.20\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3001\u5b89\u88c5\u3001\u57fa\u672c\u914d\u7f6e\u505a\u76f8\u5173\u793a\u4f8b..."))),Object(r.b)("h2",{id:"1\u3001mysql\u7248\u672c\u533a\u522b"},"1\u3001MySQL\u7248\u672c\u533a\u522b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u4e0b\u8f7d\u754c\u9762\u4f1a\u6709\u51e0\u4e2a\u7248\u672c\u7684\u9009\u62e9\u3002"),Object(r.b)("p",{parentName:"li"},"\uff081\uff09. MySQL Community Server \u793e\u533a\u7248\u672c\uff0c\u5f00\u6e90\u514d\u8d39\uff0c\u4f46\u4e0d\u63d0\u4f9b\u5b98\u65b9\u6280\u672f\u652f\u6301\u3002"),Object(r.b)("p",{parentName:"li"},"\uff082\uff09. MySQL Enterprise Edition \u4f01\u4e1a\u7248\u672c\uff0c\u9700\u4ed8\u8d39\uff0c\u53ef\u4ee5\u8bd5\u752830\u5929\u3002"),Object(r.b)("p",{parentName:"li"},"\uff083\uff09. MySQL Cluster \u96c6\u7fa4\u7248\uff0c\u5f00\u6e90\u514d\u8d39\u3002\u53ef\u5c06\u51e0\u4e2aMySQL Server\u5c01\u88c5\u6210\u4e00\u4e2aServer\u3002"),Object(r.b)("p",{parentName:"li"},"\uff084\uff09. MySQL Cluster CGE \u9ad8\u7ea7\u96c6\u7fa4\u7248\uff0c\u9700\u4ed8\u8d39\u3002"),Object(r.b)("p",{parentName:"li"},"\uff085\uff09. MySQL Workbench\uff08GUI TOOL\uff09\u4e00\u6b3e\u4e13\u4e3aMySQL\u8bbe\u8ba1\u7684ER/\u6570\u636e\u5e93\u5efa\u6a21\u5de5\u5177\u3002\u5b83\u662f\u8457\u540d\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\u5de5\u5177DBDesigner4\u7684\u7ee7\u4efb\u8005\u3002MySQL Workbench\u53c8\u5206\u4e3a\u4e24\u4e2a\u7248\u672c\uff0c\u5206\u522b\u662f\u793e\u533a\u7248\uff08MySQL Workbench OSS\uff09\u3001\u5546\u7528\u7248\uff08MySQL Workbench SE\uff09\u3002"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"MySQL Community Server \u662f\u5f00\u6e90\u514d\u8d39\u7684\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u901a\u5e38\u7528\u7684MySQL\u7684\u7248\u672c\u3002\u6839\u636e\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u7ec6\u5206\u4e3a\u591a\u4e2a\u7248\u672c\uff0c\u4e0b\u9762\u6211\u4eec\u4ee5windows\u5e73\u53f0\u4e3a\u4f8b\u6765\u8bf4\u660e\u3002")),Object(r.b)("h2",{id:"2\u3001\u4e0b\u8f7dmysql"},"2\u3001\u4e0b\u8f7dMySQL"),Object(r.b)("h3",{id:"21\u3001\u5b98\u7f51\u4e0b\u8f7d"},"2.1\u3001\u5b98\u7f51\u4e0b\u8f7d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7f51\u5740\uff1a",Object(r.b)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/mysql/"},"https://dev.mysql.com/downloads/mysql/")),Object(r.b)("li",{parentName:"ul"},"\u9009\u62e9 MySQL Community Server\uff08\u793e\u533a\u7248\uff09\u8fdb\u5165\u4e0b\u8f7d"),Object(r.b)("li",{parentName:"ul"},"\u9009\u62e9\u4e0b\u8f7d\u7684\u683c\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63a8\u8350\u4e0b\u8f7d\u7b2c\u4e00\u4e2a ZIP Archive \u5185\u7684\u8f6f\u4ef6\u5305\uff0cmysql-xxx-win64.zip\u3002\uff08\u8fd9\u4e2a\u6587\u4ef6\u89e3\u538b\u7f29\u540e\u5373\u53ef\u4f7f\u7528\uff0c\u662f\u7f16\u8bd1\u597d\u7684windows64\u4f4dMySQL\u3002\u9700\u8981\u624b\u5de5\u914d\u7f6e\u3002\uff09")))),Object(r.b)("h2",{id:"3\u3001\u5b89\u88c5mysql"},"3\u3001\u5b89\u88c5MySQL"),Object(r.b)("h3",{id:"31\u3001\u89e3\u538b\u538b\u7f29\u5305"},"3.1\u3001\u89e3\u538b\u538b\u7f29\u5305"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5c06\u538b\u7f29\u5305\u89e3\u538b\u5230\u60f3\u8981\u5c06MySQL\u5b89\u88c5\u7684\u76ee\u5f55\u6700\u540e\u7684\u6839\u76ee\u5f55\u5c31\u662f\u6700\u540e\u5b8c\u6574\u7684\u5b89\u88c5\u76ee\u5f55")),Object(r.b)("h3",{id:"32\u3001\u914d\u7f6emyini"},"3.2\u3001\u914d\u7f6emy.ini"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728\u5b89\u88c5\u76ee\u5f55\u4e2d\u65b0\u5efa my.ini \u7a7a\u6587\u4ef6\u5e76\u5982\u4e0b\u914d\u7f6e\u8be5\u6587\u4ef6"),Object(r.b)("li",{parentName:"ul"},"\u6253\u5f00 \u201dmy.ini\u201c \u6587\u4ef6\uff0c\u590d\u5236\u4e0b\u5217\u5185\u5bb9\uff0c\u8bb0\u5f97\u66ff\u6362 \u3010\u5b89\u88c5\u76ee\u5f55\u3011 \u90e8\u5206\uff0c\u4fdd\u5b58",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"[mysql]  \n# \u8bbe\u7f6e mysql \u5ba2\u6237\u7aef\u9ed8\u8ba4\u5b57\u7b26\u96c6  \ndefault-character-set=utf8  \n\u200b\n[mysqld]  \n#\u8bbe\u7f6e 3306 \u7aef\u53e3  \nport = 3306  \n\u200b\n# \u8bbe\u7f6e mysql \u7684\u5b89\u88c5\u76ee\u5f55  \nbasedir= \u3010\u5b89\u88c5\u76ee\u5f55\u3011\n\u200b\n# \u8bbe\u7f6e mysql \u6570\u636e\u5e93\u7684\u6570\u636e\u7684\u5b58\u653e\u76ee\u5f55  \ndatadir= \u3010\u5b89\u88c5\u76ee\u5f55\u3011\\data  \n\u200b\n# \u5141\u8bb8\u6700\u5927\u8fde\u63a5\u6570  \nmax_connections=200  \n\u200b\n# \u670d\u52a1\u7aef\u4f7f\u7528\u7684\u5b57\u7b26\u96c6\u9ed8\u8ba4\u4e3a 8 \u6bd4\u7279\u7f16\u7801\u7684 latin1 \u5b57\u7b26\u96c6  \ncharacter-set-server=utf8  \n\u200b\n# \u521b\u5efa\u65b0\u8868\u65f6\u5c06\u4f7f\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce  \ndefault-storage-engine=INNODB\n")))),Object(r.b)("h3",{id:"33\u3001\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"3.3\u3001\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9f20\u6807\u9009\u4e2d\u6211\u7684\u7535\u8111\u300b"),Object(r.b)("li",{parentName:"ul"},"\u53f3\u952e\u9009\u62e9\u5c5e\u6027\u300b"),Object(r.b)("li",{parentName:"ul"},"\u9009\u62e9\u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e\u300b"),Object(r.b)("li",{parentName:"ul"},"\u9009\u62e9\u9ad8\u7ea7\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u300b"),Object(r.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e0b\u9009\u62e9\u65b0\u5efa\u300b"),Object(r.b)("li",{parentName:"ul"},"\u53d8\u91cf\u540d\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"MYSQL_HOME"),"\u300b"),Object(r.b)("li",{parentName:"ul"},"\u53d8\u91cf\u503c\uff1aMySQL\u5b89\u88c5\u8def\u5f84\u300b"),Object(r.b)("li",{parentName:"ul"},"\u7f16\u8f91\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e0b\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"Path")," \u53d8\u91cf\u300b"),Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"Path")," \u53d8\u91cf\u4e0b\u65b0\u5efa\u73af\u5883\u53d8\u91cf ",Object(r.b)("inlineCode",{parentName:"li"},"%MYSQL_HOME%\\bin"))),Object(r.b)("h3",{id:"34\u3001\u9ed8\u8ba4\u6570\u636e\u5e93"},"3.4\u3001\u9ed8\u8ba4\u6570\u636e\u5e93"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7528\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"win+x \u9009\u62e9Windows PowerShell\uff08\u7ba1\u7406\u5458\uff09/ \u547d\u4ee4\u63d0\u793a\u7b26\uff08\u7ba1\u7406\u5458\uff09")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5c06\u547d\u4ee4\u597d\u5de5\u5177\u8def\u5f84\u8f6c\u5230MySQL\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684bin\u76ee\u5f55"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"cd D:\\ASystemResources\\ToolsDevelopment\\MySQL\\mysql-8.0.20-winx64\\bin\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u5efa\u7acb\u9ed8\u8ba4\u6570\u636e\u5e93"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"mysqld --initialize-insecure --user=mysql \n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\u2460 \u6b64\u65f6 MySQL \u5efa\u7acb\u4e86\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\uff0c\u7528\u6237\u540d\u4e3a root\uff0c\u5bc6\u7801\u4e3a\u7a7a\u3002",Object(r.b)("br",null),"\n\u2461 \u5982\u679c\u63d0\u793a mysqld \u4e0d\u5b58\u5728\uff0c\u68c0\u67e5\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u3002")))))),Object(r.b)("h3",{id:"35\u3001\u5b89\u88c5\u670d\u52a1"},"3.5\u3001\u5b89\u88c5\u670d\u52a1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8f93\u5165\u4e0b\u5217\u8bed\u53e5\uff0c\u670d\u52a1\u5b89\u88c5\u5b8c\u6210"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"mysqld -install\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\u2460 \u7b2c\u4e00\u6b21\u5b89\u88c5\u7684\u8bdd\u4f1a\u663e\u793a Service successfully installed.",Object(r.b)("br",null),"\n\u2461 \u5df2\u7ecf\u5b89\u88c5\u8fc7\u4e86\uff0c\u4f1a\u663e\u793a The service already exists! ..."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5982\u672a\u6b63\u5e38\u5b89\u88c5\u8bf7\u5148\u79fb\u51fa\u670d\u52a1\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"mysqld -remove\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\u2460 \u79fb\u9664\u6210\u529f\u7684\u8bdd\u4f1a\u663e\u793a Service successfully removed.")))),Object(r.b)("h3",{id:"36\u3001\u542f\u52a8\u670d\u52a1"},"3.6\u3001\u542f\u52a8\u670d\u52a1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"net start mysql \n"))),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230 MySQL \u65e0\u6cd5\u542f\u52a8\uff0c3534\uff0c\u8bf7\u68c0\u67e5\u5982\u4e0b\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\uff081\uff09\u8bf7\u4e0d\u8981\u624b\u52a8\u521b\u5efadata\u76ee\u5f55"),Object(r.b)("li",{parentName:"ul"},"\uff082\uff09my.ini\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u76ee\u5f55\u4e2d\u662f\u5426\u6709t\u5f00\u5934\u7684\u6587\u4ef6\u5939\u5982\u679c\u6709\u5219\u5728\u914d\u7f6e\u8def\u5f84\u662f\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"//")," \u66ff\u6362"),Object(r.b)("li",{parentName:"ul"},"\uff083\uff09my.ini\u6587\u4ef6\u7684\u7f16\u7801\u65b9\u5f0f\u662f\u4e0d\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"ANSI"),"\u683c\u5f0f\u5982\u679c\u4e0d\u662f\u8bf7\u6539\u6210\u8fd9\u4e2a\u683c\u5f0f")))),Object(r.b)("h3",{id:"37\u3001\u767b\u5f55mysql"},"3.7\u3001\u767b\u5f55MySQL"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u56de\u8f66\u540e\u8f93\u5165\u5bc6\u7801"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\u2460 -u \u6307\u7684\u662f\u767b\u5f55\u7684\u7528\u6237\u540d\uff0c-p \u662f\u5bc6\u7801",Object(r.b)("br",null),"\n\u2461 \u7528\u6237\u540d\u9ed8\u8ba4\u4e3a root\uff0c\u6b64\u65f6\u5bc6\u7801\u4e3a\u7a7a")),Object(r.b)("p",{parentName:"li"},"\u6b64\u65f6\u9ed8\u8ba4\u5bc6\u7801\u4e3a\u7a7a\u76f4\u63a5\u56de\u8f66\u5373\u53ef\u767b\u5f55"))),Object(r.b)("h3",{id:"38\u3001\u4fee\u6539\u5bc6\u7801"},"3.8\u3001\u4fee\u6539\u5bc6\u7801"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u767b\u5f55\u540e\u5e94\u7b2c\u4e00\u65f6\u95f4\u4fee\u6539\u5bc6\u7801"),Object(r.b)("li",{parentName:"ul"},"\u8f93\u5165\u4e0b\u5217\u8bed\u53e5\uff0c\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"password")," \u66ff\u6362\u4e3a\u65b0\u5bc6\u7801\uff0c\u4fee\u6539\u5bc6\u7801\u5b8c\u6210",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"\u2460 \u4e3a\u4e86\u907f\u514d\u4e4b\u540e\u51fa\u73b0\u767b\u5f55\u95ee\u9898\uff0c\u767b\u9646\u540e\u7b2c\u4e00\u4ef6\u4e8b\u60c5\u5e94\u8be5\u662f\u4fee\u6539\u5bc6\u7801\u3002",Object(r.b)("br",null),"\n\u2461 password \u662f\u4f60\u7684\u65b0\u5bc6\u7801\u90e8\u5206\uff0c\u81ea\u884c\u4fee\u6539\u3002",Object(r.b)("br",null),"\n\u2462 \u6ce8\u610f\u5bc6\u7801\u5728\u5355\u5f15\u53f7\u5185\u90e8 ",Object(r.b)("inlineCode",{parentName:"p"},"password"),Object(r.b)("br",null),"\n\u2463 \u6ce8\u610f\u7ed3\u5c3e\u7684\u5206\u53f7 ",Object(r.b)("inlineCode",{parentName:"p"},";"),Object(r.b)("br",null))))),Object(r.b)("h3",{id:"39\u3001\u9000\u51fa\u6570\u636e\u5e93\u548c\u505c\u6b62\u670d\u52a1"},"3.9\u3001\u9000\u51fa\u6570\u636e\u5e93\u548c\u505c\u6b62\u670d\u52a1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9000\u51fa\u6570\u636e\u5e93",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"quit;\n"))),Object(r.b)("li",{parentName:"ul"},"\u505c\u6b62\u6570\u636e\u5e93\u670d\u52a1",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sql"},"net stop mysql\n")),"\u53c2\u8003\u6587\u7ae0\uff1a",Object(r.b)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/112765207"},"https://zhuanlan.zhihu.com/p/112765207"))))}o.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),o=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),s=a,O=m["".concat(b,".").concat(s)]||m[s]||u[s]||r;return n?l.a.createElement(O,c(c({ref:t},p),{},{components:n})):l.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<r;p++)b[p]=n[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);