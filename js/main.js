var Nakama = {};
Nakama.configs = {
    FIRSTEARTH_POSITION : {
        x : 320,
        y : 800
    },
    FROG_POSITION : {
        x : 300,
        y : 650,
    },
    BACKGROUND_POSITION : {
        x : 0,
        y : 0,
        velocity : 5
    },
    TREE_POSITION : {
        x : 0,
        y : -500,
        velocity : 3
    },
    GAME_SCREEN : {
        width : 640,
        height : 960
    }
};

window.onload = function () {
    Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '',
        {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, false, false
    );
}

// preparations before game starts
var preload = function () {
    Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
    Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;;
    Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
    Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Nakama.game.time.advancedTiming = true;

    Nakama.game.load.atlasJSONHash('plannet', 'Assets/game/planets.png', 'Assets/assets_planet.json');
    Nakama.game.load.image('background','Assets/game/bg.jpeg')

}

// initialize the game
var create = function () {
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
    Nakama.background.scale.setTo(2,2);

    Nakama.background = Nakama.game.add.sprite(0, 0,'plannet' ,'Tree1.png');

}

// update game state each frame
var update = function () {

}

// before camera render (mostly for debug)
var render = function () {
}
