---
title: Vérification de WinRE
---

::: warning
Cette page est gardée pour des raisons historiques, ne suivez pas cette méthode si vous ne savez pas ce que vous faites.
:::

::: warning
Malheureusement, la méthode WinRE ne fonctionne que sur très peu de Y13, parce qu'elle se patch automatiquement dès la première connexion à Internet. Si vous avez donc déjà connecté votre Y13 à Internet, vous devez continuer sur [Déverouillage de l'UEFI (court-circuit/UTPE)](/short-circuit).
:::

## Vérification de WinRE

1. Allumez votre Y13.
2. Sur la page de connection, cliquez sur le bouton en bas à droite.
3. Maintenez la touche `Shift` et cliquez sur `Redémarrer`, puis sur `Redémarrer maintenant` :

![](/assets/images/winre/reboot-context-menu.png)

4. Continuez à maintenir `Shift` jusqu'à ce que votre Y13 redémarre, puis affiche un texte `Veuillez patienter` ou `Patientez...` :

![](/assets/images/winre/reboot.png)

Vous devriez normalement arriver sur l'écran suivant :

![](/assets/images/winre/menu.png)

Si ce dernier est bien apparu, vous pouvez utiliser cette méthode et devez continuer sur [WinRE](/winre). Sinon, si Windows a démarré normalement, vous ne pouvez pas utiliser cette méthode et devez continuer sur [Déverouillage de l'UEFI (court-circuit/UTPE)](/short-circuit).