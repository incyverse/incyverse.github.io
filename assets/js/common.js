(function($) {
  'use strict';

  let Common = function() {
    this.body = document.querySelector('body');
  };
  Common.prototype.init = function() {
    let _body = this.body;
    setTimeout(function() {
      _body.classList.add('is-in');
    }, 200);

    $('.entry-markdown img, .post img').attr('data-action', 'zoom');
    $('.entry-markdown a img, .post a img').removeAttr('data-action', 'zoom');
  };

  Common = new Common();
  $(document).ready(function() {
    Common.init();
  });
})(jQuery);
