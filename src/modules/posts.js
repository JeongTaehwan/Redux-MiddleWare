import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// 여러개 불러옴
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
const GET_POSTS_ERROR = 'GET_POST_ERROR';

// 하나만 불러옴
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// 초깃값
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
};

// reducer
export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading()
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload)
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.payload)
            };
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading()
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.post)
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.error)
            };
        default:
            return state;
    }
};
