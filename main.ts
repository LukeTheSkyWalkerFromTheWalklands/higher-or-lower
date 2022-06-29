input.onButtonPressed(Button.A, function () {
    if (randint(0, 10) > randint(0, 10)) {
        game.addScore(1)
        basic.pause(5000)
        basic.showString("" + (randint(0, 10)))
    }
    if (randint(0, 10) < randint(0, 10)) {
        basic.pause(5000)
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (randint(0, 10) < randint(0, 10)) {
        game.addScore(1)
        basic.pause(5000)
        basic.showString("" + (randint(0, 10)))
    }
    if (randint(0, 10) > randint(0, 10)) {
        basic.pause(5000)
        game.gameOver()
    }
})
basic.showString("" + (randint(0, 10)))
