//jshint esversion:6

// Get the current year for the copyright
  $('#year').text(new Date().getFullYear());


  // Lightbox Init
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
