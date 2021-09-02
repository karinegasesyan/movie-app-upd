export const getError = (state) => {
    return state.top_rated_movies.error;
};

export const getLoading = (state) => {
    return state.top_rated_movies.loading
};

export const getTopRatedMovies = (state) => {
    return state.top_rated_movies.topRatedMovies
};