import refs from "./helpers/refs.js"
import getCount from "./helpers/getCount.js"

function progress (levelCurrData) {

let clickRed = 0
let clickBlue = 0
let clickYellow = 0

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
    
    let progressHight= document.querySelector('.progress').offsetHeight
    let percentRed = progressHight / (levelCurrData.redCountFinish)
    let percentBlue = progressHight / (levelCurrData.blueCountFinish)
    let percentYellow = progressHight / (levelCurrData.yellowCountFinish)

    if(e.target.matches('.clikElem_Red')) {
         let height = getCount('.task_red_count') * percentRed
        const progressRed= document.querySelector('.progress_red')
        progressRed.style.height = `${height}px`
    }

    if(e.target.matches('.clikElem_Blue')) {
         let height = getCount('.task_blue_count') * percentBlue
        const progressBlue= document.querySelector('.progress_blue')
        progressBlue.style.height = `${height}px`       
    }

    if(e.target.matches('.clikElem_Yellow')) {
        let height = getCount('.task_yellow_count') * percentYellow
        const progressYellow= document.querySelector('.progress_yellow')
        progressYellow.style.height = `${height}px`        
    }

}
}
export default progress


