# Releases[¶](#releases "Lien permanent vers ce titre")

Avertissement

Prenez garde à ce que votre branche `develop` soit bien à jour avant de créer une release, et que vos branche `master` et `develop` soient toutes deux à jour avant de la terminer !

Vous aurez recours à la fonctionnalité release pour publier de nouvelles versions _mineures_ ou _majeures_, mais pas pour les _patches_. Ceci est prévu pour publier de nouvelles versions depuis la branche `develop`.

Note

Vous pouvez avoir plusieurs release sur un même projet, mais en toute honnêteté, je ne parviens pas à trouver une cas de figure où ce serait réellement utile. À vous de voir ;)

## Création[¶](#creation "Lien permanent vers ce titre")

Just as [hotfixes](https://zone-4code.github.io/docs-public/), the branch name must be the version it will become. Let’s say we want to release a new _minor_ `1.4.0`:

Lorsque vous utilisez des extensions git-flow :
$ git flow release start 1.4.0

Sans les extensions git-flow :
git checkout develop
git checkout -b release/0.1.0

Ce qui réalisera automatiquement les tâches suivantes :

1.  création d’une nouvelle branche nommée `release/1.4.0` depuis la branche `develop`,
2.  récupération (`checkout`) de la branche `release/1.4.0`

## Cycle de vie[¶](#lifetime "Lien permanent vers ce titre")

Avertissement

Jusque ce soit terminé, vous pouvez toujours ajouter de nouveaux [hotfix](https://zone-4code.github.io/docs-public/) ou [features](https://zone-4code.github.io/docs-public/) (dans tous les cas, si ne nouvelle feature doit être ajoutée à votre release, vous avez probablement un souci de planning ;)).

Mais gardez à l’esprit que **rien ne sera ajouté à votre branche release sans que vous l’ayez fait vous-même !**

Most of the time, your release branch should have a quite short lifetime; and changes should be very light comparing your `develop`. As an example, on several project I own (or I’ve owned); the release branch was created to update the changelog if any, add the release date, and eventually bump the version.

Ce type de branche peut être utilisé pour tester également.

Parfois, vous pourrez également créer une release pour la terminer immédiatement sans effectuer de modifications… :-)

Si un nouveau hotifx a été ajouté, vous devrez l’incorporer à votre branche release. Pour savoir comment procéder, vous devrez tout d’abord déterminer si quelque chose d’autre a changé, vous ne souhaiterez probablement pas qu’une feature terminée après que vous ayez décidé de publier ne soit récupérée.

Note

Souvenez-vous qu’il est toujours préférable de merge et de faire un cherry-pick plutôt que de reporter des modifications manuellement ; ceci pour éviter des conflits ultérieurs lors de la finalisation.

Dans le cas le plus simple, rien n’a changé dans le `develop`, mettez juste à jour et lancez :

(release/1.4.0) $ git merge develop

If there were other changes, it may be a bit more complex. You can either `cherry-pick` the fix commit, or use advanced git possibilities of `merge` command (such as merging a specific range of commits, for example); refer to the [Git documentation](https://zone-4code.github.io/docs-public/).

## Pull request[¶](#pull-request "Lien permanent vers ce titre")

If you’ve just created the release to bump the version, it is not mandatory to open a pull request. On the other hand, if you’ve made fixes, you’ll have to.

Si vous vous trouvez dans le second cas de figure, poussez le derniers changements sur votre fork, allez sur votre page github, sélectionnez votre branche et cliquez sur le bouton « New pull request ».

Vous pouvez fournir des détails complémentaires au besoin, soumettre, et enfin attendre qu’un autre développeur effectue la revue de vos changements !

Une fois acceptée, ou si vous n’avez pas besoin de passer par une pull request, retournez sur votre copie de travail, et suivez les instructions du paragraphe ci-dessous.

## Finalisation[¶](#finishing "Lien permanent vers ce titre")

Avertissement

Avant de lancer les commandes pour terminer votre release, assurez-vous que :

- vos branches `master` et `develop` soient à jour
- aucun autre tag utilisant la même version n’ait été créé (utilisez `git tag | sort -V`)

Avertissement

Vous **devez utiliser Git en ligne de commande, et non les possibilités de Github** pour terminer la release !

Terminer une release est aussi simple que :

avec l'extension git-flow :
$ git flow release finish 1.4.0

Sans les extensions git-flow :
git checkout main
git merge release/0.1.0

Cela va :

- Merger les changements dans la branche `master`,
- Créer un tag `1.4.0`,
- Merger les changements dans la branche `develop`,
- Supprimer votre branche `release/1.4.0` locale.

Une fois que votre release est terminée, vous devrez pousser `master`, `develop` ainsi que les `tags` ; et aussi supprimer la branche distante `release/1.4.0` (si toutefois elle existe) :

(master) $ git push
(master) $ git push --tags
(master) $ git checkout develop
(develop) $ git push
$ git push {github_username} :release/1.4.0

[![Creative Commons License](https://git-flow.readthedocs.io/fr/latest/_images/cc-by-nc-nd.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
