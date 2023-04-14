import modalOpen from './helpers/modalOpen.js';
import modalClose from './helpers/modalClose.js';
import refs from './helpers/refs.js';

const user = JSON.parse(localStorage?.getItem('user'));

const regForm = `
    <div class="modal regModal">
                <h2 class="modal_subtitle regModal_subtitle">
                    WellCome!
                </h2>
                <h3 class="modal_title">Please, registry for playing</h3>
                <form class="regModal_form" id="form">
                    <div  class="regModal_formfield">
                        <label  >
                        Name:
                        <input class="input_name"   type="text" name="name" placeholder="Your name" required>
                        </label>
                    </div>
                    <div  class="regModal_formfield">
                        <label >
                        e-mail:
                        <input class="input_email" type="email" name="email" placeholder="Your e-mail" required>
                        </label>
                    </div>
                    <div  class="regModal_formfield">
                        <label >
                        Password:
                        <input   class="input_password" type="password" name="password" placeholder="Your password" required >
                        </label>
                    </div>
                    
                    <div>
                        <button type="button" class="button button_modal-submit">Register</button>
                    </div>
                    <div class = "error_message is-hidden">
                        Please, enter all fields
                    </div>
                </form>`;

function rendermodalList() {
  refs.modalRegBackdrop.innerHTML = '';
  refs.modalRegBackdrop.insertAdjacentHTML('beforeend', regForm);
  const buttonModalSubmit = document.querySelector('.button_modal-submit');
  buttonModalSubmit.addEventListener('click', onRegFornSubmit);
}

if (!user) {
  rendermodalList();
  modalOpen(refs.modalRegBackdrop);
}

if (user) {
  refs.userLogOut.classList.remove('is-hidden');
  refs.userLogOut.addEventListener('click', onLogout);
}

const userData = {};

function onRegFornSubmit(e) {
  let formFeel = true;
  e.preventDefault();
  for (let field of form) {
    const { name } = field;

    if (name) {
      document.querySelector('.error_message').classList.add('is-hidden');
      const { value } = field;
      userData[name] = value;
    }
  }

  if (
    userData.name.trim() === '' ||
    userData.email.trim() === '' ||
    userData.password.trim() === ''
  ) {
    formFeel = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userData.email)) {
    formFeel = false;
  }

  if (!formFeel) {
    document.querySelector('.error_message').classList.remove('is-hidden');
  }
  if (formFeel) {
    refs.userName.textContent = `${userData.name}`;
    localStorage.setItem('user', JSON.stringify(userData));
    refs.userLogOut.classList.remove('is-hidden');
    modalClose(refs.modalRegBackdrop);
    document.querySelector('.error_message').classList.add('is-hidden');
    refs.userLogOut.addEventListener('click', onLogout);
  }
}

function onLogout() {
  localStorage.removeItem('user');
  refs.userName.textContent = `User`;
  refs.userLogOut?.classList.add('is-hidden');
  rendermodalList();
  modalOpen(refs.modalRegBackdrop);
}
