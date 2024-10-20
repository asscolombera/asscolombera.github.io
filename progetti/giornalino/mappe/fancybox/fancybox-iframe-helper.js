var options = {
    padding: 0,
    openEffect: "elastic",
    closeEffect: "elastic",
    loop: false
  }


// DO NOT EDIT AFTER THIS LINE


$(document).ready(function() {
  $('.fancybox-button').click( function (e) {
    e.preventDefault();
    var rel = this.rel;
    if (rel) {
      var gallery = $('[rel="' + rel + '"]');
      var idx = gallery.index($(this));
      var images = $.makeArray(
        $.merge(gallery.slice(idx, gallery.length), (gallery.slice(0, idx))
        ).map( function() {
          return { href: this.href, title: this.title }
        })
      );
    } else {
      var images = [{ href: this.href, title: this.title }];
    }
    parent.$.fancybox(images, options);
  });
});