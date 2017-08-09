class PlanetController {
    constructor(x, y, spritename, config) {
        this.sprite = Nakama.planetGroup.create(x, y, 'planets', spritename);
        this.sprite.body.setCircle(this.sprite.width/2);
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
    }

    update() {
        this.sprite.angle += 1;
    }
}