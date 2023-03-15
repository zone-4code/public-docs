# Hotfix[¶](#hotfix "Lien permanent vers ce titre")

Avertissement

Be carefull your `master` branch is up-to-date before starting a hotfix, and both your `master` and `develop` branches are up-to-date before finishing it!

Vous utilisez un `hotifx` pour corriger des bogues dans la dernière version stable du projet, peu importe qu’il s’agisse d’une version _majeure_, _mineure_ ou _patch_.

Note

You can have **only one** hotfix at the same time!

## Création[¶](#creation "Lien permanent vers ce titre")

Le nom du hotfix doit être la version qu’il va devenir. Si la dernière version était 1.3.2 ; vous créerez un hotfix 1.3.3 en utilisant :

git flow hotfix start hotfix_branch
$ git flow hotfix start 1.3.3

Sans les extensions git-flow :
git checkout main
git checkout -b hotfix_branch

Ce qui réalisera automatiquement les tâches suivantes :

1.  création d’une nouvelle branche nommée `hotfix/1.3.3` depuis la branche `master`,
2.  récupération (`checkout`) de la branche `hotfix/1.3.3`

## Cycle de vie[¶](#lifetime "Lien permanent vers ce titre")

Just like [Features](https://zone-4code.github.io/docs-public/), you will have nothing to do if there were no changes on the `master` branch since you’ve created your hotfix.

If something has changed in the `master`, that means another hotfix has already been done, which also means that the version you are using is probably incorrect now. In that case, you will have to:

- renommer votre branche hotfix
- mettre le code à jour

En partant du principe que la version 1.3.3 a été publiée depuis un autre hotfix, vous travaillerez sur la version 1.3.4 :

(hotfix/1.3.3) $ git branch -m hotfix/1.3.4
(hotfix/1.3.4) $ git rebase -i master

## Pull Request[¶](#pull-request "Lien permanent vers ce titre")

Votre hotfix est terminé, il doit maintenant être revu avant de pouvoir être mergé. Poussez les modifications sur votre fork, allez sur sa page, sélectionnez votre branche et cliquez sur le bouton « new pull request ».

Vous pouvez fournir des détails complémentaires au besoin, soumettre, et enfin attendre qu’un autre développeur effectue la revue de vos changements ! Une fois acceptée, retournez sur votre copie de travail, et suivez les instructions du paragraphe ci-dessous.

## Finalisation[¶](#finishing "Lien permanent vers ce titre")

Avertissement

Avant de lancer les commandes pour terminer votre hotfix, assurez-vous que :

- votre branche `master` soit à jour
- aucun autre hotfix utilisant la même version n’ait été mergé (utilisez `git tag | sort -V`)

Avertissement

Vous **devez utiliser Git en ligne de commande, et non les possibilités de Github** pour terminer le hotfix !

Terminer un hotifx est aussi simple que :

git flow hotfix start
$ git flow hotfix finish 1.3.4

Sans les extensions git-flow :
git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch

Cale va :

- Merger les changements dans la branche `master`,
- Créer un tag `1.3.4`,
- Merger les changements dans la branche `develop`,
- Supprimer votre branche `hotfix/1.3.4` locale.

Une fois que votre hotfix est terminé ; vous devrez pousser `master`, `develop` ainsi que les `tags`, et aussi supprimer la branche `hotfix/1.3.4` distante :

(master) $ git push
(master) $ git push --tags
(master) $ git checkout develop
(develop) $ git push
$ git push {github_username} :hotfix/1.3.4

[![Creative Commons License](https://git-flow.readthedocs.io/fr/latest/_images/cc-by-nc-nd.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
