$(window).scroll(function () {
    if ($(this).scrollTop() > 190) {
        $('.top-nav').addClass('visible-nav');
    } else {
        $('.top-nav').removeClass('visible-nav');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() >865) {
        $('.offerings-section-bg .section-header, .offerings-section-bg .section-tagline').addClass('white-text');
        $('.offerings-section-bg .section-header, .offerings-section-bg .section-tagline').removeClass('blue-text');
       } else {
        $('.offerings-section-bg .section-header, .offerings-section-bg .section-tagline').removeClass('white-text');
        $('.offerings-section-bg .section-header, .offerings-section-bg .section-tagline').addClass('blue-text');
      }
      
});

