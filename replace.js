$('img').each(function(){
$(this).attr("src","http://i.imgur.com/mILsu7p.png");
});


$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 30000) {
      $('img').each(function(){
$(this).attr("src","http://i.imgur.com/mILsu7p.png");
});
   }
});