import React from 'react';
import { Route, Switch} from "react-router-dom";
import  TopRatedList  from './TopRatedList';
import  LatestMovies from './LatestMovies';
import  Upcoming from './Upcoming';
import  NowPlaying from './NowPlaying';
import SearchMovies from './SearchMovies';
import Favorites from './Favorites';
import Login from './Login';

const ROUTING = <Switch>
                    <Route exact path="/top-rated" component={ TopRatedList } />
                    <Route path="/latest" component={ LatestMovies } />
                    <Route path="/upcoming" component={ Upcoming } />
                    <Route path="/now-playing" component={ NowPlaying }/>
                    <Route path="/search" component={ SearchMovies }/>
                    <Route path="/favorites" component={ Favorites } />
                    <Route path="/login" component={ Login } />
                </Switch>

export default ROUTING;                