let bleno = require('bleno')
let Characteristic = bleno.Characteristic
let {redDesc, blueDesc, whiteDesc} = require('./descriptors')
const GPIO = require('onoff').Gpio
const red_led = new GPIO(27, 'out')
const blue_led = new GPIO(17, 'out')
const white_led = new GPIO(22, 'out')



let redLedChar = new Characteristic({
    uuid:'2AD2',
    properties:['read'],
    descriptors:[redDesc],
    onReadRequest: function(offset, callback){
        console.log('Red Led was toggled')
        red_led.writeSync(red_led.readSync() ^ 1);
        callback(this.RESULT_SUCCESS, "Hello Hello bitches")
    },
})

let blueLedChar = new Characteristic({
    uuid:'2AD2',
    properties:['read'],
    descriptors:[blueDesc],
    onReadRequest: function(offset, callback){
        console.log('Blue Led was triggered')
        blue_led.writeSync(blue_led.readSync() ^ 1);
        callback(this.RESULT_SUCCESS, "Hello Hello bitches")
    },
})

let whiteLedChar = new Characteristic({
    uuid:'2AD2',
    properties:['read'],
    descriptors:[whiteDesc],
    onReadRequest: function(offset, callback){
        console.log('White Led was triggered')
        white_led.writeSync(white_led.readSync() ^ 1);
        callback(this.RESULT_SUCCESS, "Hello Hello bitches")
    },
})
process.on('SIGINT', _ => {
    red_led.unexport()
    blue_led.unexport()
    white_led.unexport()
});

exports.whiteLedChar = whiteLedChar
exports.redLedChar = redLedChar
exports.blueLedChar = blueLedChar

