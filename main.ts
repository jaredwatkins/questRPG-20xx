enum RadioMessage {
    message1 = 49434,
    battle = 53594,
    RpG = 16252
}
radio.onReceivedMessage(RadioMessage.battle, function () {
    overworld.setOverworld16(overworld.createMap16(
    overworld.mapRow16(overworld.tilemap16(tilemap`level37`), overworld.tilemap16(tilemap`level38`), overworld.tilemap16(tilemap`level39`)),
    overworld.mapRow16(overworld.tilemap16(tilemap`level43`), overworld.tilemap16(tilemap`level44`), overworld.tilemap16(tilemap`level45`)),
    overworld.mapRow16(overworld.tilemap16(tilemap`level49`), overworld.tilemap16(tilemap`level50`), overworld.tilemap16(tilemap`level51`))
    ))
    mySprite = sprites.create(img`
        1 . . . . . . . 1 
        1 1 2 2 2 2 2 1 1 
        . 1 2 5 5 5 2 1 . 
        . . 2 f 5 f 2 . . 
        . . 2 5 5 5 2 . . 
        . . . 2 5 2 . . . 
        . . 2 2 2 2 2 . . 
        . 2 2 4 4 2 2 2 . 
        . 2 2 4 2 2 2 2 . 
        . 5 2 2 2 2 2 5 . 
        . . 2 2 2 2 2 . . 
        . . . 5 . 5 . . . 
        . . . c . c . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    overworld.loadMapInDirection(CollisionDirection.Right)
    overworld.loadMapInDirection(CollisionDirection.Left)
    overworld.setPlayerSprite(mySprite)
    rpg.addToParty(rpg.character("Max", true), rpg.PartyType.Player)
    radio.sendMessage(RadioMessage.RpG)
})
radio.onReceivedMessage(RadioMessage.RpG, function () {
    rpg.printToTextLog("You are in a cave.")
    rpg.printToTextLog("Name: Max")
    rpg.printToTextLog("HP: 20")
})
let mySprite: Sprite = null
radio.sendMessage(RadioMessage.battle)
