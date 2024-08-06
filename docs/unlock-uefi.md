---
title: Débloquer l'UEFI
---

::: tip
Cette page va nous permettre de débloquer l'UEFI grâce à un outil créé par [STY1001](https://github.com/sty1001) afin de pouvoir faire une réinstallation complète de Windows.
:::

## Ce dont vous aurez besoin

- [La version la plus récente de Unowhy Tools BIOS Unlocker](https://github.com/STY1001/Unowhy-Tools-BIOS-Unlocker/releases/latest) (fichier zip)

## Instructions

1. Extrayez le fichier zip `Unowhy.Tools.BIOS.Unlocker.<version>`.
2. Dans le dossier créé, faites clic droit sur `AutoFlash.bat` puis cliquez sur `Exécuter en tant qu’admininstrateur`.
3. Il se peut que votre Y13 ne soit pas bien detecté, si c'est le cas une confirmation de la version de votre Y13 vous sera demandée :

![Confirmation de la version de votre Y13](/assets/images/bios-unlocker-unsure.png)

4. Si vous répondez Oui à cette question ou que votre Y13 a été détecté dans une autre version, vous pourrez sélectionner la bonne version de votre Y13, sinon ignorez cette étape :

![Sélection de la version](/assets/images/bios-unlocker-version-selection.png)

5. Vous êtes maintenant prêt à flash l'UEFI de votre Y13. Fermez les programmes en arrière-plan, **branchez votre chargeur** et mettez `Y`.

::: danger
Ne fermez **surtout pas** l'invite de commande et ne faites rien sur votre Y13 jusuqu'à ce qu'un texte vert disant `Done` apparaisse.
:::

::: tip
Si le texte `Done` est bien apparu, votre Y13 est à présent jailbreak et vous pouvez fermer l'invite de commande et l'éteindre sans problème. Si vous voulez réinstaller Windows afin de ne pas rester sur une version non optimisée et contenant HiSqool Manager, continuez vers [Réinstallation de Windows](/windows-reinstall.html).
:::