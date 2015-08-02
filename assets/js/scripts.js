
(function ($) {
  jQuery.browser = {};
  jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());

  var scrollMain = function(top) {
    $('html, body').animate({
      scrollTop: top
    }, 500);
  };

  theme = {
    attach: function(context, settings) {

      this.bindMainMenu(context, settings);
      this.formatLists(context, settings);
      this.setLineNumbers(context, settings);
      this.switchTheme(context, settings);
      this.bindContent(context, settings);
      this.preLoad(context, settings);

    },
    preLoad: function(context, settings) {

      // this.doSeize(context, settings);

    },
    bindMainMenu: function(context, settings) {

      var $menu = $('main section ol.main-menu', context);

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

      $('a[href*=#]', $menu)
        .click(function(evt) {
          evt.preventDefault();
          scrollMain($(this.hash).offset().top - $('main', context).offset().top);
        });

      // "Top" scrolly for homepage.
      if (window.location.pathname === '/') {
        $('header a.logo', context)
          .click(function(evt) {
            evt.preventDefault();
            scrollMain(0);
          });
      }

    },
    formatLists: function(context, settings) {

      $.each($('main section ul li, main section ol li', context), function() {
        var $self = $(this);
        var $bullet = $(document.createElement('span'))
          .addClass('bullet pull-left')
          .height($self.height())
          .text('*');

        $self
          .prepend($bullet);
      });

    },
    setLineNumbers: function(context, settings) {

      // Populate "line numbers" element.
      var $main = $('main', context);
      var $lines = $('.line-numbers', $main);
      var lines = '';
      // 18 is the calculated line height set by Bootstrap.
      var count = Math.round($main.height() / 18);
      for (var i=1; i < (count + 1); i++) {
        lines += i + '<br />';
      }

      $lines
        .height($main.height())
        .html(lines);

    },
    switchTheme: function(context, settings) {
      if ($.browser.webkit) {

        var setActive = function(context, settings) {
          $('header .theme a', context)
            .removeClass('active')
            .each(function() {
              var $self = $(this);
              $self.toggleClass(($('html').hasClass($self.prop('class')) ? 'active' : ''))
            });
        };

        var getSeizure = function() {

          var seizure = theme.seizure;

          if (!seizure) {
            var seizure = setInterval(function() {
              setTimeout(function() {
                $('html').toggleClass('invert');
              }, settings.theme.seizureInterval);
            }, settings.theme.seizureInterval);

            theme.seizure = seizure;
          }

          return seizure;
        };

        setActive(context, settings);

        $('header .theme a', context)
          .click(function(evt) {
            evt.preventDefault();

            var $self = $(this);
            var $class = $self.prop('class');
            var $html = $self
              .parents('html');

            if ($self.hasClass('default') || $self.hasClass('invert')) {
              clearInterval(theme.seizure);
              theme.seizure = null;

              $html
                .removeClass('seizure invert');
              $('.messages', context)
                .hide();
            }

            // Add this back to header's div.theme to bring back mono|sans:
            // --font=[<a href="#" class="mono">mono</a>|<a href="#" class="sans">sans</a>]
            if ($self.hasClass('mono')) {
              $html.removeClass('sans'); }
            if ($self.hasClass('sans')) {
              $html.removeClass('mono'); }
            if ($self.hasClass('default')) {
              $html.removeClass('invert seizure'); }
            if ($self.hasClass('invert')) {
              $html.removeClass('default seizure'); }
            if ($self.hasClass('seizure')) {
              $html.removeClass('default invert');

              var seizure = getSeizure();

              $('.messages', context)
                .fadeIn(settings.theme.seizureInterval * 4)
                .fadeOut(4000);
            }

            $html
              .addClass($class)
              .removeClass('active');

            setActive(context, settings);
          });

        return;
      }

      $('header .theme').hide();
    },
    bindContent: function(context, settings) {

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

    }
  };

  var context = $('body');
  theme.attach(context, settings);

})(jQuery);
