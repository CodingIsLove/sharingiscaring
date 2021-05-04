let gps_payload = '035cc49220001c3d280516f902b7d18e'

/*
This is just a basic version of a parser, that
 */

function main(hex_payload) {
    if (hex_payload.slice(0, 2) == '03') {
        let parsedContent = [];

        // Parse common header
        parsedContent[0] = 'Position Message'; //
        parsedContent[1] = getBatteryStatus(hex_payload.slice(4, 6))
        parsedContent[2] = getTemperature(hex_payload.slice(6, 8))
        parsedContent[3] = getAck(hex_payload.slice(8, 9))
        parsedContent[4] = getPosType(hex_payload.slice(9, 10))

        if(parsedContent[4] == 'GPS fix'){

        }else if(parsedContent[4] == 'BLE beacon scan'){

        }else if(parsedContent[4] == 'Wifi bssid')

        return parsedContent
    } else {
        return []
    }
}


// byte should be in form of 0xbb
function getBatteryStatus(byte) {
    if (byte == '00') {
        return 'charging'
    } else if (byte == 'ff') {
        return 'measurement_error'
    } else {
        return generalValueDecoder(
            parseInt(byte, 16),
            2.8,
            4.2,
            8,
            5.5
        )
    }
}

// byte should be in form of 0xbb
function getTemperature(byte) {
    return generalValueDecoder(parseInt(byte,16),
        -44,
        85,
        8,
        0,
        0.5
        )
}

function getAck(payload) {
    return parseInt(payload, 16)
}

function getPosType(payload) {
    switch (parseInt(payload, 16)) {
        case 0:
            return 'GPS fix'
            break
        case 1:
            return 'GPS timeout'
            break
        case 2:
            return 'Encrypted Wifi BSSID'
            break
        case 3:
            return 'Wifi timeout'
            break
        case 4:
            return 'Wifi failure'
            break
        case 5:
            return 'LPGPS data'
            break
        case 6:
            return 'LPGPS data'
            break
        case 7:
            return 'BLE beacon scan'
            break
        case 8:
            return 'BLE beacon failure'
            break
        case 9:
            return 'Wifi BSSID'
            break
    }
}

const generalStepSizeDecoder = function (lo, hi, nbits, nresv) {
    return 1.0 / ((((1 << nbits) - 1) - nresv) / (hi - lo))
}
const generalValueDecoder = function (value, lo, hi, nbits, nresv) {
    return ((value - nresv / 2) * generalStepSizeDecoder(lo, hi, nbits, nresv) + lo)
}


// Execute the parser
let result = main(gps_payload)

console.log(`${result.forEach(element => console.log(element))}`)
