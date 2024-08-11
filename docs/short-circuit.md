---
title: Déverouillage de l'UEFI (court-circuit/UTPE)
---

::: tip
<details>
<summary>Fonctionnement de la méthode</summary>

Quand vous allumez votre Y13, l'UEFI va lister tous les périphériques à partir desquels il peut démarrer et va placer l'eMMC (stockage interne du Y13, là où il y a Windows) en premier dans l'ordre de démarrage. Si on démarre le Y13 avec une clé USB branchée, c'est sur l'eMMC que le Y13 va démarrer par défaut.

Il faut donc faire en sorte que l'eMMC ne soit pas détectée par l'UEFI. Jusqu'à il y a quelque mois, la seule solution était d'arracher l'eMMC et de mettre un SSD vide dans le Y13, ce qui permettait d'améliorer au passage le stockage, mais c'était une opération risquée et coûteuse.

Heureusement, STY1001 a trouvé qu'il est possible de court-circuiter 2 pins d'une certaine partie de l'eMMC (les pins DATAx) pour ne pas que cette dernière soit détectée.

Grâce à cette méthode, le Y13 démarrera donc sur votre clé USB, et quand vous arrêterez le court-circuit, l'eMMC sera détectée à nouveau.
</details>
:::

## Choses nécessaires

