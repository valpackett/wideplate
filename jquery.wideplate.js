$.fn.extend({
  widthfix: function() {
    return this.each(function() {
      var $this = $(this);
      $this.css('width', 'auto');
      var winhei = $(window).height();
      while ($this.height() > winhei) {
        $this.css('width', $this.width()*1.2);
      }
    });
  }
});