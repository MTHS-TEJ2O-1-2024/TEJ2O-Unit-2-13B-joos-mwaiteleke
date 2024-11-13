/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program counts down from 4 and lights up neopixels accordingly
*/

let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let loopcounter = 4
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {

while (loopcounter >= 0) {
    basic.showNumber (loopcounter)
    strip.range(0, loopcounter).showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    loopcounter = loopcounter - 1
}
})
basic.showIcon (IconNames.Happy)