class FrogController {
    constructor(x, y, config) {

        if (config.type === 'bottom') {
            this.sprite = Nakama.playerGroup.create(x, y, 'frog_bottom');


            this.sprite.body.gravity.y = 100;
        }
        else {
            this.sprite = Nakama.playerGroup.create(x, y, 'frog_top');
            this.sprite.body.gravity.y = -100;
        }
        this.config = config;
        this.sprite.body.collideWorldBounds = true;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
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