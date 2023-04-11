import refs from "./helpers/refs.js"

function scoreModal  (startShowElem, currLevel ) {
const modal = `
    <div class="backdrop scoreModal">
        <div class="modal">
            <p>Level <span class="level_name">1</span> end</p>
            <p>Your count: <span class="modal_count">90</span></p>
            <button class="button button_startLevel" type="button">Start <span class="level_name">2</span> level</button>
        </div>
        
    </div>`


function renderList () {
    
    refs.scoreModalBackdrop.innerHTML = ''
    refs.scoreModalBackdrop?.classList.remove('is-hidden')
    refs.scoreModalBackdrop.insertAdjacentHTML('beforeend', modal)
     
    if(currLevel < 6)
        {const startLevelButton = document.querySelector('.button_startLevel')
        startLevelButton.addEventListener('click', onStartLevel)
    
        function onStartLevel () {
            refs.scoreModalBackdrop?.classList.add('is-hidden')
            startShowElem()       
        }
    } else {console.log('end')}
}

renderList ()}

export default scoreModal

