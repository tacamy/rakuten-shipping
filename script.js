(function($) {
  
  var shopName = location.pathname.split('/')[1];
  var shippingUrl = 'http://www.rakuten.co.jp/' + shopName + '/info2.html';

  var $block = $('<div class="cx-rakuten-shipping cx-rakuten-shipping--hidden">');
  var $content = $('<div class="cx-rakuten-shipping__content">');
  var $button = $('<div class="cx-rakuten-shipping__button">送料表示</div>');

  $.get(shippingUrl, function(data) {

    var $data = $(data)
      .find('font:contains("配送について")')
      .parent()
      .nextUntil('hr');

    if ($data.length) {

      $content
        .html($data)
        .appendTo($block);

      $button
        .appendTo($block);

      $block
        .appendTo('body');

      $button.on('click', function() {
        $block.toggleClass('cx-rakuten-shipping--hidden');
      });

    } else {

      return;

    }
  });

})(jQuery);