namespace SpriteKind {
    export const Laser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Laser`, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let supinspace_enemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`Supinspace Ship`, SpriteKind.Player)
mySprite.setPosition(75, 75)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    supinspace_enemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, 0, 50)
    supinspace_enemy.x = randint(0, scene.screenWidth())
    supinspace_enemy.setKind(SpriteKind.Enemy)
})
forever(function () {
    music.playMelody("D - - - F D A D ", 500)
    music.playMelody("A - - - - C5 - - ", 500)
    music.playMelody("B - - - G G G G ", 500)
    music.playMelody("G G G G G G A B ", 500)
    music.playMelody("C5 - G - C - D - ", 500)
    music.playMelody("- E - F - G - A ", 500)
    music.playMelody("C5 - G - C - D - ", 500)
    music.playMelody("- - C - G G G G ", 500)
})
