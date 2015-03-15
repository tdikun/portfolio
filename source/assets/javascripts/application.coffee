$ ->

  # -------
  # Card Ordering
  # -------

  $(document).on 'click', '.card', ->
    count = $('.card').length - 1
    position = $('.active').index()

    $(this).removeClass('active')

    if count == position
      $('.card').first().addClass('active')

    else
      $(this).next('.card').addClass('active')

  # -------
  # Card BG
  # -------

  $('.card').each (i, e) =>
    img = $(e).attr('data-img');
    $('.card').eq(i).css('background-image', "url(/assets/images/" + img + "-" + (i + 1) + ".jpg)")

