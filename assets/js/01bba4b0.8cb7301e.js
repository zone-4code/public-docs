"use strict";(self.webpackChunkz_4_c=self.webpackChunkz_4_c||[]).push([[7094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,m(m({ref:t},i),{},{components:n})):r.createElement(f,m({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,m[1]=l;for(var c=2;c<a;c++)m[c]=n[c];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},m=void 0,l={unversionedId:"onboarding/R\xe8gles de nommage \xe0 respecter",id:"onboarding/R\xe8gles de nommage \xe0 respecter",title:"R\xe8gles de nommage \xe0 respecter",description:"Il existe plusieurs conventions de nommage couramment utilis\xe9es dans la communaut\xe9 React :",source:"@site/docs/onboarding/R\xe8gles de nommage \xe0 respecter.md",sourceDirName:"onboarding",slug:"/onboarding/R\xe8gles de nommage \xe0 respecter",permalink:"/ docs-public/docs/onboarding/R\xe8gles de nommage \xe0 respecter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/R\xe8gles de nommage \xe0 respecter.md",tags:[],version:"current",frontMatter:{}},s={},c=[],i={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il existe plusieurs conventions de nommage couramment utilis\xe9es dans la communaut\xe9 React :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des composants : Les noms de composants doivent \xeatre en camelCase et commencer par une lettre majuscule. Par exemple, "MyComponent" ou "FormInput".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des propri\xe9t\xe9s : Les propri\xe9t\xe9s d\'un composant doivent \xeatre en camelCase et commencer par une lettre minuscule. Par exemple, "myProp" ou "formValue".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des \xe9tats : Les \xe9tats d\'un composant doivent \xeatre en camelCase et commencer par une lettre minuscule. Par exemple, "myState" ou "formIsValid".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des m\xe9thodes : Les m\xe9thodes d\'un composant doivent \xeatre en camelCase et commencer par une lettre minuscule. Par exemple, "myMethod" ou "handleSubmit".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des handlers : Les handlers doivent \xeatre nomm\xe9s en utilisant le pr\xe9fixe "handle" suivi du nom de l\'\xe9v\xe9nement, en camelCase. Par exemple, "handleClick" ou "handleChange".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Nommage des fonctions de rappel : Les fonctions de rappel doivent \xeatre nomm\xe9es en utilisant le pr\xe9fixe "on" suivi du nom de l\'\xe9v\xe9nement, en camelCase. Par exemple, "onClick" ou "onChange".'))))}p.isMDXComponent=!0}}]);