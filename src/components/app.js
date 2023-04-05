import React from 'react';
import SearchBar from './searchBar';
import MovieList from './movieList';
import axios from 'axios';
import AddMovie from './addMovie';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
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
        // console.log(response);
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

    //DDELETE MOVİE
    deleteMovie = async (movie) => { // Burada movie parametresi ile seçilen movie'yi alıyoruz.
        axios.delete(`http://localhost:3002/movies/${movie.id}`); // Burada axios ile api'ye istek atıyoruz. axios asnc olarak bize network request döndürür.
        const newMovieList = this.state.movies.filter( // Burada movies array'ini filtreliyoruz ve seçilen movie'yi çıkartıyoruz.
            m => m.id !== movie.id // Burada seçilen movie'yi çıkartıyoruz.
        );
        this.setState({ // Burada movies array'ini güncelliyoruz.
            movies: newMovieList
        });
    }

    //SEARCH MOVİE
    searchMovie = (event) => { // Burada event parametresi ile inputtan gelen değeri alıyoruz.
        this.setState({ // Burada searchQuery state'ini güncelliyoruz.
            searchQuery: event.target.value // Burada inputtan gelen değeri alıyoruz.
        })
    }

    //ADD MOVİE
    addMovie = async (movie) => { // Burada movie parametresi ile yeni movie'yi alıyoruz.
        await axios.post(`http://localhost:3002/movies/`, movie); // Burada axios ile api'ye istek atıyoruz. axios asnc olarak bize network request döndürür.
        this.setState(state => ({ // Burada movies array'ini güncelliyoruz.
            movies: state.movies.concat([movie]) // Burada movies array'ine yeni movie'yi ekliyoruz.
        }));
    }

    render() {  //Yalnızca içeriğin gösterilmesi için kullanılmasını istiyoruz

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                const movieName = movie.name || ''; // default to empty string if `movie.name` is undefined
                const searchQuery = this.state.searchQuery || ''; // default to empty string if `this.state.searchQuery` is undefined
                return movieName.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
            }
        );

        return (
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchMovieProp={this.searchMovie} />
                                    </div>
                                </div>
                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp={this.deleteMovie}
                                />
                            </React.Fragment>
                        }>
                        </Route>


                        <Route path="/add" exact element={(
                            <AddMovie // Burada AddMovie component'ine onAddMovie prop'una addMovie fonksiyonunu tanımlıyoruz.

                                onAddMovie={(newMovie) => { // Burada onAddMovie prop'una yeni bir fonksiyon tanımlıyoruz.
                                    this.addMovie(newMovie) // Burada addMovie fonksiyonunu çağırıyoruz.
                                }
                                }

                            />

                        )} >
                        </Route>

                    </Routes>
                </div>
            </Router>
        )

    }
}
export default App;