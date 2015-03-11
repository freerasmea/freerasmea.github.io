---
layout: null
library: jquery-2.1.3.min.js
---
// If using a JS framework, include it here
{% include_relative _lib/{{page.library}} %}
{% include_relative _lib/jquery.smoothState.js %}


// Responsive nav menu menu
$(document).ready(function() {
  jQuery.mark.jump();
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });

});

  // hero text
$(document).ready(function() {
    function setRandomPhrase() {
        // Set phrases into an array
        var phrases = new Array(
            "A Message from Rasmea <a href="{{site.baseurl}}news/2015/03/10/a-speech-from-rasmea-on-International-Women's-Day/" class="button">Read More</a>"
        );

        // Selects a random phrase
        var random = Math.floor(Math.random()*phrases.length);
        // Sets the area to use that random phrase
        $("#phrase").text(phrases[random]);
    }
    // Fire the function every 5 seconds...
    setInterval(setRandomPhrase,5000);
    
    var random = Math.floor(Math.random()*phrases.length);

$("#phrase").fadeOut("slow",function(){
    $("#phrase").text(phrases[random]).fadeIn("slow");
});
});


// Scroll to anchor links
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-to-link'
      };
      if (typeof options == 'string') defaults.selector = options;
      var options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 500;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing')
        e.preventDefault();
      })
    }
  }
})(jQuery);

// smoothstate JS
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);
