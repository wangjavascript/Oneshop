import Mock from 'mockjs'



Mock.mock('/list', 'get', function () {
    return Mock.mock({
        'top|5': [
            {
                "name": "@cname",
                'left|10': [{
                    'title': '@cname',
                    'list|10': [{
                        'id|+1': 1,
                        'name': '@cname', 'title': '@ctitle',
                        'url': 'https://dummyimage.com/50x50&text=%E4%B8%AD%E7%A7%8B',
                        'flag': false
                    }]
                }],
            }
        ]

        //  'left|10': [{
        //     'title': '@cname',
        //     'list|10': [{
        //         'id|+1': 1,
        //         'name': '@cname', 'title': '@ctitle',
        //         'url': 'https://dummyimage.com/50x50&text=%E4%B8%AD%E7%A7%8B',
        //         'flag': false
        //     }]
        // }],
    })
})