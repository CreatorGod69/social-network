import { usersAPI } from "../api/Api";
import { updateObjectInArray } from "../utils/object-helpers";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
let TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  usersData: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, usersData: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unFollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setUsers = (users) => ({ type: SET_USERS, users });

export const totalUsersCount = (totalUsersCount) => ({
  type: TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleFollowingInProgress = (isFetching, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id,
});

export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));

    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(response.items));
    dispatch(totalUsersCount(response.totalCount));
  };

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingInProgress(true, userId));

  let response = await apiMethod(userId);
  if (!response.data.resultCode) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};

export const followThunkCreator = (userId) => (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, follow);
};

export const unFollowThunkCreator = (userId) => (dispatch) => {
  let apiMethod = usersAPI.unFollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, unFollow);
};

export default usersReducer;
