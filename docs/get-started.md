---
title: "Commencer"
---

## À lire avant de continuer

Attention, la plupart des méthodes vont à un moment ou un autre vous demander de réinitialiser votre Y13. Les principales choses que vous allez perdre en le faisant sont :

- Tous les fichiers dessus (sauvegardez les sur un autre ordinateur)
- La connexion à votre compte monlycee.net sur Windows (la connexion avec monlycee.net sur Microsoft Office et sur votre ENT sera toujours possible donc c'est positif)
- Les logiciels installés automatiquement par vos enseignants (il faudra les installer manuellement)

## Sélection d'une méthode

Selon l'année de votre Unowhy Y13, différentes méthodes existent pour effectuer un jailbreak. Veuillez choisir la méthode correspondante avec le tableau ci-dessous.

| Année | Méthode |
| - | - |
| 2022-2023 | [WinRE](/winre-verification.html) |
| 2019-2021 | [Mots de passe de l'UEFI](/uefi-passwords.html) |

## Pourquoi les mots de passe de l'UEFI n'ont pas été trouvés pour les Y13 construits après 2021 ?

Les Unowhy Y13 ont comme UEFI (quelque chose qui permet de démarrer un système d'exploitation et intéragir avec, voir [ici](https://en.wikipedia.org/wiki/UEFI) pour plus de détails) [AMI Aptio](https://www.ami.com/aptio/). Une des grandes vulnérabilités de cet UEFI est qu'il est possible de retrouver les mots de passe contenus dedans.

Normalement, ces mots de passe sont *progtégés* dans une variable de l'UEFI appelée "AMITSESetup", en étant chiffré avec un [algorithme de chiffrement XOR](https://en.wikipedia.org/wiki/XOR_cipher), sauf que des gens ont trouvé la clé XOR pour les déchiffrer. Tous les mots de passe de l'UEFI sur les Y13 de 2019-2021 ont donc fuité.

Suite à ça, Unowhy a personnalisé AMI Aptio pour utiliser un système de sécurité plus robuste, un système de [salage](https://en.wikipedia.org/wiki/Salt_(cryptography)) + [hachage](https://en.wikipedia.org/wiki/Cryptographic_hash_function), ce qui rend les mots de passe *presque* impossible à déchiffrer.