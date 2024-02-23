import { Renderer } from "polyly";
import Wave from "./Wave";

export default class App {
    renderer: Renderer;
    wave: Wave;
    simSpeed: number = 0.1;

    lastFrameTime: number = performance.now();
    frameCount: number = 0;

    constructor() {
        const canvas = document.getElementById("display") as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.renderer = new Renderer({ webglVersion: 2, canvas });
        this.wave = new Wave();
        // this.wave.particles[100].vel = 100;
    }

    update() {
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;

        this.wave.particles[0].pos.y = Math.sin((this.frameCount / 1) * this.simSpeed) * 100;
        this.wave.update(this.simSpeed);
    }

    render() {
        this.renderer.clear();
        this.wave.render(this.renderer);
        this.renderer.render();
        this.frameCount++;
    }
}
