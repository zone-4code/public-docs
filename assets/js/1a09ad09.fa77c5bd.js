"use strict";(self.webpackChunkz_4_c=self.webpackChunkz_4_c||[]).push([[2281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l='Releases[\xb6](#releases "Lien permanent vers ce titre")',o={unversionedId:"onboarding/Releases",id:"onboarding/Releases",title:'Releases[\xb6](#releases "Lien permanent vers ce titre")',description:'releases "Lien permanent vers ce titre")',source:"@site/docs/onboarding/Releases.md",sourceDirName:"onboarding",slug:"/onboarding/Releases",permalink:"/ /docs-public/docs/onboarding/Releases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/Releases.md",tags:[],version:"current",frontMatter:{},sidebar:"OnboardingSidebar",previous:{title:'Hotfix[\xb6](#hotfix "Lien permanent vers ce titre")',permalink:"/ /docs-public/docs/onboarding/Hotfix"},next:{title:"Configuration initiale",permalink:"/ /docs-public/docs/onboarding/configuration"}},s={},u=[{value:"Cr\xe9ation\xb6",id:"cr\xe9ationlien-permanent-vers-ce-titre",level:2},{value:"Cycle de vie\xb6",id:"cycle-de-vielien-permanent-vers-ce-titre",level:2},{value:"Pull request\xb6",id:"pull-requestlien-permanent-vers-ce-titre",level:2},{value:"Finalisation\xb6",id:"finalisationlien-permanent-vers-ce-titre",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releaseslien-permanent-vers-ce-titre"},"Releases",(0,a.kt)("a",{parentName:"h1",href:"#releases",title:"Lien permanent vers ce titre"},"\xb6")),(0,a.kt)("p",null,"Avertissement"),(0,a.kt)("p",null,"Prenez garde \xe0 ce que votre branche ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," soit bien \xe0 jour avant de cr\xe9er une release, et que vos branche ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," soient toutes deux \xe0 jour avant de la terminer !"),(0,a.kt)("p",null,"Vous aurez recours \xe0 la fonctionnalit\xe9 release pour publier de nouvelles versions ",(0,a.kt)("em",{parentName:"p"},"mineures")," ou ",(0,a.kt)("em",{parentName:"p"},"majeures"),", mais pas pour les ",(0,a.kt)("em",{parentName:"p"},"patches"),". Ceci est pr\xe9vu pour publier de nouvelles versions depuis la branche ",(0,a.kt)("inlineCode",{parentName:"p"},"develop"),"."),(0,a.kt)("p",null,"Note"),(0,a.kt)("p",null,"Vous pouvez avoir plusieurs release sur un m\xeame projet, mais en toute honn\xeatet\xe9, je ne parviens pas \xe0 trouver une cas de figure o\xf9 ce serait r\xe9ellement utile. \xc0 vous de voir ;)"),(0,a.kt)("h2",{id:"cr\xe9ationlien-permanent-vers-ce-titre"},"Cr\xe9ation",(0,a.kt)("a",{parentName:"h2",href:"#creation",title:"Lien permanent vers ce titre"},"\xb6")),(0,a.kt)("p",null,"Just as ",(0,a.kt)("a",{parentName:"p",href:"https://zone-4code.github.io/docs-public/"},"hotfixes"),", the branch name must be the version it will become. Let\u2019s say we want to release a new ",(0,a.kt)("em",{parentName:"p"},"minor")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.0"),":"),(0,a.kt)("p",null,"Lorsque vous utilisez des extensions git-flow :\n$ git flow release start 1.4.0"),(0,a.kt)("p",null,"Sans les extensions git-flow :\ngit checkout develop\ngit checkout -b release/0.1.0"),(0,a.kt)("p",null,"Ce qui r\xe9alisera automatiquement les t\xe2ches suivantes :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cr\xe9ation d\u2019une nouvelle branche nomm\xe9e ",(0,a.kt)("inlineCode",{parentName:"li"},"release/1.4.0")," depuis la branche ",(0,a.kt)("inlineCode",{parentName:"li"},"develop"),","),(0,a.kt)("li",{parentName:"ol"},"r\xe9cup\xe9ration (",(0,a.kt)("inlineCode",{parentName:"li"},"checkout"),") de la branche ",(0,a.kt)("inlineCode",{parentName:"li"},"release/1.4.0"))),(0,a.kt)("h2",{id:"cycle-de-vielien-permanent-vers-ce-titre"},"Cycle de vie",(0,a.kt)("a",{parentName:"h2",href:"#lifetime",title:"Lien permanent vers ce titre"},"\xb6")),(0,a.kt)("p",null,"Avertissement"),(0,a.kt)("p",null,"Jusque ce soit termin\xe9, vous pouvez toujours ajouter de nouveaux ",(0,a.kt)("a",{parentName:"p",href:"https://zone-4code.github.io/docs-public/"},"hotfix")," ou ",(0,a.kt)("a",{parentName:"p",href:"https://zone-4code.github.io/docs-public/"},"features")," (dans tous les cas, si ne nouvelle feature doit \xeatre ajout\xe9e \xe0 votre release, vous avez probablement un souci de planning ;))."),(0,a.kt)("p",null,"Mais gardez \xe0 l\u2019esprit que ",(0,a.kt)("strong",{parentName:"p"},"rien ne sera ajout\xe9 \xe0 votre branche release sans que vous l\u2019ayez fait vous-m\xeame !")),(0,a.kt)("p",null,"Most of the time, your release branch should have a quite short lifetime; and changes should be very light comparing your ",(0,a.kt)("inlineCode",{parentName:"p"},"develop"),". As an example, on several project I own (or I\u2019ve owned); the release branch was created to update the changelog if any, add the release date, and eventually bump the version."),(0,a.kt)("p",null,"Ce type de branche peut \xeatre utilis\xe9 pour tester \xe9galement."),(0,a.kt)("p",null,"Parfois, vous pourrez \xe9galement cr\xe9er une release pour la terminer imm\xe9diatement sans effectuer de modifications\u2026 :-)"),(0,a.kt)("p",null,"Si un nouveau hotifx a \xe9t\xe9 ajout\xe9, vous devrez l\u2019incorporer \xe0 votre branche release. Pour savoir comment proc\xe9der, vous devrez tout d\u2019abord d\xe9terminer si quelque chose d\u2019autre a chang\xe9, vous ne souhaiterez probablement pas qu\u2019une feature termin\xe9e apr\xe8s que vous ayez d\xe9cid\xe9 de publier ne soit r\xe9cup\xe9r\xe9e."),(0,a.kt)("p",null,"Note"),(0,a.kt)("p",null,"Souvenez-vous qu\u2019il est toujours pr\xe9f\xe9rable de merge et de faire un cherry-pick plut\xf4t que de reporter des modifications manuellement ; ceci pour \xe9viter des conflits ult\xe9rieurs lors de la finalisation."),(0,a.kt)("p",null,"Dans le cas le plus simple, rien n\u2019a chang\xe9 dans le ",(0,a.kt)("inlineCode",{parentName:"p"},"develop"),", mettez juste \xe0 jour et lancez :"),(0,a.kt)("p",null,"(release/1.4.0) $ git merge develop"),(0,a.kt)("p",null,"If there were other changes, it may be a bit more complex. You can either ",(0,a.kt)("inlineCode",{parentName:"p"},"cherry-pick")," the fix commit, or use advanced git possibilities of ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," command (such as merging a specific range of commits, for example); refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://zone-4code.github.io/docs-public/"},"Git documentation"),"."),(0,a.kt)("h2",{id:"pull-requestlien-permanent-vers-ce-titre"},"Pull request",(0,a.kt)("a",{parentName:"h2",href:"#pull-request",title:"Lien permanent vers ce titre"},"\xb6")),(0,a.kt)("p",null,"If you\u2019ve just created the release to bump the version, it is not mandatory to open a pull request. On the other hand, if you\u2019ve made fixes, you\u2019ll have to."),(0,a.kt)("p",null,"Si vous vous trouvez dans le second cas de figure, poussez le derniers changements sur votre fork, allez sur votre page github, s\xe9lectionnez votre branche et cliquez sur le bouton \xab\xa0New pull request\xa0\xbb."),(0,a.kt)("p",null,"Vous pouvez fournir des d\xe9tails compl\xe9mentaires au besoin, soumettre, et enfin attendre qu\u2019un autre d\xe9veloppeur effectue la revue de vos changements !"),(0,a.kt)("p",null,"Une fois accept\xe9e, ou si vous n\u2019avez pas besoin de passer par une pull request, retournez sur votre copie de travail, et suivez les instructions du paragraphe ci-dessous."),(0,a.kt)("h2",{id:"finalisationlien-permanent-vers-ce-titre"},"Finalisation",(0,a.kt)("a",{parentName:"h2",href:"#finishing",title:"Lien permanent vers ce titre"},"\xb6")),(0,a.kt)("p",null,"Avertissement"),(0,a.kt)("p",null,"Avant de lancer les commandes pour terminer votre release, assurez-vous que :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vos branches ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," soient \xe0 jour"),(0,a.kt)("li",{parentName:"ul"},"aucun autre tag utilisant la m\xeame version n\u2019ait \xe9t\xe9 cr\xe9\xe9 (utilisez ",(0,a.kt)("inlineCode",{parentName:"li"},"git tag | sort -V"),")")),(0,a.kt)("p",null,"Avertissement"),(0,a.kt)("p",null,"Vous ",(0,a.kt)("strong",{parentName:"p"},"devez utiliser Git en ligne de commande, et non les possibilit\xe9s de Github")," pour terminer la release !"),(0,a.kt)("p",null,"Terminer une release est aussi simple que :"),(0,a.kt)("p",null,"avec l'extension git-flow :\n$ git flow release finish 1.4.0"),(0,a.kt)("p",null,"Sans les extensions git-flow :\ngit checkout main\ngit merge release/0.1.0"),(0,a.kt)("p",null,"Cela va :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Merger les changements dans la branche ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),","),(0,a.kt)("li",{parentName:"ul"},"Cr\xe9er un tag ",(0,a.kt)("inlineCode",{parentName:"li"},"1.4.0"),","),(0,a.kt)("li",{parentName:"ul"},"Merger les changements dans la branche ",(0,a.kt)("inlineCode",{parentName:"li"},"develop"),","),(0,a.kt)("li",{parentName:"ul"},"Supprimer votre branche ",(0,a.kt)("inlineCode",{parentName:"li"},"release/1.4.0")," locale.")),(0,a.kt)("p",null,"Une fois que votre release est termin\xe9e, vous devrez pousser ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," ainsi que les ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," ; et aussi supprimer la branche distante ",(0,a.kt)("inlineCode",{parentName:"p"},"release/1.4.0")," (si toutefois elle existe) :"),(0,a.kt)("p",null,"(master) $ git push\n(master) $ git push --tags\n(master) $ git checkout develop\n(develop) $ git push\n$ git push {github_username} :release/1.4.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},(0,a.kt)("img",{parentName:"a",src:"https://git-flow.readthedocs.io/fr/latest/_images/cc-by-nc-nd.png",alt:"Creative Commons License"}))))}c.isMDXComponent=!0}}]);