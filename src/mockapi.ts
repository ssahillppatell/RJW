export default [
    {
        title: 'Home - A',
        cssSelector: '.a',
        content: 'Here we start and the first one',
        contentType: {
            type: 'TEXT',
            uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
        },
        nextTarget: {
            title: 'Home - B',
            cssSelector: '.b',
            content: 'Second is here',
            contentType: {
                type: 'TEXT',
                uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
            },
            nextTarget: {
                title: 'Home - C',
                cssSelector: '.c',
                content: 'This is third',
                contentType: {
                    type: 'TEXT',
                    uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
                },
                nextTarget: null,
                uuid: '9d466c05-cf72-11eb-8993-129680202b93',
            },
            uuid: '9d4671a4-cf72-11eb-8993-129680202b93',
        },
        uuid: '9d467392-cf72-11eb-8993-129680202b93',
    },
    {
        title: 'Home - B',
        cssSelector: '.b',
        content: 'Second is here',
        contentType: {
            type: 'TEXT',
            uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
        },
        nextTarget: {
            title: 'Home - C',
            cssSelector: '.c',
            content: 'This is third',
            contentType: {
                type: 'TEXT',
                uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
            },
            nextTarget: null,
            uuid: '9d466c05-cf72-11eb-8993-129680202b93',
        },
        uuid: '9d4671a4-cf72-11eb-8993-129680202b93',
    },
    {
        title: 'Home - C',
        cssSelector: '.c',
        content: 'This is third',
        contentType: {
            type: 'TEXT',
            uuid: 'ce5f44e7-cf71-11eb-8993-129680202b93',
        },
        nextTarget: null,
        uuid: '9d466c05-cf72-11eb-8993-129680202b93',
    },
];
