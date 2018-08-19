(function($) {
  'use strict';
  jQuery(document).ready(function($) {
    var $el = $('.instagram-sidebar');
    if ($el[0]) {
      $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        type: 'GET',
        dataType: 'jsonp',
        contentType: 'application/json',
        cache: false,
        data: {
          access_token: '2221982477.1677ed0.9790352418734ce3b08a26ca08ecd4f4'
        },
        success: function(res) {
          var is_json = false;
          try {
            if (res.meta.code == 200)
              is_json = true;
          } catch (ex) {
            is_json = false;
          }

          if (is_json) {
            var html = '';

            var data = res.data;
            $.each(data, function(index, element){
              if(index >= 9 ) {
                return 0;
              }

              html += '<div class="item"><a href="'
                + element.link+'" target="_blank"><img src="'
                + element.images.low_resolution.url
                +'" alt="Instagram"></a></div>';
            });

            $el.html(html);
          }
        }
      });
    }
  });
})(jQuery)
