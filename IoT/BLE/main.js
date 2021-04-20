const hello = function(){
    alert('Hello World')
}


const getGeoloc = function (){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords)
        })
    }else{
        console.log("Geolocatio is not available")
    }
}


const bluetooth = function (){
  navigator.bluetooth.requestDevice({
      filters:[{
          services: ['heart_rate']
      }]
  })
      .then(device => device.gatt.connect())
      .then(server => server.getPrimaryService('heart_rate'))
      .then(service => {
          choosenHeartRateService = service;
          return Promise.all([
              service.getCharacteristic('body_sensor_location')
                  .then()
          ])
      })
}
