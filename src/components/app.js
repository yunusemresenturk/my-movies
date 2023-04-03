import React from 'react';
import SearchBar from './searchBar';
import MovieList from './movieList';
import axios from 'axios';
class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    }

    /* async componentDidMount() {
        const baseURL = "http://localhost:3002/movies"; // Burada api'ye istek atacağımız url'i tanımlıyoruz.
        const response = await fetch(baseURL); // Burada fetch ile api'ye istek atıyoruz. fetch asnc olarak bize network request döndürür.
        console.log(response);
        const data = await response.json(); // Burada response'u json formatına çeviriyoruz.
        console.log(data);
        this.setState({movies: data}) // Burada movies state'ini güncelliyoruz.
    } */

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies"); // Burada axios ile api'ye istek atıyoruz. axios asnc olarak bize network request döndürür.
        console.log(response);
        this.setState({ movies: response.data }) // Burada movies state'ini güncelliyoruz.
    }

    // deleteMovie = (movie) => { // Burada movie parametresi ile seçilen movie'yi alıyoruz.
    //     const newMovieList = this.state.movies.filter( // Burada movies array'ini filtreliyoruz ve seçilen movie'yi çıkartıyoruz.
    //         m => m.id !== movie.id // Burada seçilen movie'yi çıkartıyoruz.
    //     );
    //     //Eğer elimizde bir film bilgisi olmasaydın bu daha mantıklı olurdu.
    //     /* this.setState({ // Burada movies array'ini güncelliyoruz.
    //         movies: newMovieList
    //     }); */
    //     //Varolan set statimizi düzenleyeceğimiz için aşağıdaki şekilde de yazabiliriz.
    //     this.setState(state => ({// Burada movies array'ini güncelliyoruz.
    //         movies: newMovieList
    //     }));
    // }

    //FETCH APİSİ İLE YAPILAN DELETE İŞLEMİ
    /*  deleteMovie = async (movie) => { // Burada movie parametresi ile seçilen movie'yi alıyoruz.
         const baseURL = `http://localhost:3002/movies/${movie.id}`; // Burada api'ye istek atacağımız url'i tanımlıyoruz.
         await fetch(baseURL, { // Burada fetch ile api'ye istek atıyoruz. fetch asnc olarak bize network request döndürür.
             method: "DELETE" // Burada api'ye istek atarken hangi methodu kullanacağımızı belirtiyoruz.
         });
         const newMovieList = this.state.movies.filter( // Burada movies array'ini filtreliyoruz ve seçilen movie'yi çıkartıyoruz.
             m => m.id !== movie.id // Burada seçilen movie'yi çıkartıyoruz.
         );
         this.setState({ // Burada movies array'ini güncelliyoruz.
             movies: newMovieList
         });
     } */

    deleteMovie = async (movie) => { // Burada movie parametresi ile seçilen movie'yi alıyoruz.
        axios.delete(`http://localhost:3002/movies/${movie.id}`); // Burada axios ile api'ye istek atıyoruz. axios asnc olarak bize network request döndürür.
        const newMovieList = this.state.movies.filter( // Burada movies array'ini filtreliyoruz ve seçilen movie'yi çıkartıyoruz.
            m => m.id !== movie.id // Burada seçilen movie'yi çıkartıyoruz.
        );
        this.setState({ // Burada movies array'ini güncelliyoruz.
            movies: newMovieList
        });
    }

        searchMovie = (event) => { // Burada event parametresi ile inputtan gelen değeri alıyoruz.
            this.setState({ // Burada searchQuery state'ini güncelliyoruz.
                searchQuery: event.target.value // Burada inputtan gelen değeri alıyoruz.
            })
        }

        render() {  //Yalnızca içeriğin gösterilmesi için kullanılmasını istiyoruz

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