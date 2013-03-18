jQuery.fn.extend({
  widthfix: function() {
    return this.each(function() {
      var $this = jQuery(this);
      $this.css('width', 'auto');
      var winhei = jQuery(window).height();
      while ($this.height() > winhei) {
        $this.css('width', $this.width()*1.2);
      }
    });
  }
});
