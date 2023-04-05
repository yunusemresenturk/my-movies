import React from "react";
import { Link } from 'react-router-dom';
class SearchBar extends React.Component {

    /* //SearchBara gelecek her yeni girdiyi update edecek state. 
    state = {
        searchQuery: ""
    } */

    handleFormSubmit = (event) => {
        event.preventDefault(); // Burada form submit eventini engelliyoruz.
/*         console.log(this.state.searchQuery); // Burada state'i console'a yazdırıyoruz.
 */    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="searchQuery"
                        className="form-control"
                        placeholder="Search movies"
                    />
                    <div className="input-group-append">

                        <Link
                            to="/add"
                            type="button"
                            className="btn btn-md btn-danger">
                            Add Movie
                        </Link>

                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;
