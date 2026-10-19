# Physalyx — site officiel

Première version locale de la page d’accueil du site officiel Physalyx. Le projet est un site statique sans framework, dépendance, traqueur ni service externe. Il présente le logiciel **Physalyx 1.9.0** pour Windows.

## Prévisualiser sur Windows

Depuis PowerShell, dans `C:\Physalyx-site` :

```powershell
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000](http://localhost:8000). Arrêter le serveur avec `Ctrl+C`.

À défaut de Python, `index.html` peut être ouvert directement dans un navigateur, mais un petit serveur local reproduit mieux le comportement de GitHub Pages.

## Structure

- `index.html` : contenu sémantique de la page d’accueil ;
- `assets/css/styles.css` : identité graphique et responsive ;
- `assets/js/main.js` : menu mobile et présentation interactive des modules ;
- `assets/brand/` : logo et icônes officiels repris des ressources du logiciel ;
- `assets/images/captures/` : les 12 captures authentiques de Physalyx 1.9.0 utilisées par la page d’accueil ;
- `assets/images/legacy/` : anciennes captures Physalix 1.8 conservées comme références, jamais affichées comme captures actuelles ;
- `docs/CAPTURES_SELECTION.md` : inventaire, sélection recommandée et précautions de publication ;
- `docs/CAPTURES_ECRAN.md` : recommandations générales de cadrage et de qualité.

Le bouton de téléchargement renvoie vers la [dernière release officielle de Physalyx](https://github.com/jeansittler/Physalyx/releases/latest). Une installation existante de Physalix peut être mise à niveau vers Physalyx tout en conservant la compatibilité avec les projets existants.

## Publication

Aucune publication n’est configurée à ce stade. Le site est conçu avec des chemins relatifs compatibles avec GitHub Pages et le futur domaine `physalyx.fr`.

Le logiciel Physalyx est distribué sous licence GNU GPL-3.0-only. La licence des contenus propres au site reste à définir.
