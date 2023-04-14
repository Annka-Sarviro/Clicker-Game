import refs from './helpers/refs.js';
import getCount from './helpers/getCount.js';

function progress(levelCurrData) {
  refs.gameDesk.addEventListener('click', onReRenderProgress);

  const list = `
    <div/ class="green_img endProgress_img is-hidden"> </div>
    <div class="progress ">
      <div class="progress_color progress_green"></div>
    </div>
    <div/ class="blue_img endProgress_img is-hidden"> </div>
    <div class="progress ">
        <div class="progress_color progress_blue"></div>
    </div>
    <div/ class="yellow_img endProgress_img is-hidden"> </div>
    <div class="progress ">
        <div class="progress_color progress_yellow"></div>
    </div>`;

  function renderList() {
    refs.progressBar.innerHTML = '';
    refs.progressBar.insertAdjacentHTML('beforeend', list);
    refs.gameDesk.addEventListener('click', onReRenderProgress);
  }

  renderList();

  function onReRenderProgress(e) {
    let progressHight = document.querySelector('.progress').offsetHeight;
    let percentGreen = progressHight / levelCurrData.greenCountFinish;
    let percentBlue = progressHight / levelCurrData.blueCountFinish;
    let percentYellow = progressHight / levelCurrData.yellowCountFinish;

    if (e.target.matches('.clikElem_green')) {
      let heightGreen = getCount('.task_green_count') * percentGreen;
      const progressGreen = document.querySelector('.progress_green');
      progressGreen.style.height = `${heightGreen}px`;
    }

    if (e.target.matches('.clikElem_Blue')) {
      let heightBlue = getCount('.task_blue_count') * percentBlue;
      const progressBlue = document.querySelector('.progress_blue');
      progressBlue.style.height = `${heightBlue}px`;
    }

    if (e.target.matches('.clikElem_Yellow')) {
      let heightYellow = getCount('.task_yellow_count') * percentYellow;
      const progressYellow = document.querySelector('.progress_yellow');
      progressYellow.style.height = `${heightYellow}px`;
    }
  }
}
export default progress;
