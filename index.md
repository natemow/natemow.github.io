---
title: Hello world.
---




        <h2>Contents of this file</h2>
        <ol class="main-menu"></ol>

        <h2>Introduction</h2>
        <p>Hello world. This README documents {{ site.title }}. If you happen to be a <a href="http://en.wikipedia.org/wiki/Programmer">programmer</a> or <a href="http://en.wikipedia.org/wiki/Heavy_metal_music">metal head</a>, we hope you enjoy its design and comedic value; if you are not those things, we hope you still find {{ site.title }} to be a useful tool despite its poor visual appeal.</p>

        <h2>History</h2>
        <p>The {{ site.title }} README first came online in 1999; the project itself was first conceived in 1978. Both the README and project have been intermittently offline since.</p>
        <p>The README was initially created more or less as a programming sandbox, resume and sometimes-blog for a person called Nate Mow. The README may continue to retain some of those features in current and future iterations.</p>
        <p>Over the years, the {{ site.title }} project has slowly evolved in to we are not exactly sure what yet.</p>


        <p>Here is some stuff that {{ site.title }} supports. {{ site.title }} wants you to support this stuff too if you are able. Because the stuff is good and good stuff is not bad.</p>
        <div class="soapbox no-invert">
          <a class="aclu" href="https://www.aclu.org">American Civil Liberties Union</a>
          <a class="fsf-member" href="http://www.fsf.org/register_form?referrer=11793">Free Software Foundation</a>
          <a class="gpl" href="http://www.gnu.org/licenses/quick-guide-gplv3.html">GPL v3</a>
          <hr />
          <a class="children-international" href="http://children.org">Children International</a>
          <a class="drupal-member" href="https://association.drupal.org/membership">Drupal Association</a>
        </div>
        <p>Here is some stuff that {{ site.title }} does not support. {{ site.title }} does not want you to support this stuff either.</p>
        <p># TODO: Add stuff that is not supported.</p>

        <h2>Resources</h2>
        <p>Click the World Wide Web hyperlinks below to learn more about the {{ site.title }} project:</p>
        <ul>
          <li>{{ site.title }}@<a href="https://github.com/{{ site.title }}" class="blink">GitHub</a> &lt;-- CLICK HERE TODAY!!!</li>
          <li>{{ site.title }}@<a href="https://www.drupal.org/u/{{ site.title }}" class="blink">Drupal</a> &lt;-- CLICK HERE TODAY!!!</li>
          <li>{{ site.title }}@<a href="https://www.facebook.com/nate.mow.7" class="blink warning" title="WARNING: YOU ARE ATTEMPTING TO ACCESS A WORLD WIDE WEBSITE THAT MAY BE TRYING TO BRING ABOUT THE DECAY OF CIVILIZATION. ARE YOU SURE YOU WANT TO CONTINUE?">Facebook</a> &lt;-- CLICK HERE TODAY!!!</li>
        </ul>

        <h2>License</h2>
        <p><a href="/LICENSE.md">Free, as in Freedom.</a></p>

        <h2>Changelog</h2>
        <ol class="spaced">
          <li>2014-08-04 @{{ site.title }}: Again with the not sleeping; Sundays are the worst. Cleaned up sans theme and mobile display. Added &lt;blink&gt; tags to improve website design and marketing of link ring referral program.</li>
          <li>2014-08-02 @{{ site.title }}: Added mysterious hex tagline, WebKit-only (per -webkit-filter availability) theme switcher and seizure.</li>
          <li>2014-07-28 @{{ site.title }}: Couldn't sleep, got up way too early and messed around with <a href="http://www.patternify.com">base64 image pattern embeds</a>. Reviewed lorem ipsum generators per README content shortcomings.</li>
          <li>2014-07-27 @{{ site.title }}: Wrote <a class="popover-source" rel="#popover-line-counter" href="#">badass "line numbers" thinger</a> to accompany monospace, the most perfect font ever designed.
            <div class="popover-target" id="popover-line-counter">
              <pre>
// Populate "line numbers" element.
var $main = $('main', context);
var $lines = $('.line-numbers', $main);
var lines = '';
// 18 is the calculated line height set by Bootstrap.
var count = Math.round($main.height() / 18);
for (var i=1; i &lt; (count + 1); i++) {
  lines += i + '&lt;br /&gt;';
}

$lines
  .height($main.height())
  .html(lines);
              </pre>
            </div>

          </li>
          <li>2014-07-26 @{{ site.title }}: Initial build.</li>
        </ol>
        
Projects available:

* [Codeception + CI PHP project generator](codeception-ci-generator)

