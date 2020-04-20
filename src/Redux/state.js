let store = {
  _state: {
    messages: {
      MessagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: '???' },
        { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Quidem dolorem totam architecto eveniet unde mollitia, qui accusantium culpa?" },
      ],
      DialogsData: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Katy'},
        {id: 3, name: 'Gector'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Andre'},
        {id: 6, name: 'Rick'},
      ],
    },
    profile: {
      PostsData: [
        {id: 1, img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg", name: "Vika", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor.", data: "10/04/2020"},
        {id: 2, img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg", name: "Alex", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?", data: "01/03/2020"},
      ],
      newPostText: ""
    },
  },
  getState () {
    return this._state;
  },
  _renderEntireTree () {
    console.log("State change");
  },
  addPost (namePost, dataPost) {
    let newPost = {
      id: 3,
      name: namePost,
      message: this._state.profile.newPostText,
      data: dataPost,
      img: "https://yt3.ggpht.com/a/AGF-l78VkDGB-FP-TBRgPfcaE42CblHIW5DD21A0-g=s800-c-k-c0xffffffff-no-rj-mo",
    };
    this._state.profile.PostsData.push(newPost);
    this._renderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._renderEntireTree(this._state);
  },
  addMessage (message) {
    let newMessage = {
      messages: message,
    };
    this._state.messages.MessagesData.push(newMessage);
    this._renderEntireTree(this._state);
  },
  subscribe (observer) {
    this._renderEntireTree = observer;
  }
}

window.store = store;

export default store;