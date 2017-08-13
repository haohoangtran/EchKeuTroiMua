class FrogType2 {
    constructor(config) {
        this.sprite = Nakama.frogs.create(314, 474, 'planets', 'frog_stand.png');
        this.config = config;
        this.sprite.health = 2;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.positions1 = [{x: 172, y: 328}, {x: 314, y: 328}, {x: 456, y: 328}];
        this.positions2 = [{x: 172, y: 474}, {x: 314, y: 474}, {x: 456, y: 474}];
        this.positions3 = [{x: 172, y: 620}, {x: 314, y: 620}, {x: 456, y: 620}];
        this.up_key = Nakama.keyboard.addKey(this.config.up);
        this.down_key = Nakama.keyboard.addKey(this.config.down);
        this.left_key = Nakama.keyboard.addKey(this.config.left);
        this.right_key = Nakama.keyboard.addKey(this.config.right);
    }

    up() {
        if (this.sprite.position.y === 474) {
            this.sprite.position.y = 328;
        } else if (this.sprite.position.y === 620) {
            this.sprite.position.y = 474;
        }
    }

    down() {
        if (this.sprite.position.y === 328) {
            this.sprite.position.y = 474;
        } else if (this.sprite.position.y === 474) {
            this.sprite.position.y = 620;
        }
    }

    left() {
        if (this.sprite.position.x === 314) {
            this.sprite.position.x = 172;
        } else if (this.sprite.position.x === 456) {
            this.sprite.position.x = 314;
        }
    }

    right() {
        if (this.sprite.position.x === 172) {
            this.sprite.position.x = 314;
        } else if (this.sprite.position.x === 314) {
            this.sprite.position.x = 456;
        }
    }

    update() {

        this.up_key.onDown.add(this.up, this);
        this.down_key.onDown.add(this.down, this);
        this.left_key.onDown.add(this.left, this);
        this.right_key.onDown.add(this.right, this);




    }
}