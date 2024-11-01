import{_ as n,a as u,b as c,c as p,d,e as m,f as v}from"./splash-image-B28ORYyg.js";import{_ as g,a as h,b as f,c as z}from"./done-B1WMgur9.js";import{_ as b,r as a,o as q,c as U,b as r,d as t,e as s,a as o,w as S}from"./app-VY1B_0Vv.js";const I="/assets/images/short-circuit/gen2/chassis-screws.png",Y="/assets/images/short-circuit/gen2/heatsink.png",_="/assets/images/short-circuit/gen2/emmc.png",M="/assets/images/short-circuit/gen2/short-circuit.png",x={},E={href:"https://sty1001.com/unowhy-tools-pe/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://rufus.ie/",target:"_blank",rel:"noopener noreferrer"},B={class:"custom-container tip"};function y(R,e){const i=a("ExternalLinkIcon"),l=a("RouterLink");return q(),U("div",null,[e[13]||(e[13]=r("div",{class:"custom-container tip"},[r("p",{class:"custom-container-title"},"TIP"),r("details",null,[r("summary",null,"Fonctionnement de la méthode"),r("p",null,"Quand vous allumez votre Y13, l'UEFI va lister tous les périphériques à partir desquels il peut démarrer et va placer l'eMMC (stockage interne du Y13, là où il y a Windows) en premier dans l'ordre de démarrage. Si on démarre le Y13 avec une clé USB branchée, c'est sur l'eMMC que le Y13 va démarrer par défaut."),r("p",null,"Il faut donc faire en sorte que l'eMMC ne soit pas détectée par l'UEFI. Jusqu'à il y a quelque mois, la seule solution était d'arracher l'eMMC et de mettre un SSD vide dans le Y13, ce qui permettait d'améliorer au passage le stockage, mais c'était une opération risquée et coûteuse."),r("p",null,"Heureusement, STY1001 a trouvé qu'il est possible de court-circuiter 2 pins d'une certaine partie de l'eMMC (les pins DATAx) pour ne pas que cette dernière soit détectée."),r("p",null,"Grâce à cette méthode, le Y13 démarrera donc sur votre clé USB, et quand vous arrêterez le court-circuit, l'eMMC sera détectée à nouveau.")])],-1)),e[14]||(e[14]=r("h2",{id:"choses-necessaires",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#choses-necessaires","aria-hidden":"true"},"#"),t(" Choses nécessaires")],-1)),r("ul",null,[r("li",null,[r("a",E,[e[0]||(e[0]=t("Le fichier ISO d'UTPE (Unowhy Tools PE)")),s(i)])]),e[4]||(e[4]=r("li",null,"Un ordinateur sur Windows 8 ou ultérieur avec les droits d'administrateur",-1)),r("li",null,[e[2]||(e[2]=t("Le logiciel ")),r("a",C,[e[1]||(e[1]=t("Rufus")),s(i)]),e[3]||(e[3]=t(" à installer sur l'ordinateur mentionné ci-dessus"))]),e[5]||(e[5]=r("li",null,"Une clé USB d'au moins 1 Go",-1)),e[6]||(e[6]=r("li",null,"Un tournevis pour pouvoir démonter le Y13 (et peut-être faire le court-circuit)",-1)),e[7]||(e[7]=r("li",null,"Un autre objet métallique précis pour faire un court-circuit (au cas où ce ne serait pas possible avec le tournevis)",-1)),e[8]||(e[8]=r("li",null,[t("De l'agilité et de la "),r("strong",null,"patience")],-1))]),e[15]||(e[15]=o('<h2 id="preparation-de-la-cle-usb" tabindex="-1"><a class="header-anchor" href="#preparation-de-la-cle-usb" aria-hidden="true">#</a> Préparation de la clé USB</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Il faut noter que flasher UTPE sur votre clé USB va la formatter, donc tout ce qui est actuellement dessus sera <strong>effacé</strong> !</p></div><ol><li>(étape 1 sur l&#39;image) Ouvrez Rufus sur votre ordinateur avec les droits d&#39;administrateur et vérifiez que <code>Périphérique</code> est bien votre clé USB.</li><li>(étapes 2-5 sur l&#39;image) Cliquez sur le bouton <code>SÉLECTION</code> et sélectionnez l&#39;ISO d&#39;UTPE.</li><li>(étape 6 sur l&#39;image) Cliquez sur <code>DÉMARRER</code>.</li></ol><p><img src="'+n+'" alt=""></p><p>Un popup va apparaître, sélectionnez le mode ISO :</p><p><img src="'+u+'" alt=""></p><p>Une fois l&#39;opération terminée, vous pouvez fermer Rufus et débrancher votre clé USB.</p><h2 id="preparation-du-y13" tabindex="-1"><a class="header-anchor" href="#preparation-du-y13" aria-hidden="true">#</a> Préparation du Y13</h2><p>Avant de démarrer sur la clé USB, on va devoir éteindre <strong>de force</strong> le Y13 (afin d&#39;éviter plusieurs problèmes de démarrage).</p><ol><li>Démarrez votre Y13.</li><li>Une fois arrivé à l&#39;écran de verrouillage, maintenez le bouton d&#39;allumage jusqu&#39;à ce que le Y13 s&#39;éteigne.</li></ol><p>Nous sommes maintenant prêt à mettre en place le court-circuit.</p><h2 id="mise-en-place-du-court-circuit" tabindex="-1"><a class="header-anchor" href="#mise-en-place-du-court-circuit" aria-hidden="true">#</a> Mise en place du court-circuit</h2><ol><li>Dévissez les 10 vis à l&#39;arrière du Y13 :</li></ol><p><img src="'+I+'" alt=""></p><ol start="2"><li>Retirez la backplate (plaque du bas).</li><li>Dévisser les 4 vis qui maintiennent en place le heatsink :</li></ol><p><img src="'+Y+'" alt=""></p><ol start="4"><li>Repérez l&#39;eMMC (il y a écrit eMMC dessus donc c&#39;est censé être facile) puis repérez les 8 pins que vous pouvez court-circuiter :</li></ol><p><img src="'+_+'" alt=""></p><ol start="5"><li><p>Branchez votre clé USB.</p></li><li><p>Prenez votre tournevis ou autre objet métallique précis pour faire le court-circuit, puis court-circuitez au moins 2 des pins que vous avez repérés (une pression légère suffit, n&#39;appuyez pas trop fort pour éviter d&#39;endommager l&#39;eMMC) :</p></li></ol><p><img src="'+M+'" alt=""></p><p>Maintenant que le court-circuit est en place, nous pouvons passer au démarrage sur la clé USB.</p><h2 id="demarrage-sur-la-cle-usb" tabindex="-1"><a class="header-anchor" href="#demarrage-sur-la-cle-usb" aria-hidden="true">#</a> Démarrage sur la clé USB</h2><ol><li>Allumez votre Y13.</li></ol><p>Il se peut que vous voyiez un texte <code>UEFI Interactive Shell</code>. Si c&#39;est le cas, écrivez juste <code>exit</code> puis faites <code>↵</code> (touche entrer) :</p><p><img src="'+c+'" alt=""></p><p>Si votre Y13 a bien démarré sur votre clé USB, vous devriez arriver sur cet écran :</p><p><img src="'+p+'" alt=""></p><p>Si c&#39;est le cas, vous pouvez arrêter le court-circuit.</p><p>Maintenant, on va flasher un nouvel UEFI pour le déverrouiller.</p><ol start="2"><li>Cliquez sur <code>Unowhy Tools BIOS Unlocker</code> :</li></ol><p><img src="'+d+'" alt=""></p><ol start="3"><li>Il se peut que votre Y13 ne soit pas bien detecté, si c&#39;est le cas une confirmation de la version de votre Y13 vous sera demandée :</li></ol><p><img src="'+g+'" alt=""></p><ol start="4"><li>Si vous répondez Oui à cette question ou que votre Y13 a été détecté dans une autre version, vous pourrez sélectionner la bonne version de votre Y13, sinon ignorez cette étape :</li></ol><p><img src="'+h+'" alt=""></p><ol start="5"><li>Vous êtes maintenant prêt à flash l&#39;UEFI de votre Y13. <strong>Branchez votre chargeur</strong> et mettez <code>Y</code> :</li></ol><p><img src="'+f+'" alt=""></p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Ne fermez <strong>surtout pas</strong> l&#39;invite de commande et ne faites rien sur votre Y13 jusuqu&#39;à ce qu&#39;un texte vert disant <code>Done</code> apparaisse.</p></div><p><img src="'+z+'" alt=""></p><p>Si le texte <code>Done</code> est bien apparu, vous pouvez fermer la fenêtre.</p><h2 id="redemarrage-dans-l-uefi" tabindex="-1"><a class="header-anchor" href="#redemarrage-dans-l-uefi" aria-hidden="true">#</a> Redémarrage dans l&#39;UEFI</h2><ol><li>Cliquez sur <code>Shutdown or Reboot</code>, puis sur <code>Reboot</code> :</li></ol><p><img src="'+m+'" alt=""></p><ol start="2"><li>Dès que le logo Unowhy apparaît, appuyez rapidement et plusieurs fois sur la touche <code>Échap</code> ou <code>Suppr</code>, jusqu&#39;à rentrer dans l&#39;UEFI.</li></ol><p><img src="'+v+'" alt=""></p>',45)),r("div",B,[e[12]||(e[12]=r("p",{class:"custom-container-title"},"TIP",-1)),r("p",null,[e[10]||(e[10]=t("Il se peut que le flash n'ait pas fonctionné du 1er coup. Si l'UEFI vous demande encore un mot de passe, vous devrez recommencer à partir de ")),s(l,{to:"/short-circuit-(gen2)/#preparation-du-y13"},{default:S(()=>e[9]||(e[9]=[t("Préparation du Y13")])),_:1}),e[11]||(e[11]=t("."))])]),e[16]||(e[16]=o('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Il faut éviter de toucher les réglages du BIOS (en particulier ceux que vous ne connaissez pas) parce que cela peut rendre votre Y13 <strong>inutilisable</strong>.</p></div><h2 id="reassemblage-du-y13" tabindex="-1"><a class="header-anchor" href="#reassemblage-du-y13" aria-hidden="true">#</a> Réassemblage du Y13</h2><p>Fermez l&#39;écran, puis revissez tout en place et remettez bien la blackplate.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>C&#39;est normal si les vis ne tiennent pas bien, c&#39;est dû à la qualité déastreuse des Y13...</p></div><p>Maintenant, réouvrez l&#39;écran, puis, pour sortir de l&#39;UEFI, allez dans la catégorie <code>Save &amp; Exit</code> avec les touches <code>←</code> (flèche gauche) et <code>→</code> (flèche droite), puis sélectionnez <code>Discard Changes and exit</code> avec les touches <code>↓</code> (flèche bas) et <code>↑</code> (flèche haut) et appuyez sur la touche <code>↵</code> (entrer) pour redémarrer sur Windows.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continuez vers <a href="/windows-reinstall">Réinstallation de Windows</a>.</p></div>',6))])}const P=b(x,[["render",y],["__file","short-circuit-(gen2).html.vue"]]);export{P as default};
