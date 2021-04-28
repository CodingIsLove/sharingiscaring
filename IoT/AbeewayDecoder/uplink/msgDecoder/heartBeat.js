// data stands for the complete payload here
const getFwVersion = function (data) {
    let fwVersion = ''
    fwVersion.concat(parseInt(data.slice(12, 13), 16) + '.')
    fwVersion.concat(parseInt(data.slice(13, 14), 16) + '-')
    fwVersion.concat(parseInt(data.slice(14, 15), 16).toString())
    return fwVersion
}

const getBLEVersion = function (data) {
    let bleVersion = ''
    bleVersion.concat(parseInt(data.slice(15, 16), 16) + '.')
    bleVersion.concat(parseInt(data.slice(16, 17), 16) + '-')
    bleVersion.concat(parseInt(data.slice(17, 18), 16).toString())
    return bleVersion
}


exports.getFwVersion = getFwVersion
exports.getBLEVersion = getBLEVersion
