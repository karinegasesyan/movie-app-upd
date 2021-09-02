import {types} from './actions'

const initialState = {
    error: false,
    loading: false,
    topRatedMovies: []
};

const transfersSearchByReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOP_RATED_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true,
                topRatedMovies: []
            };

        case types.GET_TOP_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                topRatedMovies: action.responseData.results
            };

        case types.GET_TOP_RATED_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                topRatedMovies: []
            };
        default: {
            return state;
        }
    }
};

export default transfersSearchByReducer;