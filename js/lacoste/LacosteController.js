class LacosteController {
    constructor() {
        this.positions = [
            {x: 172, y: 0}, {x: 314, y: 0}, {x: 456, y: 0},
            {x: 172, y: 960}, {x: 314, y: 960}, {x: 456, y: 960}
        ];
        var rand = Math.floor(Math.random() * 5);
        var obj = this.positions[rand]
        this.sprite = Nakama.lacosteGroup.create(obj.x, obj.y, 'planets', 'Lacoste1.png');
        console.log(obj, 'obj')
        if (rand < 3) {
            this.type = 'top'
        } else {
            this.type = 'bottom'
        }
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.checkWorldBounds = true;
        this.sprite.outOfBoundsKill = true;
        this.sprite.update = this.update.bind(this)
    }

    update() {
        if (this.type === 'top') {
            this.sprite.position.y += 10;
        } else {
            this.sprite.position.y -= 10;
            this.sprite.angle = 180
        }
    }
}