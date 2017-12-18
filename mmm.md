![](http://zhaopengblog.u.qiniudn.com/2017/12/18/ae84828dbe1376c6b116c46727911f7d.png)

$.ajax({ 
    url: 'https://api.imgur.com/3/image',
    headers: {
        'Authorization': 'Client-ID YOUR_CLIENT_ID'
    },
    type: 'POST',
    data: {
        'image': 'helloworld.jpg'
    },
    success: function() { console.log('cool'); }
});