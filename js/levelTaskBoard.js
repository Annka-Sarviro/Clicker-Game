import refs from './helpers/refs.js';

function levelTaskBoard(currLevel, levelCurrData) {
  refs.levelTaskBoardTitleTask.textContent = `${currLevel}`;
  refs.levelTaskBoardColorGreen.textContent = `${levelCurrData.greenCountFinish}`;
  refs.levelTaskBoardColorBlue.textContent = `${levelCurrData.blueCountFinish}`;
  refs.levelTaskBoardColorYellow.textContent = `${levelCurrData.yellowCountFinish}`;
}

export default levelTaskBoard;
