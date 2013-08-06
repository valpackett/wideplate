jQuery.fn.extend({
  widthfix: function() {
    return this.each(function() {
      var $this = jQuery(this);
      $this.css('width', 'auto');
      var aid = jQuery('<div>').css('height', '0px').appendTo($this);
      var width =  aid.position().left + aid.width();
      $this.css('width', width);
      jQuery('html').css('min-width', width + $this.position().left);
      aid.detach();
    });
  }
});
