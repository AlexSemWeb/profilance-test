const defaultState = {
  news: [],
};

export const SET_NEWS = "SET_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const APPROVE_NEWS = "APPROVE_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";

export default function newsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.payload };
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case APPROVE_NEWS:
      let changedNews = state.news.map((item) =>
        item.time === action.payload ? { ...item, isApproved: true } : item
      );
      return { ...state, news: changedNews };
    case DELETE_NEWS:
      let filteredNews = state.news.filter((item) =>
        item.time === action.payload ? false : true
      );
      return { ...state, news: filteredNews };
    default:
      return state;
  }
}

export const setNews = (payload) => ({ type: SET_NEWS, payload });
export const addNews = (payload) => ({ type: ADD_NEWS, payload });
export const approveNews = (payload) => ({ type: APPROVE_NEWS, payload });
export const deleteNews = (payload) => ({ type: DELETE_NEWS, payload });
