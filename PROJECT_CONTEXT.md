# PHYSALYX — SITE OFFICIEL — CONTEXTE DE PROJET

> **Document de référence permanent** pour les conversations ChatGPT et Codex consacrées au **site web Physalyx**.
>
> Le présent projet est **distinct du logiciel Windows** : il ne doit ni modifier le code de l'application, ni perturber ses installations, ses releases ou son système de mise à jour.
>
> Avant toute intervention, lire `AGENTS.md` et ce fichier. Les instructions de budget de `AGENTS.md` sont prioritaires. Garder ce contexte **compact et à jour** : remplacer les états obsolètes, ne pas empiler un journal exhaustif.

**État de référence : 19 octobre 2026.** Les faits ponctuels (version, disponibilité, état Git, configuration DNS) doivent être revalidés avant publication ; ce document ne les rend pas automatiquement actuels.

---

## 1. Identité et périmètre

- **Nom officiel du site et du logiciel :** Physalyx (avec un **y**).
- **Domaine officiel enregistré :** `physalyx.fr`, acheté chez OVHcloud pour trois ans ; actif, expiration affichée au **18 octobre 2029**.
- **Titulaire du domaine :** personne physique, après changement de titulaire confirmé par OVH le 18 octobre 2026. D'autres contacts OVH pouvaient encore mentionner le Ski Club Colmar ; ne jamais les modifier sans demande explicite.
- **Finalité :** vitrine et documentation d'un logiciel **libre et gratuit** pour l'enseignement de la physique-chimie, avec accès clair aux téléchargements officiels.
- **Publics prioritaires :** élèves de collège/lycée, professeurs de physique-chimie, établissements scolaires ; contenus accessibles aussi au grand public.
- **Langue initiale :** français. Pas de multilingue avant décision explicite.
- **Répertoire de travail :** `C:\Physalyx-site`, dépôt Git local sur `main`, sans publication.
- **Dépôt GitHub du site envisagé :** `jeansittler/physalyx-site` (**non créé / non publié à ce stade**).
- **Hébergement visé :** **GitHub Pages gratuit**, lié au domaine OVH ; configuration et publication **non réalisées à ce stade**.
- Les autres sites et hébergements OVH de l'utilisateur restent **indépendants** ; ne rien modifier sur ces services.

### Distinction essentielle des noms

- **Physalyx** : nom officiel du site, de l'application Windows, de l'installateur et du dépôt public depuis la version 1.9.0.
- **Physalix** : ancien nom public. Il ne subsiste que dans certains identifiants internes et dans l'extension historique `.physalix` afin de préserver la compatibilité.
- La migration réelle depuis Physalix 1.8.0 vers Physalyx 1.9.0 a été validée ; les projets existants sont conservés.
- Le logiciel porte une licence **GPL-3.0**. La licence des contenus spécifiques du site (textes, visuels, documentation) devra être décidée explicitement ; ne pas la présumer.
- La réservation du domaine et le caractère éducatif du logiciel ne constituent pas une validation juridique du nom. Ne pas affirmer que l'absence de conflit a été garantie.

---

## 2. Source de vérité pour le logiciel

- **Dossier du logiciel :** `C:\Physalix` — **lecture seule depuis le chantier du site**.
- **Dépôt source public :** `https://github.com/jeansittler/Physalyx`.
- **Référence documentaire :** `C:\Physalix\PROJECT_CONTEXT.md` ; `C:\Physalix\AGENTS.md` seulement si une information précise sur les règles de développement du logiciel est nécessaire.
- **Documentation détaillée du spectrophotomètre :** `C:\Physalix\docs\SPECTROPHOTOMETRY_CONTEXT.md` (si présent).
- **Sources graphiques de référence :** `C:\Physalix\physalix\ui\resources\branding\` pour le logo et les icônes officiels ; `home_page.py`, `main_window.py` et `theme.py` pour les conventions d'interface.
- Ne lire que les sections pertinentes de ces fichiers. Ne jamais explorer tout le dépôt ni lancer sa suite de tests pour un changement du site.

**Version stable confirmée au 19/10/2026 : Physalyx 1.9.0**, release `v1.9.0`, avec installateur Windows signé Certum et système de mise à jour intégré. Éviter de figer ce numéro dans les boutons permanents du site.

**Téléchargement officiel permanent :**

`https://github.com/jeansittler/Physalyx/releases/latest`

Ne créer **ni miroir d'installateur**, ni manifeste `update.json` propre au site, ni second mécanisme de mise à jour. Une courte mention peut expliquer que les anciennes installations Physalix sont reconnues et que les projets restent compatibles.

### Fonctionnalités confirmées par le contexte logiciel

1. Données / tableaux de mesures ;
2. Graphique ;
3. Modélisation ;
4. Pointage vidéo ;
5. Calculs ;
6. Statistiques ;
7. Numérisation de graphiques ;
8. Analyse d'images ;
9. Acquisition Arduino ;
10. Spectrophotométrie Arduino.

Le logiciel possède une **page d'accueil scientifique** avec une galerie visuelle des dix modules : c'est une référence de contenu et de cohérence graphique pour le site.

