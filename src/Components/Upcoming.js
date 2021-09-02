import React from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as upcomingMoviesSelectors from "../store/upcoming/selectors";
import * as upcomingMoviesActions from "../store/upcoming/actions";

class Upcoming extends React.Component{


    componentDidMount() {
        this.props.getUpcomingMovies();
    }

    render() {

        let upcomingMovies = this.props.upcomingMovies;
        return(
            <div className="container">
                <div  className="wrapper">
                    <Scrollbars>
                        { upcomingMovies.map(function( movie, index ){
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
        loading: upcomingMoviesSelectors.getLoading(state),
        error: upcomingMoviesSelectors.getError(state),
        upcomingMovies: upcomingMoviesSelectors.getUpcomingMovies(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUpcomingMovies: () => dispatch(upcomingMoviesActions.getUpcomingMovies()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
