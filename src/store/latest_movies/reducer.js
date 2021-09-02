import {types} from './actions'

const initialState = {
    error: false,
    loading: false,
    latestMovies: {}
};

const transfersSearchByReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LATEST_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true,
                latestMovies: []
            };

        case types.GET_LATEST_MOVIES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                latestMovies: action.responseData
            };

        case types.GET_LATEST_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                latestMovies: []
            };
        default: {
            return state;
        }
    }
};

export default transfersSearchByReducer;