var Nakama = {};

Nakama.configs = {
    BACKGROUND_POSITION : {
        x : 0,
        y : 0,
    },
    GAME_SCREEN : {
        width : 640,
        height: 960
    },
    FIRSTEARTH_POSITION: {
        x: 320,
        y: 800
    },
    FROG_POSITION: {
        x: 300,
        y: 650,
    },
    TREE_POSITION: {
        x: 0,
        y: -500,
        velocity: 3
    },
    MUSICPLAY: true,
    BEST_SCORE: 0
};

Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '');
Nakama.game.state.add('menugame', menuGameState);
Nakama.game.state.add('setting', settingGameState);
Nakama.game.state.add('highscore', highscoreGameState);
Nakama.game.state.add('gameover', gameoverGameState);
Nakama.game.state.add('gameover2', gameover2GameState);
Nakama.game.state.add('pausegame', pausegameGameState);
Nakama.game.state.add('typegame', typegameGameState);
Nakama.game.state.add('playgame', playGameState);
Nakama.game.state.add('playgame2', playGame2State);
//Nakama.game.state.add('finishgame', finishGameState);

Nakama.game.state.start('menugame');