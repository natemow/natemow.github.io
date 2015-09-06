# [natemow.github.io](http://natemow.github.io/)

[![Build Status](https://travis-ci.org/natemow/natemow.github.io.svg?branch=master)](https://travis-ci.org/natemow/natemow.github.io)

Get set up for local compilation and building:

    # For Jekyll:
    bundle install;

    # For Compass and Bootstrap SASS + Grunt tasks:
    cd script && bundle install && npm install;

Compile stuff locally:

    # Jekyll watcher.
    bundle exec jekyll build --watch;

    # Grunt watcher.
    cd script && grunt;
