'use strict'

$('.no-js').removeClass('no-js');

$('.burger').click(function() {
  $(this).toggleClass('burger--close  burger--open');
  $('.main-menu__list').slideToggle();
});

$(function functionName() {
  var header = $(".page-header");
  $(window).scroll(function() {

    var search = $(".search");
    var callback = $(".callback");
    var searchResult = $(".search-result");
    var headerHeight = header.height();
    var searchHeight = search.height() || searchResult.height();
    var some = window.scrollY;

    $('.callback__btn--email').click(function() {
      $('body').addClass('modal-bg');
      $('.modal').addClass('modal--open');
    });

    $('.close').click(function() {
      $('body').removeClass('modal-bg');
      $('.modal').removeClass('modal--open');
    });

    if(some >= $('.modal').height()) {
      $('.callback__btn--email').click(function() {
        document.documentElement.scrollTop = 0;
        $('body').addClass('modal-bg');
        $('.modal').addClass('modal--open');
      });
    } else {
      $('.close').click(function() {
        $('body').removeClass('modal-bg');
        $('.modal').removeClass('modal--open');
      });
    }


    // $('.modal').css({top: window.scrollY + 30});
    // $('.modal-phone').css({top: window.scrollY + 30});

    if(some >= $('.modal-phone').height()) {
      $('.callback__btn--call').click(function() {
        document.documentElement.scrollTop = 0;
        $('body').addClass('modal-bg');
        $('.modal-phone').addClass('modal-phone--open');
      });
    } else {
      $('.modal-phone__close').click(function() {
        $('body').removeClass('modal-bg');
        $('.modal-phone').removeClass('modal-phone--open');
      });
    }

    if(some >= callback.height() + headerHeight + 60 ) {
      $('.callback--footer').addClass("callback--fix");
    } else {
      $('.callback--footer').removeClass("callback--fix");
    }

    if (some >= headerHeight - searchHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  var searchBtn = $(".search__btn");

  $('.search__select').change(function() {
    if ($(this).val() == "Chiang Mai") {
      $('.search__select--second').removeAttr('disabled');
      searchBtn.removeAttr('disabled');
    }

    if ($('.search__select--first').val() != "Chiang Mai") {
      $('.search__select--second').attr('disabled', 'true');
      searchBtn.attr('disabled', 'true');
    }

    $(".search__btn").click(function() {
      if ($('.search__select--second').val() == "Doi Saket") {
        window.open("searchresults.html");
      } else {
        alert('not-found');
        return false;
      }
    });
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [{
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
})
