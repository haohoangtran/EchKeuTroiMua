var Nakama = {};
Nakama.configs = {
    FIRSTEARTH_POSITION: {
        x: 320,
        y: 800
    },
    FROG_POSITION: {
        x: 300,
        y: 650,
    },
    BACKGROUND_POSITION: {
        x: 0,
        y: 0,
        velocity: 5
    },
    TREE_POSITION: {
        x: 0,
        y: -500,
        velocity: 3
    },
    GAME_SCREEN: {
        width: 640,
        height: 960
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
    Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
    Nakama.game.load.image('background', 'Assets/game/bg.jpeg')

    Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
    Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;
    Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
    Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Nakama.game.time.advancedTiming = true;
};


// initialize the game
var create = function () {
    Nakama.background = Nakama.game.add.sprite(0, -100, 'background');
    Nakama.planetGroup = Nakama.game.add.physicsGroup();
    Nakama.frogGroup = Nakama.game.add.physicsGroup();
    Nakama.game.physics.startSystem();
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background.scale.setTo(2, 2);
    Nakama.player = new FrogController(200, 200, {JUMP: Phaser.Keyboard.SPACEBAR});
    new PlanetController(400, 200, 'BigPlannet.png', {});
    Nakama.game.camera.follow(Nakama.player.sprite);
}

// update game state each frame
var update = function () {

}

// before camera render (mostly for debug)
var render = function () {
}
