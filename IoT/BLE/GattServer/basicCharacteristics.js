let bleno = require('bleno')
let Characteristic = bleno.Characteristic
let {firstDescriptor} = require('./descriptors')


let basicChar = new Characteristic({
    uuid:'fffffffffffffffffffffffffffffff1',
    properties:['read'],
    secure: ['read'],
    value: "Hello World",
    descriptors:[firstDescriptor],
    onReadRequest: function(offset, callback){
        console.log('Hello World was read')
        callback(this.RESULT_SUCCESS, octets)
    }
})


exports.basicChar = basicChar

