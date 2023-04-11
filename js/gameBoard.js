import refs from "./helpers/refs.js"
import levelAllData from './helpers/levelData.js'
import getRandomInt from "./helpers/random.js"
import showOff from "./helpers/shoOff.js"
import showOn from "./helpers/showOn.js"
import progress from "./progressBar.js"
import scoreModal from "./scoreModal.js"

const user = JSON.parse(localStorage.getItem('user'));
const userName = user?.name || 'User'
let redCount = 0
let blueCount = 0
let yellowCount = 0
let stopGame = [false, false,false]
let currLevel = 1
let levelCurrData = levelAllData[currLevel-1]
let intervalRedId,intervalYellowId,intervalBlueId; 
let score = 0

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
    refs.startBtn.addEventListener('click', startPlaying);
    refs.stopBtn.addEventListener('click', endGame);
    refs.stopBtn.disabled = true
}

function endGame () {
    refs.startBtn.disabled = false
     refs.stopBtn.disabled = true
    clearInterval(intervalRedId); 
    clearInterval(intervalYellowId);
    clearInterval(intervalBlueId);
     redCount = 0
    blueCount = 0
    yellowCount = 0
    refs.redCount.textContent = `0`
    refs.blueCount.textContent = `0`
    refs.yellowCount.textContent = `0`
    currLevel = 1
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
    startPlaying()
    
}


function startPlaying() {
    refs.startBtn.disabled = true 
    refs.stopBtn.disabled = false
    let delayRed = getRandomInt(levelCurrData.timeIntervalRed[0], levelCurrData.timeIntervalRed[1])
    let delayBlue = getRandomInt(levelCurrData.timeIntervalBlue[0], levelCurrData.timeIntervalBlue[1])
    let delayYellow = getRandomInt(levelCurrData.timeIntervalYellow[0], levelCurrData.timeIntervalYellow[1])

    const  clikRedElem = document.querySelector('.clikElem_Red');
    const  clikBlueElem = document.querySelector('.clikElem_Blue');
    const  clikYellowElem = document.querySelector('.clikElem_Yellow');

    clikRedElem.addEventListener('click', scorePlus)
    clikBlueElem.addEventListener('click', scorePlus)
    clikYellowElem.addEventListener('click', scorePlus)

    intervalRedId = setInterval(function() {
        showElements (clikRedElem)}, delayRed);  

    intervalBlueId = setInterval(function() {
        showElements (clikBlueElem)}, delayBlue);

    intervalYellowId = setInterval(function() {   
        showElements (clikYellowElem)}, delayYellow);
}
    


function stopPlaying() {
    const  clikElem = document.querySelector('.clikElem');
    clearInterval(intervalRedId); 
    clearInterval(intervalYellowId);
    clearInterval(intervalBlueId);
    clikElem.innerHTML = '';
    score += redCount + blueCount + yellowCount
    console.log(score)
    scoreModal(startShowElem ,currLevel)  
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
   redCount+=1}
   if(e.currentTarget.matches('.clikElem_Blue')) {
   blueCount+=1} 
   if(e.currentTarget.matches('.clikElem_Yellow')) {
   yellowCount+=1}


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


