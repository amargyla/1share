var api_url1 = 'https://www.seoclerks.com/api?type=inlinead&s=&aff=91550&by=&mp=&p=1&c=0&ul=1&am=1&ins=0&g=0&sub=0&os=0&sp=0&oby=&oh=&f=singlehtml';
$.get(api_url1, function(data) {$('#ad1').html(data);});

var api_url2 = 'https://www.seoclerks.com/api?type=inlinead&s=&aff=91550&by=&mp=2&p=&c=0&ul=1&am=1&ins=0&g=0&sub=0&os=0&sp=0&oby=&oh=&f=singlehtml';
$.get(api_url2, function() {$('#ad2').text();});
