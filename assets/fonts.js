

  var font_family = 'Lato';
  var font_family_title = 'Montserrat';

  
    font_family = "Source Sans Pro";
  

  
    font_family_title = "Roboto";
  

  WebFontConfig = {
    google: { families: [
      font_family + ":400,400i,700",
      font_family_title + ":400,700,900",
    ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


