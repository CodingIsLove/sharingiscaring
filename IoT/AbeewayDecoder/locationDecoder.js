const payload = "032ae27929003835fb4bd3a2bfc0250673afd7baa8d3f7b2696ab2b0eabce74f00ae"
const bin_payload = parseInt(payload, 16).toString(2)

const header = {
    type: bin_payload.substring(0, 7),
    status: bin_payload.substring(8, 15),
    battery: bin_payload.substring(16, 23),
    ackOpt: bin_payload.substring(24, 31),
}
const data = bin_payload.substring(40)

console.log(`
------------- Header data ------------
Type: ${parseInt(header.type,2).toString(16)}
Status: ${parseInt(header.status,2)}
Battery: ${parseInt(header.battery,2)}
AckOpt: ${parseInt(header.ackOpt,2)}
--------------------------------------
`)

