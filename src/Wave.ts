import * as Polyly from "polyly";
import Particle from "./Particle";

export default class Wave {
    particles: Particle[] = [];

    constructor() {
        for (let i = -800; i <= 800; i += 10) {
            this.particles.push(new Particle(i, 0));
        }
    }

    update(dt: number) {
        for (let i = 1; i < this.particles.length - 1; i++) {
            this.particles[i].calculate(this.particles[i - 1]);
            this.particles[i].calculate(this.particles[i + 1]);
        }
        for (const p of this.particles) p.update(dt);
    }

    render(renderer: Polyly.Renderer) {
        for (let i = 0; i < this.particles.length - 1; i++) {
            renderer.beginPath();
            renderer.vertex(this.particles[i].pos, new Polyly.Color(255, 255, 255, 255));
            renderer.vertex(this.particles[i + 1].pos, new Polyly.Color(255, 255, 255, 255));
            renderer.stroke(5);
        }
    }
}
