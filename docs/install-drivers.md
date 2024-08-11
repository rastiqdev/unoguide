---
title: Installation des pilotes
---

::: tip
Un pilote est un fichier permettant de faire le lien entre un périphérique d'un ordinateur et un système d'exploitation, il est nécessaire pour le fonctionnement du périphérique. Dans Windows, pour la quasi totalité des fabricants, les pilotes sont inclus par défaut ou sont installés automatiquement avec Windows Update. Dans notre cas, vu que Unowhy veut nous compliquer la tâche sachant qu'ils utilisent des périphériques inconnus du marché, ce n'est pas le cas.
Cette page est donc dédiée à l'installation des pilotes nécessaires.
:::

## Choses nécessaires

- Les droits d'administrateur sur votre Y13
- [Unowhy Tools](/install-unowhy-tools)

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

Le gestionnaire de périphériques ne devrait plus afficher de périphérique non détecté :

![](/assets/images/ut-drivers/devices.png)

::: tip
Si c'est le cas, bravo, votre Y13 peut maintenant bénéficier de tous les avantages du fait qu'il soit jailbreak !! 😃
:::

::: tip
Si vous avez un Y13 2019-2021 et que vous voulez déverouiller votre UEFI, continuez sur [Déverouiller l'UEFI (droits admin)](/unlock-uefi).
:::