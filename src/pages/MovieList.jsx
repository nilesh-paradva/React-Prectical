import { use, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { DeleteMovieThunk, GetMovieThunk } from "../services/actions/CrudAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const MovieList = () => {

    const dispatch =useDispatch();
    const navigate = useNavigate();
    const [Search, setSearch] = useState("");
    const {movies} = useSelector((state) => state.CrudReducer);
    console.log("movies", movies);

    const EditMovie = (id) => {
        navigate(`/editmovie/${id}`);
    }
    
    useEffect(() => {
        dispatch(GetMovieThunk())
    }, [])

    const filteredMovies = movies.filter((movie) =>movie.title.toLowerCase().includes(Search.toLowerCase()));
    
    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <Container>
                    <Row>
                        <Col lg={12}>
                        <div className="search mb-4">
                        <input type="text" placeholder="Search..." className="mt-3 px-3 py-2 border rounded-lg mb-3 outline-none" value={Search} onChange={ (e) => setSearch(e.target.value)} />
                        </div>
                            <div className="movie-list">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Gern</th>
                                            <th>Minutes</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredMovies.map((movie) => (
                                            <tr key={movie.id}>
                                                <td className="flex justify-center"><img src={movie.image} alt="" className="w-[50%] rounded-lg"/></td>
                                                <td>{movie.title}</td>
                                                <td>{movie.description}</td>
                                                <td>{movie.gern}</td>
                                                <td>{movie.minutes}</td>
                                                <td>{movie.date}</td>
                                                <td>
                                                    <Button className="mr-2 px-3 py-2 !text-white !bg-green-500 me-2" onClick={() =>EditMovie(movie.id)}>
                                                        Edit
                                                    </Button>
                                                    <Button className="mr-2 px-3 py-2 !text-white !bg-blue-500 me-2">
                                                        View
                                                    </Button>
                                                    <Button className="!bg-red-500 px-3 py-2 !text-white" onClick={() => dispatch(DeleteMovieThunk(movie.id))}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default MovieList