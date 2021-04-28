const {createUPDU} = require('abeeway-driver')


const uplinkPayloadHex = '034cd097200c1c3fa30514b602e6d129'
let pdu = createUPDU(uplinkPayloadHex)
console.log(pdu.toJSON())
