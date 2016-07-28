var version = "2";
var subversion = "1";
var fullversion = version + "." + subversion;

function applyWebmote(code, image, link) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<a href='" + link + "'><img src='" + image + "'></a>");
  });
} 

applyWebmote("dog", "https://github.com/IAP-Reloaded/Webmotes/blob/master/Peanut%20Sad%20Webmote.png?raw=true", "")
applyWebmote("googlemaps", "https://showtheway.io/img/showtheway-google-maps.png", "https://maps.google.com");
applyWebmote("google", "https://addons.cdn.mozilla.net/user-media/addon_icons/613/613484-32.png?modified=1441898710", "https://www.google.com");
applyWebmote("askubuntu", "http://cdn.sstatic.net/Sites/askubuntu/img/favicon.ico?v=4f32ecc8f43d", "https://www.askubuntu.com");
applyWebmote("stackoverflow", "http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d", "https://www.stackoverflow.com");
applyWebmote("minecraft-diamond", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Grid_Diamant.png", "");
applyWebmote("facebook", "http://screenshots.en.sftcdn.net/en/scrn/69665000/69665708/facebook-chat-notification-02-32x32.png", "");
applyWebmote("itworks", "http://i.imgur.com/BjaY6nR.png", "");
applyWebmote("itworks-dark", "http://i.imgur.com/2u9WdEk.png", "");
applyWebmote("flipped-smile", "http://i.imgur.com/OuFD0NS.png", "");
applyWebmote("frown", "http://i.imgur.com/h206D7y.png", "");
applyWebmote("animationtest", "https://i.imgur.com/NhxgpdA.gif", "");
applyWebmote("billcipherwheel", "https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg", "");
applyWebmote("billcipherdeal", "https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg", "");
applyWebmote("rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png", "");
applyWebmote("backwards-rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png", "");
applyWebmote("itworks-white", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png", "");

  var replace = "[version]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, fullversion);
  });