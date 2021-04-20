let {whiteLedChar, redLedChar, blueLedChar} = require('./basicCharacteristics')
let bleno = require('bleno')
let PrimaryService = bleno.PrimaryService


let FirstService = new PrimaryService({
    uuid: '1821',
    characteristics: [
        blueLedChar,
        redLedChar,
        whiteLedChar
    ]
})
exports.FirstService = FirstService
