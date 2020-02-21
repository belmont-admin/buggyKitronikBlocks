function countdown () {
    start = 5
    while (start > 0) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
}
input.onButtonPressed(Button.B, function () {
    kitronik_servo_lite.left()
    basic.pause(1000)
    kitronik_servo_lite.stop()
})
input.onButtonPressed(Button.A, function () {
    countdown()
    basic.showArrow(ArrowNames.North)
    kitronik_servo_lite.forward()
    basic.pause(2000)
    kitronik_servo_lite.turnLeft(90)
    kitronik_servo_lite.forward()
    basic.pause(2000)
    kitronik_servo_lite.stop()
})
let start = 0
basic.showIcon(IconNames.Happy)
// Default is 200
kitronik_servo_lite.setDegreesPerSecond(240)
