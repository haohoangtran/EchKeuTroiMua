class AutoCar {
    constructor(x, y, config) {
        this.sprite = Nakama.carGroup.create(x, y, 'car');
        this.sprite.body.setCircle(this.sprite.width / 2);
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
    }

    update() {
        this.sprite.position.x += 10;
    }
}