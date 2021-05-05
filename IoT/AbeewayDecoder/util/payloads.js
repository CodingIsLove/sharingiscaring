const payloads = [
    '0a24e68c5000',
    '0a30e68d5000',
    '09a0e58f5000',
    '0a24e18d5000',
    '0a24e18d5000',
    '0520d8885040010901010003'
]

const uplinkType = {
    'shutdownMsg': '09a0e58f5000',
    'eventMsg': '0a24e68c5000',
    'position_msg': '032cdb88590ea86abb9ac394b5e8be81bc129cb50c8e29f1304daf4a5f990353a9af',
    'position_msg_gps_fixed':'034ca79b20001c3fb90514b00be5e30d',
    'frame_pending': '00',
    'energy_status_msg': '04',
    'heartbeat_msg': '05',
    'activity_status_msg': '07',
    'configuration_msg': '07',
    'shock_detection_msg': '07',
    'debug_msg': '0f',


}

exports.payloads = payloads
exports.uplinkType = uplinkType
