# Configuration initiale

Pour configurer notre plateforme e-learning, vous devez d'abord installer les dépendances nécessaires en suivant ces étapes :

1. Installez [Docker](https://www.docker.com/) sur votre machine
2. Installez [Docker Compose](https://docs.docker.com/compose/) sur votre machine
3. Follow Github official documentation for configuring ssh keys and connect the repositories : 
https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
4. Clonez le répertoire du projet sur votre machine en utilisant la commande :
```bash
git clone https://github.com/[nom-d-utilisateur]/nom-du-projet.git
```
5. Accédez au répertoire cloné et exécutez la commande :
```
    docker-compose up
```
6. Une fois que tous les conteneurs sont démarrés, vous pouvez accéder à l'application en utilisant l'URL http://localhost:3000 dans votre navigateur.

# Configuration de l'environment de développement

Pour configurer l'environnement de développement, vous devez utiliser le fichier docker-compose.dev.yml au lieu de docker-compose.yml.

Exécutez la commande suivante pour démarrer l'environnement de développement :

```
docker-compose -f docker-compose.dev.yml up
```
Cela démarrera tous les conteneurs nécessaires pour l'environnement de développement, y compris les services de développement tels que le hot reloading. Vous pouvez maintenant accéder à l'application en utilisant l'URL http://localhost:3000 dans votre navigateur, et les modifications apportées au code seront automatiquement rechargées dans le navigateur.

# Configuration de l'environnement de production

Pour configurer l'environnement de production, vous devez utiliser le fichier docker-compose.prod.yml au lieu de docker-compose.yml.

Exécutez la commande suivante pour démarrer l'environnement de production :

```
docker-compose -f docker-compose.prod.yml up --build
```
Cela construira les images de conteneur à partir des dernières modifications de code et démarrera tous les conteneurs nécessaires pour l'environnement de production. Assurez-vous de configurer tous les paramètres nécessaires pour l'environnement de production.

# Démarrer avec Docker pour une application Next
Docker est un outil puissant qui vous permet de gérer et de déployer facilement vos applications. Dans ce guide, nous allons vous guider dans le processus de création d'un Dockerfile et d'un fichier docker-compose.yml pour une application Next.js dans des environnements de développement et de production.

## Managing Environment Variables with a .env File
As a developer, it's important to keep sensitive information such as passwords and API keys separate from your code. One way to do this is by using environment variables. In this document, we will cover how to manage environment variables in your application using a .env file.

By using a .env file to store your environment variables, you can keep sensitive information separate from your code and easily change values if needed. Make sure to exclude the .env file from your code repository for security reasons and use a library such as dotenv to load the values into your code.
### Create the .env file 
Create a new file in the root directory of your application and name it .env. This file will store your environment variables.

```
# .env file
API_KEY=secret_api_key
PASSWORD=secret_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydatabase
DB_USER=myuser
DB_PASSWORD=mypassword

```

Note: Make sure to exclude the .env file from your code repository for security reasons. You can do this by adding .env to your .gitignore file.
### Load the .env file in your code

In order to access the environment variables in your code, you'll need to use a library such as dotenv to load the values from the .env file.

```
require('dotenv').config();

const apiKey = process.env.API_KEY;
const password = process.env.PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

```


With this setup, your environment variables are now stored in a secure location and can be easily accessed in your code. This allows you to keep sensitive information out of your code repository and easily change values if needed.


## Dockerfile en Development

Le Dockerfile pour le developpement est utilisé pour construire une image Docker pour l'application dans un environnement de developpement. Voici un exemple de Dockerfile pour le developpement :

```
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Start app in development mode
CMD [ "npm", "run", "dev" ]

```

## Dockerfile en Production

Le Dockerfile pour la production est utilisé pour construire une image Docker pour l'application dans un environnement de production. Voici un exemple de Dockerfile pour la production :

```
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source code
COPY . .

# Start app in production mode
CMD [ "npm", "start" ]

```

Dans ce Dockerfile, nous utilisons l'image node:14-alpine comme image de base pour notre application. Nous créons également un répertoire de travail, installons les dépendances de l'application avec le drapeau --only=production pour n'installer que les dépendances de production, copions le code source et démarrons l'application en mode production à l'aide de la commande npm start.

## docker-compose.yml en Development
Le fichier docker-compose.yml est utilisé pour définir et exécuter des applications Docker multi-conteneurs. Voici un exemple de fichier docker-compose.yml pour une application Next.js en developpement :

```
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    command: npm run dev

```

Dans cet exemple, nous définissons un service unique appelé "app" qui construit l'application à l'aide du Dockerfile dans le répertoire actuel, mappe le port 3000 dans le conteneur au port 3000 sur l'hôte, et monte le répertoire actuel comme un volume dans le conteneur. Nous spécifions également la commande npm run dev pour démarrer l'application en mode développement.


## docker-compose.yml en Production

Le fichier docker-compose.yml est utilisé pour définir et exécuter des applications Docker multi-conteneurs. Voici un exemple de fichier docker-compose.yml pour une application Next.js en production :


```
version: '3'
services:
  app:
    build: 
      context: .
      target: production
    ports:
      - "3000:3000"
   

```

## Environnement de production et de développement

Les principales différences entre les configurations de développement et de production pour une application Next.js utilisant Docker sont les suivantes :

- En mode développement, les dépendances sont installées avec npm install incluant les dépendances de développement, et l'application est démarrée en mode développement avec la commande CMD [ "npm", "run", "dev" ], cela permet le rechargement à chaud et d'autres fonctionnalités spécifiques au développement.
- En mode production, seules les dépendances de production sont installées avec  npm install --only=production, et l'application est démarrée en mode production avec la commande CMD [ "npm", "start" ], ce qui optimise la taille et les performances de l'image pour la production.
- En mode développement, les fichiers sont servis directement à partir du dossier src, tandis qu'en mode production, les fichiers sont servis à partir du dossier build après le processus de construction à l'aide de la commande npm run build .
- Ceci est reflété dans le fichier docker-compose.yml, en mode développement nous utilisons la commande : npm run dev pour exécuter le serveur de développement, tandis qu'en mode production nous utilisons target : production pour construire la version de production de l'application, et CMD [ "npm", "start" ] pour démarrer le serveur de production.