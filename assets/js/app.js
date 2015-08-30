/**
 * Helper script for theme.
 */

(function ($) {

  'use strict';

  var scrollMain = function(top) {
    $('html, body').animate({
      scrollTop: top
    }, 500);
  };

  var theme = {
    attach: function(context, settings) {

      this.bindMainMenu(context, settings);
      this.formatLists(context, settings);
      this.setLineNumbers(context, settings);
      this.bindContent(context, settings);

    },
    bindMainMenu: function(context, settings) {

      var $menu = $('main section .main-menu', context);

      $.each($('h2', context), function(ix, e) {
        var $self = $(e);

        // Add header to main menu.
        if (ix > 0) {
          var $menu_item = $(document.createElement('li'));
          var $menu_link = $(document.createElement('a'))
            .prop('href', '#mm-' + ix)
            .html($self.text());
          $menu_item.append($menu_link);
          $menu.append($menu_item);
        }

        // Format headers.
        var wrapper = '';
        for (var i=0; i < $self.text().length; i++) {
          wrapper += '=';
        }
        $self
          .prop('id', 'mm-' + ix)
          .html($self.text() + '<span>' + wrapper + '</span>');
      });

      // Add share link to main menu.
      var $menu_item = $(document.createElement('li'));
      var $menu_link = $(document.createElement('a'))
        .prop('src', 'https://www.facebook.com/sharer.php?u=' + settings.page.url)
        .text('Share on Facebook');
      $menu_item.append($menu_link);
      $menu.append($menu_item);

      $('a[href*=#]', $menu)
        .click(function(evt) {
          evt.preventDefault();
          scrollMain($(this.hash).offset().top - $('main', context).offset().top);
        });

      // "Top" scrolly for homepage.
      $('header a.logo', context)
        .click(function(evt) {
          evt.preventDefault();
          scrollMain(0);
        });

      $.each($('h3, h4', context), function(ix, e) {
        var $self = $(e);

        // Format headers.
        var wrapper = '';
        for (var i=0; i < $self.text().length; i++) {
          wrapper += '-';
        }
        $self
          .html($self.text() + '<span>' + wrapper + '</span>');
      });

    },
    formatLists: function(context, settings) {

      $.each($('ul li', context), function() {
        var $self = $(this);

        var $bullet = $(document.createElement('span'))
          .addClass('bullet pull-left')
          .text('*');

        if (!$self.parent().hasClass('menu')) {
          var html = '<span class="content pull-left">' + $self.html() + '</span>';
          $self.html(html);
        }

        $self
          .prepend($bullet);
      });

    },
    setLineNumbers: function(context, settings) {

      // Populate "line numbers" element.
      var $main = $('main', context);
      var $lines = $('.line-numbers', $main);

      // 18 is the calculated line height set by Bootstrap.
      var lines = '<ol>';
      var count = Math.round($main.height() / 18);
      for (var i=1; i < (count + 1); i++) {
        lines += '<li>' + i + '</li>';
      }
      lines += '</ol>';

      $lines
        .html(lines);

    },
    bindContent: function(context, settings) {

      // Do blinky stuff.
      var n = 0;
      var blink = setInterval(function() {
        setTimeout(function() {
          $('a.blink', context)
            .css({ color : (n % 2 == 0 ? '#000' : '#34E2E2') });
          n++;
        }, 200);
      }, 200);

      $('a.blink.warning', context).click(function(evt) {
        var $self = $(this);
        if (!confirm($self.prop('title'))) {
          return false;
        }
      });

      // Do soundy stuff.
      if ($('#player').length && settings.page.audio.length) {
        var random = [Math.floor(Math.random() * settings.page.audio.length)];
        var player = new MediaElementPlayer('#player', {  });
        player.media.src = settings.page.audio;
        player.pause();
        player.play();
      }

    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
