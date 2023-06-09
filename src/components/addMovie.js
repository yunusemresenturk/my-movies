import React from 'react';
import serialize from 'form-serialize';
import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Burada form submit eventini engelliyoruz.
        var newMovie = serialize(event.target, { hash: true }); // Burada formdaki inputların değerlerini alıyoruz.
        props.onAddMovie(newMovie); // newMovie'yi App.js'e gönderiyoruz. Çünkü app.js parent componentimiz.
        navigate("/"); // Burada form submit edildikten sonra anasayfaya yönlendiriyoruz.
    }

    return (
        <div className="container">
            <form className="mt-5">
                <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"></textarea>
                    </div>
                </div>
                <input
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="Add Movie" />
            </form>
        </div>
    )

}

export default AddMovie;