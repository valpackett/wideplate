jQuery.fn.extend({
  widthfix: function() {
    return this.each(function() {
      var $this = jQuery(this);
      $this.css('width', 'auto');
      if (!$this.hasClass('narrow-collapse') || typeof matchMedia == 'undefined' || matchMedia('screen and (max-width: 32em)').matches) {
        var aid = jQuery('<div>').css('height', '0px').appendTo($this);
        var winhei = jQuery(window).height();
        $this.css('width', aid.position().left);
        aid.detach();
      }
    });
  }
});
