'use strict';

function equalBoxHeight(elm, num) {
  var elm = jQuery(elm);

  elm.each(function (i) {
      var height;
      var $this = jQuery(this);

      if (i === 0 || i % num === 0) {
          height = $this.height();

          for (var n = i + 1; n <= i + num - 1; n++) {
              if (height < elm.eq(n).height()) {
                  height = elm.eq(n).height();
              }
          }

          for (var n = i; n <= i + num - 1; n++) {
              elm.eq(n).css("height", height + "px");
          }
      }
  });
}

equalBoxHeight(".card-text", 4);