---
title: Réinstallation de Windows
---

## Choses nécessaires

- Une clé USB d'au moins 8 GB
- Une souris USB
- Le logiciel [Rufus](https://rufus.ie/)

::: warning
Vous AVEZ besoin d'une souris USB pour effectuer l'installation de Windows. Les pilotes du pavé tactile du Y13 ne sont pas inclus par défaut sur Windows donc vous ne pourrez pas l'utiliser tant que vous n'aurez pas réinstallé les pilotes, ce que nous ferons plus tard.
:::

::: tip
Si vous avez déjà une clé USB avec une image pour installer Windows (Ventoy ou simple ISO), vous pouvez directement passer au démarrage sur la clé USB.
:::

## Télécharger une ISO de Windows

### Méthode 1 - MSDL

1. Allez sur https://msdl.gravesoft.dev/#2935
2. Sélectionnez la langue que vous voulez utiliser
3. Cliquez sur `IsoX64 Download`

### Méthode 2 - OS.click

::: tip
Cette méthode n'est qu'utile seulement si vous voulez utiliser une version plus ancienne de Windows 11, ce qui dans la plupart des cas ne sert à rien.
:::

1. Allez sur https://os.click/en
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
2. Quand le logo Unowhy apparaît, appuyez rapidement et plusieurs fois sur la touche Échap jusqu'à rentrer dans le menu du BIOS.
3. Allez dans la catégorie `Save & Exit` en appuyant 5 fois sur la touche flèche droite.
4. Sélectionnez votre clé USB dans la catégorie `Boot Override`.

## Installation de Windows

1. Appuyez sur n'importe quelle touche quand le texte `Press any key to boot from CD or DVD` apparaît.
2. Attendez une vingtaine de secondes. Cet écran devrait apparaître :

![Premier écran de l'installateur de Windows 11](/assets/images/win11-installer-first-screen.png)

3. Cliquez sur `Suivant` puis sur `Installer maintenant`.
4. Attendez encore un peu, puis cliquez sur `Je n'ai pas de clé de produit (Product Key)`. Ne vous inquiétez pas, Windows s'activera tout seul, donc nous avons pas besoin de mettre de clé de produit.
5. Sélectionnez l'édition de Windows que vous souhaitez installer (Windows 11 Professionnel est celle que je vous recommande) puis cliquez sur suivant.
4. Cochez la case `J'accepte ...` et cliquez sur `Suivant` pour accepter les termes du contrat de license logiciel Microsoft que vous avez tous lu :)
5. Cliquez sur `Personnalisé`, puis pour chaque partition dans la liste, sélectionnez la et cliquez sur formater.
6. Cliquez sur `Nouveau` puis sur `Appliquer` et `OK`.

Les étapes 5 et 6 devraient ressembler à ça :

![Création des partition avec l'installateur de Windows 11](/assets/images/win11-partitions.gif)

7. Sélectionnez la dernière partition puis cliquez sur `Suivant`, et attendez que Windows finisse de s'installer.