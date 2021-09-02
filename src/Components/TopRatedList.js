import React from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as topRatedMoviesSelectors from '../store/top_rated_movies/selectors';
import * as topRatedMoviesActions from '../store/top_rated_movies/actions';



class TopRatedList extends React.Component {
    componentDidMount() {
        this.props.getTopRatedMovies();
    }

    render() {
        let topRatedMovies = this.props.topRatedMovies;

        return (
            <div className="container">
                <div className="wrapper">
                    <Scrollbars>
                        {topRatedMovies.map(function (movie, index) {
                            return <div key={movie.id} className="movie-list"
                                        style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                <div className="movie__list--info">
                                    <p>{movie.title}</p>
                                    <span>{movie.release_date}</span>
                                </div>
                                <div className="fav-icon flex justify-center align-center">
                                    <FontAwesomeIcon icon="star"/>
                                </div>
                                <div className="rating flex justify-center align-center">{movie.vote_average}</div>
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
        error: topRatedMoviesSelectors.getError(state),
        loading: topRatedMoviesSelectors.getLoading(state),
        topRatedMovies: topRatedMoviesSelectors.getTopRatedMovies(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTopRatedMovies: () => dispatch(topRatedMoviesActions.getTopRatedMovies()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedList);

