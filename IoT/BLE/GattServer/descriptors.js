let bleno = require('bleno')
let Descriptor = bleno.Descriptor


const blueDesc= new Descriptor({
   uuid:'290B' ,
   value: 'This is just a Blue LED, that can be toggled'
})
const whiteDesc = new Descriptor({
   uuid:'290B' ,
   value: 'This is just a white LED, that can be toggled'
})
const redDesc = new Descriptor({
   uuid:'290B' ,
   value: 'This is just a red LED, that can be toggled'
})

exports.blueDesc = blueDesc
exports.whiteDesc = whiteDesc
exports.redDesc = redDesc
