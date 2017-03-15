// var xInt = 0;
// //
// var loadImg = $('#parentContainer img:eq('+xInt+')').attr('src');
// console.log($('#parentContainer img:eq('+0+')').attr('src'));
// //

// 
// $('#parentContainer img').each(function(){
//
//     var ivan = $(this).attr('src');
//
// });
//
// $.ajax({
//     method: 'GET',
//     url: 'img/index/hero-bg.png',
//     success: function() {
//         console.log('asd');
//     },
//     error: function() { },
//     progress: function(e) {
//         if(e.lengthComputable) {
//             var pct = (e.loaded / e.total) * 100;
//
//             $('.percent').html(Math.floor(pct) + '%');
//             $('.bar-moved').css({
//                 left: pct+'%'
//             })
//             // console.log(pct);
//         }
//         else {
//             console.warn('Content Length not reported!');
//         }
//     }
// });

// $(function(){
//     $('#loaderParent').fadeOut(300);
//     $('.anim-init-down').removeClass('anim-init-down');
// });
