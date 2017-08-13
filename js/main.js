// var Nakama = {};
// Nakama.configs = {
//
// };
//
// window.onload = function () {
//     Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '',
//         {
//             preload: preload,
//             create: create,
//             update: update,
//             render: render
//         }, false, false
//     );
// }

var playGameState = {
    // preparations before game starts
    preload: function () {
        Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
        Nakama.game.load.image('background', 'Assets/game/background_1.jpg')
        Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
        Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;
        Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
        Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
        Nakama.game.scale.pageAlignHorizontally = true;
        Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        Nakama.game.time.advancedTiming = true;
    },

// initialize the game
    create: function () {
        Nakama.background = Nakama.game.add.sprite(0, -100, 'background');
        Nakama.planetGroup = Nakama.game.add.physicsGroup();
        Nakama.frogGroup = Nakama.game.add.physicsGroup();
        Nakama.game.physics.startSystem();
        Nakama.keyboard = Nakama.game.input.keyboard;
        Nakama.background.scale.setTo(1, 1);
        Nakama.planet=new PlanetController(200, 200, 'BigPlannet.png', {});
        Nakama.player=new FrogController(200, 200, {JUMP: Phaser.Keyboard.SPACEBAR});

    },

// update game state each frame
    update: function () {


    },

// before camera render (mostly for debug)
    render: function () {
        Nakama.game.debug.body(Nakama.player);
        Nakama.game.debug.body(Nakama.planet)
    }

}
