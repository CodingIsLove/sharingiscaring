let {decodeHeader} = require('./decodeCommonHeader')
let {heartBeatCauses} = require('../util/constants')
let {getFwVersion, getBLEVersion} = require('./msgDecoder/heartBeat')

const decodeUplink = function (payload) {
    // Get Header infos into the message
    let message = decodeHeader(payload)

    // Based on the header type add further attributes to the object
    switch (message.type) {
        case 'frame_pending':
            console.log("Not implemented yet")
            return 'frame_pending'
            break
        case 'position_msg':
            console.log("Not implemented yet")
            return 'position_msg'
            break
        case 'energy_status_msg':
            console.log("Not implemented yet")
            return 'energy_status_msg'
            break
        case 'heartbeat_msg':
            console.log("Not implemented yet")
            return decodeHeartbeat(payload)
            break
        case 'activity_status_msg':
            console.log("Not implemented yet")
            return 'activity_status_msg'
            break
        case 'configuration_msg':
            console.log("Not implemented yet")
            return 'configuration_msg'
            break
        case 'shock_detection_msg':
            console.log("Not implemented yet")
            return 'shock_detection_msg'
            break
        case 'shutdown_msg':
            console.log("Not implemented yet")
            return 'shutdown_msg'
            break
        case 'event_msg':
            console.log("Not implemented yet")
            return 'event_msg'
            break
        case 'debug_msg':
            console.log("Not implemented yet")
            return 'debug_msg'
            break
        default:
            return 'somethingElse'
    }
}

const decodeHeartbeat = function (payload) {
    message.cause = heartBeatCauses[payload.slice(10 - 12)]
    message.fwVersion = getFwVersion(payload)
    message.bleFwVersion = getBLEVersion(payload)
}

const

    exports
.
decodeUplink = decodeUplink
