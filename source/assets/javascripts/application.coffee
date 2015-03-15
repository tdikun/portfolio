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
  # Set Card BG on load
  # -------

  $('.card').each (i, e) =>
    project = $(e).attr('data-img');
    $('.card').eq(i).css('background-image', "url(/assets/images/" + project + "-" + (i + 1) + ".jpg)")

  # -------
  # Update dynamically
  # -------

  # $(document).on 'click', '.w-nav', ->
  #   #swap out the images
  #   project = $(this).attr('data-project');
  #   $('.card').each (i) =>
  #     $('.card').eq(i).css('background-image', "url(/assets/images/" + project + "-" + (i + 1) + ".jpg)")

    # activate the new content by using a yaml file and hiding the inactive one.
    # https://www.discovermeteor.com/blog/three-middleman-hacks-were-using-on-this-site/



