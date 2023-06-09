import refs from './helpers/refs.js';
import finishGameModal from './finishGameModal.js';

function scoreModal(startShowElem, currLevel, score, timeFinish, totalTime, endGame) {
  const modal = `
    <div class="backdrop scoreModal">
        <div class="modal score_modal">
            <p class="modal_title">Level <span class="level_name">${
              currLevel - 1
            }</span> complete</p>
            <p class="modal_text modal_count">Your level score: <span class="modal_count">${score}</span></p>
            <p class="modal_text modal_time">Your time: <span class="modal_time">${timeFinish.toFixed(
              1
            )}</span> sec</p>
            <button class="button button_startLevel" type="button">Start <span class="level_name">${currLevel}</span> level</button>
        </div>
        
    </div>`;

  function renderList() {
    refs.scoreModalBackdrop.innerHTML = '';
    refs.scoreModalBackdrop?.classList.remove('is-hidden');
    refs.scoreModalBackdrop.insertAdjacentHTML('beforeend', modal);

    if (currLevel < 6) {
      const startLevelButton = document.querySelector('.button_startLevel');
      startLevelButton.addEventListener('click', onStartLevel);

      function onStartLevel() {
        refs.scoreModalBackdrop?.classList.add('is-hidden');
        refs.scoreModalBackdrop.innerHTML = '';
        startShowElem();
      }
    } else {
      refs.scoreModalBackdrop?.classList.add('is-hidden');
      refs.scoreModalBackdrop.innerHTML = '';

      finishGameModal(score, totalTime.toFixed(1), endGame);
    }
  }

  renderList();
}

export default scoreModal;
