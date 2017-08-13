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
var speed = 0.5;

var scale = 0.01;
var value = 0.01;

var gameoverGameState = {
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
        Nakama.game.load.audio('musicMenu', 'Assets/music/music.mp3');
    },

// initialize the game
    create: function () {
        music = Nakama.game.add.audio('musicMenu');
        if (Nakama.configs.MUSICPLAY)
            music.play();
        music.loop = true;

        Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
        Nakama.keyboard = Nakama.game.input.keyboard;
        Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
        Nakama.background.scale.setTo(1, 1);

        Nakama.textGameOver = Nakama.game.add.sprite(100, 150, 'gameplay', 'Text_GameOver.png');

        Nakama.cloud1 = Nakama.game.add.sprite(800, 200, 'trees', 'Cloud_Small_Left.png');
        Nakama.cloud2 = Nakama.game.add.sprite(960, 450, 'trees', 'Cloud_Small_Right.png');
        Nakama.cloud3 = Nakama.game.add.sprite(1024, 600, 'trees', 'Cloud_Big_Right.png');

        Nakama.lightstar1 = Nakama.game.add.sprite(Nakama.game.rnd.integerInRange(100, 500), Nakama.game.rnd.integerInRange(100, 800), 'planets', 'big_light.png');
        Nakama.lightstar2 = Nakama.game.add.sprite(Nakama.game.rnd.integerInRange(100, 500), Nakama.game.rnd.integerInRange(100, 800), 'planets', 'big_light.png');
        Nakama.lightstar3 = Nakama.game.add.sprite(Nakama.game.rnd.integerInRange(100, 500), Nakama.game.rnd.integerInRange(100, 800), 'planets', 'big_light.png');
        Nakama.lightstar4 = Nakama.game.add.sprite(Nakama.game.rnd.integerInRange(100, 500), Nakama.game.rnd.integerInRange(100, 800), 'planets', 'big_light.png');

        Nakama.tree1 = Nakama.game.add.sprite(0, 200, 'planets', 'Tree1.png');
        Nakama.tree2 = Nakama.game.add.sprite(0, 400, 'planets', 'Tree2.png');
        Nakama.tree3 = Nakama.game.add.sprite(0, 600, 'planets', 'Tree3.png');
        Nakama.tree4 = Nakama.game.add.sprite(640, 400, 'planets', 'Tree1.png');
        Nakama.tree5 = Nakama.game.add.sprite(640, 600, 'planets', 'Tree2.png');
        Nakama.tree6 = Nakama.game.add.sprite(640, 800, 'planets', 'Tree3.png');

        Nakama.snow1 = Nakama.game.add.sprite(100, -500, 'trees', 'Snow_Small_1.png');
        Nakama.snow2 = Nakama.game.add.sprite(200, -600, 'trees', 'Snow_Small_2.png');
        Nakama.snow3 = Nakama.game.add.sprite(350, -700, 'trees', 'Snow_Small_3.png');
        Nakama.snow4 = Nakama.game.add.sprite(450, -400, 'trees', 'Snow_Small_4.png');
        Nakama.snow5 = Nakama.game.add.sprite(300, -400, 'trees', 'Snow_Big_1.png');
        Nakama.snow6 = Nakama.game.add.sprite(400, -500, 'trees', 'Snow_Big_2.png');
        Nakama.snow7 = Nakama.game.add.sprite(400, -600, 'trees', 'Snow_Big_3.png');

        Nakama.frog = Nakama.game.add.sprite(320, 350, 'planets', 'frog_die2.png');
        Nakama.frog.anchor.setTo(0.5, 0.5);
        Nakama.frog.scale.setTo(2, 2);

        Nakama.backgroundButtonHome = Nakama.game.add.sprite(200, 870, 'gameplay', 'BackgroundButton.png');
        Nakama.buttonHome = Nakama.game.add.sprite(Nakama.backgroundButtonHome.position.x, Nakama.backgroundButtonHome.position.y, 'gameplay', 'IconHome.png');
        Nakama.backgroundButtonHome.inputEnabled = true;
        Nakama.buttonHome.inputEnabled = true;
        Nakama.backgroundButtonHome.anchor.setTo(0.5, 0.5);
        Nakama.buttonHome.anchor.setTo(0.5, 0.5);

        Nakama.backgroundButtonHome.events.onInputDown.add(function () {
            music.pause();
            Nakama.game.state.start('menugame');
        }, this);

        Nakama.buttonHome.events.onInputDown.add(function () {
            music.pause();
            Nakama.game.state.start('menugame');
        }, this);

        Nakama.backgroundButtonPlayAgain = Nakama.game.add.sprite(400, 870, 'gameplay', 'BackgroundButton.png');
        Nakama.buttonPlayAgain = Nakama.game.add.sprite(Nakama.backgroundButtonPlayAgain.position.x, Nakama.backgroundButtonPlayAgain.position.y, 'gameplay', 'Icon_PlayAgain.png');
        Nakama.backgroundButtonPlayAgain.inputEnabled = true;
        Nakama.buttonPlayAgain.inputEnabled = true;
        Nakama.backgroundButtonPlayAgain.anchor.setTo(0.5, 0.5);
        Nakama.buttonPlayAgain.anchor.setTo(0.5, 0.5);

        Nakama.backgroundButtonPlayAgain.events.onInputDown.add(function () {
            music.pause();
            Nakama.game.state.start('playgame');
        }, this);

        Nakama.buttonPlayAgain.events.onInputDown.add(function () {
            music.pause();
            Nakama.game.state.start('playgame');
        }, this);

        Nakama.tree4.angle -= 180;
        Nakama.tree5.angle -= 180;
        Nakama.tree6.angle -= 180;


        Nakama.snow1.scale.setTo(2, 2);
        Nakama.snow2.scale.setTo(2, 2);
        Nakama.snow3.scale.setTo(2, 2);
        Nakama.snow4.scale.setTo(2, 2);
        Nakama.snow5.scale.setTo(2, 2);
        Nakama.snow6.scale.setTo(2, 2);
        Nakama.snow7.scale.setTo(2, 2);

        Nakama.lightstar1.anchor.setTo(0.5, 0.5);
        Nakama.lightstar2.anchor.setTo(0.5, 0.5);
        Nakama.lightstar3.anchor.setTo(0.5, 0.5);
        Nakama.lightstar4.anchor.setTo(0.5, 0.5);

    },

