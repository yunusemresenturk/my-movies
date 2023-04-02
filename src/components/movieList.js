import React from "react";

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Shawshank Redemption</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">9.1</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Godfather</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-danger">Edit</button>
                                <h2><span className="badge badge-info">9.2</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Dark Knight</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-danger">Edit</button>
                                <h2><span className="badge badge-info">9.2</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;