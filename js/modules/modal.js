export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickForaDoModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    containerModal.addEventListener('click', clickForaDoModal);
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
  }
}
