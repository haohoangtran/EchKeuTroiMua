class Bullet {
    constructor(x, y, type, config) {
        this.type = type;
        if (type === 'top') {
            this.sprite = Nakama.bulletGroupTop.create(x, y, 'planets', 'luoi.png');
        } else {
            this.sprite = Nakama.bulletGroupBottom.create(x, y, 'planets', 'luoi.png');
        }
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.width = 20;
        this.sprite.height = 200;
        this.sprite.health = 1;
    }

    update() {
        this.sprite.body.x += this.config.x;
        this.sprite.body.y += this.config.y;
    }
}