// update game state each frame
    update: function () {

        Nakama.lightstar1.angle -= 2;
        Nakama.lightstar2.angle -= 2;
        Nakama.lightstar3.angle -= 2;
        Nakama.lightstar4.angle -= 2;

        scale += value;

        if (scale <= 0) {
            Nakama.lightstar1.position.x = Nakama.game.rnd.integerInRange(100, 500);
            Nakama.lightstar1.position.y = Nakama.game.rnd.integerInRange(100, 800);
        }

        if (scale <= 0) {
            Nakama.lightstar2.position.x = Nakama.game.rnd.integerInRange(100, 500);
            Nakama.lightstar2.position.y = Nakama.game.rnd.integerInRange(100, 800);
        }

        if (scale <= 0) {
            Nakama.lightstar3.position.x = Nakama.game.rnd.integerInRange(100, 500);
            Nakama.lightstar3.position.y = Nakama.game.rnd.integerInRange(100, 800);
        }

        if (scale <= 0) {
            Nakama.lightstar4.position.x = Nakama.game.rnd.integerInRange(100, 500);
            Nakama.lightstar4.position.y = Nakama.game.rnd.integerInRange(100, 800);
        }

        if (scale >= 1)
            value = -0.01;

        if (scale <= 0)
            value = 0.01;

        Nakama.lightstar1.scale.setTo(scale, scale);
        Nakama.lightstar2.scale.setTo(scale, scale);
        Nakama.lightstar3.scale.setTo(scale, scale);
        Nakama.lightstar4.scale.setTo(scale, scale);


        Nakama.cloud1.position.x -= 1;
        Nakama.cloud2.position.x -= 2;
        Nakama.cloud3.position.x -= 3;

        Nakama.snow1.position.y += 3;
        Nakama.snow2.position.y += 3;
        Nakama.snow3.position.y += 3;
        Nakama.snow4.position.y += 3;
        Nakama.snow5.position.y += 3;
        Nakama.snow6.position.y += 3;
        Nakama.snow7.position.y += 3;

        if (Nakama.cloud1.position.x <= -100) {
            Nakama.cloud1.position.x = 800;
        }

        if (Nakama.cloud2.position.x <= -200) {
            Nakama.cloud2.position.x = 960;
        }

        if (Nakama.cloud3.position.x <= -300) {
            Nakama.cloud3.position.x = 1024;
        }


        if (Nakama.snow1.position.y >= 960) {
            Nakama.snow1.position.y = -500;
        }

        if (Nakama.snow2.position.y >= 960) {
            Nakama.snow2.position.y = -600;
        }

        if (Nakama.snow3.position.y >= 960) {
            Nakama.snow3.position.y = -700;
        }

        if (Nakama.snow4.position.y >= 960) {
            Nakama.snow4.position.y = -400;
        }

        if (Nakama.snow5.position.y >= 960) {
            Nakama.snow5.position.y = -400;
        }

        if (Nakama.snow6.position.y >= 960) {
            Nakama.snow6.position.y = -500;
        }

        if (Nakama.snow7.position.y >= 960) {
            Nakama.snow7.position.y = -600;
        }


    },

// before camera render (mostly for debug)
    render: function () {
    }
}
