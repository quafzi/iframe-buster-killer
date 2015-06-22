iframe-buster-killer
====================

Try to avoid breaking iframed page to break its iframe.

This needs to be run inside the iframe.

Installation
------------

    npm install iframe-buster-killer --save

Usage
-----

Using browserify, you just need to run

    require('iframe-buster-killer')(noContentUrl);

noContentUrl needs to be some URL, responding with HTTP status 204 (no content),
so the browser will stay on the current URL.
