import React from 'react';
import {connect} from "react-redux";
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as latestMoviesSelectors from "../store/latest_movies/selectors";
import * as latestMoviesActions from "../store/latest_movies/actions";



class LatestMovies extends React.Component {

    componentDidMount() {
        this.props.getLatestMovie();
    }

    render() {
        let latestMovies = this.props.latestMovies;

        return (
            <div className="container">
                <div className="wrapper">
                    <Scrollbars>
                        {latestMovies.map(function (movie, index) {
                                return <div key={movie.id} className="movie-list"
                                            style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                    <div className="movie__list--info">
                                        <p>{movie.title}</p>
                                        <span>{movie.release_date}</span>
                                    </div>
                                    <div className="fav-icon flex justify-center align-center">
                                        <FontAwesomeIcon icon="star"/>
                                    </div>
                                </div>;
                            })
                        }
                    </Scrollbars>
                </div>
            </div>

        )
    }
}



const mapStateToProps = (state) => {
    return {
        error: latestMoviesSelectors.getError(state),
        loading: latestMoviesSelectors.getLoading(state),
        latestMovies: latestMoviesSelectors.getLatestMovies(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLatestMovie: () => dispatch(latestMoviesActions.getLatestMovies()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);
