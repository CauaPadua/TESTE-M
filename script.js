(() => {
  'use strict';
  const PASSWORD = 'princesa';
  const loginScreen = document.getElementById('loginScreen');
  const mainContent = document.getElementById('mainContent');
  const loginForm = document.getElementById('loginForm');
  const passwordInput = document.getElementById('passwordInput');
  const error = document.getElementById('error');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = passwordInput.value.trim().toLocaleLowerCase('pt-BR');
    if (answer === PASSWORD) {
      error.textContent = 'Essa eu sabia que você acertaria. ❤️';
      window.setTimeout(() => {
        loginScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 550);
    } else {
      error.textContent = 'Hmm… tenta mais uma vez, princesa. 😘';
      passwordInput.focus();
      passwordInput.select();
    }
  });

  const secretButton = document.getElementById('secretButton');
  const secretMessage = document.getElementById('secretMessage');
  secretButton.addEventListener('click', () => {
    const isOpen = secretMessage.hidden;
    secretMessage.hidden = !isOpen;
    secretButton.setAttribute('aria-expanded', String(isOpen));
    secretButton.textContent = isOpen ? '♡' : '✦';
  });

  // Mantém apenas uma cartinha aberta por vez para facilitar a leitura no celular.
  document.querySelectorAll('.letters details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.letters details').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
