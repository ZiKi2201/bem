module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css'},
        { elem: 'less', url: 'less.min.js'},
    ],

    content: {
        tag: 'body',
        content: [
            {
                block: 'Body',
                content: [
                    {
                        block: 'Header',
                        content: [
                            {
                                block: 'FixedHeader',
                                content: [
                                    {
                                        elem: 'Logo',
                                    },
                                    {
                                        block: 'Search',
                                        tag: 'form',

                                        content: [

                                            {
                                                elem: 'Search_music',
                                                tag: 'input',
                                                attrs: {type: 'text', placeholder: 'Поиск музыки...', size: '50'}

                                            },
                                            {
                                                elem: 'Submit',
                                                tag: 'input',

                                                attrs: {type: 'submit', value: ''}

                                            }
                                        ]
                                    },
                                    {
                                        block: 'Profile',
                                        content: [
                                            {
                                                elem: 'Avatar',
                                            },
                                            {
                                                block: 'Select',
                                                tag: 'select',

                                                content: [
                                                    {
                                                        tag: 'option',
                                                        content: 'Профиль'
                                                    },
                                                    {
                                                        tag: 'option',
                                                        content: 'Моя музыка'
                                                    },
                                                    {
                                                        tag: 'option',
                                                        content: 'Выход'
                                                    }
                                                ]
                                            }
                                        ]
                                    }

                                ]
                            }
                        ]
                    },
                    {
                        block: 'LeftDiv',
                        content: [
                            {
                                block: 'Viewed',
                                content: [
                                    {
                                        elem: 'Context',
                                        tag: 'h4',
                                        content: 'Похожие треки'
                                    },
                                    {
                                        tag: 'hr'
                                    }

                                ]
                            },
                            {
                                block: 'MusicDiv_1',
                                content: [
                                    {
                                    elem: 'Album'
                                    },
                                    {
                                        block: 'Music_1',
                                        content: [
                                            {
                                                elem: 'MusicName_1',
                                                tag: 'b'
                                            },
                                            {
                                                elem: 'Singer_1',
                                                content: ''
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        block: 'RightDiv',
                        content: [
                            {
                                block: 'FixedRightDiv',
                                content: [
                                    {
                                        elem: 'Clip',
                                        attrs: { align: 'center'}
                                    },
                                    {
                                        block: 'Text',
                                        content: [
                                            {
                                                elem: 'Context',
                                                tag: 'h4',
                                                content: 'Популярные треки'
                                            },
                                            {
                                                tag: 'hr'
                                            }
                                        ]
                                    }

                                ]

                            }
                        ]
                    }
                ]
            }
        ]
    },
    scripts: [
        { elem: 'js', url: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'},
        { elem: 'js', url: 'https://code.jquery.com/jquery-2.1.3.min.js'},
        { elem: 'js', url: 'js.js'},
        { elem: 'js', url: 'https://apis.google.com/js/client.js?onload=init'}
    ]
    };
