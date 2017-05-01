console.log('\'Allo \'Allo!');
$(function () {

  var vm = {
    name: ko.observable()
  };
  vm.name();
  ko.applyBindings(vm);

  //$('.about').hide();
  //$('doc-wrapper').hide();

  $('.seal').hover(function () { //fade out seal on hover
    $('.seal').toggleClass('seal-hover');
  });

  $(document).on('keydown', function (e) { // if enter is pressed after inserting name
    if (e.keyCode == 13) {
      reveal();
    }
  });

  $('#seal-top,#seal-bot').click(function () { // when click on top or bottom flap of letter trigger function

    reveal();

  }); // end letter top - bot animation 

  function reveal() { // function to reveal pages
    audio.play();
    var to = $('#name_input').val();

    if (to == '') {
      vm.name('Guest')
    };

    $('.letter-top').slideToggle(1100); // toggle top flap of letter

    //$('.letter-bot').slideToggle(1500);
    $('.letter-bot').fadeOut(1300); // fade out bottom flap of letter

    setTimeout(function () {
      $('.about').fadeIn(2080); // fade in the text behind the letter
      $('.about').textillate({ in: {
          effect: 'spaceInUp'
        }
      });

      setTimeout(function () {
        $('.regards').fadeIn();
        $('.regards').textillate({ in: {
            effect: 'fadeIn'
          }
        });
      }, 19000);
    }, 400);

    setTimeout(function () {
      $('.letter-top').remove(); // remove the top of the letter
      $('#audio').remove(); // remove audio once "letter opens"
    }, 2000);
    // $('.doc-wrapper').fadeIn(); // fade in the rest of the website.
    $('#fullpage').fadeIn();

    $('.maine_para').hover(function () {
      $('.maine_para').toggleClass('switch-fonts');
    });

    $('#fullpage').fullpage({

      navigation: true,
      scrollingSpeed: 750,
      navigationPosition: 'right',
      lazyLoading: true,
      verticalCentered: false,
      easing: 'easeInOutCubic',
      fitToSection: true,
      navigationTooltips: ['Letter', 'Nations', 'The Maine', 'Rough Riders'],

      //event
      // afterLoad: function(anchorLink, index){
      onLeave: function (index, nextIndex, direction) {
        var audio = document.getElementById('exp');
        // if( index == 2 && nextIndex == 3){
        if (nextIndex == 3) {
          $('.play,.restart').click(function () {
            setTimeout(function () {
              audio.volume = 0.1;
              audio.play();
            }, 2500);

            $('.pause').click(function () {
              audio.pause();
            });

          });
          var ship_timeline = anime.timeline({
            direction: 'alternate',
            loop: false,
            easing: 'linear',
            autoplay: false
          });
          ship_timeline
            .add({
              targets: '.ship_cont #ship',
              left: '40%',
              easing: 'easeInOutQuad',
              opacity: 100,
              bottom: 75,
              duration: 2500
            })
            .add({
              targets: '.explode #explode',
              opacity: 100,
              easing: 'easeInOutQuad'
            })
            .add({
              targets: '.ship_cont #ship',
              rotate: -10,
              easing: 'easeInOutQuad'
            })
            .add({
              targets: '.explode #explode',
              opacity: 0,
              easing: 'easeInOutQuad'
            })
            .add({
              targets: '.ship_cont #ship',
              rotate: 0,
              bottom: -15,
              opacity: 0,
              easing: 'easeInOutQuad'
            });

          document.querySelector('#ocean .play').onclick = ship_timeline.play;
          document.querySelector('#ocean .pause').onclick = ship_timeline.pause;
          document.querySelector('#ocean .restart').onclick = ship_timeline.restart;
        } //end if( index == 1 || 2|| 4 && nextIndex == 3)
      } // end on leave
    }); //end full page
  } // end reveal function





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
