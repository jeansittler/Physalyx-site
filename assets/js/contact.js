(() => {
  'use strict';

  const copyButton = document.querySelector('[data-copy-email]');
  const emailLink = document.querySelector('[data-contact-email]');
  const status = document.querySelector('[data-copy-status]');

  if (!copyButton || !emailLink || !status) return;

  copyButton.addEventListener('click', async () => {
    status.classList.remove('is-error');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('API Clipboard indisponible');
      await navigator.clipboard.writeText(emailLink.textContent.trim());
      status.textContent = 'Adresse copiée !';
    } catch {
      status.textContent = 'Copie automatique impossible. Sélectionnez l’adresse ci-dessus pour la copier manuellement.';
      status.classList.add('is-error');
    }
  });
})();
