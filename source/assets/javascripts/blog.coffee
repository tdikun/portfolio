$ ->

  # -------
  # Fixed header on scroll in Blog
  # -------

  $(document).on 'scroll':->
    content = $(".content")[0].offsetTop
    page = $(document).scrollTop();

    if page > content
      $(".bar").addClass("fixed")
    else
      $(".bar").removeClass("fixed")


