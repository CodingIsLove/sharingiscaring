const {createUPDU} = require('abeeway-driver')


const uplinkPayloadHex = '035cc49220001c3d280516f902b7d18e'
let pdu = createUPDU(uplinkPayloadHex)
console.log(pdu.toJSON())
