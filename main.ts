let umiditate = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    umiditate = 0
    umiditate = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(umiditate)
})
basic.forever(function () {
    umiditate = 0
    umiditate = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(umiditate)
    basic.pause(2000)
    if (umiditate > 600) {
        basic.showString("DRY")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showString("WET")
    }
    basic.pause(30000)
})
