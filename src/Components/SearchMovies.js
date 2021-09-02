import React from 'react';
import {Scrollbars} from "react-custom-scrollbars";
import SearchInput from './SearchInput';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class SearchMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchMovies: []
        }
    }

    render() {
        let {searchMovies} = this.state;

        return (

            <div className="container">
                <SearchInput
                    onChange={this.onChangeHandler}
                />
                <div className="wrapper">
                    <Scrollbars>
                        {searchMovies.map(function (movie, index) {
                            return(
                                    <div key={movie.id} className="movie-list"
                                            style={{backgroundImage: "url(http://image.tmdb.org/t/p/w780/" + movie.poster_path + ")"}}>
                                    <div className="movie__list--info">
                                        <p>{movie.title}</p>
                                        <span>{movie.release_date}</span>
                                    </div>
                                    <div className="fav-icon flex justify-center align-center">
                                        <FontAwesomeIcon icon="star"/>
                                    </div>
                                    <div className="rating flex justify-center align-center">{movie.vote_average}</div>
                                </div>
                            );
                        })}
                    </Scrollbars>
                </div>
            </div>

        );
    }

    onChangeHandler = (searchValue) => {
        this.setSearchingMovies(searchValue)
    };

    setSearchingMovies = (searchValue) => {
        let BaseMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=1d1620c73f08ab33b4763a7a15fcda29&query='${searchValue}'&page=1`;
        fetch(BaseMovieUrl).then(response => {
            if (!response.ok) {
                throw Error("Failed connection to the API")
            }
            return response
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({searchMovies: (responseJSON.results)});
            })
            .catch((error) => {
                console.log('error');
            });
    }
}

export default SearchMovies;