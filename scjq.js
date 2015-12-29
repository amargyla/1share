var api_url = 'https://www.seoclerks.com/api?type=inlinead&s=&aff=1&by=&c=0&ul=1&am=1&g=0&sub=0&os=0&sp=0&oby=&oh=&f=singlehtml';
$.get(api_url, function(data) {
  $('#ad1').html(data);
});
