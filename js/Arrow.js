class Arrow {
    constructor(x, y, config) {
        this.configs = config;
        if (this.configs.type === 'bottom') {
            this.sprite = Nakama.arrowsPlayer1Group.create(x, y, 'dot');
        } else {
            this.sprite = Nakama.arrowsPlayer2Group.create(x, y, 'dot');

        }
        this.sprite.width = 10;
        this.sprite.height = 10;
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
            this.sprite.position.x = Nakama.players1.sprite.x + Math.cos(period) * radius;
            this.sprite.position.y = Nakama.players1.sprite.y + Math.sin(period) * radius;
        } else {
            var period = Nakama.game.time.now * 0.002;
            this.sprite.position.x = Nakama.players2.sprite.x + Math.cos(period) * radius;
            this.sprite.position.y = Nakama.players2.sprite.y + Math.sin(period) * radius;
        }

    }
}