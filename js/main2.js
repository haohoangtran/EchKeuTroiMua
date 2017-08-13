var score = 0;
var scoreText;

var playGame2State = {
    // preparations before game starts
    preload: function () {
        Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
        Nakama.game.load.image('background', 'Assets/game/background1.png');
        Nakama.game.load.image('groundtop', 'Assets/game/planet_top.png');
        Nakama.game.load.image('groundbottom', 'Assets/game/planet_bottom.png');
        Nakama.game.load.image('frog_top', 'Assets/game/frog_top.png');
        Nakama.game.load.image('frog_bottom', 'Assets/game/frog_bottom.png');
        Nakama.game.load.image('arrow', 'Assets/game/muiten.png');
        Nakama.game.load.image('arrow_xoay', 'Assets/game/muitenxoay.png');
        Nakama.game.load.image('ovuong', 'Assets/game/ovuong.png');
        Nakama.game.load.image('dot', 'Assets/game/dot.png');
        Nakama.game.load.image('car', 'Assets/oneplayer/car_1.png');
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
        Nakama.background = Nakama.game.add.sprite(0, 0, 'background');

        Nakama.ovuongGroup = Nakama.game.add.physicsGroup();
        Nakama.itemGroup = Nakama.game.add.physicsGroup();

        Nakama.ovuong = new Ovuong(Nakama.configs.GAME_SCREEN.width / 2, Nakama.configs.GAME_SCREEN.height / 2);
        Nakama.frogs = Nakama.game.add.physicsGroup();
        scoreText = Nakama.game.add.text(80, 80, 'Score: 0', {fontSize: '42px', fill: '#000'});

        new FrogType2({
            left: Phaser.Keyboard.LEFT,
            right: Phaser.Keyboard.RIGHT,
            up: Phaser.Keyboard.UP,
            down: Phaser.Keyboard.DOWN
        })
        new ItemController();
    },

// update game state each frame
    update: function () {
        Nakama.game.physics.arcade.overlap(
            Nakama.itemGroup,
            Nakama.frogs,
            onHitItem
        );
    },


// before camera render (mostly for debug)
    render: function () {

    }

}

var onHitItem = function (item, frog) {
    item.kill();
    new ItemController();
    score++;
    scoreText.text = 'Score: ' + score;

}