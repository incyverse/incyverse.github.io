(function($) {
  'use strict';

  let Common = function() {
    this.headerBar = document.getElementById('header-bar');
    this.megaOpen = document.getElementById('mega-open');
    this.megaClose = document.getElementById('mega-close');
    this.megaMenu = document.getElementById('mega-menu');
    this.topArrow = document.getElementById('top');
  };
  Common.prototype.init = function() {
    setTimeout(function() {
      $('body').addClass('is-in');
    }, 200);

    this.isMega();
    this.isTooltip();

    $('.entry-markdown img, .post img').attr('data-action', 'zoom');
    $('.entry-markdown a img, .post a img').removeAttr('data-action', 'zoom');

    if (window.scrollY > window.innerHeight) {
      this.headerBar.classList.add('is-back');
      this.topArrow.classList.add('is-top');
    }
    window.addEventListener('scroll', this.hasScroll);

    if (this.topArrow) {
      this.topArrow.addEventListener('click', function(e) {
        $('html, body').stop().animate({scrollTop: 0}, 'fast', 'swing');
      });
    }
  };
  Common.prototype.isMega = function() {
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
  Common.prototype.isTooltip = function() {
    let hoverTimeout;

    $('.author').hover(function() {
      let _this = $(this);

      clearTimeout(hoverTimeout);

      $('.author-card').classList.remove('hovered');
      _this.children('.author-card').classList.add('hovered');
    }, function() {
      let _this = $(this);

      hoverTimeout = setTimeout(function() {
        _this.children('.author-card').classList.remove('hovered');
      }, 800);
    });
  };
  Common.prototype.hasScroll = function(e) {
    let _self = Common;

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

  Common = new Common();

  $(document).ready(function() {
    Common.init();
  });
})(jQuery);
