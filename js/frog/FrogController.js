class FrogController {
    constructor(x, y, config) {
        if (config.type === 'bottom') {
            this.sprite = Nakama.groundGroup.create(x, y, 'planets', 'frog_stand.png');
            this.sprite.anchor = new Phaser.Point(0.5, 0.5);
            this.config = config;
            this.sprite.body.collideWorldBounds = true;
            this.sprite.update = this.update.bind(this);

        }
        else {

        }
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