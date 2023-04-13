import refs from './helpers/refs.js';

function finishGameModal(score, totalTime, endGame) {
  const modal = `    
    <div class="modal finishGameModal">
        <p class="modal_title" >Your are winner!!</p>
        <p class="modal_text modal_count">Your total score: <span class="modal_count">${score}</span></p>
        <p class="modal_text modal_time">Your time: <span class="modal_time">${totalTime}</span> sec</p>
        <button class="button button_startGame" type="button">Restart game</button>
    </div>`;

  function renderList() {
    refs.finishGameBackdrop.innerHTML = '';
    refs.finishGameBackdrop?.classList.remove('is-hidden');
    refs.finishGameBackdrop.insertAdjacentHTML('beforeend', modal);
    const startGameButton = document.querySelector('.button_startGame');
    startGameButton.addEventListener('click', onStartGame);

    function onStartGame() {
      refs.finishGameBackdrop?.classList.add('is-hidden');
      refs.finishGameBackdrop.innerHTML = '';
      endGame();
    }
  }

  renderList();
}

export default finishGameModal;
