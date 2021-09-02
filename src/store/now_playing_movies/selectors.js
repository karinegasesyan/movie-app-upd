export const getError = (state) => {
    return state.now_playing_movies.error;
};

export const getLoading = (state) => {
    return state.now_playing_movies.loading
};

export const getNowPlayingMovies = (state) => {
    return state.now_playing_movies.nowPlayingMovies
};