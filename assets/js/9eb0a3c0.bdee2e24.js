"use strict";(self.webpackChunkz_4_c=self.webpackChunkz_4_c||[]).push([[1990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,u={unversionedId:"onboarding/Redux Toolkit",id:"onboarding/Redux Toolkit",title:"Redux Toolkit",description:"Redux Toolkit",source:"@site/docs/onboarding/Redux Toolkit.md",sourceDirName:"onboarding",slug:"/onboarding/Redux Toolkit",permalink:"/docs/onboarding/Redux Toolkit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/Redux Toolkit.md",tags:[],version:"current",frontMatter:{}},l={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Redux Toolkit\nRedux Toolkit est un outil qui facilite la configuration et l'utilisation de Redux dans une application. Il fournit une structure de base pour cr\xe9er un magasin Redux et utilise des fonctionnalit\xe9s avanc\xe9es de JavaScript, telles que les propri\xe9t\xe9s par d\xe9faut et les destructurations, pour simplifier la configuration."),(0,o.kt)("p",null,"La structure de base de Redux Toolkit est la suivante:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"createSlice: permet de cr\xe9er un r\xe9ducteur et une action pour une partie sp\xe9cifique de l'\xe9tat de l'application."),(0,o.kt)("li",{parentName:"ul"},"configureStore: permet de configurer le magasin global de l'application, en utilisant des options telles que les middlewares et les enhancers."),(0,o.kt)("li",{parentName:"ul"},"useDispatch, useSelector: des hooks pour faciliter l'acc\xe8s aux donn\xe9es de l'application et la mise \xe0 jour de l'\xe9tat.")),(0,o.kt)("p",null,"En utilisant Redux Toolkit, vous pouvez cr\xe9er facilement un magasin Redux qui est facile \xe0 comprendre et \xe0 maintenir. Il vous permet \xe9galement de vous concentrer sur la logique m\xe9tier de votre application plut\xf4t que sur la configuration de Redux."),(0,o.kt)("p",null,"Voici un exemple simple d'utilisation de Redux Toolkit dans un projet React :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installation des d\xe9pendances ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install @reduxjs/toolkit\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un fichier d'action dans lequel d\xe9finir les actions et les r\xe9ducteurs pour votre \xe9tat ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Counter.js\nimport React from 'react';\nimport { useSelector, useDispatch } from 'react-redux';\nimport { increment, decrement } from './counterSlice';\n\nfunction Counter() {\n  const value = useSelector(state => state.counter.value);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <p>Value: {value}</p>\n      <button onClick={() => dispatch(increment())}>+</button>\n      <button onClick={() => dispatch(decrement())}>-</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dans votre fichier index.js , importez le store et utilisez-le dans la racine de votre application ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// index.js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Provider } from 'react-redux';\nimport { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\nimport Counter from './Counter';\n\nconst store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});\n\nReactDOM.render(\n  <Provider store={store}>\n    <Counter />\n  </Provider>,\n  document.getElementById('root')\n);\n\n")),(0,o.kt)("p",null,"Plus d\u2019informations :",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/edonec/redux-can-be-made-easier-with-redux-toolkit-b1d2d17b90ba"},"https://medium.com/edonec/redux-can-be-made-easier-with-redux-toolkit-b1d2d17b90ba"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/nerd-for-tech/introduction-of-redux-toolkit-c96b404ffdd3"},"https://medium.com/nerd-for-tech/introduction-of-redux-toolkit-c96b404ffdd3")))}d.isMDXComponent=!0}}]);