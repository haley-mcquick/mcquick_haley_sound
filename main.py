while True:
    print(input.sound_level())

if input.sound_level() > 5:
    light.show_animation(light.rainbowAnimation, 500)
else:
    light.clear()
    