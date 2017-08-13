class FrogController {
    constructor(x, y, config) {

        if (config.type === 'bottom') {
            this.sprite = Nakama.player1Group.create(x, y, 'frog_bottom');
            this.sprite.body.gravity.y = 100;
            this.arrow = new Arrow(200, 100, {type: 'bottom'});
        }
        else {
            this.sprite = Nakama.player2Group.create(x, y, 'frog_top');
            this.sprite.body.gravity.y = -100;
            this.arrow = new Arrow(200, 100, {type: 'top'});
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
        var x, y;
        if (this.config.type === 'bottom') {
            x = this.arrow.sprite.position.x - this.sprite.position.x;
            y = this.arrow.sprite.position.y - this.sprite.position.y;
            new Bullet(this.sprite.position.x, this.sprite.position.y, 'bottom', {x: x, y: y});
        } else {
            x = this.arrow.sprite.position.x - this.sprite.position.x;
            y = this.arrow.sprite.position.y - this.sprite.position.y;
            new Bullet(this.sprite.position.x, this.sprite.position.y, 'top', {x: x, y: y});

        }
    }
}