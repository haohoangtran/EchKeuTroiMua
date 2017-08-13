class Arrow {
    constructor(x, y, config) {

        if (config.type === 'top') {
            this.sprite = Nakama.arrowsGroup.create(x, y, 'arrow_xoay');
        } else {
            this.sprite = Nakama.arrowsGroup.create(x, y, 'arrow');
        }
        this.configs = config;
        console.log(this.configs, config)
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.speed = 0.5;
        this.sprite.update = this.update.bind(this);
    }

    update() {
        console.log(this.speed);
        this.sprite.angle += this.speed;
        if (this.sprite.angle >= 30) {
            this.speed = -0.5
        }
        else if (this.sprite.angle <= -30) {
            this.speed = 0.5;
        }
        if (this.configs.type === 'top') {
            this.sprite.position.x = Nakama.players[1].sprite.position.x;
            this.sprite.position.y = Nakama.players[1].sprite.position.y;
        } else {
            this.sprite.position.x = Nakama.players[0].sprite.position.x;
            this.sprite.position.y = Nakama.players[0].sprite.position.y;
        }
    }
}