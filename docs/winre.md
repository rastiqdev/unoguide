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

1. Cliquez sur `Dépannage`
2. Cliquez sur `Réinitialiser ce PC`
3. Sélectionnez `Supprimer tout`
3. Sélectionnez `Réinstallation locale`
4. Sélectionnez `Supprimer simplement mes fichiers`
5. Cliquez sur `Réinitialiser`

Une fois que la réinitialisation est terminée, un logo Windows 11 animé suivant d'un écran demandant `Est-ce le bon pays ou la bonne région` devrait apparaître. Vous êtes donc rentré dans l'*OOBE*, ou *Out Of Box Experience*, qui est le logiciel qui se charge de faire la configuration initiale de Windows. 

![Écran initial de l'OOBE](/assets/images/oobe-first-screen.png)

6. Appuyez sur les touches `SHIFT` et `F10` en même temps, puis dans l'invite de commandes qui vient d'apparaître, écrivez `oobe\bypassnro`. Votre Y13 devrait redémarrer.
7. Une fois redémarré, sélectionnez les options que vous voulez dans l'OOBE comme vous le feriez sur un ordinateur normal. À l'étape pour se connecter à Internet, sélectionnez `Je n'ai pas Internet`, puis sur `Expérience limitée`. Cela permettra de créer un compte hors-ligne au lieu d'avoir à se connecter à un compte Microsoft. Sélectionnez aussi **Non** à toutes les options sur la vie privée.

::: tip
Une fois sorti de l'OOBE, vous pouvez vous connecter à Internet.
:::

::: tip
Si la réinitialisation s'est bien passée, vous devriez maintenant posséder les droits d'administrateur.
:::

::: tip
Continuez vers [Débloquer l'UEFI](/unlock-uefi.html)
:::