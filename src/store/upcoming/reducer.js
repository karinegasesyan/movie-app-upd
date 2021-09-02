import {types} from './actions'

const initialState = {
    error: false,
    loading: false,
    upcomingMovies: []
};

const transfersSearchByReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_UPCOMING_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true,
               upcomingMovies: []
            };

        case types.GET_UPCOMING_MOVIES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                upcomingMovies: action.responseData.results
            };

        case types.GET_UPCOMING_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                upcomingMovies: []
            };
        default: {
            return state;
        }
    }
};

export default transfersSearchByReducer;