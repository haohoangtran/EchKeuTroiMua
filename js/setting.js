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
var speedFrog = 0.5;

var settingGameState = {
    // preparations before game starts
    preload: function () {
        Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
        Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;
        Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
        Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
        Nakama.game.scale.pageAlignHorizontally = true;
        Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        Nakama.game.time.advancedTiming = true;

        Nakama.game.load.atlasJSONHash('menus', 'Assets/game/main_2.png', 'Assets/assets_main2.json');
        Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
        Nakama.game.load.atlasJSONHash('gameplay', 'Assets/game/game_play.png', 'Assets/assets_gameplay.json');
        Nakama.game.load.atlasJSONHash('trees', 'Assets/game/tree.png', 'Assets/assets_tree.json');
        Nakama.game.load.image('background', 'Assets/game/background_2.jpg');
        Nakama.game.load.audio('musicMenu', 'Assets/music/music.wav');
    },

// initialize the game
    create: function () {


        Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
        Nakama.keyboard = Nakama.game.input.keyboard;
        Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
        Nakama.background.scale.setTo(1, 1);


        Nakama.cloud1 = Nakama.game.add.sprite(800, 200, 'trees', 'Cloud_Small_Left.png');
        Nakama.cloud2 = Nakama.game.add.sprite(960, 450, 'trees', 'Cloud_Small_Right.png');
        Nakama.cloud3 = Nakama.game.add.sprite(1024, 600, 'trees', 'Cloud_Big_Right.png');

        Nakama.logoTitle = Nakama.game.add.sprite(50, 10, 'menus', 'Background_Text_Froggee.png');
        Nakama.frog = Nakama.game.add.sprite(320, 550, 'menus', 'Background_BigPlanet.png');
        Nakama.tree1 = Nakama.game.add.sprite(0, 200, 'planets', 'Tree1.png');
        Nakama.tree2 = Nakama.game.add.sprite(0, 400, 'planets', 'Tree2.png');
        Nakama.tree3 = Nakama.game.add.sprite(0, 600, 'planets', 'Tree3.png');
        Nakama.tree4 = Nakama.game.add.sprite(640, 400, 'planets', 'Tree1.png');
        Nakama.tree5 = Nakama.game.add.sprite(640, 600, 'planets', 'Tree2.png');
        Nakama.tree6 = Nakama.game.add.sprite(640, 800, 'planets', 'Tree3.png');
        Nakama.buttonPlay = Nakama.game.add.sprite(250, 800, 'gameplay', 'ButtonPlay.png');
        Nakama.backgroundButtonSetup = Nakama.game.add.sprite(100, 870, 'gameplay', 'BackgroundButton.png');
        Nakama.buttonSetup = Nakama.game.add.sprite(Nakama.backgroundButtonSetup.position.x, Nakama.backgroundButtonSetup.position.y, 'gameplay', 'IconSetting.png');
        Nakama.buttonPlay.inputEnabled = true;
        Nakama.buttonPlay.events.onInputDown.add(listener, this);
        Nakama.buttonPlay.events.onInputDown.add(listener, this);
        Nakama.tree4.angle -= 180;
        Nakama.tree5.angle -= 180;
        Nakama.tree6.angle -= 180;
        Nakama.frog.anchor.setTo(0.5, 0.65);
        Nakama.backgroundButtonSetup.anchor.setTo(0.5, 0.5);
        Nakama.buttonSetup.anchor.setTo(0.5, 0.5);


    },

// update game state each frame
    update: function () {
        Nakama.frog.angle += speedFrog;
        if (Nakama.frog.angle >= 30) {
            speedFrog = -0.5;
        }
        else if (Nakama.frog.angle <= -30) {
            speedFrog = 0.5;
        }

        Nakama.cloud1.position.x -= 1;
        Nakama.cloud2.position.x -= 2;
        Nakama.cloud3.position.x -= 3;

        if (Nakama.cloud1.position.x <= -100) {
            Nakama.cloud1.position.x = 800;
        }

        if (Nakama.cloud2.position.x <= -200) {
            Nakama.cloud2.position.x = 960;
        }

        if (Nakama.cloud3.position.x <= -300) {
            Nakama.cloud3.position.x = 1024;
        }

    },

// before camera render (mostly for debug)
    render: function () {
    }
}

function listener() {
    Nakama.game.state.start('playgame');
}

function listenerSetting() {
    Nakama.game.state.start('playgame');
}
