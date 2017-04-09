console.log('\'Allo \'Allo!');
$(function(){
   $('.about').hide();
   $('doc-wrapper').hide();

   $('.seal').hover(function(){
       $('.seal').toggleClass('seal-hover');
   });

   $('.letter-top,.letter-bot').click(function(){ // when click on top or bottom flap of letter trigger function
      audio.play();
      $('.letter-top').slideToggle(1200); // toggle top flap of letter
      //$('.letter-bot').slideToggle(1500);
      $('.letter-bot').fadeOut(1300);  // fade out bottom flap of letter

      setTimeout(function(){
         $('.about').fadeIn(2000); // fade in the text behind the letter
      },400);

      setTimeout(function(){
         $('.letter-top').remove(); // remove the top of the letter
         $('#audio').remove(); // remove audio once "letter opens"
          var about = $('.about').val();
        console.log(about);
      },2000);
      $('.doc-wrapper').fadeIn(); // fade in the rest of the website.

     
   }); // end letter top - bot animation 

}); // end of document ready 
