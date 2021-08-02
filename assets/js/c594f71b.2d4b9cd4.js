"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3155,6170],{5318:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return h}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:e},p),{},{components:a})):n.createElement(m,i({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},517:function(t,e,a){var n=a(7378);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},4535:function(t,e,a){a.d(e,{Z:function(){return d}});var n=a(7378),r=a(4956);var o=function(){var t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=a(8944),l="tabItem_c0e5",s="tabItemActive_28AG";var c=37,p=39;var d=function(t){var e=t.lazy,a=t.block,r=t.defaultValue,d=t.values,u=t.groupId,h=t.className,m=o(),g=m.tabGroupChoices,y=m.setTabGroupChoices,v=(0,n.useState)(r),k=v[0],f=v[1],w=n.Children.toArray(t.children),b=[];if(null!=u){var N=g[u];null!=N&&N!==k&&d.some((function(t){return t.value===N}))&&f(N)}var T=function(t){var e=t.currentTarget,a=b.indexOf(e),n=d[a].value;f(n),null!=u&&(y(u,n),setTimeout((function(){var t,a,n,r,o,i,l,c;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,o=t.right,i=window,l=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&r<=l&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},x=function(t){var e,a;switch(t.keyCode){case p:var n=b.indexOf(t.target)+1;a=b[n]||b[0];break;case c:var r=b.indexOf(t.target)-1;a=b[r]||b[b.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},d.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===e}),key:e,ref:function(t){return b.push(t)},onKeyDown:x,onFocus:T,onClick:T},a)}))),e?(0,n.cloneElement)(w.filter((function(t){return t.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==k})}))))}},4956:function(t,e,a){var n=(0,a(7378).createContext)(void 0);e.Z=n},7253:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var n=a(5773),r=a(808),o=(a(7378),a(5318)),i=a(4822),l=["components"],s={slug:"/polyglot/typescript/",title:"TypeScript Wechaty",sidebar_label:"TypeScript"},c=void 0,p={unversionedId:"polyglot/typescript/overview",id:"polyglot/typescript/overview",isDocsHomePage:!1,title:"TypeScript Wechaty",description:"TypeScript Wechaty",source:"@site/docs/polyglot/typescript/overview.md",sourceDirName:"polyglot/typescript",slug:"/polyglot/typescript/",permalink:"/docs/polyglot/typescript/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/overview.md",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627921023,formattedLastUpdatedAt:"8/2/2021",frontMatter:{slug:"/polyglot/typescript/",title:"TypeScript Wechaty",sidebar_label:"TypeScript"},sidebar:"docs",previous:{title:"OpenAPI",permalink:"/docs/polyglot/openapi/"},next:{title:"Python",permalink:"/docs/polyglot/python/"}},d=[{value:"Quick Started",id:"quick-started",children:[{value:"1. Gitpod \u2764\ufe0f  Wechaty",id:"1-gitpod-\ufe0f--wechaty",children:[]},{value:"2. Google Cloud Shell",id:"2-google-cloud-shell",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Install",id:"install",children:[]},{value:"World&#39;s shortest chatbot code",id:"worlds-shortest-chatbot-code",children:[]},{value:"Getting Started",id:"getting-started-1",children:[]},{value:"Maintainers",id:"maintainers",children:[]},{value:"History",id:"history",children:[]},{value:"Docs",id:"docs",children:[]},{value:"Badge",id:"badge",children:[]},{value:"Contribute",id:"contribute",children:[]}],u={toc:d};function h(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-TypeScript-blue",alt:"TypeScript Wechaty"}))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"TypeScript is the language that Wechaty ecosystem built on."))),(0,o.kt)("h2",{id:"quick-started"},"Quick Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),(0,o.kt)("h3",{id:"1-gitpod-\ufe0f--wechaty"},"1. Gitpod \u2764\ufe0f  Wechaty"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod",alt:"GitPod Ready-to-Code"}))),(0,o.kt)("p",null,"Use Gitpod to run our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Wechaty Getting Started ding-dong BOT")," instantly inside your browser!"),(0,o.kt)("p",null,"Learn more from blog post: ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/06/wechaty-getting-started-without-leave-your-browser/"},"Getting Started Without Leave Your Browser: Wechaty \u2764\ufe0f Gitpod")),(0,o.kt)("h3",{id:"2-google-cloud-shell"},"2. Google Cloud Shell"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},(0,o.kt)("img",{parentName:"a",src:"https://gstatic.com/cloudssh/images/open-btn.svg",alt:"Open in Cloud Shell"}))),(0,o.kt)("p",null,"The Google Cloud Shell should open our tutorial in the right panel for you to follow and finish the tutorials easily."),(0,o.kt)("p",null,"Learn more from blog post: ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/"},"Google Cloud Shell Tutorials for Wechaty")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(i.default,{mdxType:"NodeInstall"}),(0,o.kt)("h2",{id:"worlds-shortest-chatbot-code"},"World's shortest chatbot code"),(0,o.kt)("p",null,"6 lines of JavaScript/TypeScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nWechaty.instance()\n  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n  .on('login',            user => console.log(`User ${user} logged in`))\n  .on('message',       message => console.log(`Message: ${message}`))\n  bot.start()\n")),(0,o.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,o.kt)("p",null,"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan")," Huan"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/lijiarui"},"@lijiarui")," Rui")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2016/12/03/welcome-to-wechaty/"},"Welcome to Wechaty, Huan, Dec 3, 2016")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2016/12/10/try-to-write-wexinrobot/"},"\u4e00\u4e2a\u59d1\u5a18\u5982\u4f55\u75286\u884c\u4ee3\u7801\u5199\u51fa\u5fae\u4fe1\u804a\u5929\u673a\u5668\u4eba, Rui, Dec, 2016")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2017/01/06/wechaty-101-presentation/"},"Wechaty 101: from v0.0 to v0.7, Huan, Dec, 2016")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2017/01/01/getting-started-wechaty/"},"Getting Started with Wechaty - Live Coding Tutorial(outdated), Rui, Jan, 2017")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2017/04/21/wechaty-meeting-dinner/"},"Wechaty Contributor Dinner, Yang, Apr, 2017"))),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.github.io/wechaty/"},"https://wechaty.github.io/wechaty/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/howto/"},"Wechaty How-to Guides"))),(0,o.kt)("h2",{id:"badge"},"Badge"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-TypeScript-blue",alt:"TypeScript Wechaty"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"[![TypeScript Wechaty](https://img.shields.io/badge/Wechaty-TypeScript-blue)](https://github.com/wechaty/wechaty)\n")),(0,o.kt)("h2",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member, ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/2zpi2XG"},"read our Meeting Notes")," to learn what we discussed in the past, join our meeting(you are welcome!), or star & fork ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},"Wechaty GitHub repo")," right now!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read & create an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues"},"issues")),(0,o.kt)("li",{parentName:"ul"},"Read & create a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/pulls"},"pull requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/contributing/blog"},"Publish blog post")),(0,o.kt)("li",{parentName:"ul"},"etc.")))}h.isMDXComponent=!0},4822:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(5773),r=a(808),o=(a(7378),a(5318)),i=a(4535),l=a(517),s=["components"],c={},p=void 0,d={unversionedId:"polyglot/typescript/transclusions/install",id:"polyglot/typescript/transclusions/install",isDocsHomePage:!1,title:"install",description:"<Tabs",source:"@site/docs/polyglot/typescript/transclusions/install.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/install",permalink:"/docs/polyglot/typescript/transclusions/install",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/install.mdx",version:"current",lastUpdatedBy:"Rohitesh Kumar Jain",lastUpdatedAt:1627921023,formattedLastUpdatedAt:"8/2/2021",frontMatter:{}},u=[{value:"Verify",id:"verify",children:[]}],h={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\nnvm install node\nnvm use node\n\n# Install build tools\nsudo apt-get install build-essential\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"See Also")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://nvm.sh/"},"Node Version Manager")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Installing Node.js via package manager")))))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n# Build tools\nbrew install make\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"See Also")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Download the Node.js")))))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"choco install nodejs\n\n# Install build tools\nchoco install make\nnpm install --global windows-build-tools\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"See Also")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Download the Node.js")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/felixrieseberg/windows-build-tools#readme"},"Windows-Build-Tools"))))))),(0,o.kt)("h3",{id:"verify"},"Verify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"node --version\n// Output: v12.16.3 (or above)\nnpm --version\n// Output: 6.14.4 (or above)\n")))}m.isMDXComponent=!0},8944:function(t,e,a){function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}a.d(e,{Z:function(){return r}})}}]);