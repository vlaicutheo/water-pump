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
    if (umiditate > 600) {
        basic.showString("DRY ###")
        basic.showString("WATER 5 SEC")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showString("WET ###")
        basic.showString("WAIT 10 MIN")
    }
    basic.pause(600000)
})
