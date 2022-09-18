let umiditate = 0
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 1000)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 0)
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
        basic.showString("Uscat")
        pins.analogWritePin(AnalogPin.P0, 1000)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showString("Umed")
    }
    basic.pause(30000)
})
