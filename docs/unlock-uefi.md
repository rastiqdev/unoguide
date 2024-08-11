---
title: Débloquer l'UEFI (droits admin)
---

::: tip
Cette page va nous permettre de débloquer l'UEFI grâce à un outil créé par [STY1001](https://github.com/sty1001) afin de pouvoir faire une réinstallation complète de Windows.
:::

## Ce dont vous aurez besoin

- [La version la plus récente de Unowhy Tools BIOS Unlocker](https://github.com/STY1001/Unowhy-Tools-BIOS-Unlocker/releases/latest) (fichier zip)

## Instructions

1. Cliquez droit sur le fichier `Unowhy.Tools.BIOS.Unlocker.<version>` puis cliquez sur `Extraire Tout` :

![](/assets/images/unlock-uefi/extract.png)

2. Cliquez sur `Extraire` :

![](/assets/images/unlock-uefi/extract2.png)

3. Cliquez droit sur `AutoFlash.bat` puis cliquez sur `Exécuter en tant qu’admininstrateur` :

![](/assets/images/unlock-uefi/run_as_admin.png)

4. Il se peut que votre Y13 ne soit pas bien detecté, si c'est le cas une confirmation de la version de votre Y13 vous sera demandée :

![](/assets/images/bios-unlocker/unsure.png)

5. Si vous répondez Oui à cette question ou que votre Y13 a été détecté dans une autre version, vous pourrez sélectionner la bonne version de votre Y13, sinon ignorez cette étape :

![](/assets/images/bios-unlocker/version-selection.png)

6. Vous êtes maintenant prêt à flash l'UEFI de votre Y13. Fermez les programmes en arrière-plan, **branchez votre chargeur** et mettez `Y` :

![](/assets/images/bios-unlocker/ready.png)

::: danger
Ne fermez **surtout pas** l'invite de commande et ne faites rien sur votre Y13 jusuqu'à ce qu'un texte vert disant `Done` apparaisse.
:::

![](/assets/images/bios-unlocker/done.png)

::: tip
Si le texte `Done` est bien apparu, votre Y13 est à présent jailbreak et vous pouvez fermer l'invite de commande et l'éteindre sans problème. Vous pouvez maintenant accéder à l'UEFI en appuyant rapidement et plusieurs fois sur la touche `Échap` ou `Suppr` au démarrage de votre Y13.
:::

::: danger
Mais attention ! Il faut éviter de toucher les réglages de l'UEFI (en particulier ceux que vous ne connaissez pas) parce que cela peut rendre votre ordinateur **inutilisable**.
:::