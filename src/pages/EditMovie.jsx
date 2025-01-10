import { useEffect, useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { SingleMovieThunk, UpdateMovieThunk } from "../services/actions/CrudAction";
import { use } from "react";
const EditMovie = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {movie, isCreate} = useSelector((state) => state.CrudReducer);
    console.log("single movie", movie);
        

    const [formInput, setFormInput] = useState({
        image: '',
        title: '',
        description: '',
        gern: '',
        minutes: '',
        date: ''
    })

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }

    const MovieSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateMovieThunk(id, formInput))
        console.log(formInput);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormInput((prev) => ({
                ...prev,
                image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        dispatch(SingleMovieThunk(id))
    }, [id])

    useEffect(() => {
        if (movie) {
            setFormInput({
                image: movie.image,
                title: movie.title,
                description: movie.description,
                gern: movie.gern,
                minutes: movie.minutes,
                date: movie.date
            })
        }
    }, [movie])

    useEffect(() => {
        if (isCreate) {
            navigate('/movielist')
        }
    },[isCreate])

    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="movie-form">
                                <form action="" onSubmit={MovieSubmit}>
                                    <div className="image mb-3">
                                        <label htmlFor="">Movie Image Add</label>
                                        <input type="file" className="px-3 py-2 border border-2 rounded-lg w-full" onChange={handleImageChange}/>
                                    </div>
                                    <div className="Title mb-3">
                                        <label htmlFor="">Movie Title</label>
                                        <input type="text" name="title" value={formInput.title} placeholder="Movie Title" className="px-3 py-2 border border-2 rounded-lg w-full outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="Description mb-3">
                                        <label htmlFor="">Movie Description</label>
                                        <input type="text" name="description" value={formInput.description} placeholder="Movie Description" className="px-3 py-2 border border-2 rounded-lg w-full outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="gern mb-3">
                                        <label htmlFor="">Movie Gern</label>
                                        <input type="text" name="gern" value={formInput.gern} placeholder="Movie Gern" className="px-3 py-2 border border-2 rounded-lg w-full outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="minitus mb-3">
                                        <label htmlFor="">Movie Minutes</label>
                                        <input type="number" name="minutes" value={formInput.minutes} placeholder="Movie Minutes" className="px-3 py-2 border border-2 rounded-lg w-full outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="midate mb-3">
                                        <label htmlFor="" className="mb-2">Movie Date</label>
                                        <input type="text" name="date" value={formInput.date} placeholder="yyyy-mm-dd" className="px-3 py-2 border border-2 rounded-lg w-full outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="button-submit text-center py-2">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EditMovie