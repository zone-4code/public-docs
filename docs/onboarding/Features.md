- [Docs](index.html) »
- Features
- [Edit on GitHub](https://github.com/TECLIB/gitflow-doc/blob/master/source/features.rst)

---

# Features[¶](#features "Lien permanent vers ce titre")

Avertissement

Prenez garde à ce que votre branche `develop` soit bien à jour avant de créer ou de terminer une feature ! Même si ça peut se corriger assez facilement ;)

Cette possibilité sera utilisée pour implémenter de nouvelles fonctionnalités dans le projet. Les features sont prévues pour être créées depuis la branche `develop` et pour être réintégrées dans la branche `develop` également.

Note

Vous pouvez avoir autant de feature que vous le souhaitez sur un projet ; mais vous vous apercevrez à l’usage que de travailler avec de trop nombreuses features peut rapidement devenir cauchemardesque, tout comme en maintenir trop longtemps ;)

## Création[¶](#creation "Lien permanent vers ce titre")

Le nom de la feature est à votre entière appréciation, choisissez quelque chose de simple et court, qui décrit ce que vous allez faire. Pour créer une feature nommée `my-great-feature`, vous entrerez :

Lorsque vous utilisez l'extension git-flow :

$ git flow feature start my-great-feature

Sans les extensions git-flow :

git checkout develop
git checkout -b feature_branch

Ce qui réalisera automatiquement les tâches suivantes :

1.  créer une nouvelle branche `feature/my-great-feature` depuis la branche `develop`,
2.  effecturea un checkout de la branche `feature/my-great-feature`.

Donc, oui, vous êtes parés à travailler ! Codez, commitez, poussez, … Vous êtes sur une branche, vous pouvez faire ce que vous voulez (ou presque !).

Comme décrit dans [Travailler avec Github](https://zone-4code.github.io/public-docs/), vous utiliserez votre fork lors de l’ajout de nouvelles branches. Vous y parviendrez en lançant :

(feature/my-great-feature) $ git push -u {github_username} feature/my-great-feature

## Cycle de vie[¶](#lifetime "Lien permanent vers ce titre")

Parfois, il ne s’est rien passé sur la branche `develop` avant que vous n’ayez terminé votre feature, vous n’aurez dans ce cas à vous soucier de rien.

Mais parfois, il est possible que d’autres features aient été ajoutées, ou que des bogues aient été corrigés… Vous devrez donc maintenir votre branche feature à jour. En considérant que votre branche `develop` soit à jour (mais vous maintenez toujours votre branche `develop` à jour, n’est-ce pas ? :p) :

Utilisation des extensions git-flow :
(feature/my-great-feature) $ git flow feature rebase

Sans les extensions git-flow :
git checkout develop
git rebase feature_branch

Cela va rebaser votre branche feature par dessus le develop; comme si vous veniez juste de la créer. Vos commits seront appliqués un à un par dessus. Expliquer le fonctionnement du rebase est hors de la portée de la présente documentation, mais vous pourrez trouver de nombreuses ressources là-dessus.

## Pull Request[¶](#pull-request "Lien permanent vers ce titre")

Votre feature est terminée, elle doit maintenant être revue avant de pouvoir être mergée. Poussez les modifications sur votre fork, allez sur sa page, sélectionnez votre branche et cliquez sur le bouton « New pull request ».

Vous pouvez fournir des détails complémentaires au besoin, soumettre, et enfin attendre qu’un autre développeur effectue la revue de vos changements ! Une fois acceptée, retournez sur votre copie de travail, et suivez les instructions du paragraphe ci-dessous.

## Finalisation[¶](#finishing "Lien permanent vers ce titre")

Une fois terminé, et votre PR acceptée, vous pourrez nettoyer un peu l’historique de votre branche, regrouper vos commit pour éviter de conserver des messages de commit du type « Oups, j’ai oublié… ». En admettant que votre copie de travail soit sur la branche de votre feature, lancez :

Utilisation des extensions git-flow :
(feature/my-great-feature) $ git flow feature finish

Sans les extensions git-flow :
git checkout develop
git merge feature_branch

Ce qui réalisera les tâches suivantes :

1.  merge de la branche `feature/my-great-feature` dans `develop`,
2.  vous demandera un message de commit (qui sera par défaut « Merge branch “feature/my-great-feature” into develop »)
3.  supprimera la branche `feature/my-great-feature`

Pour la seconde étape, vous pouvez juste laisser le message tel que ; si vous avez regroupé vos commits, vous pourrez le supprimer simplement en utilisant :

(develop) $ git rebase -i

Ou pas, [à vous de voir](https://zone-4code.github.io/docs-public/) :)

Pour terminer, poussez la branche `develop` pour que le dépôt distant soit à jour ! Et c’est terminé, my-great-feature a été réintégrée dans `develop` et fera partie de la prochaine release ! Félicitations o/

N’oubliez pas de supprimer la branche `feature/my-great-feature` distante :

$ git push {github_username} :feature/my-great-feature

[![Creative Commons License](https://git-flow.readthedocs.io/fr/latest/_images/cc-by-nc-nd.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

[Next](https://zone-4code.github.io/docs-public/) [Previous](https://zone-4code.github.io/docs-public/)

---
