class FrogController {
    constructor(x, y, config) {
        this.sprite = Nakama.frogGroup.create(x, y, 'planets', 'frog_stand.png');
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.setCircle(this.sprite.width / 2);
        this.config = config;
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.jump_key = Nakama.keyboard.addKey(this.config.JUMP);
    }


    update() {
        this.jump_key.onDown.add(this.jump, this);
        var period = Nakama.game.time.now * 0.001;
        var radius = this.sprite.width*2;
        this.sprite.position.x = Nakama.planet.sprite.x + Math.cos(period) * radius;
        this.sprite.position.y = Nakama.planet.sprite.y + Math.sin(period) * radius;
        this.sprite.angle = Nakama.planet.sprite.angle;
    }

    jump() {
        console.log(this.sprite.position);
        this.sprite.position.y -= 10
    }
}