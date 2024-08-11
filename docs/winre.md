---
title: WinRE
---

::: tip
<details>
<summary>Fonctionnement de la méthode</summary>

Cette méthode consistera à utiliser le mode [WinRE](https://learn.microsoft.com/fr-fr/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11) intégré dans Windows 11/10 pour pouvoir "réinitialiser" Windows (ce qui n'est pas entièrement vrai, on reste toujours sur la version modifiée de la région avec HiSqool Manager) afin d'obtenir les droits d'administrateur.
</details>
:::

::: warning
Cette page est gardée pour des raisons historiques, ne suivez pas cette méthode si vous ne savez pas ce que vous faites.
:::

::: warning
Cette page considère que vous venez de [Vérification de WinRE](/winre-verification).
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
9. Suivez les instructions pour Windows 11 ou Windows 10 (en fonction de ce qui est installé) dans [Configuration de Windows](/windows-reinstall#configuration-de-windows) pour finaliser la réinitialisation.

::: tip
Si la réinitialisation s'est bien passée, vous devriez maintenant posséder les droits d'administrateur.
:::

::: tip
Continuez vers [Déverouiller l'UEFI (droits admin)](/unlock-uefi).
:::