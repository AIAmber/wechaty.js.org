"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5286],{5318:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=o(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,u(u({ref:t},l),{},{components:a})):n.createElement(m,u({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,u=new Array(i);u[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var o=2;o<i;o++)u[o]=a[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1835:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return d}});var n=a(5773),r=a(808),i=(a(7378),a(5318)),u=["components"],c={title:"Using Redux with Wechaty"},s=void 0,o={unversionedId:"tutorials/using-redux-with-wechaty",id:"tutorials/using-redux-with-wechaty",isDocsHomePage:!1,title:"Using Redux with Wechaty",description:"NPM Version",source:"@site/docs/tutorials/using-redux-with-wechaty.md",sourceDirName:"tutorials",slug:"/tutorials/using-redux-with-wechaty",permalink:"/docs/tutorials/using-redux-with-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/using-redux-with-wechaty.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627921023,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Using Redux with Wechaty"}},l=[{value:"What is Redux",id:"what-is-redux",children:[]},{value:"Why use Redux with Wechaty",id:"why-use-redux-with-wechaty",children:[]},{value:"What is Ducks",id:"what-is-ducks",children:[]},{value:"Usage",id:"usage",children:[{value:"Install",id:"install",children:[]},{value:"Vanilla Redux with Wechaty Redux Plugin",id:"vanilla-redux-with-wechaty-redux-plugin",children:[]},{value:"Ducks Proposal Style for Wechaty Redux Plugin",id:"ducks-proposal-style-for-wechaty-redux-plugin",children:[]},{value:"Ducks Api",id:"ducks-api",children:[]}]}],p={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-redux?color=brightgreen",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-redux/actions?query=workflow%3ANPM"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-redux/workflows/NPM/badge.svg",alt:"NPM"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"Wrap Wechaty with Redux Actions ","&"," Reducers for Easy State Management"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://wechaty.github.io/wechaty-redux/images/wechaty-redux.png",alt:"Wechaty Redux"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Image Source: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1"},"Managing your React state with Redux"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/wechaty-redux.svg?style=flat-square",alt:"Downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,i.kt)("h2",{id:"what-is-redux"},"What is Redux"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org"},"Redux")," is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments"),(0,i.kt)("h2",{id:"why-use-redux-with-wechaty"},"Why use Redux with Wechaty"),(0,i.kt)("p",null,"Redux is used for application state management."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"makes the state predictable"),(0,i.kt)("li",{parentName:"ul"},"easier to trace which action causes any change"),(0,i.kt)("li",{parentName:"ul"},"makes it easier to test, maintain and debug")),(0,i.kt)("h2",{id:"what-is-ducks"},"What is Ducks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"\ud83e\udd86\ud83e\udd86\ud83e\udd86Ducks is a Reducer Bundles Manager that Implementing the Redux Ducks Modular Proposal with Great Convenience."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Image Credit: ",(0,i.kt)("a",{parentName:"p",href:"https://www.alamy.com/cute-duck-and-little-ducks-over-white-background-colorful-design-vector-illustration-image185379753.html"},"Alamy"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/erikras/ducks-modular-redux"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducks%202015-yellow",alt:"Ducks Modular Proposal"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alexnm/re-ducks"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Re--Ducks%202016-orange",alt:"Re-Ducks Extended"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--ducksify-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify%202020-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"Ducks offers a method of handling redux module packaging, installing, and running with your Redux store, with middleware support."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks"},"Ducks")," is a Reducer Bundles Manager that Implements the Redux Ducks Modular Proposal with Great Convenience. It offers a method of handling redux module packaging, installing, and running with your Redux store, with middleware support."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-redux\n")),(0,i.kt)("h3",{id:"vanilla-redux-with-wechaty-redux-plugin"},"Vanilla Redux with Wechaty Redux Plugin"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Vanilla Redux means using plain Redux without any additional libraries like Ducks.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createStore,\n  applyMiddleware,\n}                         from 'redux'\nimport {\n  createEpicMiddleware,\n  combineEpics,\n}                         from 'redux-observable'\nimport { Wechaty }        from 'wechaty'\nimport {\n  WechatyRedux,\n  Api,\n}                         from 'wechaty-redux'\n\n// 1. Configure Store with RxJS Epic Middleware for Wechaty Ducks API\n\nconst epicMiddleware = createEpicMiddleware()\n\nconst store = createStore(\n  Api.default,\n  applyMiddleware(epicMiddleware),\n)\n\nconst rootEpic = combineEpics(...Object.values(Api.epics))\nepicMiddleware.run(rootEpic)\n\n// 2. Instanciate Wechaty and Install Redux Plugin\n\nconst bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })\nbot.use(WechatyRedux({ store }))\n\n// 3. Using Redux Store with Wechaty Ducks API!\n\nstore.subscribe(() => console.info(store.getState()))\n\nstore.dispatch(Api.actions.ding(bot.id, 'dispatch a ding action'))\n\n// The above code \ud83d\udc46 is exactly do the same thing with the following code \ud83d\udc47 :\n\nApi.operations.ding(store.dispatch)(bot.id, 'call ding from operations')\n")),(0,i.kt)("h3",{id:"ducks-proposal-style-for-wechaty-redux-plugin"},"Ducks Proposal Style for Wechaty Redux Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { Ducks }    from 'ducks'\nimport {\n  WechatyRedux,\n  Api,\n}                   from 'wechaty-redux'\n\n// 1. Ducksify Wechaty Redux API\n\nconst ducks = new Ducks({ wechaty: Api })\nconst store = ducks.configureStore()\n\n// 2. Instanciate Wechaty with Redux Plugin\n\nconst bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })\nbot.use(WechatyRedux({ store }))\n\n// 3. Using Redux Store with Wechaty Ducks API!\n//  (With the Power of Ducks / Ducksify)\n\nconst wechatyDuck = ducks.ducksify('wechaty')\n\nstore.subscribe(() => console.info(store.getState()))\nwechatyDuck.operations.ding(bot.id, 'Ducksify Style ding!')\n")),(0,i.kt)("h3",{id:"ducks-api"},"Ducks Api"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Redux-Ducksify-yellowgreen",alt:"Ducksify Extension"}))),(0,i.kt)("p",null,"Ducks is very easy to use, because one of the goals of designing it is to maximize the convenience. To know more about the Ducks Api,please refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface"},"here"),"."))}d.isMDXComponent=!0}}]);