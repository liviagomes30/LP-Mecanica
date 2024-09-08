(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 45) {
  //     $(".navbar").addClass("sticky-top shadow-sm");
  //   } else {
  //     $(".navbar").removeClass("sticky-top shadow-sm");
  //   }
  // });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Client carousel
  $(".client-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 90,
    dots: false,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
})(jQuery);

function mascara(m, t, e) {
  var cursor = t.selectionStart;
  var texto = t.value;
  texto = texto.replace(/\D/g, "");
  var l = texto.length;
  var lm = m.length;
  if (window.event) {
    id = e.keyCode;
  } else if (e.which) {
    id = e.which;
  }
  cursorfixo = false;
  if (cursor < l) cursorfixo = true;
  var livre = false;
  if (id == 16 || id == 19 || (id >= 33 && id <= 40)) livre = true;
  ii = 0;
  mm = 0;
  if (!livre) {
    if (id != 8) {
      t.value = "";
      j = 0;
      for (i = 0; i < lm; i++) {
        if (m.substr(i, 1) == "#") {
          t.value += texto.substr(j, 1);
          j++;
        } else if (m.substr(i, 1) != "#") {
          t.value += m.substr(i, 1);
        }
        if (id != 8 && !cursorfixo) cursor++;
        if (j == l + 1) break;
      }
    }
  }
  if (cursorfixo && !livre) cursor--;
  t.setSelectionRange(cursor, cursor);
}

function validarUsername(user) {
  var div = document.getElementById("username-error");
  var username = user.split(" ");
  if (username.length > 1) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
