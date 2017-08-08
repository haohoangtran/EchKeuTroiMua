class FrogController {
    constructor(x, y, config) {
        this.sprite = Nakama.frogGroup.create(x, y, 'planets', 'frog.png');
        this.sprite.body.setCircle(45);
        this.sprite.scale.setTo(2, 2);
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.jump_key = Nakama.keyboard.addKey(this.config.JUMP);
    }

    update() {
        this.jump_key.onDown.add(this.jump, this);
    }

    jump() {
        console.log(this.sprite.position);
        this.sprite.position.y -= 10
    }
}