import modalOpen from './helpers/modalOpen.js';
import modalClose from './helpers/modalClose.js';
import refs from './helpers/refs.js';

const user = JSON.parse(localStorage?.getItem('user'));

const regForm = `
    <div class="modal">
                <h2 class="modal_title">
                    WellCome!
                </h2>
                <h3>Please registry for playing</h3>
                <form action="#" method="#" id="form">
                    <div>
                        <label>
                        Name:
                        <input type="text" name="name" placeholder="Your name">
                        </label>
                    </div>
                    <div>
                        <label>
                        e-mail:
                        <input type="email" name="email" placeholder="Your e-mail" required>
                        </label>
                    </div>
                    <div>
                        <label>
                        Password:
                        <input type="password" name="password" placeholder="Your password" required>
                        </label>
                    </div>
                    
                    <div>
                        <button type="button" class="button button_modal-submit">Register</button>
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
  console.log(refs.userLogOut);
  refs.userLogOut.addEventListener('click', onLogout);
}

const userData = {};

function onRegFornSubmit(e) {
  let formFeel = true;
  e.preventDefault();
  for (let field of form) {
    const { name } = field;

    if (name) {
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

  if (
    userData.name.trim() === 'Test' &&
    userData.email.trim() === 'test@email.com' &&
    userData.password.trim() === 'test'
  ) {
    formFeel = true;
  }
  if (formFeel) {
    refs.userName.textContent = `${userData.name}`;
    localStorage.setItem('user', JSON.stringify(userData));
    refs.userLogOut.classList.remove('is-hidden');
    modalClose(refs.modalRegBackdrop);
  }
}

function onLogout() {
  localStorage.removeItem('user');
  refs.userName.textContent = `User`;
  refs.userLogOut?.classList.add('is-hidden');
  rendermodalList();
  modalOpen(refs.modalRegBackdrop);
}
