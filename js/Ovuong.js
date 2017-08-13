class Ovuong {
    constructor(x, y, config) {
        this.sprite = Nakama.ovuongGroup.create(x, y, 'ovuong');
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;

    }
}