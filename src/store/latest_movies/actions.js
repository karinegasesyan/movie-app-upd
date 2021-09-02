import axios from '../../movies_axios';

export const types = {
    GET_LATEST_MOVIES_START: 'latest_movies.GET_LATEST_MOVIES_START',
    GET_LATEST_MOVIES_SUCCESS: 'latest_movies.GET_LATEST_MOVIES_SUCCESS',
    GET_LATEST_MOVIES_FAILED: 'latest_movies.GET_LATEST_MOVIES_FAILED'
};

const getLatestMoviesStart = () => {
    return {
        type: types.GET_LATEST_MOVIES_START
    }
};

const getLatestMoviesSuccess = (responseData) => {
    return {
        type: types.GET_LATEST_MOVIES_SUCCESS,
        responseData: responseData
    }
};

const getLatestMoviesFail = (responseData) => {
    return {
        type: types.GET_LATEST_MOVIES_FAILED,
        responseData: responseData
    }
};

export const getLatestMovies = () => {
    return async (dispatch) => {
        dispatch(getLatestMoviesStart());
        let url = '/movie/latest?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US';

        axios
            .get(url)
            .then((response) => {
                dispatch(getLatestMoviesSuccess(JSON.parse(response.request.response)));
            })
            .catch((e) => {
                if (e.response) {
                    dispatch(getLatestMoviesFail(e.response))
                }
            });
    }
};