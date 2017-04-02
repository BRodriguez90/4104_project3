console.log('\'Allo \'Allo!');
$(function(){
   $('.about').hide();
   $('doc-wrapper').hide();
   $(document).click(function(){
      audio.src = "images/letter.mp3";
      audio.play();
      $('.letter-top').slideToggle(1500);
      //$('.letter-bot').slideToggle(1500);
      $('.letter-bot').fadeOut(1600);

      setTimeout(function(){
         $('.about').fadeIn(2000);
      },200);

      setTimeout(function(){
         $('.letter-top').remove();
      },2000);
      $('.doc-wrapper').fadeIn();
   });

}); // end of document ready
