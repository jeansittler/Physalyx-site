(() => {
  'use strict';

  const required = (selector, root = document) => {
    const element = root.querySelector(selector);
    if (!element) throw new Error(`Élément requis introuvable : ${selector}`);
    return element;
  };

  const menuButton = required('.menu-toggle');
  const navigation = required('.site-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }));

  const captureRoot = 'assets/images/captures/';
  const imageWarning = 'Vérifier les droits du visuel expérimental avant publication.';
  const modules = [
    { number: '01', title: 'Données', image: 'donnees-full.png', description: 'Saisir, organiser, calculer et importer des mesures expérimentales.', alt: 'Module Données de Physalyx avec un tableau de mesures' },
    { number: '02', title: 'Graphique', image: 'graphique-full.png', description: 'Tracer plusieurs séries, choisir les axes et utiliser les outils d’analyse.', alt: 'Module Graphique de Physalyx avec une trajectoire parabolique' },
    { number: '03', title: 'Modélisation', image: 'modelisation-full.png', description: 'Ajuster un modèle mathématique et examiner ses paramètres et indicateurs.', alt: 'Module Modélisation de Physalyx avec un ajustement polynomial' },
    { number: '04', title: 'Pointage vidéo', image: 'pointage-fenetre.png', description: 'Étalonner une vidéo puis relever la position d’un mobile image par image.', alt: 'Module Pointage vidéo de Physalyx montrant le suivi d’une roue de vélo' },
    { number: '05', title: 'Calculs', image: 'calcul-fenetre.png', description: 'Calculer des dérivées numériques et créer de nouvelles grandeurs par formule.', alt: 'Module Calculs de Physalyx avec des grandeurs calculées' },
    { number: '06', title: 'Statistiques', image: 'stat-fenetre.png', description: 'Calculer les indicateurs d’une série, sa dispersion et son incertitude-type.', alt: 'Fenêtre Statistiques de Physalyx présentant les indicateurs d’une série' },
    { number: '07', title: 'Numérisation de graphiques', image: 'numerisation-full.png', description: 'Étalonner une image de graphique et en extraire les coordonnées des points.', alt: 'Module Numérisation de Physalyx utilisé sur une courbe conductimétrique' },
    { number: '08', title: 'Analyse d’images', image: 'analyse-image-1-full.png', description: 'Étalonner une image, mesurer des distances et exploiter un profil d’intensité.', alt: 'Module Analyse d’images de Physalyx avec des franges et un profil d’intensité', note: imageWarning },
    { number: '09', title: 'Acquisition Arduino', image: 'acquisition-carre.png', description: 'Mesurer une tension, générer un signal et transférer les résultats.', alt: 'Module Acquisition Arduino de Physalyx étudiant un circuit RC' },
    { number: '10', title: 'Spectrophotométrie', image: 'spectro-1-full.png', description: 'Mesurer des spectres d’absorbance et réaliser des études quantitatives.', alt: 'Module Spectrophotométrie de Physalyx avec plusieurs spectres d’absorbance' }
  ];

  const preview = document.querySelector('.module-preview');
  if (preview) {
    const moduleButtons = [...document.querySelectorAll('[data-module]')];
    const previewNumber = required('.module-number', preview);
    const previewTitle = required('h3', preview);
    const previewDescription = required('[data-module-description]', preview);
    const previewImage = required('[data-module-image]', preview);
    const previewButton = required('[data-module-image-button]', preview);
    const previewNote = required('[data-module-note]', preview);

    if (moduleButtons.length !== modules.length) {
      throw new Error(`Le sélecteur contient ${moduleButtons.length} boutons pour ${modules.length} modules.`);
    }

    const selectModule = (index, selectedButton) => {
      const selectedModule = modules[index];
      if (!selectedModule) throw new Error(`Module inconnu : ${index}`);

      moduleButtons.forEach((button) => {
        const active = button === selectedButton;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      const imagePath = captureRoot + selectedModule.image;
      previewNumber.textContent = `Module ${selectedModule.number}`;
      previewTitle.textContent = selectedModule.title;
      previewDescription.textContent = selectedModule.description;
      previewImage.src = imagePath;
      previewImage.alt = selectedModule.alt;
      previewButton.dataset.lightbox = imagePath;
      previewButton.setAttribute('aria-label', `Agrandir la capture du module ${selectedModule.title}`);
      previewNote.textContent = selectedModule.note || '';
      previewNote.hidden = !selectedModule.note;
    };

    moduleButtons.forEach((button, index) => {
      if (Number(button.dataset.module) !== index) {
        throw new Error(`Correspondance incorrecte pour le bouton de module ${index + 1}.`);
      }
      button.addEventListener('click', () => selectModule(index, button));
    });
  }

  const dialog = required('[data-lightbox-dialog]');
  const dialogImage = required('img', dialog);
  const dialogCaption = required('p', dialog);
  const closeButton = required('[data-lightbox-close]', dialog);
  let lightboxTrigger = null;

  const openLightbox = (trigger) => {
    const sourceImage = required('img', trigger);
    lightboxTrigger = trigger;
    dialogImage.src = trigger.dataset.lightbox;
    dialogImage.alt = sourceImage.alt || 'Capture de Physalyx agrandie';
    dialogCaption.textContent = sourceImage.alt || '';
    dialog.showModal();
    closeButton.focus();
  };

  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', () => openLightbox(trigger));
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
      && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    if (!inside) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialogImage.removeAttribute('src');
    lightboxTrigger?.focus();
    lightboxTrigger = null;
  });
})();
