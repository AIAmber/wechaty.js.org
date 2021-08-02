"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9756],{5318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||p;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},517:function(e,t,r){var a=r(7378);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},4535:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7378),n=r(4956);var p=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(8944),o="tabItem_c0e5",u="tabItemActive_28AG";var l=37,s=39;var c=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,c=e.values,m=e.groupId,d=e.className,h=p(),f=h.tabGroupChoices,v=h.setTabGroupChoices,g=(0,a.useState)(n),y=g[0],b=g[1],k=a.Children.toArray(e.children),w=[];if(null!=m){var x=f[m];null!=x&&x!==y&&c.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,r=w.indexOf(t),a=c[r].value;b(a),null!=m&&(v(m,a),setTimeout((function(){var e,r,a,n,p,i,o,l;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,p=e.right,i=window,o=i.innerHeight,l=i.innerWidth,r>=0&&p<=l&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},P=function(e){var t,r;switch(e.keyCode){case s:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case l:var n=w.indexOf(e.target)-1;r=w[n]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:P,onFocus:N,onClick:N},r)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4956:function(e,t,r){var a=(0,r(7378).createContext)(void 0);t.Z=a},611:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=r(5773),n=r(808),p=(r(7378),r(5318)),i=r(4535),o=r(517),u=["components"],l={title:"Puppet Provider: XP",sidebar_label:"XP"},s=void 0,c={unversionedId:"puppet-providers/xp",id:"puppet-providers/xp",isDocsHomePage:!1,title:"Puppet Provider: XP",description:"Wechaty Puppet XP",source:"@site/docs/puppet-providers/xp.mdx",sourceDirName:"puppet-providers",slug:"/puppet-providers/xp",permalink:"/docs/puppet-providers/xp",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/xp.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627921023,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Puppet Provider: XP",sidebar_label:"XP"},sidebar:"docs",previous:{title:"WeChat4U",permalink:"/docs/puppet-providers/wechat4u"},next:{title:"Service",permalink:"/docs/puppet-providers/service"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,u);return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"xp"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-XP-blueviolet",alt:"Wechaty Puppet XP"}))),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2021/07-puppet-laozhang-wechat-bot/wechat_bot.png",alt:"Wechaty Puppet XP"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-xp"},(0,p.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-xp.svg",alt:"NPM Version"})),"\n",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-xp?activeTab=versions"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-xp/next.svg",alt:"npm (tag)"}))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Repo: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp"},"https://github.com/wechaty/wechaty-puppet-xp")),(0,p.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-xp/issues"},"https://github.com/wechaty/wechaty-puppet-xp/issues"))),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("p",null,"Under construction ... Alpha stage."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Support Windows WeChat"),(0,p.kt)("li",{parentName:"ul"},"Hook/Call powered by ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/huan/sidecar"},"Sidecar"))),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Requires ",(0,p.kt)("a",{parentName:"li",href:"http://dl.softmgr.qq.com/original/im/WeChatSetup_3.3.0.115.exe"},"Windows WeChat 3.3.0.115"))),(0,p.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,p.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nexport WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n"))),(0,p.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-xp\nset WECHATY_PUPPET=wechaty-puppet-xp\nnpm start\n")))),(0,p.kt)("h2",{id:"blogs"},"Blogs"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/puppet-laozhang-wechat-bot/"},"\u559c\u8baf\uff1a\u4f7f\u7528Windows\u5fae\u4fe1\u684c\u9762\u7248\u534f\u8bae\u767b\u5f55\uff0cwechaty\u514d\u8d39\u7248\u534f\u8bae\u5373\u5c06\u767b\u573a, @atorber, Jul 05, 2021")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/13/wechaty-puppet-xp-start-up/"},"\u5168\u65b0\u7684Windows puppet\u9879\u76eewechaty-puppet-xp\u542f\u52a8, @atorber, Jul 13, 2021")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/05/code-like-poetry-bot-like-song/"},"code\u5982\u8bd7\uff0cbot\u5982\u6b4c\uff0c\u7531Wechaty\u5f15\u53d1\u7684\u4e00\u4e2a\u5c0f\u767d\u5192\u9669\u4e4b\u65c5, @\u8001\u5f20\u5b66\u6280\u672f, Jul 05, 2021"))),(0,p.kt)("h2",{id:"maintainers"},"Maintainers"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/atorber/"},"@atorber")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/cixingguangming55555/"},"@cixingguangming55555"))))}h.isMDXComponent=!0},8944:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);