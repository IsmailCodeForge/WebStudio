(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector('#modal-form'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#user-name').value.trim();
    const tel = document.querySelector('#user-tel').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const comment = document.querySelector('#user-comment').value.trim();

    if (name && tel && email) {
      console.log('Das Formular wurde gesendet!');
      console.log(
        `Name: ${name}, Tel: ${tel}, Email: ${email}, Kommentar: ${comment}`
      );

      alert('Danke! Ihre Daten wurden gesendet.');

      refs.form.reset();
      toggleModal();
    } else {
      alert('Bitte füllen Sie alle Pflichtfelder aus!');
    }
  });
})();
