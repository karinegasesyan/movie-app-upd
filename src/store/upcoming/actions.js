import axios from '../../movies_axios';

export const types = {
    GET_UPCOMING_MOVIES_START: 'upcoming_movies.GET_UPCOMING_MOVIES_START',
    GET_UPCOMING_MOVIES_SUCCESS: 'upcoming_movies.GET_UPCOMING_MOVIES_SUCCESS',
    GET_UPCOMING_MOVIES_FAILED: 'upcoming_movies.GET_UPCOMING_MOVIES_FAILED'
};

const getUpcomingMoviesStart = () => {
    return {
        type: types.GET_UPCOMING_MOVIES_START
    }
};

const getUpcomingMoviesSuccess = (responseData) => {
    return {
        type: types.GET_UPCOMING_MOVIES_SUCCESS,
        responseData: responseData
    }
};

const getUpcomingMoviesFail = (responseData) => {
    return {
        type: types.GET_UPCOMING_MOVIES_FAILED,
        responseData: responseData
    }
};

export const getUpcomingMovies = () => {

    return async (dispatch) => {
        dispatch(getUpcomingMoviesStart());
        let url = '/movie/upcoming?api_key=1d1620c73f08ab33b4763a7a15fcda29&language=en-US&page=1';

        axios
            .get(url)
            .then((response) => {
                dispatch(getUpcomingMoviesSuccess(JSON.parse(response.request.response)));
            })
            .catch((e) => {
                if (e.response) {
                    dispatch(getUpcomingMoviesFail(e.response))
                }
            });
    }
};