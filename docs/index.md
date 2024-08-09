---
title: Accueil
description: Un guide pour jailbreak votre ordinateur Unowhy Y13.
home: true
actions:
  - text: Commencer
    link: get-started
    type: secondary
heroImage: /assets/images/splash-image.png
heroFilter: 0.5
---

::: danger
Attention, ce guide est encore loin d'être terminé, ne le commencez pas tant que ce message apparaît si vous ne savez pas ce que vous faites.
:::

::: tip
Lisez en profondeur toutes les pages d'introduction (y compris celle-ci !) avant de continuer.
:::

::: tip
Ce guide a été inspiré par toutes les recherches faites par [STY1001](https://sty1001.com) et la [\{unocorp\}](https://discord.com/invite/dw3ZJ9u7WS), un grand merci à eux.
:::

## Qu'est-ce que le jailbreak ?

Littéralement, "s'échapper de la cage". Le terme vient des modifications de l'iPhone, à cause de ses restrictions qui était beaucoup trop abusives. Ici, la cage sont toutes les restrictions données sur les Unowhy Y13 : pas d'accès à l'UEFI, pas d'accès au boot menu, et même pas d'accès aux droits d'administrateur sur les ordinateurs.

## Pourquoi jailbreak votre Y13 ?

Comme vous le savez déjà, la région ne nous a pas donné le meilleur ordinateur de tout les temps pour étudier : d'ailleurs, c'est probablement le pire qu'une région française ait donné à ses étudiants en réponse à la situation de la Covid-19. 
- Ils ont de très mauvais composants : un Intel Celeron (un Intel Pentium à partir de la rentrée 2024 !!!), 8 Go de RAM (4 Go avant les Y13 2023), et une **eMMC** de 128 Go (64 Go avant les Y13). 
- La version modifiée de Windows qu'ils font tourner ne leur est pas du tout optimisée (et sérieusement, Windows 11 sur 4 Go de RAM et une eMMC de 64 Go, qui a eu l'idée ???). 
- En parlant de cette version de Windows non optimisée, elle contient aussi le logiciel HiSqool Manager, un spyware (logiciel espion) développé par la région qui peut envoyer des informations **critiques** sur votre ordinateur et ce qui est fait avec (voir la [*Charte sur la protection des données personnelles des élèves, personnels enseignants et non enseignants*](https://iledefrance-unowhy.com/charte-donnees/) article 4).

Donc merci, Pécresse, mais malheureusement vous ne collecterez pas nos données. 🤡

## Est-ce légal de jailbreak son Unowhy Y13 ? Vais-je être sanctionné pour le faire ?

Techniquement, tout comme pour tout autre appareil, le fait de jailbreak son Y13 *devrait* être légal, sachant que le fait de jailbreak un appareil ne viole pas les lois de droit d'auteur de la France ou de l'Union Européenne.

Néanmoins, pour les Y13, ça se complique. En effet, dans l'article 3.2 de la [charte de protection des données et des conditions de prêt (2022)](https://assistanceidf.zendesk.com/hc/fr/article_attachments/8316254186396), il est écrit : 

> L’utilisateur s’engage à ne pas tenter d’altérer la configuration initiale par quelque moyen que ce soit.

Et l'article 5 dit qu'en non-respect des règles le Y13 pourrait être confisqué et l'élève pourrait recevoir des sanctions disciplinaires.

Normalement, on ne verra pas que vous avez jailbreak votre Y13, mais comme on dit on n'est jamais sûr.
Nous ne prenons donc **aucune** responsabilité pour le matériel confisqué à cause du jailbreak de ce dernier. (vous ne vous le ferez pas confisquer, on dit juste ça pour des raisons légales 😉)

## Que devrais-je savoir avant de jailbreak mon Unowhy Y13 ?

::: danger
Avant de suivre ce guide, il est important de savoir le risque du jailbreak : chaque fois que vous modifiez votre système, il y a toujours une chance que vous perdiez vos données (dans tous les cas une réinitialisation complète de l'ordinateur sera effectuée pendant le guide, donc ce dernier vous demandera de sauvegarder vos fichiers importants). Il est par contre très rare que votre ordinateur soit irrécupérable.
:::

- Si tout se passe comme prévu, votre ordinateur sera jailbreak sans perte de données.
- Laissez l'ordinateur branché à une source d'énergie pendant l'entièreté du guide pour eviter un arrêt innatendu.
- Le jailbreak peut vous permettre de débloquer votre système mais peut mener à une perte de données si vous endommagez l'OS.
- Il est probable que la garantie et le support soient annulés pour votre ordinateur si vous le jailbreakez.