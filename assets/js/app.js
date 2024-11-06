class App {

  constructor() {
    this.video = document.querySelector('.embed-video');
  }

  init() {
    document.addEventListener('DOMContentLoaded', (e) => {
      const postContent = document.getElementsByClassName('post-single');
    });

    this.video.style.height = `${this.video.clientWidth * 9 / 16}px`;
    this.resize();
  }

  resize() {
    const _self = this;
    window.addEventListener('resize', function() {
      _self.video.style.height = `${_self.video.clientWidth * 9 / 16}px`;
    });
  }
}

const app = new App();
app.init();
