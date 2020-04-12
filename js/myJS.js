$(document).ready(function () {
    // Uni-Carousel
    $('.uni-carousel').uniCarousel({

        // width
        width: '700',
      
        // height
        height: '175',
      
        // the number of items per slide
        count: 3,
      
        // inverse the direction
        inverse: false,
      
        // infinite loop
        cycle: false,
      
        // or 'vertical'
        orientation: 'horizontal',
      
        // autoplay
        autoplay: true,
      
        // immediately play on load
        playImmediately: true,
      
        // pause on hover
        pause: true,
      
        // animation speed
        time: 500,
      
        // autoplay interval
        interval: 2000,
      
        // or 'slider'
        mode: 'carousel',
      
        // custom controls
        controls:   {
          arrows: {
            position: 'in'
          },
          indicators: {
            position: 'in'
          }     
        }			
      });

    // open close menu
    $('#open-menu').click(function () {
        $('.menu').css("display", "block"),
        $('.menu').children('.vertical-navbar').css({
            left: '0'
        }),
        $('.menu').children('.row').children('.menu-item').css({
            top: '0'
        });
    });
    
    $('.close-menu').click(function () {
        $('.menu').css("display", "none"),
        $('.menu').children('.vertical-navbar').css({
            left: '100%'
        }),
        $('.menu').children('.row').children('.menu-item').css({
            top: '100%'
        });
    });

    // pick loc
    $('#img-loc-1').click(function(){
        var img = $('#img-loc-1').next().attr('src');
        var title = 'Prambanan <br> Temple';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
    $('#img-loc-2').click(function(){
        var img = $('#img-loc-2').next().attr('src');
        var title = 'Borobudur <br> Temple';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
    $('#img-loc-3').click(function(){
        var img = $('#img-loc-3').next().attr('src');
        var title = 'Bali';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
    $('#img-loc-4').click(function(){
        var img = $('#img-loc-4').next().attr('src');
        var title = 'Mount <br> Bromo';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
    $('#img-loc-5').click(function(){
        var img = $('#img-loc-5').next().attr('src');
        var title = 'Raja <br> Ampat';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
    $('#img-loc-6').click(function(){
        var img = $('#img-loc-6').next().attr('src');
        var title = 'Komodo <br> Island';
        $('#top-loc').children('.text-box').children('h1').html(title);
        $('#top-loc').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+ img +')');    
    });
});