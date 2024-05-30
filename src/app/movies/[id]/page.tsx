import { getMovieDetails, getSimilarMovies } from "../../../../utils/request"
import Image from "next/image";

async function MovieDetailsPage({params} : any) {
    const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);

        return (
            <div className="my-4 mx-3">
                <div className="d-flex align-items-center">
                    <div className="col-3">
                        <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
                    </div>
                    <div className="mx-5">
                        <h3>{movieDetails.title}</h3>
                            <div className="d-flex my-3">
                                <p className="py-1 px-2 bg-success me-2 rounded">{movieDetails.release_date}</p>
                                <p className="py-1 px-2 bg-success me-2 rounded">{movieDetails.original_language}</p>
                                <p className="py-1 px-2 bg-success me-2 rounded">{movieDetails.status}</p>
                            </div>
                            <div>
                                <p>{movieDetails.genres.map((genre : any) => {
                                    return <span className="py-1 px-2 bg-primary me-2 rounded" key={genre.id}>{genre.name}</span>
                                })}</p>
                            </div>
                            <p>{movieDetails.overview}</p>
                    </div>
                </div>
                
                <div className="my-4" >
                    <h2>Similar Movies</h2>
                    <div className="d-flex flex-wrap gap-3" >
                        {similarMovies.map((movie : any) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="card bg-black text-white" style={{ width: '15rem' }}>
                                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            )
        }
    export default MovieDetailsPage