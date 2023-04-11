import refs from "./helpers/refs.js"
import levelAllData from './helpers/levelData.js'

function progress (curr) {
   
let currLevel = curr
let clickRed = 0
let clickBlue = 0
let clickYellow = 0
let levelCurrData = levelAllData[currLevel-1]
refs.gameDesk.addEventListener('click', onReRenderProgress)


const list = 
    `<div class="progress ">
        <div class="progress_color progress_red"></div>
    </div>
    <div class="progress ">
        <div class="progress_color progress_blue"></div>
    </div>
    <div class="progress ">
        <div class="progress_color progress_yellow"></div>
    </div>`


function renderList () {
     refs.progressBar.innerHTML = '';
     refs.progressBar.insertAdjacentHTML('beforeend', list)
     refs.gameDesk.addEventListener('click', onReRenderProgress)

}

renderList ()


function onReRenderProgress (e) {
    
    let progress= document.querySelector('.progress')
    let percentRed = progress.offsetHeight / (levelCurrData.redCountFinish)
    let percentBlue = progress.offsetHeight / (levelCurrData.blueCountFinish)
    let percentYellow = progress.offsetHeight / (levelCurrData.yellowCountFinish)
 
    if(e.target.matches('.clikElem_Red')) {
        clickRed +=percentRed
        const progressRed= document.querySelector('.progress_red')
        progressRed.style.height = `${clickRed}px`
    }

    if(e.target.matches('.clikElem_Blue')) {
        clickBlue+=percentBlue
        const progressBlue= document.querySelector('.progress_blue')
        progressBlue.style.height = `${clickBlue}px`       
    }

    if(e.target.matches('.clikElem_Yellow')) {
        clickYellow+=percentYellow
        const progressBlue= document.querySelector('.progress_yellow')
        progressBlue.style.height = `${clickYellow}px`        
    }

}
}
export default progress
