---
title: WinRE
---

::: tip
Cette méthode consistera à utiliser le mode [WinRE](https://learn.microsoft.com/fr-fr/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11) intégré dans Windows 11 pour pouvoir "réinitialiser" (ce qui n'est pas entièrement vrai, on reste toujours sur la version modifiée de la région avec HiSqool Manager) Windows afin d'obtenir les droits d'administrateur.
:::

::: warning
Cette page considère que vous venez de [Vérification de WinRE](/winre-verification.html).
:::

::: danger
En suivant cette page, tous les fichiers stockés sur votre Y13 seront supprimés. Soyez sûr d'avoir sauvegardé tous vos fichiers importants sur une clé USB. Si vous ne l'avez pas fait, cliquez sur `Continuer`, sauvegardez les fichiers, puis recommencez à partir de [Vérification de WinRE](/winre-verification.html).
:::

## Instructions

1. Cliquez sur `Dépannage` :

![](/assets/images/winre/troubleshooting.png)

2. Cliquez sur `Réinitialiser ce PC` :

![](/assets/images/winre/reset.png)

3. Sélectionnez `Supprimer tout` :

![](/assets/images/winre/deleteall.png)

4. Sélectionnez `Réinstallation locale` :

![](/assets/images/winre/local-reinstallation.png)

5. Sélectionnez `Non` :

![](/assets/images/winre/no.png)

6. Sélectionnez `Supprimer simplement mes fichiers` :

![](/assets/images/winre/simply-delete.png)

7. Cliquez sur `Réinitialiser` :

![](/assets/images/winre/reset-button.png)

8. Attendez la fin de la réinitialisation.
9. Suivez les instructions pour Windows 11 ou Windows 10 (en fonction de ce qui est installé) dans [Configuration de Windows](/windows-reinstall.html#configuration-de-windows) pour finaliser la réinitialisation.

::: tip
Si la réinitialisation s'est bien passée, vous devriez maintenant posséder les droits d'administrateur.
:::

::: tip
Continuez vers [Débloquer l'UEFI](/unlock-uefi.html).
:::