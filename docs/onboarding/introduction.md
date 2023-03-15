---
id: introduction
title: Introduction
---

# Bienvenue dans notre plateforme e-learning pour les bootcamps en informatique

Notre plateforme a pour objectif de faciliter l'apprentissage des compétences en informatique en offrant une expérience interactive et collaborative. Les utilisateurs pourront consulter les cours pdf, passer les quizzs, les examens, chatter avec les collaborateurs et les enseignants, ainsi qu'un module visio pour les entretiens individuels.

# Technologies utilisées

Notre plateforme est construite en utilisant les technologies suivantes :
- Une architecture microservices pour séparer les différentes fonctionnalités de notre plateforme.
- Le backend est construit en javascript (node.js, fastify, grpc)
- Le frontend est construit en react.js avec une template nommée vuex basée sur material ui.
- Nous utilisons également docker et docker-compose pour notre environnement de développement, avec Github comme plateforme collaborative.

# Processus de contribution

Pour contribuer à notre projet, vous devez d'abord fork le projet qui se trouve dans une organisation privée. Ensuite, vous créez une branche pour les modifications que vous souhaitez apporter. Une fois le travail terminé, vous faites une pull request (PR) qui doit être validée par le tech lead, le QA et un autre développeur. La PR passera également des tests de lint et des tests automatisés qui feront rejeter la PR si elle n'est pas valide. Nous utilisons les conventions de conventional commits pour le naming des commits et des PR. Des exemples simples pour expliquer ces conventions seront mis à disposition.

# Normes de code

Il est important de respecter les normes de code pour maintenir la qualité et la lisibilité du code. Les normes de code pour le frontend se trouvent dans la section "frontend" et celles pour le backend dans la section "backend".

# Environnements de développement et de production

Nous avons un dockerfile pour l'environnement de développement qui permet le hot reloading pour développer et voir les modifications en direct. Et un autre pour l'environnement de production. Vous pouvez trouver des snippets de ces deux dockerfiles d'un boilerplate create next app pour vous aider à comprendre et simplifier la configuration de ces environnements.
