// This is the Value decoder described in the official Documentation
//todo: Write a clean JS Doc for this here
const generalStepSizeDecoder = function (lo, hi, nbits, nresv) {
    return 1.0 / ((((1 << nbits) - 1) - nresv) / (hi - lo))
}
const generalValueDecoder = function (value, lo, hi, nbits, nresv) {
    return ((value - nresv / 2) * generalStepSizeDecoder(lo, hi, nbits, nresv) + lo)
}


exports.generalStepSizeDecoder = generalStepSizeDecoder
exports.generalValueDecoder = generalValueDecoder
