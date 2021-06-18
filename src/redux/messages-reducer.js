const SEND_MESSAGE = "SEND-MESSAGE";

let id = (min, max) => Math.floor(Math.random() * max) + min;

let initialState = {
  MessagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "???" },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Quidem dolorem totam architecto eveniet unde mollitia, qui accusantium culpa?",
    },
  ],
  DialogsData: [
    { id: 1, name: "Maria Berestovaya" },
    { id: 2, name: "Katy Berestovaya" },
    { id: 3, name: "Gector Bredbery" },
    { id: 4, name: "Vasya Ivanov" },
    { id: 5, name: "Andre Manyel" },
    { id: 6, name: "Rick and Mortyt" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        MessagesData: [
          ...state.MessagesData,
          { id: id(1, 100), message: action.message },
        ],
      };
    default:
      return state;
  }
};

export const addMessagesActionCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default messagesReducer;
