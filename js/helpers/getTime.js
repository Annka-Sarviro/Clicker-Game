function getTime(timeStart) {
    const timeNow = Date.now()
    setTimeout
    let time = ((timeNow-timeStart)/1000)
    return time
}

export default getTime