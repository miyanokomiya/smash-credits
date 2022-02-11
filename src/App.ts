import { Credits } from "./models";
import { PlayerCore } from "./player/core";
import { PlayerRenderer } from "./player/renderer";

export function hello(): string {
  return "hello";
}

class SmashCredits {
  core: PlayerCore;
  renderer: PlayerRenderer;

  parentElm: HTMLElement;
  canvasElm: HTMLCanvasElement;

  animationHandle = 0;

  constructor(parentElm: HTMLElement, credits: Credits) {
    this.parentElm = parentElm;
    this.canvasElm = document.createElement("canvas");
    this.parentElm.appendChild(this.canvasElm);

    this.core = new PlayerCore(credits);
    this.renderer = new PlayerRenderer(
      this.canvasElm.getContext("2d")!,
      this.canvasElm.width,
      this.canvasElm.height
    );
  }

  despose() {
    this.core.despose();
    this.renderer.despose();
    this.parentElm.removeChild(this.canvasElm);
  }

  tick() {
    this.core.tick(1);
    this.renderer.render();
  }

  play() {
    this.core.play();
    this.beginAnimationFrame();
  }

  reverse() {
    this.core.reverse();
    this.beginAnimationFrame();
  }

  pause() {
    this.endAnimationFrame();
    this.core.pause();
  }

  stop() {
    this.endAnimationFrame();
    this.core.stop();
  }

  private beginAnimationFrame() {
    this.endAnimationFrame();
    this.animationHandle = requestAnimationFrame(() => this.tick());
  }

  private endAnimationFrame() {
    if (this.animationHandle) {
      cancelAnimationFrame(this.animationHandle);
      this.animationHandle = 0;
    }
  }
}

export default SmashCredits;
