let {FirstService} = require('./basicService')
let bleno = require('bleno')


bleno.on('advertisingStart', function(error){
    if(!error){
        bleno.setServices([FirstService])
    }
})


bleno.on('serviceSet', function (error){
    if(error){
        console.error(`Uuups something went wrong: ${error}`)
    }else{
        console.log('on -> ServiceSet => Contrats, worked as expected')
    }
})

bleno.on('accept', function(clientAddress){
    console.log(`on -> accept, client: ${clientAddress} `)
})

bleno.on('disconnect', function(clientAddress){
    console.log(`Diconnected from address: ${clientAddress}`)
})

bleno.on('rssiUpdate', (rssi)=>{
  console.log(`The current rssi value is: ${rssi}`)
})

bleno.on('stateChange', function(state){
    console.log('state Changed')
    if(state === 'poweredOn'){
        console.log('state is powered on')
        bleno.startAdvertising('ChrisiSense')
    }else{
        console.log('state is powered off')
        bleno.stopAdvertising()
    }
})
