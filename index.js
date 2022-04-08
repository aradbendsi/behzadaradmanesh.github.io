// var activepage = window.location.pathname;
// var navlinks = document.querySelectorAll('.container header ul li a').
// forEach(link =>{
//    if (link.href.includes(`${activepage}`)){
//       console.log(`${activepage}`);
//     }
// })
var $video1 = $('.video1');
$video1.on('mouseenter focus', function(){
   $video1.get(0).play();
})
$video1.on('mouseout blur', function(){
   $video1.get(0).pause();
})