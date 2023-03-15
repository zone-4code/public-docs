"use strict";(self.webpackChunkz_4_c=self.webpackChunkz_4_c||[]).push([[4761],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>v});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return o?t.createElement(v,a(a({ref:n},c),{},{components:o})):t.createElement(v,a({ref:n},c))}));function v(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7243:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=o(7462),r=(o(7294),o(3905));const i={},a="Configuration initiale",l={unversionedId:"onboarding/configuration",id:"onboarding/configuration",title:"Configuration initiale",description:"Pour configurer notre plateforme e-learning, vous devez d'abord installer les d\xe9pendances n\xe9cessaires en suivant ces \xe9tapes :",source:"@site/docs/onboarding/configuration.md",sourceDirName:"onboarding",slug:"/onboarding/configuration",permalink:"/ /docs-public/docs/onboarding/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"OnboardingSidebar",previous:{title:'Releases[\xb6](#releases "Lien permanent vers ce titre")',permalink:"/ /docs-public/docs/onboarding/Releases"},next:{title:"Commonly used Linux commands",permalink:"/ /docs-public/docs/onboarding/linux-commands"}},s={},p=[{value:"Managing Environment Variables with a .env File",id:"managing-environment-variables-with-a-env-file",level:2},{value:"Create the .env file",id:"create-the-env-file",level:3},{value:"Load the .env file in your code",id:"load-the-env-file-in-your-code",level:3},{value:"Dockerfile en Development",id:"dockerfile-en-development",level:2},{value:"Dockerfile en Production",id:"dockerfile-en-production",level:2},{value:"docker-compose.yml en Development",id:"docker-composeyml-en-development",level:2},{value:"docker-compose.yml en Production",id:"docker-composeyml-en-production",level:2},{value:"Environnement de production et de d\xe9veloppement",id:"environnement-de-production-et-de-d\xe9veloppement",level:2}],c={toc:p};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-initiale"},"Configuration initiale"),(0,r.kt)("p",null,"Pour configurer notre plateforme e-learning, vous devez d'abord installer les d\xe9pendances n\xe9cessaires en suivant ces \xe9tapes :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," sur votre machine"),(0,r.kt)("li",{parentName:"ol"},"Installez ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," sur votre machine"),(0,r.kt)("li",{parentName:"ol"},"Follow Github official documentation for configuring ssh keys and connect the repositories :\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent")),(0,r.kt)("li",{parentName:"ol"},"Clonez le r\xe9pertoire du projet sur votre machine en utilisant la commande :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/[nom-d-utilisateur]/nom-du-projet.git\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Acc\xe9dez au r\xe9pertoire clon\xe9 et ex\xe9cutez la commande :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    docker-compose up\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Une fois que tous les conteneurs sont d\xe9marr\xe9s, vous pouvez acc\xe9der \xe0 l'application en utilisant l'URL http://localhost:3000 dans votre navigateur.")),(0,r.kt)("h1",{id:"configuration-de-lenvironment-de-d\xe9veloppement"},"Configuration de l'environment de d\xe9veloppement"),(0,r.kt)("p",null,"Pour configurer l'environnement de d\xe9veloppement, vous devez utiliser le fichier docker-compose.dev.yml au lieu de docker-compose.yml."),(0,r.kt)("p",null,"Ex\xe9cutez la commande suivante pour d\xe9marrer l'environnement de d\xe9veloppement :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.dev.yml up\n")),(0,r.kt)("p",null,"Cela d\xe9marrera tous les conteneurs n\xe9cessaires pour l'environnement de d\xe9veloppement, y compris les services de d\xe9veloppement tels que le hot reloading. Vous pouvez maintenant acc\xe9der \xe0 l'application en utilisant l'URL http://localhost:3000 dans votre navigateur, et les modifications apport\xe9es au code seront automatiquement recharg\xe9es dans le navigateur."),(0,r.kt)("h1",{id:"configuration-de-lenvironnement-de-production"},"Configuration de l'environnement de production"),(0,r.kt)("p",null,"Pour configurer l'environnement de production, vous devez utiliser le fichier docker-compose.prod.yml au lieu de docker-compose.yml."),(0,r.kt)("p",null,"Ex\xe9cutez la commande suivante pour d\xe9marrer l'environnement de production :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.prod.yml up --build\n")),(0,r.kt)("p",null,"Cela construira les images de conteneur \xe0 partir des derni\xe8res modifications de code et d\xe9marrera tous les conteneurs n\xe9cessaires pour l'environnement de production. Assurez-vous de configurer tous les param\xe8tres n\xe9cessaires pour l'environnement de production."),(0,r.kt)("h1",{id:"d\xe9marrer-avec-docker-pour-une-application-next"},"D\xe9marrer avec Docker pour une application Next"),(0,r.kt)("p",null,"Docker est un outil puissant qui vous permet de g\xe9rer et de d\xe9ployer facilement vos applications. Dans ce guide, nous allons vous guider dans le processus de cr\xe9ation d'un Dockerfile et d'un fichier docker-compose.yml pour une application Next.js dans des environnements de d\xe9veloppement et de production."),(0,r.kt)("h2",{id:"managing-environment-variables-with-a-env-file"},"Managing Environment Variables with a .env File"),(0,r.kt)("p",null,"As a developer, it's important to keep sensitive information such as passwords and API keys separate from your code. One way to do this is by using environment variables. In this document, we will cover how to manage environment variables in your application using a .env file."),(0,r.kt)("p",null,"By using a .env file to store your environment variables, you can keep sensitive information separate from your code and easily change values if needed. Make sure to exclude the .env file from your code repository for security reasons and use a library such as dotenv to load the values into your code."),(0,r.kt)("h3",{id:"create-the-env-file"},"Create the .env file"),(0,r.kt)("p",null,"Create a new file in the root directory of your application and name it .env. This file will store your environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# .env file\nAPI_KEY=secret_api_key\nPASSWORD=secret_password\nDB_HOST=localhost\nDB_PORT=5432\nDB_NAME=mydatabase\nDB_USER=myuser\nDB_PASSWORD=mypassword\n\n")),(0,r.kt)("p",null,"Note: Make sure to exclude the .env file from your code repository for security reasons. You can do this by adding .env to your .gitignore file."),(0,r.kt)("h3",{id:"load-the-env-file-in-your-code"},"Load the .env file in your code"),(0,r.kt)("p",null,"In order to access the environment variables in your code, you'll need to use a library such as dotenv to load the values from the .env file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"require('dotenv').config();\n\nconst apiKey = process.env.API_KEY;\nconst password = process.env.PASSWORD;\nconst dbHost = process.env.DB_HOST;\nconst dbPort = process.env.DB_PORT;\nconst dbName = process.env.DB_NAME;\nconst dbUser = process.env.DB_USER;\nconst dbPassword = process.env.DB_PASSWORD;\n\n")),(0,r.kt)("p",null,"With this setup, your environment variables are now stored in a secure location and can be easily accessed in your code. This allows you to keep sensitive information out of your code repository and easily change values if needed."),(0,r.kt)("h2",{id:"dockerfile-en-development"},"Dockerfile en Development"),(0,r.kt)("p",null,"Le Dockerfile pour le developpement est utilis\xe9 pour construire une image Docker pour l'application dans un environnement de developpement. Voici un exemple de Dockerfile pour le developpement :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM node:14-alpine\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Install app dependencies\nCOPY package*.json ./\nRUN npm install\n\n# Copy app source code\nCOPY . .\n\n# Start app in development mode\nCMD [ "npm", "run", "dev" ]\n\n')),(0,r.kt)("h2",{id:"dockerfile-en-production"},"Dockerfile en Production"),(0,r.kt)("p",null,"Le Dockerfile pour la production est utilis\xe9 pour construire une image Docker pour l'application dans un environnement de production. Voici un exemple de Dockerfile pour la production :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM node:14-alpine\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Install app dependencies\nCOPY package*.json ./\nRUN npm install --only=production\n\n# Copy app source code\nCOPY . .\n\n# Start app in production mode\nCMD [ "npm", "start" ]\n\n')),(0,r.kt)("p",null,"Dans ce Dockerfile, nous utilisons l'image node:14-alpine comme image de base pour notre application. Nous cr\xe9ons \xe9galement un r\xe9pertoire de travail, installons les d\xe9pendances de l'application avec le drapeau --only=production pour n'installer que les d\xe9pendances de production, copions le code source et d\xe9marrons l'application en mode production \xe0 l'aide de la commande npm start."),(0,r.kt)("h2",{id:"docker-composeyml-en-development"},"docker-compose.yml en Development"),(0,r.kt)("p",null,"Le fichier docker-compose.yml est utilis\xe9 pour d\xe9finir et ex\xe9cuter des applications Docker multi-conteneurs. Voici un exemple de fichier docker-compose.yml pour une application Next.js en developpement :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: '3'\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    volumes:\n      - .:/usr/src/app\n    command: npm run dev\n\n")),(0,r.kt)("p",null,"Dans cet exemple, nous d\xe9finissons un service unique appel\xe9 \"app\" qui construit l'application \xe0 l'aide du Dockerfile dans le r\xe9pertoire actuel, mappe le port 3000 dans le conteneur au port 3000 sur l'h\xf4te, et monte le r\xe9pertoire actuel comme un volume dans le conteneur. Nous sp\xe9cifions \xe9galement la commande npm run dev pour d\xe9marrer l'application en mode d\xe9veloppement."),(0,r.kt)("h2",{id:"docker-composeyml-en-production"},"docker-compose.yml en Production"),(0,r.kt)("p",null,"Le fichier docker-compose.yml est utilis\xe9 pour d\xe9finir et ex\xe9cuter des applications Docker multi-conteneurs. Voici un exemple de fichier docker-compose.yml pour une application Next.js en production :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: '3'\nservices:\n  app:\n    build: \n      context: .\n      target: production\n    ports:\n      - \"3000:3000\"\n   \n\n")),(0,r.kt)("h2",{id:"environnement-de-production-et-de-d\xe9veloppement"},"Environnement de production et de d\xe9veloppement"),(0,r.kt)("p",null,"Les principales diff\xe9rences entre les configurations de d\xe9veloppement et de production pour une application Next.js utilisant Docker sont les suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En mode d\xe9veloppement, les d\xe9pendances sont install\xe9es avec npm install incluant les d\xe9pendances de d\xe9veloppement, et l'application est d\xe9marr\xe9e en mode d\xe9veloppement avec la commande CMD ",'[ "npm", "run", "dev" ]',", cela permet le rechargement \xe0 chaud et d'autres fonctionnalit\xe9s sp\xe9cifiques au d\xe9veloppement."),(0,r.kt)("li",{parentName:"ul"},"En mode production, seules les d\xe9pendances de production sont install\xe9es avec  npm install --only=production, et l'application est d\xe9marr\xe9e en mode production avec la commande CMD ",'[ "npm", "start" ]',", ce qui optimise la taille et les performances de l'image pour la production."),(0,r.kt)("li",{parentName:"ul"},"En mode d\xe9veloppement, les fichiers sont servis directement \xe0 partir du dossier src, tandis qu'en mode production, les fichiers sont servis \xe0 partir du dossier build apr\xe8s le processus de construction \xe0 l'aide de la commande npm run build ."),(0,r.kt)("li",{parentName:"ul"},"Ceci est refl\xe9t\xe9 dans le fichier docker-compose.yml, en mode d\xe9veloppement nous utilisons la commande : npm run dev pour ex\xe9cuter le serveur de d\xe9veloppement, tandis qu'en mode production nous utilisons target : production pour construire la version de production de l'application, et CMD ",'[ "npm", "start" ]'," pour d\xe9marrer le serveur de production.")))}d.isMDXComponent=!0}}]);