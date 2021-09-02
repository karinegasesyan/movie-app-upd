import React from 'react';
import {connect} from "react-redux";
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as nowPlayingMoviesSelectors from "../store/now_playing_movies/selectors";
import * as nowPlayingMoviesActions from "../store/now_playing_movies/actions";



class NowPlaying extends React.Component {
    componentDidMount() {
        this.props.getNowPlayingMovies();
    }

    render() {
        let nowPlayingMovies = this.props.nowPlayingMovies;

        return(
            <div className="container">
                <div  className="wrapper">
                    <Scrollbars>
                        {nowPlayingMovies.map(function( movie, index ){
                            return  <div key={ movie.id } className="movie-list" style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                <div className="movie__list--info">
                                    <p>{ movie.title }</p>
                                    <span>{ movie.release_date }</span>
                                </div>
                                <div className="fav-icon flex justify-center align-center">
                                    <FontAwesomeIcon icon="star" />
                                </div>
                                <div className="rating flex justify-center align-center">{ movie.vote_average }</div>
                            </div>;
                        })}
                    </Scrollbars>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        error: nowPlayingMoviesSelectors.getError(state),
        loading: nowPlayingMoviesSelectors.getLoading(state),
        nowPlayingMovies: nowPlayingMoviesSelectors.getNowPlayingMovies(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNowPlayingMovies: () => dispatch(nowPlayingMoviesActions.getNowPlayingMovies()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);