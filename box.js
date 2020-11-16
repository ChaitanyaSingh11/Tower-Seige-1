class Box {
    constructor(x, y) {
        var options = {
            friction: 4,
            density: 0.01
        };
        this.body = Bodies.rectangle(x, y, 184, 105, options);
        this.image = loadImage("Assets/Box.png");
        World.add(world, this.body);
        angleMode(RADIANS);
    }
    show() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}