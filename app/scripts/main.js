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

    $(document).on('keydown', function(e){
      if (e.keyCode == 13){
        reveal();
      }
   });

   $('#seal-top,#seal-bot').click(function(){ // when click on top or bottom flap of letter trigger function
     
    reveal();
     
   }); // end letter top - bot animation 
      
    function reveal(){
      audio.play();
      var to = $('#name_input').val();

      if ( to == ''){
        vm.name('Guest')
       };

      $('.letter-top').slideToggle(1100); // toggle top flap of letter
      
      //$('.letter-bot').slideToggle(1500);
      $('.letter-bot').fadeOut(1300);  // fade out bottom flap of letter

      setTimeout(function(){
        $('.about').fadeIn(2080); // fade in the text behind the letter
        $('.about').textillate({in: { effect: 'fadeIn'} });

        setTimeout(function(){
          $('.regards').fadeIn();
          $('.regards').textillate({ in: {effect: 'fadeIn'} });
          },19000);
      },400);
     
      setTimeout(function(){
          $('.letter-top').remove(); // remove the top of the letter
          $('#audio').remove(); // remove audio once "letter opens"
      },2000);
        // $('.doc-wrapper').fadeIn(); // fade in the rest of the website.
      $('#fullpage').fadeIn();

      $('#fullpage').fullpage({
    
        navigation: true,
        scrollingSpeed: 750,
        onLeave: function(index, nextIndex, direction) {
          if( index == 2 && nextIndex == 3){

            var ship_timeline = anime.timeline();
            ship_timeline
           .add({
              targets: '.ship_cont #ship',
              left: '40%',
              easing: 'easeInOutQuad',
              delay: 2000,
              duration: 2500
            })
            .add({
              targets:'.explode #explode',
              opacity:100,
              easing:'linear'
            })
            .add({
              targets:'.ship_cont #ship',
              rotate: -10,
              easing:'easeInOutQuad',
            })
            .add({
              targets:'.explode #explode',
              opacity:0,
              easing:'linear'
            })
            .add({
              targets:'.ship_cont #ship',
              bottom:-15,
              rotate:0,
              opacity:0,
              easing:'easeInOutQuad'
            });
           }  //end if( index == 1 || 2|| 4 && nextIndex == 3)
        }     // end on leave
      });     //end full page
     }        // end reveal function





  /* var ocean = document.getElementById('ocean'),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();*/

 /* for(var i = 0; i < waveCount; i++){
    var wave = document.createElement('svg');
    wave.className += ' wave';
    docFrag.appendChild(wave);
    wave.style.left = i * waveWidth + 'px';
    wave.style.webkitAnimationDelay = (i/100) + 's';
  }*/

  //ocean.appendChild(docFrag);

  
   

}); // end of document ready 
 