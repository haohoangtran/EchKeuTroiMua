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
        Nakama.game.load.image('background', 'Assets/game/background_1.jpg');
        Nakama.game.load.image('groundtop', 'Assets/game/planet_top.png');
        Nakama.game.load.image('groundbottom', 'Assets/game/planet_bottom.png');
        Nakama.game.load.image('frog_top', 'Assets/game/frog_top.png');
        Nakama.game.load.image('frog_bottom', 'Assets/game/frog_bottom.png');
        Nakama.game.load.image('arrow', 'Assets/game/muiten.png');
        Nakama.game.load.image('arrow_xoay', 'Assets/game/muitenxoay.png');
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
        Nakama.groundGroup = Nakama.game.add.physicsGroup();
        Nakama.playerGroup = Nakama.game.add.physicsGroup();
        Nakama.arrowsGroup = Nakama.game.add.physicsGroup();
        Nakama.groundBots = []
        Nakama.groundBots.push(new Ground(0, 630, 'groundbottom'), {});
        Nakama.groundBots.push(new Ground(0, 230, 'groundtop'), {});
        Nakama.players = [];
        Nakama.arrows = []
        Nakama.players.push(new FrogController(1, 400, {
            type: 'bottom',
            left: Phaser.Keyboard.LEFT,
            right: Phaser.Keyboard.RIGHT,
            fire: Phaser.Keyboard.UP
        }));
        Nakama.players.push(new FrogController(1, 400, {
            type: 'top',
            left: Phaser.Keyboard.A,
            right: Phaser.Keyboard.D,
            fire: Phaser.Keyboard.W
        }));
        Nakama.arrows.push(new Arrow(100, 100, {type: 'top'}))
        Nakama.arrows.push(new Arrow(200, 100, {type: 'bottom'}));

    },

// update game state each frame
    update: function () {
        Nakama.game.physics.arcade.overlap(
            Nakama.groundGroup,
            Nakama.playerGroup,
            onBulletHitGround
        );

    },

// before camera render (mostly for debug)
    render: function () {

    }

}
var onBulletHitGround = function (groundSprite, playerSprite) {
    playerSprite.body.gravity = 0

}
