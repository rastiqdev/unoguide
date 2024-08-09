---
title: "Installation des pilotes"
---

::: tip
Un pilote est un fichier permettant de faire le lien entre un périphérique d'un ordinateur et un système d'exploitation, il est nécessaire pour le fonctionnement du périphérique. Dans Windows, pour la quasi totalité des fabricants, les pilotes sont inclus par défaut ou sont installés automatiquement avec Windows Update. Dans notre cas, vu que Unowhy veut nous compliquer la tâche sachant qu'ils utilisent des périphériques inconnus du marché, ce n'est pas le cas.
Cette page est donc dédiée à l'installation des pilotes nécessaires.
:::

## Installation de Unowhy Tools

1. Allez sur la [page de téléchargement de la dernière version de Unowhy Tools](https://github.com/STY1001/Unowhy-Tools/releases/latest) :

![](/assets/images/ut-install/download.png)

2. Téléchargez le fichier `Unowhy.Tools.xx.xx.Installer.exe` :

![](/assets/images/ut-install/download-file.png)

3. Exécutez le fichier que vous venez de télécharger.

<details>
<summary>Vous voyez une fenêtre bleue dire "Windows a protégé votre ordinateur" ?</summary>

Ne vous inquiétez pas, ce méchanisme de Windows Defender SmartScreen s'active parce que Unowhy Tools n'est pas signé (quelque chose qui permet de vérifier le créateur d'un programme, mais qui coûte au moins 250€/an.)

Pour exécutez le programme, cliquez sur `Informations complémentaires` :

![](/assets/images/ut-install/smartscreen.png)

Puis sur `Exécuter quand même` :

![](/assets/images/ut-install/smartscreen2.png)
</details>

Une fenêtre `Contrôle de compte d'utilisateur` devrait apparaître pour vous demander les droits d'administrateur afin de pouvoir installer Unowhy Tools.

![](/assets/images/ut-install/uac.png)

4. Cliquez sur `Oui`.

5. Sur la fenêtre `Unowhy Tools Installer` qui est apparue, cliquez sur `Install / Installer (Press I)` :

![](/assets/images/ut-install/installer.png)

6. Une fois l'installation terminée, cliquez sur `Ok` :

![](/assets/images/ut-install/installed.png)

7. Ouvrez `Unowhy Tools`.

Vous allez encore avoir une fenêtre `Contrôle de compte d'utilisateur`, cliquez à nouveau sur `Oui`.

8. Effectuez la configuration initiale du programme.

## Installation des pilotes

1. Ouvrez `Unowhy Tools` si ce n'est pas déjà fait.

2. Ouvrez la catégorie `Pilotes` puis cliquez sur le bouton `Télécharger` à côté de `Restaurer les pilotes à partir du cloud` :

![](/assets/images/ut-drivers/drivers_menu.png)

3. Sélectionnez la version de votre Y13 :

![](/assets/images/ut-drivers/version_select.png)

4. Choisissez un pack de pilotes (souvent le 1er) puis cliquez sur `Restaurer` :

![](/assets/images/ut-drivers/pack_select.png)

Pour les Y13 2022, testez celui de SonHaon, et s'il y a des problèmes avec le son prenez celui de Thomazino :

![](/assets/images/ut-drivers/pack_select_2022.png)

Une fois l'installation du pack de pilotes terminée, redémarrez votre Y13, puis revenez sur le même menu de Unowhy Tools.

5. Cliquez sur `Installer les pilotes iGPU` puis sur `Gemini/Jasper Lake` :

![](/assets/images/ut-drivers/igpu.png)

Une fois terminé, redémarrez encore votre Y13.

::: tip
Le gestionnaire de périphériques ne devrait plus afficher de périphérique non détecté :

![](/assets/images/ut-drivers/devices.png)
:::