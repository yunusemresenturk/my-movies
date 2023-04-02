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
                "image": "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
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
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>
                <MovieList />
            </div>
        );
    }
}

export default App;