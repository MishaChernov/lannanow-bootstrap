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
    var searchResult = $(".search-result");
    var headerHeight = header.height();
    var searchHeight = search.height() || searchResult.height();
    var some = window.scrollY;

    if (some >= headerHeight - searchHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $( ".search__btn" ).click(function() {
    window.open("searchresults.html");
  });

  var searchBtn = $(".search__btn");

  $('.search__select').change(function() {
    if ($(this).val() == "Chiang Mai") {
      $('.search__select--second').removeAttr('disabled');
    }
  });
  $('.search__select--second').change(function() {
    if ($(this).val() == "Doi Saket") {
      searchBtn.removeAttr('disabled');
    }
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
