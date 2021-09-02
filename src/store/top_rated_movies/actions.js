import axios from '../../movies_axios';

export const types = {
    GET_TOP_RATED_MOVIES_START: 'top_rated_movies.GET_TOP_RATED_MOVIES_START',
    GET_TOP_RATED_MOVIES_SUCCESS: 'top_rated_movies.GET_TOP_RATED_MOVIES_SUCCESS',
    GET_TOP_RATED_MOVIES_FAILED: 'top_rated_movies.GET_TOP_RATED_MOVIES_FAILED'
};

const getTopRatedMoviesStart = () => {
    return {
        type: types.GET_TOP_RATED_MOVIES_START
    }
};

const getTopRatedMoviesSuccess = (responseData) => {
    return {
        type: types.GET_TOP_RATED_MOVIES_SUCCESS,
        responseData: responseData
    }
};

const getTopRatedMoviesFail = (responseData) => {
    return {
        type: types.GET_TOP_RATED_MOVIES_FAILED,
        responseData: responseData
    }
};

export const getTopRatedMovies = () => {

    return async (dispatch) => {
        dispatch(getTopRatedMoviesStart());
        let url = '/movie/popular?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US&page=1';

        axios
            .get(url)
            .then((response) => {
                dispatch(getTopRatedMoviesSuccess(JSON.parse(response.request.response)));
            })
            .catch((e) => {
                if (e.response) {
                    dispatch(getTopRatedMoviesFail(e.response))
                }
            });
    }
};