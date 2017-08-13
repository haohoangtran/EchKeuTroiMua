class FrogController {
    constructor(x, y, config) {
        this.sprite = Nakama.frogGroup.create(x, y, 'planets', 'frog_stand.png');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.setCircle(this.sprite.width / 2);
        this.config = config;
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.jump_key = Nakama.keyboard.addKey(this.config.JUMP);
        this.sprite.pivot.y = 143;
        this.sprite.body.bounce.set(1);
        this.sprite.body.velocity.set(150);
    }


    update() {
        this.jump_key.onDown.add(this.jump, this);
        this.sprite.rotation +=0.018;
    }

    jump() {
        console.log(this.sprite.position);
        this.sprite.position.y -= 10
    }
}