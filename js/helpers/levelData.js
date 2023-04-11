import getRandomInt from "./random.js"

const level1 = {
    redCountFinish: 2,
    blueCountFinish: 2,
    yellowCountFinish: 2, 
    elemSize: 40,
    timeIntervalRed: [2000, 4000],
    timeIntervalBlue: [2000, 3000],
    timeIntervalYellow: [2000, 4000]
}

const level2 = {
    redCountFinish: 3,
    blueCountFinish: 3,
    yellowCountFinish: 3, 
    elemSize: 40,
    timeIntervalRed: [2000, 3000],
    timeIntervalBlue: [2000, 3000],
    timeIntervalYellow: [2000, 3000]
}

const level3 = {
    redCountFinish: 4,
    blueCountFinish: 4,
    yellowCountFinish: 4, 
    elemSize: 30,
    timeIntervalRed: [2000, 3000],
    timeIntervalBlue: [1000, 3000],
    timeIntervalYellow: [1000, 3000]
}

const level4 = {
    redCountFinish: 4,
    blueCountFinish: 4,
    yellowCountFinish: 4, 
    elemSize: 20,
    timeIntervalRed: [2000, 3000],
    timeIntervalBlue: [1000, 3000],
    timeIntervalYellow: [1000, 3000]
}

const level5 = {
    redCountFinish: 2,
    blueCountFinish: 2,
    yellowCountFinish: 2, 
    elemSize: 20,
    ttimeIntervalRed: [1000, 3000],
    timeIntervalBlue: [2000, 3000],
    timeIntervalYellow: [1000, 3000]
}
const levelData = [level1, level2, level3, level4, level5]
export default levelData