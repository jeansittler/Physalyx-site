# Captures d’écran de Physalyx

Ce document prépare l’intégration progressive de captures authentiques de **Physalyx 1.9.0 ou ultérieur**. Ne jamais retoucher une ancienne capture pour simuler le nouveau nom et ne jamais utiliser une maquette comme capture du logiciel.

## Priorités et nommage

Les fichiers définitifs seront placés dans `assets/images/screenshots/`. Utiliser des noms minuscules, sans accents :

| Priorité | Module | Nom recommandé |
|---:|---|---|
| 1 | Page d’accueil / vue générale | `physalyx-accueil.png` |
| 1 | Graphique | `physalyx-graphique.png` |
| 1 | Modélisation | `physalyx-modelisation.png` |
| 1 | Pointage vidéo | `physalyx-pointage-video.png` |
| 2 | Données | `physalyx-donnees.png` |
| 2 | Acquisition Arduino | `physalyx-acquisition-arduino.png` |
| 2 | Spectrophotométrie | `physalyx-spectrophotometrie.png` |
| 3 | Calculs | `physalyx-calculs.png` |
| 3 | Statistiques | `physalyx-statistiques.png` |
| 3 | Numérisation de graphiques | `physalyx-numerisation.png` |
| 3 | Analyse d’images | `physalyx-analyse-images.png` |

Les dix modules sont donc couverts ; la vue d’accueil est un visuel supplémentaire recommandé pour présenter l’ensemble du logiciel.

## Format conseillé

- Format source : **PNG**, profil sRGB, sans compression destructive.
- Dimensions idéales : **1600 × 1000 px** environ, ou définition native proche au ratio **16:10**.
- Minimum recommandé : **1280 px** de large.
- Capturer la fenêtre seule, à 100 % d’échelle si possible, avec une taille identique pour toute la série.
- Conserver les originaux pleine définition. Une version Web optimisée pourra être créée ultérieurement sans remplacer la source.
- Ne pas utiliser de JPEG pour les interfaces : il dégrade les textes et traits fins.

## Cadrage et contenu

- Afficher clairement le logo ou le nom **Physalyx** lorsqu’il est naturellement présent dans l’interface.
- Choisir un exemple scientifique lisible et pédagogiquement juste, avec des données non personnelles.
- Montrer le résultat utile du module plutôt qu’un écran vide ou une boîte de dialogue.
- Éviter les fenêtres superposées, notifications, curseurs gênants et éléments du bureau Windows.
- Vérifier qu’aucun nom d’utilisateur, chemin personnel, clé, port série identifiable ou donnée privée n’apparaît.
- Garder des marges comparables et le même niveau de zoom sur toute la série.

## Remplacement dans la page

La page utilise temporairement deux illustrations SVG intégrées dans `index.html`, clairement présentées comme illustratives. Lorsqu’une capture est validée :

1. créer `assets/images/screenshots/` si nécessaire ;
2. y déposer le PNG avec le nom prévu ci-dessus ;
3. remplacer le bloc SVG concerné par un élément `<img>` conservant le même `<figure>` et son `<figcaption>` ;
4. renseigner les dimensions réelles `width` et `height` ainsi qu’un texte alternatif descriptif ;
5. vérifier le rendu desktop et mobile avant de retirer la mention illustrative.

Les anciennes captures retirées pour des raisons d'identité ou de droits sont conservées uniquement dans `.local-archive/captures/`, dossier ignoré par Git et exclu des ressources du futur site public.
