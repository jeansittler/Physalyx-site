# PHYSALYX — SITE WEB — INSTRUCTIONS PERMANENTES CODEX

**Portée :** toutes les interventions Codex dans `C:\Physalyx-site`.

Ce fichier est la référence opérationnelle pour Codex ; `PROJECT_CONTEXT.md` définit le contexte produit, les décisions et l'état du projet. Lire les deux **au début d'une nouvelle conversation**, puis consulter leurs sections pertinentes sans les relire intégralement à chaque petite tâche.

## 1. Règles prioritaires — Budget Codex et maîtrise des tests

Ces règles priment sur les demandes vagues d'« audit complet », « vérifier tout » ou « tout tester » :

1. **Modèle conseillé : GPT-5.6 Sol, effort Minimal par défaut.** Passer à Moyen seulement si la complexité de la tâche le justifie ; effort Élevé uniquement avec l'accord explicite de l'utilisateur.
2. **Tests ciblés exclusivement par défaut.** Ne lancer aucun test global ou suite exhaustive sans une **autorisation distincte et explicite**, précédée d'une estimation de durée et de coût.
3. **Plafonds de temps effectifs : 3 minutes par commande de test ciblée ; 12 minutes pour une suite complète préalablement autorisée.** Employer un véritable timeout et arrêter une suite autorisée s'il n'y a pas eu de progression depuis 5 minutes, même si le CPU reste actif. Aucune relance automatique globale.
4. **Budget de travail par tâche : ~15 minutes ou 12 appels d'outils significatifs.** Au seuil, faire un bilan factuel et demander l'accord avant une nouvelle phase.
5. Ne pas refaire des inventaires ou audits massifs déjà réalisés ; rechercher précisément les fichiers liés à la tâche. Limiter les sorties verbeuses.
6. Ne pas installer de framework, navigateur automatisé, environnement Node ou dépendance volumineuse sans nécessité concrète et approbation si cela change la stack.
7. Ne pas refactoriser « au passage » ; rester dans le périmètre demandé.
8. Après un test interrompu, signaler clairement ce qui **n'a pas été validé** ; ne jamais écrire « tous les tests OK » par extrapolation.

## 2. Périmètre strict du dépôt

**Autorisé par défaut :** lire, créer et modifier les fichiers du **site local** dans `C:\Physalyx-site`, prévisualiser localement, exécuter des contrôles ciblés, documenter le fonctionnement. Initialiser Git local si demandé ou nécessaire et l'annoncer.

**Lecture seule :** `C:\Physalix` et son dépôt GitHub ; consulter les documents et captures utiles à la représentation fidèle du produit. Ne jamais modifier le logiciel, exécuter ses tests, changer sa version, compiler/installer son firmware, relancer son packaging ou déclencher sa publication.

**Interdit sans accord explicite distinct :**

- `git push`, modification d'un remote ou création d'un dépôt public du site ;
- publication GitHub Pages ou toute mise en ligne ;
- modification des DNS, des contacts ou abonnements OVH ;
- renommage du logiciel, de ses fichiers exécutables ou de son dépôt GitHub ;
- release, modification de `update.json`, remplacement d'installateurs ;
- installation ou achat d'un service externe ;
- suppression massive de fichiers, réinitialisation Git destructive, écrasement de travail non commité.

## 3. Exactitude pédagogique et éditoriale

- **Physalyx** est le nom officiel du site et du logiciel depuis la release 1.9.0. **Physalix** ne doit subsister que pour expliquer la migration des anciennes installations ou désigner des identifiants historiques nécessaires à la compatibilité.
- Le bouton Télécharger doit mener à `https://github.com/jeansittler/Physalyx/releases/latest`. Ne pas inventer de numéro de version ou de nouvel installateur.
- S'appuyer sur les fonctionnalités réellement documentées dans le `PROJECT_CONTEXT.md` du logiciel et, au besoin, sur les fichiers source pertinents.
- N'utiliser que des **captures authentiques** ; signaler les illustrations à réaliser sans inventer d'écran réel.
- Ne jamais présenter comme disponibles des modules prospectifs (ultrasons, conductimétrie, etc.).
- Les protocoles expérimentaux et conseils matériels doivent provenir d'une documentation vérifiée ; en cas de manque, afficher « à compléter » dans les brouillons, pas des données inventées.
- Ne pas inventer d'avis d'utilisateurs, de chiffres de téléchargement, de marque déposée ni de validation juridique.

## 4. Stack et qualité

- **Préférence : HTML + CSS + JavaScript natifs**, site statique, sans serveur applicatif ni base de données.
- Concevoir des pages lisibles, scientifiques, sobres, professionnelles, mobiles et accessibles.
- Structure simple et maintenable, navigation claire, assets optimisés, aucune dépendance injustifiée.
- Vérifier le fonctionnement local avec **un petit ensemble de contrôles pertinents** : liens internes, navigation, rendu mobile/desktop si les outils existent, accessibilité élémentaire, bouton officiel de téléchargement.
- Éviter les requêtes réseau inutiles, les scripts tiers, les trackers et les formulaires collectant des données personnelles.
- Ne jamais exposer de secrets, clés API, identifiants ou données privées dans le dépôt destiné à être public. Le contenu publié sera accessible à tous.

## 5. Workflow par tâche

1. Lire `AGENTS.md` et `PROJECT_CONTEXT.md` (une fois par nouvelle conversation), puis l'état Git local.
2. Résumer le périmètre et les livrables ; si la demande est claire, commencer sans multiplier les questions.
3. Consulter uniquement les références du logiciel nécessaires, en **lecture seule**.
4. Implémenter une étape cohérente ; conserver le travail existant.
5. Effectuer les vérifications ciblées, avec limites de temps.
6. Fournir un bilan concis : fichiers créés/modifiés, prévisualisation, contrôles effectués, problèmes connus, état Git, prochaine action proposée.
7. S'arrêter avant tout commit/push/publication si la demande implique une validation manuelle préalable. Un commit local n'est pas équivalent à une autorisation de publication.

**Principe directeur :** un site élégant et utile, au coût d'hébergement quasi nul et à la maintenance minimale ; jamais une usine à gaz.
