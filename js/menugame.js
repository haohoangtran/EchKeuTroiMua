var Nakama = {};
Nakama.configs = {
    BACKGROUND_POSITION : {
        x : 0,
        y : 0,
    },
    GAME_SCREEN : {
        width : 640,
        height : 960
    }
};

window.onload = function () {
    Nakama.game = new Phaser.Game(Nakama.configs.GAME_SCREEN.width, Nakama.configs.GAME_SCREEN.height, Phaser.AUTO, '',
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

    //Nakama.game.load.atlasJSONHash('assets', 'Assets/game/bg.jpeg', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/game/bg_startgame.jpeg');
}

// initialize the game
var create = function () {
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
    Nakama.background.scale.setTo(2,2);

}

// update game state each frame
var update = function () {
}

// before camera render (mostly for debug)
var render = function () {
}
