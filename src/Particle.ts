import * as Polyly from "polyly";

export default class Particle {
    pos: Polyly.Vector;
    vel: number;
    acc: number;
    mass: number;

    constructor(x: number, y: number) {
        this.pos = new Polyly.Vector(x, y);
        this.vel = 0;
        this.acc = 0;
        this.mass = 0.1;
    }

    calculate(neighbour: Particle) {
        const force = neighbour.pos.y - this.pos.y;
        this.acc += force / this.mass;
    }

    update(dt: number) {
        // this.acc *= 0.98;
        this.vel += this.acc * dt;
        this.pos.y += this.vel * dt;
        this.acc = 0;
    }

    // render(renderer) {
    //     renderer.beginPath();
    //     renderer.arc(this.pos, 10, 0, Math.PI * 2, new Polyly.Color(255, 255, 255, 160), 2);
    //     renderer.fill();
    //     // renderer.vertex(this.pos, new Polyly.Color(255, 255, 255, 255));
    // }
}
