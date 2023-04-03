import React from "react";
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
        return  (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-10">
                        <input 

                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control" 
                            placeholder="Seach a movie" 
                        />
                    </div>
                    <div className="col-2">
                        <button type="button" 
                                className="btn btn-md btn-danger"
                                style={{float:'right'}}>Add Movie
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;
