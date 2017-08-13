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
var music;
var highscoreGameState = {
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
        music = Nakama.game.add.audio('musicMenu');
        if (!music.isPlaying)
            music.play();
        music.loop = true;
        Nakama.logoTitle = Nakama.game.add.sprite(50, 10, 'menus', 'Background_Text_Froggee.png');
        Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
        Nakama.keyboard = Nakama.game.input.keyboard;
        Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
        Nakama.background.scale.setTo(1, 1);


        Nakama.cloud1 = Nakama.game.add.sprite(800, 200, 'trees', 'Cloud_Small_Left.png');
        Nakama.cloud2 = Nakama.game.add.sprite(960, 450, 'trees', 'Cloud_Small_Right.png');
        Nakama.cloud3 = Nakama.game.add.sprite(1024, 600, 'trees', 'Cloud_Big_Right.png');

        Nakama.tree1 = Nakama.game.add.sprite(0, 200, 'planets', 'Tree1.png');
        Nakama.tree2 = Nakama.game.add.sprite(0, 400, 'planets', 'Tree2.png');
        Nakama.tree3 = Nakama.game.add.sprite(0, 600, 'planets', 'Tree3.png');
        Nakama.tree4 = Nakama.game.add.sprite(640, 400, 'planets', 'Tree1.png');
        Nakama.tree5 = Nakama.game.add.sprite(640, 600, 'planets', 'Tree2.png');
        Nakama.tree6 = Nakama.game.add.sprite(640, 800, 'planets', 'Tree3.png');


        Nakama.backgroundButtonHome = Nakama.game.add.sprite(320, 870, 'gameplay', 'BackgroundButton.png');
        Nakama.buttonHome = Nakama.game.add.sprite(Nakama.backgroundButtonHome.position.x, Nakama.backgroundButtonHome.position.y, 'gameplay', 'IconHome.png');
        Nakama.backgroundButtonHome.inputEnabled = true;
        Nakama.buttonHome.inputEnabled = true;
        Nakama.backgroundButtonHome.anchor.setTo(0.5, 0.5);
        Nakama.buttonHome.anchor.setTo(0.5, 0.5);

        Nakama.backgroundButtonHome.events.onInputDown.add(function () {
            Nakama.game.state.start('menugame');
        }, this);

        Nakama.buttonHome.events.onInputDown.add(function () {
            Nakama.game.state.start('menugame');
        }, this);

        Nakama.backgroundButtonMusic = Nakama.game.add.sprite(320, 500, 'gameplay', 'BackgroundButton.png');
        Nakama.buttonMusic = Nakama.game.add.sprite(Nakama.backgroundButtonMusic.position.x, Nakama.backgroundButtonMusic.position.y, 'gameplay', 'Icon_Music.png');
        Nakama.backgroundButtonMusic.inputEnabled = true;
        Nakama.buttonMusic.inputEnabled = true;
        Nakama.backgroundButtonMusic.anchor.setTo(0.5, 0.5);
        Nakama.buttonMusic.anchor.setTo(0.5, 0.5);

        Nakama.backgroundButtonHome.events.onInputDown.add(function () {
            Nakama.buttonMusic.replaceRGB(0, 0, 0);
        }, this);

        Nakama.buttonHome.events.onInputDown.add(function () {

        }, this);


        // Nakama.backgroundButtonHome = Nakama.game.add.sprite(100, 870, 'gameplay', 'BackgroundButton.png');
        // Nakama.buttonHome = Nakama.game.add.sprite(Nakama.backgroundButtonHome.position.x, Nakama.backgroundButtonHome.position.y, 'gameplay', 'IconHome.png');
        // Nakama.backgroundButtonHome.inputEnabled = true;
        // Nakama.buttonHome.inputEnabled = true;
        // Nakama.backgroundButtonHome.anchor.setTo(0.5, 0.5);
        // Nakama.buttonHome.anchor.setTo(0.5, 0.5);

        Nakama.tree4.angle -= 180;
        Nakama.tree5.angle -= 180;
        Nakama.tree6.angle -= 180;


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
