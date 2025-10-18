// script.js — Optimized

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const sidebar = document.getElementById('sidebar');
  const contentArea = document.body;

  if (toggleButton && sidebar && contentArea) {
    toggleButton.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });

    contentArea.addEventListener('click', function (e) {
      if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleButton) {
        sidebar.classList.remove('active');
      }
    });
  }

  // Portfolio section tab switching
  document.querySelectorAll('.portfolio-nav ul li a')?.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        document.querySelectorAll('.dynamic-content .content-section').forEach(section => {
          section.classList.remove('active');
        });

        if (targetSection) {
          targetSection.classList.add('active');
        } else {
          console.warn('Target section not found:', href);
        }
      }
    });
  });

  // Owl Carousel initialization
  const owl = $('.owl-carousel');
  if (owl.length) {
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoHeight: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
    });

    $('.play').on('click', function () {
      owl.trigger('play.owl.autoplay', [1000]);
    });

    $('.stop').on('click', function () {
      owl.trigger('stop.owl.autoplay');
    });
  }

  // Bootstrap tab activation
  $('a[data-bs-toggle="tab"]').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // Modal functionality for portfolio images
  $('.portfolio-wrapper img').on('click', function () {
    const src = $(this).attr('src');
    $('#modalImage').attr('src', src);
    $('#imageModal').css('display', 'flex');
  });

  $('.close').first().on('click', function () {
    $('#imageModal').hide();
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('#imageModal')) {
      $('#imageModal').hide();
    }
  });
});
