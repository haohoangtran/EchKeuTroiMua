class Arrow {
    constructor(x, y, config) {
        this.sprite = Nakama.arrowsGroup.create(x, y, 'dot');
        this.sprite.width = 10;
        this.sprite.height = 10;
        this.configs = config;
        console.log(this.configs, config)
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.speed = 0.5;
        this.sprite.update = this.update.bind(this);
    }

    update() {
        console.log(this.speed);

        var radius = 50;
        if (this.configs.type === 'bottom') {
            var period = Nakama.game.time.now * 0.0017;
            this.sprite.position.x = Nakama.players[0].sprite.x + Math.cos(period) * radius;
            this.sprite.position.y = Nakama.players[0].sprite.y + Math.sin(period) * radius;
        } else {
            var period = Nakama.game.time.now * 0.002;
            this.sprite.position.x = Nakama.players[1].sprite.x + Math.cos(period) * radius;
            this.sprite.position.y = Nakama.players[1].sprite.y + Math.sin(period) * radius;
        }

    }
}