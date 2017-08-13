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
        this.jump_key = Nakama.keyboard.addKey(this.config.fire);
    }

    update() {
        this.jump_key.onDown.add(this.jump, this);
        this.move();
    }

    move() {
        if (this.config.type === 'bottom') {
            if (Nakama.keyboard.isDown(this.config.left)) {
                this.sprite.body.position.x -= 5;
            } else if (Nakama.keyboard.isDown(this.config.right)) {
                this.sprite.body.position.x += 5;
            }
        }
        else {
            if (Nakama.keyboard.isDown(this.config.left)) {
                this.sprite.body.position.x -= 5;
            } else if (Nakama.keyboard.isDown(this.config.right)) {
                this.sprite.body.position.x += 5;
            }
        }
    }
    jump() {
        console.log(this.sprite.position);
        var y = (Nakama.groundBots[1].position.y - this.sprite.position.y) / 60
        var x = y * Math.tan(Nakama.arrows[1].sprite.angle);
        new Bullet(this.sprite.body.position.x, this.sprite.body.position.y, {x: x, y: y});
        console.log(Nakama.arrows[1].sprite.angle, x)
    }
}