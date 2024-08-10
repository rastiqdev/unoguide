---
title: Vérification de WinRE
---

::: tip
Cette page vous fera vérifier si votre Unowhy Y13 peut utiliser la méthode WinRE qui permettra d'obtenir les droits d'administrateur, ce qui nous sera utile pour plus tard.
:::

::: warning
Malheureusement, la méthode WinRE ne fonctionne que sur très peu de Y13, parce qu'elle se patch automatiquement dès la première connexion à Internet. Si vous avez donc déjà connecté votre Y13 à Internet, vous devrez utiliser une [méthode alternative](/winre-verification#methodes-alternatives).
:::

## Vérification de WinRE

1. Allumez votre Y13.
2. Sur la page de connection, cliquez sur le bouton en bas à droite.
3. Maintenez la touche `Shift` et cliquez sur `Redémarrer`, puis sur `Redémarrer maintenant` :

![](/assets/images/winre/reboot-context-menu.png)

1. Continuez à maintenir `Shift` jusqu'à ce que votre Y13 redémarre, puis affiche un texte `Veuillez patienter` ou `Patientez...` :

![](/assets/images/winre/reboot.png)

Vous devriez normalement arriver sur l'écran suivant :

![WinRE](/assets/images/winre/menu.png)

1. Si ce dernier est bien apparu, vous pouvez utiliser cette méthode et devez continuer sur [WinRE](/winre). Sinon, si Windows a démarré normalement, vous ne pouvez pas utiliser cette méthode et devrez utiliser une [méthode alternative](/winre-verification#methodes-alternatives).

## Méthodes alternatives

Si pour quelconque raison vous ne pouvez pas utiliser la méthode WinRE, vous devrez utiliser la méthode SSD, qui nécessitera d'ouvrir le Y13 et un SSD NVMe, ce qui coûte environ 15€. Sinon, vous pouvez utiliser le projet PKRSPLS (prononcé "Pécresse PLS", vous comprendrez donc le sens du nom), qui permet d'installer plusieurs applications qui demandent normalement les droits d'administrateur, sans en avoir besoin (ex : Blender ou Audacity).