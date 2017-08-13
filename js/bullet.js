class Bullet {
    constructor(x, y, config) {
        this.sprite = Nakama.bulletGroup.create(x, y, 'planets', 'luoi.png');
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.width = 20;
        this.sprite.height = 20;
        this.sprite.health = 1;
    }

    update() {
        this.sprite.position.x += this.config.x;
        this.sprite.position.y += this.config.y;

    }
}