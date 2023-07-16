$(document).on('scroll', function(){
 
  // the scrolltop is a jquery method that gives us a pixel value of how far we are from the top
  var pixelsFromTop= $(document).scrollTop()
  
  
  
  if (pixelsFromTop > 50) {
      $('header').addClass('hidden')
      } else {
      $('header').removeClass('hidden')
      }
  
  
  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#f7f9fd')
  } else if (pixelsFromTop < 1400) {
               $('body').css('background-color', '#0000')
  } else if (pixelsFromTop < 2200) {
               $('body').css('background-color', '#f7f9fd')
 } else if (pixelsFromTop < 3000) {
               $('body').css('background-color', '#f7f9fd')
} else if (pixelsFromTop < 3300) {
               $('body').css('background-color', '#f7f9fd')
} else if (pixelsFromTop < 3300) {
               $('body').css('background-color', '#f7f9fd')
 } else {
    $('body').css('background-color', '#f7f9fd')
 }
  
})


