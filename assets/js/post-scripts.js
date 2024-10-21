class App {

    constructor() {
        this.youtube = document.querySelector('.frame-youtube');
    }
    
    init() {
        document.addEventListener('DOMContentLoaded', (e) => {
            const postContent = document.getElementsByClassName('post-single');
        })

        this.youtube.style.height = `${this.youtube.clientWidth * 9 / 16}px`;
        this.resize();
    }
    
    resize() {
        const _self = this;
        window.addEventListener('resize', function() {
            _self.youtube.style.height = `${_self.youtube.clientWidth * 9 / 16}px`;
        });
    }
}

const app = new App();
app.init();
