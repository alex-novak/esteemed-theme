<!--//--><![CDATA[//><!--
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create", "UA-141057075-1", {"cookieDomain":"auto"});ga("set", "anonymizeIp", true);ga("send", "pageview");
//--><!]]>

window.intercomSettings = {
  app_id: "zrqksojs"
};

(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/zrqksojs';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

$('.expanded > span').on('click', function(e) {
  if (e.target != this) return;
  $(this).parent().find('> .menu').toggle();
});
$('.siteFooter-body .block__title').on('click', function() {
  if ($(window).width() <= 768) {
    $(this).siblings().toggle('slow');
  }
});
$('.js-showLvl').on('click', function() {
  $(this).toggleClass('is-active');
  $('.js-itemsLvl').slideToggle('slow');
});

$(function() {
  if ($('#contractorsSlider')) {
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item', this).length;

    if (totalItems <= itemsPerSlide) {
      $('.carousel-control-next').hide();
    }
  }
});

$('#contractorsSlider').on('slide.bs.carousel', function (e) {
  var idx = $(e.relatedTarget).index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item', this).length;

  if (idx >= totalItems - itemsPerSlide - 1) {
    var it = itemsPerSlide - (totalItems - idx);

    for (var i=0; i<it; i++) {
      // append slides to end
      if (e.direction=="left") {
        $('.carousel-item').eq(i).appendTo('.carousel-inner');
      }
      else {
        $('.carousel-item').eq(0).appendTo('.carousel-inner');
      }
    }
  }
});

$('#contractorsSlider').on('slid.bs.carousel', function (e) {
  var idx = $(e.relatedTarget).index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item', this).length;

  if (idx === 0) {
    $('.carousel-control-prev').hide();
    return;
  } else {
    $('.carousel-control-prev').show();
  }
  if (idx >= totalItems - itemsPerSlide) {
    $('.carousel-control-next').hide();
    return;
  } else {
    $('.carousel-control-next').show();
  }
});

function normalizeSlideHeights() {
  $('.carousel').each(function(){
    var items = $('.carousel-item > div', this);
    // reset the height
    items.css('min-height', 0);
    // set the height
    var maxHeight = Math.max.apply(null, items.map(function() {
      return $(this).outerHeight()})
      .get()
    );
    items.css('min-height', maxHeight + 'px');
  })
}

$(window).on('load resize orientationchange', normalizeSlideHeights);

// Smooth scroll for anchor links.
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});

// Open headers menu on contractors by role page.
$('.js-contractorsMenuBtn').on('click', function() {
  $(this).toggleClass('is-open');
  $(this).siblings('ul').slideToggle();
})
