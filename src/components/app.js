import React from 'react';
import SearchBar from './searchBar';
import MovieList from './movieList';

class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "The Shawshank Redemption",
                "rating": 9.2,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "image": "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg"
            },
            {
                "id": 2,
                "name": "The Godfather",
                "rating": 9.1,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "image": "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg"
            },
            {
                "id": 3,
                "name": "The Dark Knight",
                "rating": 8.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            }
        ],
        searchQuery: ""
    }


    deleteMovie = (movie) => { // Burada movie parametresi ile seçilen movie'yi alıyoruz.
        const newMovieList = this.state.movies.filter( // Burada movies array'ini filtreliyoruz ve seçilen movie'yi çıkartıyoruz.
            m => m.id !== movie.id // Burada seçilen movie'yi çıkartıyoruz.
        );
        //Eğer elimizde bir film bilgisi olmasaydın bu daha mantıklı olurdu.
        /* this.setState({ // Burada movies array'ini güncelliyoruz.
            movies: newMovieList
        }); */
        //Varolan set statimizi düzenleyeceğimiz için aşağıdaki şekilde de yazabiliriz.
        this.setState(state => ({// Burada movies array'ini güncelliyoruz.
            movies: newMovieList
        }));
    }

    searchMovie = (event) => { // Burada event parametresi ile inputtan gelen değeri alıyoruz.
        this.setState({ // Burada searchQuery state'ini güncelliyoruz.
            searchQuery: event.target.value // Burada inputtan gelen değeri alıyoruz.
        })
    }   
    
        render() {

            let filteredMovies = this.state.movies.filter( // Burada movies array'ini filtreliyoruz.
                (movie) => { // Burada movies array'ini map ediyoruz.
                    return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1; // Burada inputtan gelen değeri movies array'inde arıyoruz.
                }
            )

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SearchBar 
                            searchMovieProp={this.searchMovie} // Buradaki searchMovie fonksiyonunu props olarak gönderiyoruz searchbar'a.
                            />
                        </div>
                    </div>
                    <MovieList
                        /* movies={this.state.movies} */ // Buradaki moviesleri props olarak gönderiyoruz movieliste.
                        movies={filteredMovies}
                        deleteMovieProp={this.deleteMovie} // Buradaki deleteMovie fonksiyonunu props olarak gönderiyoruz movieliste.
                    />
                </div>
            );
        }
    }

export default App;