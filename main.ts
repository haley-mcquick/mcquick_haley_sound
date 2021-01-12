while (true) {
    console.log(input.soundLevel())
}
if (input.soundLevel() > 5) {
    light.showAnimation(light.rainbowAnimation, 500)
} else {
    light.clear()
}

