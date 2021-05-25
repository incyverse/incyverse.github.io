(function($) {
  'use strict';

  let Motion = function() {
    this.headerBar = document.querySelector('#header-bar');
    this.topArrow = document.querySelector('#top');
    this.authorCard = document.querySelector('.author-card');
  };
  Motion.prototype.init = function() {
    if (window.scrollY > window.innerHeight) {
      this.headerBar.classList.add('is-back');
      this.topArrow.classList.add('is-top');
    }
    window.addEventListener('scroll', this.initScroll);

    if (this.topArrow.classList.contains('is-top')) {
      this.initArrow();
    }

    if (this.authorCard) {
      this.initTooltip();
    }
  };
  Motion.prototype.initMega = function() {
    let _self = Common;

    this.megaOpen.addEventListener('click', function(e) {
      console.log('aaaa');
    });
    /*this.megaOpen.on('click', function(e) {
      $('body').classList.add('mega-open');
      _self.megaMenu.css({height: $(window).height()});
      $(window).resize(function() {
        _self.megaMenu.css({height: $(window).height()});
      });
    });

    this.megaClose.on('click', function(e) {
      $('body').classList.remove('mega-open');
    });*/
  };
  Motion.prototype.initScroll = function() {
    let _self = Motion;

    if (_self.headerBar.classList.contains('is-back') === false &&
        window.scrollY > window.innerHeight) {
      _self.headerBar.classList.add('is-back');
      _self.topArrow.classList.add('is-top');
    } else if (_self.headerBar.classList.contains('is-back') === true &&
        window.scrollY < window.innerHeight) {
      _self.headerBar.classList.remove('is-init', 'is-back');
      _self.topArrow.classList.remove('is-top');
    }
  };
  Motion.prototype.initArrow = function() {
    this.topArrow.addEventListener('click', function(e) {
      e.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 'fast', 'swing');
    });
  };
  Motion.prototype.initTooltip = function() {
    let hoverTimeout,
        _self = Motion,
        author = document.querySelector('.author');

    author.onmouseover = function() {
      clearTimeout(hoverTimeout);
      _self.authorCard.classList.add('hovered');
    };

    author.onmouseout = function(e) {
      hoverTimeout = setTimeout(function() {
        _self.authorCard.classList.remove('hovered');
      }, 800);
    };
  };
  Motion.prototype.initScrollSpy = function() {
    let tocSelector = '#post-toc',
        tocElement = $(tocSelector);
  };

  Motion = new Motion();
  $(document).ready(function() {
    Motion.init();
  });
})(jQuery);
