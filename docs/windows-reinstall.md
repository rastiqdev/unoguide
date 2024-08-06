---
title: Réinstallation de Windows
---

## Choses nécessaires

- Un ordinateur sur Windows 8 ou ultérieur avec les droits d'administrateur
- Le logiciel [Rufus](https://rufus.ie/) à installer sur l'ordinateur mentionné ci-dessus
- Une clé USB d'au moins 8 Go
- Une souris USB (si votre Y13 est un 2023)

::: warning
Si votre Y13 est un 2023, vous **avez** besoin d'une souris USB pour effectuer l'installation de Windows. Les pilotes du pavé tactile ne sont pas inclus par défaut sur Windows donc vous ne pourrez pas l'utiliser tant que vous n'aurez pas réinstallé les pilotes, ce que nous ferons plus tard.
:::

::: tip
Si vous avez déjà une clé USB avec une image pour installer Windows (Ventoy ou simple ISO), vous pouvez directement passer au [démarrage sur la clé USB](/windows-reinstall#demarrage-sur-la-cle-usb). Également, si vous souhaitez flasher votre ISO avec un autre logiciel, tel que Balena Etcher ou dd, libre à vous de le faire.
:::

## Télécharger une ISO de Windows

### Méthode 1 - MSDL

1. Allez sur [MSDL](https://msdl.gravesoft.dev/)
2. Sélectionnez "Windows 11 23H2 v2" pour Windows 11 ou "Windows 10 22H2 v1" pour Windows 10
3. Sélectionnez la langue que vous voulez utiliser
4. Cliquez sur `IsoX64 Download`

### Méthode 2 - OS.click

::: tip
Cette méthode n'est qu'utile seulement si vous voulez utiliser une version plus ancienne de Windows 11/10 ou si MSDL est hors-ligne, privilégiez donc la méthode avec MSDL.
:::

1. Allez sur [OS.click](https://os.click/en)
2. Cliquez sur `GET MY ISO`
3. Sélectionnez `Windows`
4. Sélectionnez `Windows 11` ou `Windows 10`
5. Sélectionnez la première option
6. Sélectionnez la première option
7. Sélectionnez `Multi-Edition`
8. Sélectionnez la langue que vous voulez utiliser
9. Sélectionnez `x86-64 (64-bit)`
10. Cliquez sur le bouton pour télécharger le fichier

## Flasher l'ISO sur votre clé USB

::: warning
Il faut noter que flasher votre ISO sur votre clé USB va la formatter, donc tout ce qui est actuellement dessus sera effacé !
:::

1. Ouvrez Rufus sur votre ordinateur avec les droits d'administrateur.
2. Vérifiez que `Périphérique` est bien votre clé USB.
3. Cliquez sur le bouton `SÉLECTION` puis sélectionnez votre ISO.
4. Cliquez sur `DÉMARRER`.
5. Un popup va apparaître, laissez les paramètres par défaut et cliquez sur `OK`.
6. Une fois l'opération terminée, vous pouvez fermer Rufus et débranchez votre clé USB.

## Démarrage sur la clé USB

1. Branchez votre clé USB à votre Y13.
1. Allumez votre Y13.
2. Quand le logo Unowhy apparaît, appuyez rapidement et plusieurs fois sur la touche Échap jusqu'à rentrer dans le menu de l'UEFI.
3. Allez dans la catégorie `Save & Exit` avec les touches `←` (flèche gauche) et `→` (flèche droite).
4. Sélectionnez votre clé USB dans la catégorie `Boot Override` avec les touches `↓` (flèche bas) et `↑` (flèche haut) et appuyer sur Entrer pour démarrer.
5. Appuyez sur n'importe quelle touche quand le texte `Press any key to boot from CD or DVD` apparaît.
6. Attendez une vingtaine de secondes, le temps que l'installateur démarre.

## Installation de Windows

Les instructions sont divisées en deux parties, en fonction de si vous avez choisi d'installer Windows 11 ou 10.

<details>
<summary>Instructions pour Windows 11</summary>

1. Cet écran devrait apparaître, cliquez sur suivant :

![](/assets/images/win-installer/win11/first-screen.png)

2. Cliquez sur `Installer maintenant` :

![](/assets/images/win-installer/win11/install-button.png)

::: tip
L'installateur sélectionnera automatiquement la version Windows 11 Pro Education, puisque la clé de produit est incluse dans l'UEFI.
:::

3. Cochez la case `J'accepte ...` et cliquez sur `Suivant` pour accepter les termes du contrat de license logiciel Microsoft que vous avez bien évidemment lu :

![](/assets/images/win-installer/win11/tos-screen.png)

4. Cliquez sur `Personnalisé` :

![](/assets/images/win-installer/win11/install-mode.png)

5. Pour chaque partition dans la liste, sélectionnez la et cliquez sur `Supprimer` :

![](/assets/images/win-installer/win11/partitions.png)

6. Cliquez sur la partition non allouée qu'il reste puis sur `Suivant` :

![](/assets/images/win-installer/win11/select-partition.png)

7. Attendez que l'installation se termine.
</details>

<details>
<summary>Instructions pour Windows 10</summary>

1. Cet écran devrait apparaître, cliquez sur suivant :

![](/assets/images/win-installer/win10/first-screen.png)

2. Cliquez sur `Installer maintenant` :

![](/assets/images/win-installer/win10/install-button.png)

::: tip
L'installateur sélectionnera automatiquement la version Windows 10 Pro Education, puisque la clé de produit est incluse dans l'UEFI.
:::

1. Cochez la case `J'accepte ...` et cliquez sur `Suivant` pour accepter les termes du contrat de license logiciel Microsoft que vous avez bien évidemment lu :

![](/assets/images/win-installer/win10/tos-screen.png)

4. Cliquez sur `Personnalisé` :

![](/assets/images/win-installer/win10/install-mode.png)

5. Pour chaque partition dans la liste, sélectionnez la et cliquez sur `Supprimer` :

![](/assets/images/win-installer/win10/partitions.png)

6. Cliquez sur la partition non allouée qu'il reste puis sur `Suivant` :

![](/assets/images/win-installer/win10/select-partition.png)

7. Attendez que l'installation se termine.
</details>

## Configuration de Windows

Encore une fois, il faut suivre des instructions différentes en fonction de si vous avez installé Windows 11 ou 10.

<details>
<summary>Instructions pour Windows 11</summary>

Commencez à configurer votre nouvelle installation jusqu'à arriver sur la page pour se connecter à Internet :

![](/assets/images/win-oobe/win11/internet.png)

1. Cliquez sur `Je n'ai pas Internet`.

<details>
<summary>Le bouton n'est pas présent ?</summary>

Appuyez simultanément sur `Shift` et `F10` pour ouvrir l'invite de commandes, puis dedans entrez `oobe\bypassnro`. Votre Y13 va redémarrer, puis vous pourrez voir le bouton.

![](/assets/images/win-oobe/win11/bypassnro.png)
</details>

2. Cliquez sur `Continuer avec l'installation limitée` :

![](/assets/images/win-oobe/win11/limited-installation.png)

3. Vous pouvez maintenant configurer votre compte local :

![](/assets/images/win-oobe/win11/local-account.png)

::: tip
N'oubliez pas de dire non à toutes les options concernant la vie privée pour envoyer le moins de données possibles à tonton Bill Gates. 😉
:::
</details>

<details>
<summary>Instructions pour Windows 10</summary>

Commencez à configurer votre nouvelle installation jusqu'à arriver dans la catégorie `Compte` :

![](/assets/images/win-oobe/win10/account-type.png)

1. Sélectionnez `Configurer pour une utilisation personnelle` puis cliquez sur `Suivant`.

2. Cliquez sur `Compte hors connexion` :

![](/assets/images/win-oobe/win10/ms-login.png)

3. Cliquez sur `Expérience limitée` :

![](/assets/images/win-oobe/win10/ms-login2.png)

4. Vous pouvez maintenant configurer votre compte local :

![](/assets/images/win-oobe/win10/local-account.png)

::: tip
N'oubliez pas de dire non à toutes les options concernant la vie privée pour envoyer le moins de données possibles à tonton Bill Gates. 😉
:::
</details>