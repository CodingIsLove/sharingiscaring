let {expect} = require('chai')
const {uplinkType} = require('../util/payloads')
const {decodeUplink} = require('../uplink/decodeUplink')


describe('All Uplink Tests', function () {
    describe('Switching for Uplinkdecoding', function () {
        describe('Uplink message types', function () {
            it('should log Shutdown message', function () {
                expect(decodeUplink(uplinkType.shutdownMsg)).to.equal('shutdown_msg')
            });
            it('should log Event message', function () {
                expect(decodeUplink(uplinkType.eventMsg)).to.equal('event_msg')
            });
            it('should log Shock Detection message', function () {
                expect(decodeUplink(uplinkType.shock_detection_msg)).to.equal('shock_detection_msg')
            });
            it('should log Configuration message', function () {
                expect(decodeUplink(uplinkType.configuration_msg)).to.equal('configuration_msg')
            });
            it('should log Activity Status message', function () {
                expect(decodeUplink(uplinkType.activity_status_msg)).to.equal('activity_status_msg')
            });
            it('should log Heartbeat message', function () {
                expect(decodeUplink(uplinkType.heartbeat_msg)).to.equal('heartbeat_msg')
            });
            it('should log Energy status message', function () {
                expect(decodeUplink(uplinkType.energy_status_msg)).to.equal('energy_status_msg')
            });
            it('should log Position message', function () {
                expect(decodeUplink(uplinkType.position_msg)).to.equal('position_msg')
            });
            it('should log Frame Pending message', function () {
                expect(decodeUplink(uplinkType.frame_pending)).to.equal('frame_pending')
            });
        })
    });

    describe('Uplinks', function () {
        describe('Parse Messages', function () {
            it('Parsing Frame pending messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Position messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Energy Status messges', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Heartbeat messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Activity Status messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Configuration messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Shock detection message', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Shutdown Message', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Event messages', function () {
                expect(1).to.equal('not implemented yet')
            });
            it('Parsing Debug messages', function () {
                expect(1).to.equal('not implemented yet')
            });
        });
    })
});

