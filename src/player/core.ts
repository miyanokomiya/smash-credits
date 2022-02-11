import { clamp } from "okageo";
import { Credits } from "../models";

export class PlayerCore {
  credits: Credits;
  playState: "pause" | "play" | "reverse" = "pause";
  frame: number = 0;

  constructor(credits: Credits) {
    this.credits = credits;
  }

  despose() {}

  get lastFrame(): number {
    return 0;
  }

  tick(step = 1) {
    let nextFrame = this.frame;
    if (this.playState === "play") {
      nextFrame += step;
    } else if (this.playState === "reverse") {
      nextFrame -= step;
    }

    this.frame = clamp(0, this.lastFrame, nextFrame);

    if (0 === this.frame || this.frame === this.lastFrame) {
      this.pause();
    }
  }

  play() {
    this.playState = "play";
    if (this.frame === this.lastFrame) {
      this.frame = 0;
    }
  }

  reverse() {
    this.playState = "reverse";
    if (this.frame === 0) {
      this.frame = this.lastFrame;
    }
  }

  pause() {
    this.playState = "pause";
  }

  stop() {
    this.playState = "pause";
    this.frame = 0;
  }
}
