class FrogType2 {
    constructor(x, y, config) {
        this.sprite = Nakama.frogs.create(314, 474, 'car');
        this.sprite.body.setCircle(this.sprite.width / 2);
        this.config = config;
        this.sprite.health = 2;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.positions1 = [{x: 172, y: 328}, {x: 314, y: 328}, {x: 314 + 314 - 172, y: 328}];
        this.positions2 = [{x: 172, y: 474}, {x: 314, y: 474}, {x: 314 + 314 - 172, y: 474}];
        this.positions3 = [{x: 172, y: 146}, {x: 314, y: 146}, {x: 314 + 314 - 172, y: 146}];
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


    }
}