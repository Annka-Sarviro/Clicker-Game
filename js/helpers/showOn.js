import getRandomInt from "./random.js";

function showOn (elem, elemSize) {
    elem.style.left = `${getRandomInt(elemSize, 500) - elemSize}px`;
    elem.style.top = `${getRandomInt(elemSize, 500) - elemSize}px`;
    elem.style.width = `${elemSize}px`
    elem.style.height = `${elemSize}px`
    elem.style.opacity = `1`
}

export default showOn