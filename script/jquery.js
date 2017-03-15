$( document ).ready(function() {

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top +0
        }, 300);
        return false;
      }
    }
  });
});
if ($(window).width() < 1050) {

}
else {
    var parentContainer = $('#parentContainer');
    if (parentContainer.hasClass('noScroll') ) {

    }else{
        $('#parentContainer').fullpage();
    }
}



window.onload = function() {
    $('#loaderParent').fadeOut(300);
    $('.anim-init-down').removeClass('anim-init-down');
    $('.anim-init-up').removeClass('anim-init-up');
};

$('.enquiry-handle').on('click', function(){
    $('#enquiryPopup').toggleClass('active');
})
$(document).keydown(function(e) {
     if (e.keyCode == 27) {
        $('#enquiryPopup').removeClass('active');
    }
});

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('#parentContainer').toggleClass('blurred');
    $('.nav-ul').toggleClass('active');
})

$('.filter-handle').on('click', function(){
    $(this).parent().toggleClass('active');
})

$('.project-detail-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
})

$('.full-input').on('focus', function(){
    $(this).parent().addClass('float');
})
$('.full-input').on('blur', function(){
    if ($(this).val() != "") {

    }
    else {
        $(this).parent().removeClass('float');
    }

})

$(document).scroll(function() {
    if ($(document).scrollTop() > 600) {
        $('#navbar').addClass('alternative');
    }
    else{
        $('#navbar').removeClass('alternative');
    }
})

$('#parentContainer').scroll(function() {
    console.log('asd');
})



});
