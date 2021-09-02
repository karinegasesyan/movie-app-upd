export const getError = (state) => {
    return state.latest_movies.error;
};

export const getLoading = (state) => {
    return state.latest_movies.loading
};

export const getLatestMovies = (state) => {
    return [state.latest_movies.latestMovies]
};