import refs from "./helpers/refs.js"
import levelAllData from './helpers/levelData.js'
import testlevelData from "./helpers/testLevelData.js"
import getRandomInt from "./helpers/random.js"
import showOff from "./helpers/shoOff.js"
import showOn from "./helpers/showOn.js"
import progress from "./progressBar.js"
import scoreModal from "./scoreModal.js"
import getTime from "./helpers/getTime.js"
import levelTaskBoard from "./levelTaskBoard.js"

const user = JSON.parse(localStorage.getItem('user'));
const userName = user?.name || 'User'
let redCount = 0
let blueCount = 0
let yellowCount = 0
let stopGame = [false, false,false]
let currLevel = 1
let levelCurrData = levelAllData[currLevel-1]
let intervalRedId,intervalYellowId,intervalBlueId, intervalId; 
let score = 0
let totalTime =0
let timeStart 
let timeFinish

const list =
     `
    <div class="desk">
        <div class="clikElem clikElem_Red"></div>
        <div class="clikElem clikElem_Blue"></div>
        <div class="clikElem clikElem_Yellow"></div>
        </div>`


function renderList () {
    refs.gameDesk.innerHTML = '';
    refs.gameDesk.insertAdjacentHTML('beforeend', list)
    refs.userName.textContent = `${userName}`
    progress(levelCurrData)
    levelTaskBoard(currLevel, levelCurrData)
    refs.startBtn.addEventListener('click', startPlaying);
    refs.stopBtn.addEventListener('click', endGame);
    refs.stopBtn.disabled = true
    refs.levelTask.textContent = `${currLevel} Level`
}

function endGame () {
    refs.startBtn.disabled = false
     refs.stopBtn.disabled = true
     refs.userLogOut.disabled = false
    clearInterval(intervalRedId); 
    clearInterval(intervalYellowId);
    clearInterval(intervalBlueId);
    clearInterval(intervalId)
    redCount = 0
    blueCount = 0
    yellowCount = 0
    score = 0
    timeStart=0
    refs.scoreBoardTimer.textContent = `0`
    refs.scoreBoaradScore.textContent = `0`
    refs.redCount.textContent = `0`
    refs.blueCount.textContent = `0`
    refs.yellowCount.textContent = `0`
    currLevel = 1
    levelCurrData = levelAllData[currLevel-1]
   renderList ()
}
   

function startShowElem ( showElements) {
    redCount = 0
    blueCount = 0
    yellowCount = 0
     refs.redCount.textContent = `0`
        refs.blueCount.textContent = `0`
        refs.yellowCount.textContent = `0`
    progress(levelCurrData)
    levelTaskBoard(currLevel, levelCurrData)
    refs.levelTask.textContent = `${currLevel} Level`
    startPlaying()
    
}


function startPlaying() {
    refs.startBtn.disabled = true 
    refs.stopBtn.disabled = false
    refs.userLogOut.disabled = true 
    timeStart = Date.now()
    let delayRed = getRandomInt(levelCurrData.timeIntervalRed[0], levelCurrData.timeIntervalRed[1])
    let delayBlue = getRandomInt(levelCurrData.timeIntervalBlue[0], levelCurrData.timeIntervalBlue[1])
    let delayYellow = getRandomInt(levelCurrData.timeIntervalYellow[0], levelCurrData.timeIntervalYellow[1])

    const  clikRedElem = document.querySelector('.clikElem_Red');
    const  clikBlueElem = document.querySelector('.clikElem_Blue');
    const  clikYellowElem = document.querySelector('.clikElem_Yellow');

    clikRedElem.addEventListener('click', scorePlus)
    clikBlueElem.addEventListener('click', scorePlus)
    clikYellowElem.addEventListener('click', scorePlus)

    intervalId=setInterval(() =>{ 
        const time = getTime(timeStart)
        timeFinish = time
        refs.scoreBoardTimer.textContent = `${time.toFixed(1)}`},500
    );
    
    intervalRedId = setInterval(function() {
        showElements (clikRedElem)}, delayRed);  

    intervalBlueId = setInterval(function() {
        showElements (clikBlueElem)}, delayBlue);

    intervalYellowId = setInterval(function() {   
        showElements (clikYellowElem)}, delayYellow);
          
}
    


function stopPlaying() {
    const  clikElem = document.querySelector('.clikElem');
    refs.userLogOut.disabled = false
    clearInterval(intervalRedId); 
    clearInterval(intervalYellowId);
    clearInterval(intervalBlueId);
    clearInterval(intervalId)
    clikElem.innerHTML = '';
    totalTime+=timeFinish
    scoreModal(startShowElem,currLevel,  score, timeFinish, totalTime ,endGame)  
}

function showElements (clikElem) {
    let delay = getRandomInt(500, levelCurrData.timeIntervalRed[1])
    showOn(clikElem, levelCurrData.elemSize)         
 
    setTimeout(function() {     
        showOff(clikElem)        
    }, delay);   

    
} 



function scorePlus (e) {
   if(e.currentTarget.matches('.clikElem_Red')) {
        redCount+=1
        score+=1}
   if(e.currentTarget.matches('.clikElem_Blue')) {
        blueCount+=1
        score+=1} 
   if(e.currentTarget.matches('.clikElem_Yellow')) {
        yellowCount+=1
        score+=1}

 refs.scoreBoaradScore.textContent = `${score}`
   if (redCount === levelCurrData.redCountFinish) {stopGame[0]=true}
   if (blueCount === levelCurrData.blueCountFinish) {stopGame[1]=true}
   if (yellowCount === levelCurrData.yellowCountFinish) {stopGame[2]=true}

   if(stopGame.every((item) => item === true)) {
        refs.redCount.textContent = `0`
        refs.blueCount.textContent = `0`
        refs.yellowCount.textContent = `0`
        currLevel+=1 
        levelCurrData = levelAllData[currLevel-1] || null
        stopGame= [false, false,false]
        stopPlaying()
    }
      
   showOff(e.target)
   refs.redCount.textContent = `${redCount}`
   refs.blueCount.textContent = `${blueCount}`
   refs.yellowCount.textContent = `${yellowCount}`

}

renderList ()


