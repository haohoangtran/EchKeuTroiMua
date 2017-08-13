class Arrow {
    constructor(x, y, config) {
        if (config.type === 'top') {
            this.sprite = Nakama.arrowsGroup.create(x, y, 'dot');
        } else {
            this.sprite = Nakama.arrowsGroup.create(x, y, 'dot');
        }
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
        var period = Nakama.game.time.now * 0.001;
        var radius = 50;

        this.sprite.position.x = Nakama.players[0].sprite.x + Math.cos(period) * radius;
        this.sprite.position.y = Nakama.players[0].sprite.y + Math.sin(period) * radius;

    }
}