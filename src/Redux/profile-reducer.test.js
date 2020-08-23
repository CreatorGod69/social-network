import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
    PostsData: [
        {
            id: 1,
            img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg",
            name: "Vika",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor.",
            data: "10/04/2020"
        },
        {
            id: 2,
            img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg",
            name: "Alex",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?",
            data: "01/03/2020"
        }
    ]
}

test('lenght of posts should be incremented', () => {

    let action = addPostActionCreator('Name', 'we will never die', 'Data')
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(3)
});

test('message of new post should be correct', () => {

    let action = addPostActionCreator('Name', 'we will never die', 'Data')
    let newState = profileReducer(state, action)

    expect(newState.PostsData[2].message).toBe('we will never die')
});

test('after deleting length of message should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(1)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100)
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(2)
});