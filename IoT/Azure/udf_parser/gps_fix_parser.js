
// The output will be parsed as geojson (https://geojson.org/)
function main(hex_payload) {

    let geoJson = {
        "type":"Feature",
        "geometry":{
            "type":"Point"
        },
        "properties":{}
    }
    let post_type = getPosType(hex_payload.slice(9, 10))
    console.log(post_type)
    if (hex_payload.slice(0, 2) === '03' && post_type === 'GPS fix') {
        geoJson.properties.msgType= "Position Message"
        geoJson.properties.battery = getBatteryStatus(hex_payload.slice(4, 6))
        geoJson.properties.tmp = getTemperature(hex_payload.slice(6, 8))
        geoJson.properties.ack = getAck(hex_payload.slice(8, 9))
        geoJson.properties.posType = getPosType(hex_payload.slice(9, 10))
        geoJson.properties.age = getAge(hex_payload.slice(10, 12))
        geoJson.geometry.coordinates = [
            getLatitude(hex_payload.slice(12, 18)),
            getLongitude(hex_payload.slice(18, 24))
        ]
        geoJson.properties.ehpe = getEHPE(hex_payload.slice(24, 26))

        return geoJson

    } else {
        geoJson.properties.error = "Not fixed GPS value"
        return geoJson
    }
}


function getAge(byte) {
    return generalValueDecoder(
        parseInt(byte, 16),
        0,
        2040,
        8,
        0
    )
}

//Algorithm for Latitude can be found in the abeeway micro tracker reference guide v.1.8_05 => page 27 => FYI, there is a error in the documentation, the exponent should be 10e6 not 10e7
function getLatitude(byte) {
    let lat = parseInt(byte, 16) << 8
    if (lat > parseInt('7FFFFFFF', 16)) {
        lat = lat - parseInt('1000000000')
    }
    lat = lat / 10e6

    return lat
}

function getLongitude(byte) {
    let lon = parseInt(byte, 16) << 8
    if (lon > parseInt('7FFFFFFF', 16)) {
        lon = lon - parseInt('1000000000')
    }
    lon = lon / 10e6
    return lon
}

function getEHPE(byte) {
    return generalValueDecoder(
        parseInt(byte, 16),
        0,
        1000,
        8,
        0
    )
}

// byte should be in form of 0xbb
function getBatteryStatus(byte) {
    if (byte === '00') {
        return 'charging'
    } else if (byte === 'ff') {
        return 'measurement_error'
    } else {
        return Number(generalValueDecoder(
            parseInt(byte, 16),
            2.8,
            4.2,
            8,
            5.5
        )).toFixed(4)
    }
}

// byte should be in form of 0xbb
function getTemperature(byte) {
    return Number(generalValueDecoder(parseInt(byte, 16),
        -44,
        85,
        8,
        0
    )).toFixed(2)
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

//console.log(main('034ca79b20001c3fb90514b00be5e30d')) => For debugging purposes
