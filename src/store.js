import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import top_rated_movies from './store/top_rated_movies/reducer';
import latest_movies from './store/latest_movies/reducer';
import upcoming_movies from './store/upcoming/reducer';
import now_playing_movies from './store/now_playing_movies/reducer';

const rootReducer = combineReducers({
    top_rated_movies: top_rated_movies,
    latest_movies: latest_movies,
    upcoming_movies: upcoming_movies,
    now_playing_movies: now_playing_movies,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;