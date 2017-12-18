![](http://zhaopengblog.u.qiniudn.com/2017/12/18/ae84828dbe1376c6b116c46727911f7d.png)

$.ajax({ 
    url: 'https://api.imgur.com/3/image',
    headers: {
        'Authorization': 'Client-ID b7f2b620ed31f19'
    },
    type: 'POST',
    data: {
        'image': 'helloworld.jpg'
    },
    success: function() { console.log('cool'); }
});

b7f2b620ed31f19

3152dd770152b290a46371dd526081e0e1eeda56