/**
 * Helper script for theme.
 */

(function ($) {

  'use strict';

  jQuery.browser = {};
  jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());

  var scrollMain = function(top) {
    $('html, body').animate({
      scrollTop: top
    }, 400);
  };

  var theme = {
    attach: function(context, settings) {

      this.bindMainMenu(context, settings);
      this.formatLists(context, settings);
      this.effects(context, settings);

    },
    bindMainMenu: function(context, settings) {

      var $main = $('main section', context);
      var $menu = $('.main-menu', $main);

      $.each($('h2', context), function(ix, e) {
        var $self = $(e);
        if ($self.hasClass('sr-only')) {
          return;
        }

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
        .prop('href', 'https://www.facebook.com/sharer.php?u=' + settings.page.url)
        .prop('target', '_blank')
        .text('FB this MF');
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
    effects: function(context, settings) {

      // Do line number stuff (18 is the calculated line height from the CSS).
      var $main = $('main', context);
      var $lines = $('.line-numbers', $main);
      var lines = '<ol>';
      var count = Math.round($main.height() / 18);
      for (var i=1; i < (count + 1); i++) {
        lines += '<li>' + i + '</li>';
      }
      lines += '</ol>';
      $lines
        .html(lines);

      // Do blinky stuff.
      var n = 0;
      var blink = setInterval(function() {
        setTimeout(function() {
          $('a.blink', context)
            .css({ color : (n % 2 == 0 ? '#000' : '#34E2E2') });
          n++;
        }, 200);
      }, 200);

      // Do soundy stuff.
      if ($('#player').length && settings.page.audio.length) {
        var random = [Math.floor(Math.random() * settings.page.audio.length)];
        var player = new MediaElementPlayer('#player', {  });
        player.media.src = settings.page.audio;
        player.pause();
        player.play();
      }

      // Do some gd easter eggs, mf.
      var eeClick = function(evt) {
        evt.preventDefault();

        var $self = $(this);
        var target = $self.attr('rel');
        var $content = $('#' + target + ' .ee-c', $main);
        var $wrapper = $content.parent('.ee-wrapper');

        switch (target) {
          case 'ee-0':
            if (!$.browser.webkit) {
              break;
            }
            var left = (!$wrapper.hasClass('open') ? 0 : -$wrapper.outerWidth());
            if (left == 0) {
              $content.bind('click', eeClick);
            }
            else {
              $content.unbind('click');
            }
            $('html').toggleClass('invert');
            $content.css({ 'margin-left': left });
            $wrapper.toggleClass('open');
            break;

          case 'ee-1':
          case 'ee-2':
            var left = (!$wrapper.hasClass('open') ? 0 : -$wrapper.outerWidth());
            if (left == 0) {
              $('.ee-wrapper', $main).removeClass('open');
              $wrapper.toggleClass('open');
            }
            $content
              .stop()
              .animate({ 'margin-left': left + 'px' }, 200, function(e) {
                if (left == 0) {
                  $content.bind('click', eeClick);
                }
                else {
                  $content.unbind('click');
                  $('.ee-wrapper', $main).removeClass('open');
                }
              });
            break;
        };
      };

      $('a.ee', $main)
        .each(function(ix, e) {
          $(this)
            .attr('rel', 'ee-' + ix)
            .parent()
            .append(document.createElement('div'))
            .children('div:not([id^="ee-"])')
            .attr('id', 'ee-' + ix)
            .addClass('ee-wrapper')
            .append(document.createElement('div'))
            .find('div')
            .addClass('ee-c')
            .attr('rel', 'ee-' + ix)
            .html('<p>I am #ee-' + ix + '!</p>');
        })
        .click(eeClick);

    },
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
