let bleno = require('bleno')
let Descriptor = bleno.Descriptor


const firstDescriptor = new Descriptor({
   uuid:'2901' ,
   value: 'This is my first Hello World Descriptor. Awesome, seems to work'
})



exports.firstDescriptor = firstDescriptor
