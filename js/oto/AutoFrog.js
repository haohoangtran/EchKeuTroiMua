class AutoFrog {
    constructor(x, y, config) {
        this.sprite = Nakama.frog.create(x, y, 'planets', 'frog_stand.png');
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.timeCheck = Nakama.game.time.now;
        this.sprite.update = this.update.bind(this);
    }

    update() {
        if (Nakama.game.time.now - this.timeCheck > 3000) {
            this.sprite.position.y -= 10;
            this.timeCheck = Nakama.game.time.now;
        }
    }
}