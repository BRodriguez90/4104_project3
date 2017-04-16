console.log('\'Allo \'Allo!');
var smallCircles= ['top','right','bottom','left','top'];
$(function(){
  $('#fullpage').fullpage({
    
    navigation: true,
    scrollingSpeed: 750
  });

   $('.about').hide();
   $('doc-wrapper').hide();

   $('.seal').hover(function(){
     $('.seal').toggleClass('seal-hover');
   });

   $('#seal-top,#seal-bot').click(function(){ // when click on top or bottom flap of letter trigger function
      audio.play();
      $('.letter-top').slideToggle(1100); // toggle top flap of letter
      
      //$('.letter-bot').slideToggle(1500);
      $('.letter-bot').fadeOut(1300);  // fade out bottom flap of letter

      setTimeout(function(){
         $('.about').fadeIn(2080); // fade in the text behind the letter
      },400);

      setTimeout(function(){
         $('.letter-top').remove(); // remove the top of the letter
         $('#audio').remove(); // remove audio once "letter opens"
      },2000);
      
      $('.doc-wrapper').fadeIn(); // fade in the rest of the website.

     
   }); // end letter top - bot animation 
   

}); // end of document ready 
 