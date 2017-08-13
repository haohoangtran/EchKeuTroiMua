class Bullet {
    constructor(x, y, config) {
        this.sprite = Nakama.arrowsGroup.create(x, y, 'planets', 'clou.png');
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.width = 10;
        this.sprite.height = 10;
    }

    update() {
        this.sprite.position.x += this.config.x;
        this.sprite.position.y += this.config.y;
    }
}