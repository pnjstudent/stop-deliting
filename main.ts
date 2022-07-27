input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("C5 A G C B F D - ", 120)
})
basic.forever(function () {
	
})
