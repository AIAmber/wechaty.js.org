"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7266],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],s={title:"Ding Dong Bot"},c=void 0,d={unversionedId:"examples/basic/ding-dong-bot",id:"examples/basic/ding-dong-bot",isDocsHomePage:!1,title:"Ding Dong Bot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/ding-dong-bot.md",sourceDirName:"examples/basic",slug:"/examples/basic/ding-dong-bot",permalink:"/docs/examples/basic/ding-dong-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/basic/ding-dong-bot.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627921023,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Ding Dong Bot"},sidebar:"docs",previous:{title:"World's shortest Chatbot",permalink:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines"},next:{title:"Contact Bot",permalink:"/docs/examples/basic/contact-bot"}},l=[{value:"Try out the bot",id:"try-out-the-bot",children:[]},{value:"Building the bot",id:"building-the-bot",children:[]},{value:"Bot demonstration",id:"bot-demonstration",children:[]},{value:"References",id:"references",children:[]}],p={toc:l};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,a.kt)("p",null,"Wechaty ",(0,a.kt)("strong",{parentName:"p"},"Ding Dong bot")," is a simple bot which replies with a ",(0,a.kt)("inlineCode",{parentName:"p"},"dong")," whenever it recieves a ",(0,a.kt)("inlineCode",{parentName:"p"},"ding"),"."),(0,a.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"},(0,a.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-ding-dong-bot"}))),(0,a.kt)("p",null,"You can try out the ",(0,a.kt)("strong",{parentName:"p"},"Wechaty Ding Dong bot")," using this interactive CodeSandbox."),(0,a.kt)("p",null,"Just scan the generated QR code with ",(0,a.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,a.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?fontsize=12&hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,a.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,a.kt)("p",null,"If you want to run ",(0,a.kt)("inlineCode",{parentName:"p"},"ding-dong bot")," locally and build it from scratch you can refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/running-locally"},"here"),"."),(0,a.kt)("h2",{id:"bot-demonstration"},"Bot demonstration"),(0,a.kt)("p",null,"For the demo, the bot is started on a device using ",(0,a.kt)("strong",{parentName:"p"},"WhatsApp"),". You can see in the below screenshot it responds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ding")," message with a ",(0,a.kt)("inlineCode",{parentName:"p"},"dong"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ding Dong Bot Demo",src:n(2330).Z})),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}u.isMDXComponent=!0},2330:function(e,t,n){t.Z=n.p+"assets/images/wechaty-ding-dong-bot-demo-422d83836c265eaa62d0330029473e30.png"}}]);