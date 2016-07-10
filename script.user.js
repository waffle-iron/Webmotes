// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      1.04
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

// 1.00: Functions now working! Added facebook one too. Version variable too
// 1.00.1: Fixed version number
// 1.01: Bigger Facebook icon, fixed backwards rainbow
// 1.02: Fixed version Webmote issue probably
// 1.02.1: Fixed version number (again!)
// 1.03: Fixed "==" operator
// 1.03.1: Fixed var version
// 1.03.2: Now a string
// 1.04: Version numbers are now images

var version = "1.04"

function applyWebmote(code, url) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<img src='" + url + "'>");
  });
} 

applyWebmote("minecraft-diamond", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Grid_Diamant.png");
applyWebmote("facebook", "http://screenshots.en.sftcdn.net/en/scrn/69665000/69665708/facebook-chat-notification-02-32x32.png");
applyWebmote("itworks", "http://i.imgur.com/BjaY6nR.png")
applyWebmote("itworks-dark", "http://i.imgur.com/2u9WdEk.png")
applyWebmote("flipped-smile", "http://i.imgur.com/OuFD0NS.png")
applyWebmote("frown", "http://i.imgur.com/h206D7y.png")
applyWebmote("animationtest", "https://i.imgur.com/NhxgpdA.gif")
applyWebmote("yourversion", "https://github.com/IAP-Reloaded/Webmotes/blob/master/1.04%20Version%20Number.png?raw=true") // Make sure to update this!
applyWebmote("billcipherwheel", "https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg")
applyWebmote("billcipherdeal", "https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg")
applyWebmote("rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png")
applyWebmote("backwards-rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png")
applyWebmote("itworks-white", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png")
