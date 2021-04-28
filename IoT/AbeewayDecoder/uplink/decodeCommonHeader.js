const { positioningMsgTypes, uplinkMessageType, operationModes, tempDecoder, battDecoder} = require('../util/constants')
const {generalValueDecoder} = require('../util/generalValueDecoder')

const decodeHeader = function (payload) {
    let comm_header = {
        type: null,
        status: {
            'operationMode': null,
            'sosIsEntered': null,
            'trackerInMotionSinceLastPayload': null,
            'periodicPositionMsgIsSet': null,
            'isPositionOnDemandMsg': null
        },
        battery: null,
        temperature: null,
        ack: null,
        opt: null
    }

    // binaryStatus String
    let binStatString = parseInt(payload.slice(2, 4), 16).toString(2).padStart(8, 0)

    // generate decoded Header object
    comm_header.type = uplinkMessageType[payload.slice(0, 2)]
    comm_header.status.operationMode = operationModes[binStatString.slice(0, 3)]
    comm_header.status.sosIsEntered = binStatString.slice(3, 4) == '1'
    comm_header.status.trackerInMotionSinceLastPayload = binStatString.slice(5, 6) == '1'
    comm_header.status.periodicPositionMsgIsSet = binStatString.slice(6, 7) == '1'
    comm_header.status.isPositionOnDemandMsg = binStatString.slice(7, 8) == '1'
    comm_header.battery = computeBattery(payload)
    comm_header.temperature = decodeTemp(payload.slice(6, 8))
    comm_header.ack = parseInt(payload.slice(8, 9), 16)
    comm_header.opt = positioningMsgTypes[parseInt(payload.slice(9, 10), 16)]

    return comm_header
}

const decodeBatt = function (byte) {
    return generalValueDecoder(
        parseInt(byte, 16),
        battDecoder.lo,
        battDecoder.hi,
        battDecoder.nbits,
        battDecoder.nresv
    )
}

const decodeTemp = function (byte) {
    return generalValueDecoder(
        parseInt(byte, 16),
        tempDecoder.lo,
        tempDecoder.hi,
        tempDecoder.nbits,
        tempDecoder.nresv
    )
}

const computeBattery = function (data) {
    // battery
    let battStat = data.slice(4, 6)
    if (battStat == '00') {
        return 'charging'
    } else if (battStat == 'ff') {
        return 'measurement_error'
    } else {
        return decodeBatt(battStat)
    }
}

exports.decodeHeader = decodeHeader
