// src: Abeeway Micro tracker reference guide fw 1.8.0 page 23
const uplinkMessageTypes = {
    '00': 'frame_pending',
    '03': 'position_msg',
    '04': 'energy_status_msg',
    '05': 'heartbeat_msg',
    '07': 'activity_status_msg',
    '07': 'shock_detection_msg',
    '09': 'shutdown_msg',
    '0a': 'event_msg',
    '0f': 'debug_msg'
}

// src: Abeeway Micro tracker reference guide fw 1.8.0 page 24
const uplinkTransmissionStrategies = {
    'single_fixed': '00',
    'single_random': '01',
    'dual_random': '02',
    'dual_fixed': '03',
    'network_adr': '04'
}


// Values ranging from [0x01-0xFE] are encoded by encoded form
const batteryStatus = {
    'batt_charging': '00',
    'measurement_err': 'ff'
}

const operationModes = {
    '000': 'standby',
    '001': 'motion_tracking',
    '010': 'permanent_tracking',
    '011': 'motion_start_or_end_tracking',
    '100': 'activity_tracking',
    '101': 'off'
}

const lowerStatusBits = {
    '4': 'set if user alert/SOS has been entered',
    '3': 'Reserved bit',
    '2': 'Set if the tracker is in motion state since the last payload is sent',
    '1': 'Set for a periodic position message',
    '0': 'Set for a position on demand message'
}

const battDecoder = {
    'lo': 2.8,
    'hi': 4.2,
    'nbits': 8,
    'nresv': 2,
    'step': 5.5 //unit -> mV
}

const tempDecoder = {
    'lo': -44,
    'hi': 85,
    'nbits': 8,
    'nresv': 0,
    'step': 0.5 //unit -> Degree Celcius
}

const heartbeatCauses = {
    '01': 'Power-On Reset',
    '02': 'Brown-Out Unregulated Domain REset',
    '04': 'Brown-Out Regulated Domain Reset',
    '08': 'External Pin REset',
    '10': 'Watchdog Reset',
    '20': 'Lockup Reset',
    '40': 'System Request (application) Reset',
}

const positionMsgTypes = {
    '0': 'GPS fix',
    '1': 'GPS timeout',
    '2': 'Encrypted WIFI BSSID (No more used but still supported)',
    '3': 'WIFI timeout',
    '4': 'Wifi failure',
    '5': 'LPGPS data (encrypted, not descirbed in this document)',
    '6': 'LPGPS data (encrypted, not descirbed in this document)',
    '7': 'BLE beacon scan',
    '8': 'BLE beacon failure',
    '9': 'WIFI BSSIDs',
}

exports.uplinkMessageType = uplinkMessageTypes
exports.uplinkTransmissionStrategies = uplinkTransmissionStrategies
exports.batteryStatus = batteryStatus
exports.operationModes = operationModes
exports.lowerStatusBits = lowerStatusBits
exports.tempDecoder = tempDecoder
exports.battDecoder = battDecoder
exports.heartBeatCauses = heartbeatCauses
exports.positioningMsgTypes = positionMsgTypes



