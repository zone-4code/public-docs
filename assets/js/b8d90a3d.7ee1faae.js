"use strict";(self.webpackChunkz_4_c=self.webpackChunkz_4_c||[]).push([[1854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"introduction",title:"Introduction"},s="Bienvenue dans notre plateforme",a={unversionedId:"onboarding/introduction",id:"onboarding/introduction",title:"Introduction",description:"Notre plateforme a pour objectif de faciliter l'apprentissage des comp\xe9tences en informatique en offrant une exp\xe9rience interactive et collaborative. Les utilisateurs pourront consulter les cours pdf, passer les quizzs, les examens, chatter avec les collaborateurs et les enseignants, ainsi qu'un module visio pour les entretiens individuels.",source:"@site/docs/onboarding/introduction.md",sourceDirName:"onboarding",slug:"/onboarding/introduction",permalink:"/public-docs/docs/onboarding/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"OnboardingSidebar",next:{title:"Presentation",permalink:"/public-docs/docs/onboarding/Presentation"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bienvenue-dans-notre-plateforme"},"Bienvenue dans notre plateforme"),(0,o.kt)("p",null,"Notre plateforme a pour objectif de faciliter l'apprentissage des comp\xe9tences en informatique en offrant une exp\xe9rience interactive et collaborative. Les utilisateurs pourront consulter les cours pdf, passer les quizzs, les examens, chatter avec les collaborateurs et les enseignants, ainsi qu'un module visio pour les entretiens individuels."),(0,o.kt)("h1",{id:"technologies-utilis\xe9es"},"Technologies utilis\xe9es"),(0,o.kt)("p",null,"Notre plateforme est construite en utilisant les technologies suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Une architecture microservices pour s\xe9parer les diff\xe9rentes fonctionnalit\xe9s de notre plateforme."),(0,o.kt)("li",{parentName:"ul"},"Le backend est construit en javascript (node.js, fastify, grpc)"),(0,o.kt)("li",{parentName:"ul"},"Le frontend est construit en react.js avec une template nomm\xe9e vuex bas\xe9e sur material ui."),(0,o.kt)("li",{parentName:"ul"},"Nous utilisons \xe9galement docker et docker-compose pour notre environnement de d\xe9veloppement, avec Github comme plateforme collaborative.")),(0,o.kt)("h1",{id:"processus-de-contribution"},"Processus de contribution"),(0,o.kt)("p",null,"Pour contribuer \xe0 notre projet, vous devez d'abord fork le projet qui se trouve dans une organisation priv\xe9e. Ensuite, vous cr\xe9ez une branche pour les modifications que vous souhaitez apporter. Une fois le travail termin\xe9, vous faites une pull request (PR) qui doit \xeatre valid\xe9e par le tech lead, le QA et un autre d\xe9veloppeur. La PR passera \xe9galement des tests de lint et des tests automatis\xe9s qui feront rejeter la PR si elle n'est pas valide. Nous utilisons les conventions de conventional commits pour le naming des commits et des PR. Des exemples simples pour expliquer ces conventions seront mis \xe0 disposition."),(0,o.kt)("h1",{id:"normes-de-code"},"Normes de code"),(0,o.kt)("p",null,'Il est important de respecter les normes de code pour maintenir la qualit\xe9 et la lisibilit\xe9 du code. Les normes de code pour le frontend se trouvent dans la section "frontend" et celles pour le backend dans la section "backend".'),(0,o.kt)("h1",{id:"environnements-de-d\xe9veloppement-et-de-production"},"Environnements de d\xe9veloppement et de production"),(0,o.kt)("p",null,"Nous avons un dockerfile pour l'environnement de d\xe9veloppement qui permet le hot reloading pour d\xe9velopper et voir les modifications en direct. Et un autre pour l'environnement de production. Vous pouvez trouver des snippets de ces deux dockerfiles d'un boilerplate create next app pour vous aider \xe0 comprendre et simplifier la configuration de ces environnements."))}p.isMDXComponent=!0}}]);