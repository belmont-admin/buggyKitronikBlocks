input.onButtonPressed(Button.B, function () {
    kitronik_servo_lite.stop()
})
input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.forward()
    basic.showArrow(ArrowNames.North)
})
