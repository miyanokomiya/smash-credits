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

  play() {
    this.core.play();
  }

  reverse() {
    this.core.reverse();
  }

  pause() {
    this.core.pause();
  }

  stop() {
    this.core.stop();
  }
}

export default SmashCredits;
