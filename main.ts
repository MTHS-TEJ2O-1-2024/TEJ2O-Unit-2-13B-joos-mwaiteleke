/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Nov 2024
 * This program counts down from 4 and lights up neopixels accordingly
*/

let neopixelStrip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

let count = 4

// on button A pressed
input.onButtonPressed(Button.A, function () {
    while (count >= 0) {
        basic.showNumber(count)

        // on number 4
        if (count - 1 == 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
        }

        // on number 3
        if (count - 1 == 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }

        // on number 2
        if (count - 1 == 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }
        // on number 1
        if (count - 1 == 0) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }
        basic.pause(500)
        count--
    }
    basic.showIcon(IconNames.Happy)
})
