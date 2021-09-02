import axios from '../../movies_axios';

export const types = {
    GET_NOW_PLAYING_MOVIES_START: 'now_playing_movies.GET_NOW_PLAYING_MOVIES_START',
    GET_NOW_PLAYING_MOVIES_SUCCESS: 'now_playing_movies.GET_NOW_PLAYING_MOVIES_SUCCESS',
    GET_NOW_PLAYING_MOVIES_FAILED: 'now_playing_movies.GET_NOW_PLAYING_MOVIES_FAILED'
};

const getNowPlayingMoviesStart = () => {
    return {
        type: types.GET_NOW_PLAYING_MOVIES_START
    }
};

const getNowPlayingMoviesSuccess = (responseData) => {
    return {
        type: types.GET_NOW_PLAYING_MOVIES_SUCCESS,
        responseData: responseData
    }
};

const getNowPlayingMoviesFail = (responseData) => {
    return {
        type: types.GET_NOW_PLAYING_MOVIES_FAILED,
        responseData: responseData
    }
};

export const getNowPlayingMovies = () => {
    return async (dispatch) => {
        dispatch(getNowPlayingMoviesStart());
        let url = '/movie/now_playing?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US&page=1';

        axios
            .get(url)
            .then((response) => {
                dispatch(getNowPlayingMoviesSuccess(JSON.parse(response.request.response)));
            })
            .catch((e) => {
                if (e.response) {
                    dispatch(getNowPlayingMoviesFail(e.response))
                }
            });
    }
};