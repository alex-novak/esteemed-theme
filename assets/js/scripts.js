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
    $(this).toggleClass('opened');
    $(this).siblings().toggle('slow');
  }
});

$('.js-showLvl').on('click', function() {
  $(this).toggleClass('is-active');
  $('.js-itemsLvl').slideToggle('slow');
});

// carousel
;(function ($) {
  var $contractorsSlider = $('.carousel-multiple-items');
  var itemsPerSlide = 2;
  var totalItems = $('.carousel-item', $contractorsSlider).length;
  // add variable if itemsClone = totalItems (something) then don't show carousel contro

  var $windowWidth = $(window).width();
  if ($windowWidth >= 1200) {
    itemsPerSlide = 4;
  } else if (992 <= $windowWidth) {
    itemsPerSlide = 3;
  } else if ($windowWidth < 567) {
    itemsPerSlide = 1;
  }
console.log(totalItems);
  if(itemsPerSlide >= totalItems) {
    $('.carousel-control-next', $contractorsSlider).hide();
    $('.carousel-control-prev', $contractorsSlider).hide();
  }

  $contractorsSlider.find('.carousel-item').each(function(){
    var next = $(this).next();
    var itemsClone = 4;

    if(itemsPerSlide > totalItems) {
      itemsClone = totalItems - 2;
    }

    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<itemsClone;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $contractorsSlider.on('slid.bs.carousel', function (e) {
      var idx = $(e.relatedTarget).index();

      if (idx === 0) {
        $('.carousel-control-prev').hide();
      } else {
        $('.carousel-control-prev').show();
      }
      if (idx === totalItems - itemsPerSlide) {
        $('.carousel-control-next').hide();
      } else {
        $('.carousel-control-next').show();
      }
    });
})(jQuery)

// Smooth scroll for anchor links.
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var $e = $(e.target),
        hasContractorSlider = $e.closest('.contractorsSlider').length;

    if (!hasContractorSlider) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Remove active submenus when closing main Browse menu.
$('.nav-link.dropdown-toggle').click(function() {
  var $dropdown = $(this).closest('.dropdown');

  if ($dropdown.hasClass('show')) {
    $dropdown.find('.open-caret').removeClass('open-caret');
  }
});

// Main menu submenus.
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  var $subMenu = $(this).next('.dropdown-menu');

  $('.dropdown-submenu .dropdown-menu').each(function() {
    var $this = $(this);

    if($this[0] != $subMenu[0]) {
      $this.removeClass('show');
      $this.prev('.open-caret').removeClass('open-caret');
    }
  });

  $subMenu.toggleClass('show');

  if (!$(this).hasClass('open-caret')) {
    $(this).addClass('open-caret');
  }

  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
    $(this).removeClass('open-caret');
  });

  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    $(this).removeClass('open-caret');
  }

  return false;
});

// Open headers menu on contractors by role page.
$('.js-contractorsMenuBtn').on('click', function() {
  $(this).toggleClass('is-open');
  $(this).siblings('ul').slideToggle();
})

var $mobileMenuHolder = $('.js-mobileMenuHolder'),
    $mobileMenuClose = $('.js-closeMobileMenu'),
    $hamburger = $('.js-hamburger'),
    $body = $('body');

$hamburger.on('click', function() {
  $body.addClass('is-openMenu');
  $mobileMenuHolder.show();
});

$mobileMenuHolder.on('click', function() {
  $body.removeClass('is-openMenu');
  $mobileMenuHolder.hide();
});

$mobileMenuClose.on('click', function() {
  $body.removeClass('is-openMenu');
  $mobileMenuHolder.hide();
});

$('.mobileMenu .js-firstLvlMobile > span').on('click', function() {
  var $thisFirstLvl = $(this),
      $thisParent = $thisFirstLvl.closest('.js-firstLvlMobile');
  $thisParent.toggleClass('is-open');
});

$('.mobileMenu .js-secondLvl > span').on('click', function() {
  var $thisFirstLvl = $(this),
      $thisParent = $thisFirstLvl.closest('.js-secondLvl');
  $thisParent.toggleClass('is-open');
});

// Init WOW js.
new WOW().init();

 // Add class to header when scrolling.
(function($) {
  var adjust = function () {
    if($(document).scrollTop() > 0) {
      $('.siteHeader').addClass('siteHeader-sticky');
    } else {
      $('.siteHeader').removeClass('siteHeader-sticky');
    }
  }

  $(document).scroll(adjust);
  $(function() { adjust; })
})(window.jQuery);

$('.hamburger-top').on('click', function() {
  var $esteemedButtons = $('#menu-global');
  if ($esteemedButtons.hasClass('show')) {
    $('.siteHeader').css('top', '50px');
    $('#main-wrapper').css('margin-top', '0');
  }
  else {
    $('.siteHeader').css('top', '158px');
    $('#main-wrapper').css('margin-top', '100px');
  }
});

// Animation numbers on Partner us page.
$(window).scroll(function() {
  var hT = $('.statistic-item').offset().top,
  hH = $('.statistic-item').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $('.js-data-1').animate({num: 200 - 20}, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num + 20).toFixed(0) + '+'
      };
    });
    $('.js-data-2').animate({num: 6000 - 200}, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num + 200).toFixed(0) + '+'
      };
    });
    $('.js-data-3').animate({num: 300 - 20}, {
      duration: 2000,
      step: function (num){
        this.innerHTML = (num + 20).toFixed(0)
      };
    });
  };
});
