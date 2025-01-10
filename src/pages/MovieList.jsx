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
    const [movieFilter, setDepartmentFilter] = useState("");
    const [positionfilter, setPositionFilter] = useState("");
    const {movies} = useSelector((state) => state.CrudReducer);
    console.log("movies", movies);

    const EditMovie = (id) => {
        navigate(`/editmovie/${id}`);
    }
    
    useEffect(() => {
        dispatch(GetMovieThunk())
    }, [])

    const filteredData = movies.filter((movie) => ["title"].some((key) => movie[key].toLowerCase().includes(Search))).filter((movie) => movieFilter === "" || movie.title === movieFilter).filter((movie) => positionfilter === "" || movie.title === positionfilter);
    // useEffect(() => {
    //     dispatch(setPositionFilter(filteredData))
    // })

    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <Container>
                    <Row>
                        <Col lg={12}>
                        <div className="search mb-4">
                            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                            <select onChange={(e) => setDepartmentFilter(e.target.value)}>
                                <option value="">All</option>
                                {filteredData.map((movie) => (
                                    <option key={movie.id} value={movie.title}>
                                        {movie.title}
                                    </option>
                                ))}
                            </select>
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
                                        {movies.map((movie) => (
                                            <tr key={movie.id}>
                                                <td>{movie.image}</td>
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