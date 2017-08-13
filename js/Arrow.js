class Arrow {
    constructor() {
        this.sprite = {}
    }

    update() {
        if (this.sprite.angle >= 30) {
            speedFrog = -0.5;
        }
        else if (Nakama.frog.angle <= -30) {
            speedFrog = 0.5;
        }
    }
}