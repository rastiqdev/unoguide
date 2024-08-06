---
title: Réinstallation de Windows
---

## Choses nécessaires

- Une clé USB d'au moins 8 GB
- Une souris USB
- Le logiciel [Rufus](https://rufus.ie/)

::: warning
Vous **avez** besoin d'une souris USB pour effectuer l'installation de Windows. Les pilotes du pavé tactile du Y13 ne sont pas inclus par défaut sur Windows donc vous ne pourrez pas l'utiliser tant que vous n'aurez pas réinstallé les pilotes, ce que nous ferons plus tard.
:::

::: tip
Si vous avez déjà une clé USB avec une image pour installer Windows (Ventoy ou simple ISO), vous pouvez directement passer au [démarrage sur la clé USB](/windows-reinstall.html#demarrage-sur-la-cle-usb).
:::

## Télécharger une ISO de Windows

### Méthode 1 - MSDL

1. Allez sur [MSDL](https://msdl.gravesoft.dev/#2935)
2. Sélectionnez la langue que vous voulez utiliser
3. Cliquez sur `IsoX64 Download`

### Méthode 2 - OS.click

::: tip
Cette méthode n'est qu'utile seulement si vous voulez utiliser une version plus ancienne de Windows 11 ou si MSDL est hors-ligne, privilégiez donc la méthode avec MSDL.
:::

1. Allez sur [OS.click](https://os.click/en)
2. Cliquez sur `GET MY ISO`
3. Sélectionnez `Windows`
4. Sélectionnez `Windows 11`
5. Sélectionnez la première option
6. Sélectionnez la première option
7. Sélectionnez `Multi-Edition`
8. Sélectionnez la langue que vous voulez utiliser
9. Sélectionnez `x86-64 (64-bit)`
10. Cliquez sur le bouton pour télécharger le fichier

## Flasher l'ISO sur votre clé USB

::: warning
[WIP]
:::

1. Ouvrez Rufus
2. Vérifiez que `Périphérique` est bien votre clé USB
3. Cliquez sur le bouton `SÉLECTION` puis sélectionnez votre ISO
4. Cliquez sur `DÉMARRER`


## Démarrage sur la clé USB

1. Allumez votre Y13.
2. Quand le logo Unowhy apparaît, appuyez rapidement et plusieurs fois sur la touche Échap jusqu'à rentrer dans le menu de l'UEFI.
3. Allez dans la catégorie `Save & Exit` en appuyant 5 fois sur la touche flèche droite.
4. Sélectionnez votre clé USB dans la catégorie `Boot Override`.

## Installation de Windows

1. Appuyez sur n'importe quelle touche quand le texte `Press any key to boot from CD or DVD` apparaît.
2. Attendez une vingtaine de secondes. Cet écran devrait apparaître :

![Premier écran de l'installateur de Windows 11](/assets/images/win11-installer-first-screen.png)

3. Cliquez sur `Suivant` puis sur `Installer maintenant`.
4. Attendez encore un peu, puis cliquez sur `Je n'ai pas de clé de produit (Product Key)`. Ne vous inquiétez pas, Windows s'activera tout seul, donc nous avons pas besoin de mettre de clé de produit.
5. Sélectionnez l'édition de Windows que vous souhaitez installer (Windows 11 Professionnel est celle que je vous recommande) puis cliquez sur suivant.
6. Cochez la case `J'accepte ...` et cliquez sur `Suivant` pour accepter les termes du contrat de license logiciel Microsoft que vous avez tous lu :)
7. Cliquez sur `Personnalisé`
8. Pour chaque partition dans la liste, sélectionnez la et cliquez sur `Supprimer`.
9. Cliquez sur `Nouveau` puis sur `Appliquer` et `OK`.

Les étapes 8 et 9 devraient ressembler à ça :

![Création des partition avec l'installateur de Windows 11](/assets/images/win11-partitions.gif)

8. Sélectionnez la dernière partition puis cliquez sur `Suivant`, et attendez que Windows finisse de s'installer. L'installation peut durer assez longtemps, c'est normal. (sur une machine virtuelle ça a duré environ 30 minutes donc attendez vous à ce que ça dure autant sur un Y13)

Une fois l'installation terminée (enfin !), vous arriverez dans l'OOBE (oui, le même écran de configuration initiale que toute à l'heure si vous avez suivi la méthode WinRE). Vous pouvez donc suivre les étapes 6 et 7 de la page [WinRE](/winre.html), puisque nous allons mettre la même configuration.

![Écran initial de l'OOBE](/assets/images/oobe-first-screen.png)