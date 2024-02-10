---
title: WinRE
---

::: tip
Cette méthode consistera à utiliser le mode [WinRE](https://learn.microsoft.com/fr-fr/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11) intégré dans Windows 11 pour pouvoir "réinitialiser" (ce qui n'est pas entièrement vrai, on reste toujours sur la version modifiée de la région avec HiSqool Manager) Windows afin d'obtenir les droits d'administrateur.
:::

::: warning
Cette page considère que vous venez de [Vérification de WinRE](/winre-verification.html).
:::

## Instructions

1. Cliquez sur `Dépannage`
2. Cliquez sur `Réinitialiser ce PC`
3. Sélectionnez `Supprimer tout`
3. Sélectionnez `Réinstallation locale`
4. Sélectionnez `Supprimer simplement mes fichiers`
5. Cliquez sur `Réinitialiser`
6. Une fois que la réinitialisation est terminée, effectuez le setup initial comme vous le feriez sur un ordinateur normal. Dû à une restriction imposée par la région, vous êtes obligés de vous connecter à un compte Microsoft. Mais si la réinitialisation s'est bien passée, vous devriez maintenant posséder les droits d'administrateur.