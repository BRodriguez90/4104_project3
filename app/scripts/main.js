console.log('\'Allo \'Allo!');
$(function(){
 
    var vm = {
        name: ko.observable()
    };
    vm.name();
    ko.applyBindings(vm);
   

   //$('.about').hide();
   //$('doc-wrapper').hide();

   $('.seal').hover(function(){           //fade out seal on hover
     $('.seal').toggleClass('seal-hover');
   });

   $('#seal-top,#seal-bot').click(function(){ // when click on top or bottom flap of letter trigger function
      audio.play();
        var to = $('#name_input').val();

      if ( to == ''){
        vm.name("Guest")
       };
       
       $('#fullpage').fullpage({
    
        navigation: true,
        scrollingSpeed: 750
      });

      $('.letter-top').slideToggle(1100); // toggle top flap of letter
      
      //$('.letter-bot').slideToggle(1500);
      $('.letter-bot').fadeOut(1300);  // fade out bottom flap of letter

      setTimeout(function(){
        $('.about').fadeIn(2080); // fade in the text behind the letter
        $('.about').textillate({in: { effect: 'fadeIn'} });
        $('.about').on('inAnimationEnd.tlt', function () {
        
          
        });
      },400);
     
      setTimeout(function(){
         $('.letter-top').remove(); // remove the top of the letter
         $('#audio').remove(); // remove audio once "letter opens"
      },2000);
      
     // $('.doc-wrapper').fadeIn(); // fade in the rest of the website.
     $('#fullpage').fadeIn();
     
   }); // end letter top - bot animation 
   

}); // end of document ready 
 