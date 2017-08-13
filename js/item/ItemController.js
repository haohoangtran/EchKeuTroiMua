class ItemController {
    constructor() {
        this.positions = [
            {x: 172, y: 328}, {x: 314, y: 328}, {x: 456, y: 328},
            {x: 172, y: 474}, {x: 314, y: 474}, {x: 456, y: 474},
            {x: 172, y: 620}, {x: 314, y: 620}, {x: 456, y: 620}];
        var obj = this.positions[Math.floor(Math.random() * 8)]
        this.sprite = Nakama.ovuongGroup.create(obj.x, obj.y, 'planets', 'star.png');
        console.log(obj, 'obj')
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.sprite.body.collideWorldBounds = true;
    }
}