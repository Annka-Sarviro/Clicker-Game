import refs from './helpers/refs.js';

function levelTaskBoard(currLevel, levelCurrData) {
  refs.levelTaskBoardTitleTask.textContent = `${currLevel}`;
  refs.levelTaskBoardColorRed.textContent = `Red: ${levelCurrData.redCountFinish}`;
  refs.levelTaskBoardColorBlue.textContent = `Blue: ${levelCurrData.blueCountFinish}`;
  refs.levelTaskBoardColorYellow.textContent = `Yellow: ${levelCurrData.yellowCountFinish}`;
}

export default levelTaskBoard;
