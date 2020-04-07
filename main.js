$(window).scroll(function () {
    if ($(this).scrollTop() > 190) {
        $('.top-nav').addClass('visible-nav');
    } else {
        $('.top-nav').removeClass('visible-nav');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() >860) {
        $('.offerings-section-bg .section-header').addClass('white-text');
        $('.offerings-section-bg .section-header').removeClass('blue-text');
       } else {
        $('.offerings-section-bg .section-header').removeClass('white-text');
        $('.offerings-section-bg .section-header').addClass('blue-text');
      }
});

