class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.scrollTop = 0;
    this.totaNum = 0;

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {}

  drawImage() {}

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
  }

  onScroll() {}
}

window.onload = () => {
  new App();
};
