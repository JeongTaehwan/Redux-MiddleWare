import * as postsAPI from '../api/posts';

// 여러개 불러옴
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
const GET_POSTS_ERROR = 'GET_POST_ERROR';

// 하나만 불러옴
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async dispatch => {
    // 요청이 시작됨
    dispatch({ type: GET_POSTS });
    // API를 호출
    try {
        const posts = await postsAPI.getPosts();
        // 성공했을 때
        dispatch({ type: GET_POSTS_SUCCESS, posts });
    } catch (e) {
        // 실패했을 때
        dispatch({ type: GET_POSTS_ERROR, error: e });
    }
}

export const getPost = (id) => async dispatch => {
    // 요청이 시작됨
    dispatch({ type: GET_POST });
    // API를 호출
    try {
        const post = await postsAPI.getPosts(id);
        // 성공했을 때
        dispatch({ type: GET_POST_SUCCESS, post });
    } catch (e) {
        // 실패했을 때
        dispatch({ type: GET_POST_ERROR, error: e });
    }
}