- [Le fichier ISO d'UTPE (Unowhy Tools PE)](https://sty1001.com/unowhy-tools-pe/)
- Un ordinateur sur Windows 8 ou ultérieur avec les droits d'administrateur
- Le logiciel [Rufus](https://rufus.ie/) à installer sur l'ordinateur mentionné ci-dessus
- Une clé USB d'au moins 1 Go
- Un tournevis pour pouvoir démonter le Y13 (et peut-être faire le court-circuit)
- Un autre objet métallique précis pour faire un court-circuit (au cas où ce ne serait pas possible avec le tournevis)
- De l'agilité et de la **patience**

## Préparation de la clé USB

::: danger
Il faut noter que flasher UTPE sur votre clé USB va la formatter, donc tout ce qui est actuellement dessus sera **effacé** !
:::

1. (étape 1 sur l'image) Ouvrez Rufus sur votre ordinateur avec les droits d'administrateur et vérifiez que `Périphérique` est bien votre clé USB.
2. (étapes 2-5 sur l'image) Cliquez sur le bouton `SÉLECTION` et sélectionnez l'ISO d'UTPE.
3. (étape 6 sur l'image) Cliquez sur `DÉMARRER`.

![](/assets/images/utpe/rufus.png)

Un popup va apparaître, sélectionnez le mode ISO :

![](/assets/images/utpe/flash_mode.png)

Une fois l'opération terminée, vous pouvez fermer Rufus et débrancher votre clé USB.

## Préparation du Y13

Avant de démarrer sur la clé USB, on va devoir éteindre **de force** le Y13 (afin d'éviter plusieurs problèmes de démarrage).

1. Démarrez votre Y13.
2. Une fois arrivé à l'écran de verrouillage, maintenez le bouton d'allumage jusqu'à ce que le Y13 s'éteigne.

Nous sommes maintenant prêt à mettre en place le court-circuit.

## Mise en place du court-circuit

1. Dévissez les 14 vis à l'arrière du Y13 (il y en a 2 sous les patins encadrés) :

![](/assets/images/short-circuit/chassis-screws.png)

2. Retirez la backplate (plaque du bas).
3. Si vous avez un Y13 2023, vous aurez également besoin de localiser le heatsink et de dévisser les 4 vis qui le maintiennent en place :

![](/assets/images/short-circuit/2023-heatsink.png)

Si votre Y13 date de 2022 ou avant, vous n'avez pas besoin d'enlever le heatsink, la partie de l'eMMC qu'on va court-circuiter est déjà accessible :

![](/assets/images/short-circuit/heatsink.png)

4. Repérez l'eMMC (il y a écrit eMMC dessus donc c'est censé être facile) puis repérez les 8 pins que vous pouvez court-circuiter :

Sur un Y13 2023 :

![](/assets/images/short-circuit/2023-emmc.png)

Sur un Y13 2022 ou avant :

![](/assets/images/short-circuit/emmc.png)

5. Branchez votre clé USB.

6. Prenez votre tournevis ou autre objet métallique précis pour faire le court-circuit, puis court-circuitez au moins 2 des pins que vous avez repérés (une pression légère suffit, n'appuyez pas trop fort pour éviter d'endommager l'eMMC) :

![](/assets/images/short-circuit/short-circuit.png)

Maintenant que le court-circuit est en place, nous pouvons passer au démarrage sur la clé USB.

## Démarrage sur la clé USB

1. Allumez votre Y13.

Il se peut que vous voyiez un texte `UEFI Interactive Shell`. Si c'est le cas, écrivez juste `exit` puis faites `↵` (touche entrer) :

![](/assets/images/short-circuit/uefi_shell.png)

Si votre Y13 a bien démarré sur votre clé USB, vous devriez arriver sur cet écran :

![](/assets/images/utpe/home.png)

Si c'est le cas, vous pouvez arrêter le court-circuit.

Maintenant, on va flasher un nouvel UEFI pour le déverrouiller. 

2. Cliquez sur `Unowhy Tools BIOS Unlocker` :

![](/assets/images/utpe/bios-unlocker.png)

3. Il se peut que votre Y13 ne soit pas bien detecté, si c'est le cas une confirmation de la version de votre Y13 vous sera demandée :

![](/assets/images/bios-unlocker/unsure.png)

4. Si vous répondez Oui à cette question ou que votre Y13 a été détecté dans une autre version, vous pourrez sélectionner la bonne version de votre Y13, sinon ignorez cette étape :

![](/assets/images/bios-unlocker/version-selection.png)

1. Vous êtes maintenant prêt à flash l'UEFI de votre Y13. **Branchez votre chargeur** et mettez `Y` :

![](/assets/images/bios-unlocker/ready.png)

::: danger
Ne fermez **surtout pas** l'invite de commande et ne faites rien sur votre Y13 jusuqu'à ce qu'un texte vert disant `Done` apparaisse.
:::

![](/assets/images/bios-unlocker/done.png)

Si le texte `Done` est bien apparu, vous pouvez fermer la fenêtre.

## Redémarrage dans l'UEFI

1. Cliquez sur `Shutdown or Reboot`, puis sur `Reboot` :

![](/assets/images/utpe/reboot.png)

2. Dès que le logo Unowhy apparaît, appuyez rapidement et plusieurs fois sur la touche `Échap` ou `Suppr`, jusqu'à rentrer dans l'UEFI.

![](/assets/images/splash-image.png)

::: tip
Il se peut que le flash n'ait pas fonctionné du 1er coup. Si l'UEFI vous demande encore un mot de passe, vous devrez recommencer à partir de [Préparation du Y13](/short-circuit/#preparation-du-y13).
:::

::: danger
Il faut éviter de toucher les réglages du BIOS (en particulier ceux que vous ne connaissez pas) parce que cela peut rendre votre Y13 **inutilisable**.
:::

## Réassemblage du Y13

Fermez l'écran, puis revissez tout en place et remettez bien la blackplate.

::: tip
C'est normal si les vis ne tiennent pas bien, c'est dû à la qualité déastreuse des Y13...
:::

Maintenant, réouvrez l'écran, puis, pour sortir de l'UEFI, allez dans la catégorie `Save & Exit` avec les touches `←` (flèche gauche) et `→` (flèche droite), puis sélectionnez `Discard Changes and exit` avec les touches `↓` (flèche bas) et `↑` (flèche haut) et appuyez sur la touche `↵` (entrer) pour redémarrer sur Windows.

::: tip
Continuez sur [Réinstallation de Windows](/windows-reinstall)
:::