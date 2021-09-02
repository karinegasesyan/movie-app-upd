import {types} from './actions'

const initialState = {
    error: false,
    loading: false,
    nowPlayingMovies: []
};

const transfersSearchByReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NOW_PLAYING_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true,
                nowPlayingMovies: []
            };

        case types.GET_NOW_PLAYING_MOVIES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                nowPlayingMovies: action.responseData.results
            };

        case types.GET_NOW_PLAYING_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                nowPlayingMovies: []
            };
        default: {
            return state;
        }
    }
};

export default transfersSearchByReducer;