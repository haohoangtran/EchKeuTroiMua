class Car {
    constructor(x, y, config) {
        this.sprite = Nakama.carGroup.create(x, y, 'car');
        this.sprite.body.setCircle(this.sprite.width / 2);
        this.config = config;
        this.sprite.health = 2;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);

    }

    update() {
        if (Nakama.keyboard.isDown(this.config.left)) {
            this.sprite.position.y += 5;
        } else if (Nakama.keyboard.isDown(this.config.right)) {
            this.sprite.position.y -= 5;
        } else if (Nakama.keyboard.isDown(this.config.up)) {
            this.sprite.position.x -= 5;
        } else if (Nakama.keyboard.isDown(this.config.down)) {
            this.sprite.position.x += 5;
        }
        if (this.sprite.health <= 0) {
            this.sprite.destroy();
            Nakama.game.state.start('gameover');
        }

    }
}