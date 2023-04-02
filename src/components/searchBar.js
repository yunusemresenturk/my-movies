import React from "react";

class SearchBar extends React.Component {

    /* //SearchBara gelecek her yeni girdiyi update edecek state. 
    state = {
        searchQuery: ""
    } */

    handleFormSubmit = (event) => {
        event.preventDefault(); // Burada form submit eventini engelliyoruz.
        console.log(this.state.searchQuery); // Burada state'i console'a yazdırıyoruz.
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        onChange={this.props.searchMovieProp} /* Burada onChange eventi ile her yeni girdiyi state'e update ediyoruz */
                        type="text" className="form-control" 
                        placeholder="Search a movie" 
                       /*  value={this.state.searchQuery} */ /* Burada value ile state'i inputa bağlıyoruz. */
                        /> .
                    </div>
                </div>
            </form>
        );
    }
    }

    export default SearchBar;
