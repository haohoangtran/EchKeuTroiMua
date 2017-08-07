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

    //Nakama.game.load.atlasJSONHash('assets', 'Assets/game/bg.jpeg', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/game/bg.jpeg');
    Nakama.game.load.image('earth', 'Assets/game/earth.png');
    Nakama.game.load.image('frog', 'Assets/game/frog_small.png');
    Nakama.game.load.image('tree', 'Assets/game/caygai.png');
}

// initialize the game
var create = function () {
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
    Nakama.background.scale.setTo(2,2);

    Nakama.tree = Nakama.game.add.sprite(Nakama.configs.TREE_POSITION.x, Nakama.configs.TREE_POSITION.y, 'tree');
    Nakama.tree.scale.setTo(2,2);
    Nakama.tree.anchor.setTo(0, 0.5);

    Nakama.earth = Nakama.game.add.sprite(Nakama.configs.FIRSTEARTH_POSITION.x, Nakama.configs.FIRSTEARTH_POSITION.y, 'earth');
    Nakama.earth.anchor.setTo(0.5, 0.5);
    Nakama.earth.scale.setTo(2,2);

    Nakama.frog = Nakama.game.add.sprite(Nakama.configs.FROG_POSITION.x, Nakama.configs.FROG_POSITION.y, 'frog');
    Nakama.frog.anchor.setTo(0.5, 0.5);
    Nakama.frog.scale.setTo(2,2);
}

// update game state each frame
var update = function () {
    Nakama.background.position.y += Nakama.configs.BACKGROUND_POSITION.velocity;

    if(Nakama.background.position.y >= 0) {
        Nakama.background.position.y = Nakama.configs.BACKGROUND_POSITION.y;
    }

    Nakama.tree.position.y += Nakama.configs.TREE_POSITION.velocity;

    if(Nakama.tree.position.y >= Nakama.configs.GAME_SCREEN.height) {
        Nakama.tree.position.y = Nakama.configs.TREE_POSITION.y;
    }

    Nakama.earth.angle += 1;
}

// before camera render (mostly for debug)
var render = function () {
}
