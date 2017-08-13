class Ground {
    constructor(x, y, spritename, config) {
        this.sprite = Nakama.groundGroup.create(x, y, 'planets', spritename);
        this.config = config;
        this.sprite.update = this.update.bind(this);
        this.sprite.width = 640;
    }

    update() {

    }
}