**Ne pas présenter comme publiés** les projets encore exploratoires (notamment conductimétrie, ultrasons, autres capteurs ou modules futurs), sauf preuve explicite de leur intégration dans une release publiée.

### Spectrophotométrie — précautions éditoriales

- Matériel documenté : **Arduino Nano** et capteur **AS7341** ; la compatibilité matérielle exacte se vérifie dans `SPECTROPHOTOMETRY_CONTEXT.md`.
- Fonctions documentées : calibration noire/blanche, mesure sur les huit bandes, mesure ponctuelle d'absorbance, Beer-Lambert, concentration inconnue, suivi cinétique, transferts vers Données et Graphique, installation du firmware depuis l'application.
- Bandes mesurées : **415, 445, 480, 515, 555, 590, 630 et 680 nm**. Ne pas faire passer un tracé interpolé pour un spectre mesuré en continu.
- Ne pas inventer de schémas de câblage, références de composants, performances de mesure ou fichiers 3D ; utiliser des emplacements « documentation à compléter » quand les sources manquent.

---

## 3. Objectifs du site

Le site doit permettre à un élève de télécharger le logiciel en quelques clics, et à un enseignant de comprendre son intérêt pédagogique, de découvrir ses modules puis de suivre un tutoriel de TP.

**Positionnement :** sérieux, scientifique, contemporain, accessible, sans effets marketing tapageurs. Signature proposée : **« Expérimentez. Analysez. Comprenez. »** (à valider visuellement, pas une obligation d'usage sur toutes les pages).

Rubriques de référence :

- **Accueil** : bénéfice immédiat, aperçu fidèle du logiciel, bouton « Télécharger pour Windows », accès aux fonctionnalités.
- **Fonctionnalités** : modules confirmés, explications et usages pédagogiques, véritables captures.
- **Télécharger** : lien officiel GitHub Releases Latest, installation, mises à jour, configuration compatible vérifiée, licence, aide simple.
- **Tutoriels** : prise en main, données, graphiques, modélisation, sauvegarde, activités Arduino et documentation progressive.
- **Spectrophotométrie** : matériel, montage documenté, calibration, mesures, Beer-Lambert, transferts, ressources pédagogiques ; distinguer les étapes validées des contenus à produire.
- **À propos / ressources** : origine pédagogique, auteur, dépôt source, licence logicielle et signalement de bugs ; mentions légales/confidentialité à finaliser avec des données fournies ou validées par l'utilisateur.

Ces rubriques constituent l'objectif fonctionnel ; leur découpage en pages distinctes peut être simplifié si cela améliore l'ergonomie et la maintenance.

---

## 4. Principes de design et de rédaction

- **Utiliser uniquement des captures réelles de Physalyx 1.9.0 ou ultérieur** ; ne jamais inventer une interface et la présenter comme une capture. Les captures définitives des dix modules ont été fournies et validées pour le projet ; la sélection et les précautions sont documentées dans `docs/CAPTURES_SELECTION.md`.
- L'identité du site réemploie le logo et les icônes officiels issus du logiciel. Conserver les couleurs et conventions utiles de Physalyx **sans reproduire son interface desktop à l'identique**.
- Mise en page élégante, hiérarchie claire, typographie lisible, espacements maîtrisés, contraste suffisant, animations rares et discrètes.
- **Responsive** : priorité au rendu sur ordinateur et smartphone ; menu mobile fonctionnel, pas de débordement horizontal, navigation clavier possible.
- Accessibilité de base : HTML sémantique, titres hiérarchisés, labels, textes alternatifs, états de focus visibles, respect des préférences de réduction des animations.
- Contenu **en français clair**, sans jargon de développeur dans les parcours utilisateurs. Explications scientifiques exactes et adaptées aux élèves/enseignants.
- Toute fonctionnalité, capture, version ou procédure de TP doit être **vérifiée dans les sources**, ou signalée comme à confirmer. Aucun faux avis d'utilisateurs, faux compteur de téléchargements ou statistique inventée.
- Optimiser images et chargement ; éviter les dépendances lourdes, les polices ou services tiers imposés inutilement.

---

## 5. Architecture technique

**Choix par défaut : site statique simple** en HTML, CSS et JavaScript natifs, compatible GitHub Pages. Un générateur statique léger n'est envisageable que si le besoin de documentation le justifie et après validation. **Pas de WordPress, framework SPA, backend, base de données ni hébergement payant** par défaut.

- Structure de fichiers organisée et ressources réutilisables ; éviter la duplication de contenu entre pages.
- Chemins et navigation compatibles avec GitHub Pages, domaine personnalisé et serveur de prévisualisation local ; liens testés aux deux contextes avant publication.
- Référencer la dernière release stable par un **lien pérenne** ; préférer ne pas afficher de numéro fixe susceptible de devenir périmé. Si l'affichage dynamique est décidé plus tard, prévoir un fallback correct sans dépendance bloquante à l'API GitHub.
- Pas de cookies analytiques, publicité, trackers ou formulaires recueillant des données personnelles sans raison et décision explicites. Attention aussi aux vidéos et polices intégrées depuis des domaines tiers.
- Séparer contenu, présentation et comportement. Prévoir une arborescence de tutoriels extensible.
- Dépendances externes minimales et documentées ; pas d'installation d'outils volumineux « par principe ».
- Ne pas copier des ressources protégées sans vérifier les droits et leur attribution.

---

## 6. Publication et infrastructure — interdictions par défaut

Le domaine `physalyx.fr` est **enregistré**, mais le site et son rattachement DNS/HTTPS ne sont **pas encore configurés**. Ne jamais annoncer « le site est en ligne » sans constat réel.

**Ordre prévu :**

1. Développement local dans `C:\Physalyx-site`.
2. Relecture pédagogique, contrôle du rendu desktop/mobile, captures authentiques et liens.
3. Validation explicite de l'utilisateur.
4. Création/publication du dépôt du site et configuration GitHub Pages, uniquement après autorisation.
5. Raccordement des DNS OVH (`physalyx.fr` et si souhaité `www.physalyx.fr`) et activation HTTPS **après préparation de Pages**, avec instructions vérifiées et approbation.
6. Vérification publique sur les deux noms de domaine, des redirections, du certificat HTTPS et du bouton Télécharger.

**Sans accord explicite :** ne pas modifier les DNS OVH, les contacts ou l'abonnement, créer un dépôt distant public, activer un déploiement, effectuer `git push`, acheter un service ni changer le domaine principal.

---

## 7. Méthode Git et sessions Codex

- **Projet Codex :** `C:\Physalyx-site`.
- **Branche initiale prévue :** `main`, après initialisation éventuelle du Git local ; vérifier son état réel avant commande.
- Dépôt de l'application `C:\Physalix` : **aucune modification, aucun commit, aucune branche, aucune commande de test** depuis le projet du site.
- Préférer des tâches courtes et ciblées : identité visuelle, page d'accueil, autres pages, documentation, finitions, puis publication.
- Avant chaque prompt, préciser : **nouvelle conversation ou conversation existante**, dossier, branche, modèle/effort, périmètre, opérations Git autorisées et validations attendues.
- Éviter les sessions Codex concurrentes modifiant les mêmes fichiers.
- Demander un compte rendu concis : fichiers modifiés, aperçu, tests ciblés, défauts connus, éléments à fournir, état Git.

### Règles de crédits et tests — résumé obligatoire

La politique complète est dans `AGENTS.md` et prime sur toute consigne plus ancienne :

- **GPT-5.6 Sol Minimal par défaut**, Moyen uniquement si justifié ; Élevé sur accord.
- **Tests ciblés uniquement** ; toute suite globale exige un feu vert distinct, avec estimation de temps/coût.
- **3 minutes maximum par commande ciblée** avec vrai délai limite ; pour une suite complète autorisée, **12 minutes** maximum et arrêt si **5 minutes sans progression**.
- **Budget d'environ 15 minutes ou 12 appels d'outils significatifs par tâche**, puis bilan et accord pour prolonger.
- Pas d'audit général, de lecture répétitive massive, de relances automatiques, de refactorisation hors périmètre ni de promesse de tests que l'on n'a pas exécutés.

---

## 8. État d'avancement et prochaine étape

**Confirmé au 19 octobre 2026 :**

- Choix du nom **Physalyx**.
- Domaine `physalyx.fr` acheté et activé chez OVH jusqu'au 18/10/2029.
- Titulaire personnel corrigé ; confirmation OVH reçue.
- Choix d'orientation : site statique public **hébergé gratuitement via GitHub Pages**, avec téléchargements servis par les **GitHub Releases** du logiciel.
- **Physalyx 1.9.0** publié et validé ; dépôt officiel `jeansittler/Physalyx`, migration depuis Physalix 1.8.0 et conservation des projets confirmées.
- Première page d'accueil locale créée en HTML, CSS et JavaScript natifs, puis validée visuellement et fonctionnellement dans Chrome. Identité officielle et captures authentiques des dix modules intégrées ; archives et variantes non utilisées exclues de Git.

**À faire, sans présumer de leur réalisation :**

1. Créer le premier point de référence Git local de la page d'accueil validée.
2. Préparer ensuite le dépôt public et GitHub Pages, uniquement avec une autorisation séparée.
3. Configurer ultérieurement le domaine et les DNS OVH, avec validation explicite.

---

## 9. Démarrage d'un nouveau chat

Message de référence :

> On continue le projet du **site officiel Physalyx**. Je joins `PROJECT_CONTEXT.md` ; lis-le et respecte en priorité `AGENTS.md` pour Codex. Le site est séparé du logiciel `C:\Physalix` (lecture seule). Indique les hypothèses non vérifiées avant d'intervenir. Travaille uniquement dans `C:\Physalyx-site` et ne publie, ne pousse et ne modifie pas les DNS sans mon accord explicite.

### Maintenance du contexte

Après un jalon **réellement validé**, mettre à jour ici uniquement les faits durables : architecture choisie, URL/depot réel, état de publication, décisions UX, contenus vérifiés et prochaines étapes. Ne jamais transformer des souhaits ou un plan en travaux déjà réalisés.
