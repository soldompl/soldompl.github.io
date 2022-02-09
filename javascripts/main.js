(function ($) {
  $(document).ready(function() {
    // menu
    $('.region-sidebar-first .content > ul > li.expanded > a').click(function() {
      $(this).parent().toggleClass('active')
      $(this).siblings('ul').slideToggle()
      return false
    })

    // fancybox
    $('.fancybox a, a.fancybox').fancybox({
      'padding' : 0,
      'titleShow' : false,
      'transitionIn' : 'elastic',
      'transitionOut' : 'fade',
      'autoScale' : false
    })

    // logos
    $('.logos ul').each(function() {
      var $slider = $(this), pos = 0

      var logoSlider = function() {
        pos -= .5
        $slider.css('left', Math.floor(pos) + 'px')

        var width = $slider.children(':first').innerWidth()
        if (-pos >= width){
          $slider.children(':first').appendTo($slider)
          $slider.css('left', '0')
          pos = 0
        }
      }

      var logoTimer = setInterval(logoSlider, 20)

      $slider.children().hover(function() {
        if (logoTimer) {
          clearInterval(logoTimer)
          logoTimer = null
        }
      }, function() {
        logoTimer = setInterval(logoSlider, 20)
      })
    })
  })
})(jQuery)
