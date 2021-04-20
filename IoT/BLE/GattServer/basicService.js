let {basicChar} = require('./basicCharacteristics')
let bleno = require('bleno')
let PrimaryService = bleno.PrimaryService


let FirstService = new PrimaryService({
    uuid:'1809',
    characteristics:[basicChar]
})

exports.FirstService = FirstService
