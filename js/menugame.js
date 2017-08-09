// var Nakama = {}

//
// window.onload = function () {
//     Nakama.game = new Phaser.Game(Nakama.configs.GAME_SCREEN.width, Nakama.configs.GAME_SCREEN.height, Phaser.AUTO, '',
//         {
//             preload: preload,
//             create: create,
//             update: update,
//             render: render
//         }, false, false
//     );
// }

var menuGameState = {
    // preparations before game starts
    preload : function () {
        Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
        Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;
        Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
        Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
        Nakama.game.scale.pageAlignHorizontally = true;
        Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        Nakama.game.time.advancedTiming = true;

        Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
        Nakama.game.load.image('background', 'Assets/game/background_2.jpg');
    },

// initialize the game
    create : function () {
        Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
        Nakama.keyboard = Nakama.game.input.keyboard;
        Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
        Nakama.background.scale.setTo(1,1);
        Nakama.buttonStart = Nakama.game.add.sprite(320, 800, 'planets', 'frog1.png');
        Nakama.tree = Nakama.game.add.sprite(0, 600, 'planets', 'Tree3.png');
    },

// update game state each frame
    update : function () {
        if(Nakama.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            Nakama.game.state.start('playgame');
        }
    },

// before camera render (mostly for debug)
    render : function () {
    }
}

