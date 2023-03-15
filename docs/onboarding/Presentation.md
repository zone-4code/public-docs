- [Docs](index.html) »
- Présentation
- [Edit on GitHub](https://github.com/TECLIB/gitflow-doc/blob/master/source/presentation.rst)

---

# Présentation[¶](#presentation "Lien permanent vers ce titre")

[git-flow](http://nvie.com/posts/a-successful-git-branching-model/) est un modèle de branche, qui est fourni avec de la documentation, et un plugin git pour ajouter des commandes qui facilitent le travail.

[![_images/gitflow.png](https://git-flow.readthedocs.io/fr/latest/_images/gitflow.png)](https://git-flow.readthedocs.io/fr/latest/_images/gitflow.png)

Gardez en tête qu’il s’agit de standardiser ; des commandes git standard sont utilisées an arrière-plan, vous pourriez obtenir le même résultat « manuellement » qu’avec git-flow. C’est juste plus simple à utiliser, et ça évite d’utiliser la mauvaise branche, ou d’oublier de merger quelque part.

Le but de la présente documentation n’est pas de lister les pour et les contre de ce modèle, on notera simplement qu’il n’est pas prévu pour fournir des branches de support à long terme, c’est quelque chose qui avait été évoqué mais qui n’a finalement jamais été implémenté.

D’après les [règles de versionnage sémantiques](http://semver.org) :

- vous ajouterez des `features` pour les versions _majeures_ et _mineures_ uniquement,
- vous créerez des `release` pour des versions _majeures_ ou _mineures_,
- vous créerez des `hotfix` pour les versions _patch_.

## Conventions[¶](#conventions "Lien permanent vers ce titre")

La présente documentation part du principe que :

- tout est fait depuis la ligne de commande (je n’utilise pas d’interface graphique pour git de toutes façons).

## Pré-requis[¶](#pre-requisites "Lien permanent vers ce titre")

Pour que les commandes soient disponibles, vous devrez installer [le plugin git git-flow](https://github.com/nvie/gitflow).

La majorité des distributions linux le fournissent dans leur dépôts (donc `yum install git-flow` ou `apt-get install git-flow` devrait faire l’affaire) ou vous pouvez suivre [les instructions d’installation](https://github.com/nvie/gitflow/wiki/Installation) depuis le wiki du projet.

Beaucoup de logiciels GIT supportent git-flow, ou le peuvent par le biais de plugins ; consultez les documentations respectives.

Si vous utilisez la ligne de commande, il existe de nombreux moyens pour afficher des informations utiles dans le prompt. Bien que ce ne soit pas un pré-requis, cela peut vous faire gagner du temps !

[![https://git-flow.readthedocs.io/fr/latest/_images/zsh-git-prompt.png](https://git-flow.readthedocs.io/fr/latest/_images/zsh-git-prompt.png)](https://git-flow.readthedocs.io/fr/latest/_images/zsh-git-prompt.png)

Par exemple, le prompt git ZSH que j’utilise

## Travailler avec Github[¶](#working-with-github "Lien permanent vers ce titre")

Chaque projet aura un dépôt principal hébergé sur Github. Même si vous faites partie des développeurs principaux, vous n’utiliserez le dépôt principal que pour pousser les modifications des branches `develop` et `master`. Toutes les autres branches devront être créées sur un fork (utilisez le bouton éponyme en haut de la page du projet - voir ci-dessous) que vous allez créer sur votre compte.

[![https://git-flow.readthedocs.io/fr/latest/_images/fork_button.png](https://git-flow.readthedocs.io/fr/latest/_images/fork_button.png)](https://git-flow.readthedocs.io/fr/latest/_images/fork_button.png)

Le bouton fork

[![https://git-flow.readthedocs.io/fr/latest/_images/forked.png](https://git-flow.readthedocs.io/fr/latest/_images/forked.png)](https://git-flow.readthedocs.io/fr/latest/_images/forked.png)

Le dépôt forké sur mon compte personnel

Depuis votre copie de travail, ajoutez un nouveau remote, que vous nommerez par exemple comme votre compte github (le nom n’a pas d’importance, il suffit que vous vous en souveniez, et que vous restiez cohérent dans les autres projets). En prenant soin de remplacer `{github_username}` avec votre propre nom d’utilisateur, lancez :

1-Open Terminal or Command Prompt

2-Run the following command: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

3-Enter a file in which to save the key, for example: /Users/you/.ssh/id_rsa

4-Enter a passphrase (or leave it empty if you don't want to use a passphrase)

5-Run the following command to copy your SSH key to your clipboard: pbcopy < ~/.ssh/id_rsa.pub

6-Log in to your GitHub account and go to Settings > SSH and GPG keys.

7-Click on "New SSH key" button.

8-Paste the SSH key in the "Key" field and give it a title, for example: "My development machine".

9-Click on the "Add SSH key" button.

$ git remote add {github_username} git@github.com:{github_username}/mreporting.git

Toutes les branches que vous allez créer et qui doivent être revues seront publiées sur votre fork.

## Initialisation[¶](#initialization "Lien permanent vers ce titre")

Initialiser git-flow est assez simple, clonez le dépôt, aller sur la branche `master` et lancez :

Note

Quand vous clonez un dépôt git, la branche par défaut sera utilisée. Dans la plupart des cas, ce sera `master`, mais pensez à vérifier.

(master) $ git flow init

$ git branch

- develop
  main

Vous pouvez considérer que les réponses par défaut sont toutes correctes. Si la branche `develop` existe déjà, elle sera utilisée, le processus la créera sinon.

## Processus non terminé[¶](#not-finished-process "Lien permanent vers ce titre")

À certaines occasions, une commande git-flow peut ne pas se terminer (dans le cas d’un conflit par exemple). Ce n’est pas un problème, puisque c’est totalement géré :)

Si un processus git-flow est stoppé, corrigez simplement l’erreur et lancez la même commande une fois de plus. Il lancera tout simplement les tâches restantes.

Note

Pour vous assurez que tout a fonctionné correctement, regardez toujours attentivement la sortie !

## merge vs rebase[¶](#merge-vs-rebase "Lien permanent vers ce titre")

Faut-il utiliser merge ou rebase ? Hé bien, c’est à vous de voir !

Avertissement

Bien que les deux solutions puissent être utilisées, et que vous avez la possibilité de choisir à chaque fois, n’oubliez pas qu’un `rebase` peut être destructeur ! Gardez cela à l’esprit.

En fait, vous pouvez toujours corriger un rebase depuis votre copie de travail locale (en utilisant `reflog`). Notez cependant que c’est quelque chose que vous ne devriez pas utiliser si vous n’êtes pas un expert git ;)

Je ne souhaite nourrir aucun troll ; les deux possèdent leurs avantages et leurs inconvénients. Mon conseil est d’éviter les commit de merge quand ils ne sont pas utiles. Je vais essayer d’expliquer quelques cas de figure standard, et la manière dont je les gère à travers les quelques exemples qui suivent…

Vous travaillez sur une feature ; tout a été concentré dans un seul et unique commit. Par défaut, le processus git-flow process ajoutera votre commit sur la branche `develop` et ajoutera un commit de merge (vide) également. Ce dernier n’est vraiment pas utile, il rend juste l’historique moins lisible. Si le commit de merge n’est pas vide, les choses commencent à se compliquer ; vous avez probablement loupé un `git flow feature rebase` quelque part.

Conclusion : utilisez **rebase**.

You’ve added a hotfix, again one only commit. git-flow will create merge commits as well. For instance, I’m used to keep those commits, this is a visual trace in the history of what has been done regarding bug fixes.

Conclusion : utilisez **merge**

Vous venez de terminer une feature, tout comme quelqu’un d’autre… Mais l’autre a déjà poussé ses modifications sur la branche `develop` distante. Si vous lancez un `(develop) $ git push`, un message vous informera que vous ne pouvez pousser car la branche distante a changé.

I guess many will just run a `(develop) $ git pull` in that case, that will add a merge commit in your history. Those merge commits are really annonying searching in history, whether they’re empty or not. As an alternative, you can run `(develop) $ git pull --rebase`, this will prevent the merge commit.

Conclusion : utilisez **rebase**.

[![https://git-flow.readthedocs.io/fr/latest/_images/history-mreporting.png](https://git-flow.readthedocs.io/fr/latest/_images/history-mreporting.png)](https://git-flow.readthedocs.io/fr/latest/_images/history-mreporting.png)

Un exemple d’historique (depuis le [plugin mreporting](https://github.com/pluginsGLPI/mreporting/)).

[![https://git-flow.readthedocs.io/fr/latest/_images/history-galette.png](https://git-flow.readthedocs.io/fr/latest/_images/history-galette.png)](https://git-flow.readthedocs.io/fr/latest/_images/history-galette.png)

Un autre exemple d’historique (depuis le [projet Galette](http://galette.eu)).

[![Creative Commons License](https://git-flow.readthedocs.io/fr/latest/_images/cc-by-nc-nd.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

[Next](https://zone-4code.github.io/docs-public/) [Previous](index.html "git-flow (pour plugins GLPI)")

---
