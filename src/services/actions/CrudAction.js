import { Api } from "../../api/Api"

const AddDataAct = () => {
    return{
        type: "ADD_DATA"
    }
}
const GetDataAct = (data) => {
    return{
        type: "GET_DATA",
        payload: data
    }
}

export const SingleMovieAct = (data) => {
    return {
        type: "SINGLE_MOVIE",
        payload: data
    }
}

const UpdateMovieAct = (data) => {
    return{
        type: "UPDATE_MOVIE",
        payload :data
    }
}

// thunk

export const AddMovieThunk = (data) => {
    return(dispatch) => {
        Api.post('/movies', data).then((res) => {
            dispatch(AddDataAct(res.data));
        }).catch((err) => {
            console.log("Err", err);
            
        })
    }
}

export const GetMovieThunk = () => {
    return(dispatch) => {
        Api.get('/movies').then((res) => {
            dispatch(GetDataAct(res.data));
        }).catch((err) => {
            console.log("Err", err);
            
        })
    }
}

export const SingleMovieThunk = (id) => {
    return(dispatch) => {
        Api.get(`/movies/${id}`).then((res) => {
            dispatch(SingleMovieAct(res.data));
        }).catch((err) => {
            console.log("Err", err);
            
        })
    }
}

export const UpdateMovieThunk = (id, data) => {
    return (dispatch) => {
        Api.put(`/movies/${id}`, data).then((res) => {
            console.log("edit-data",res.data);
            dispatch(UpdateMovieAct(res.data));
        }).catch((err) => {
        })
    }
}

export const DeleteMovieThunk = (id) => {
    return (dispatch) => {
        Api.delete(`/movies/${id}`).then((res) => {
            dispatch(GetMovieThunk());
        }).catch((err) => {
            console.log("err", err);
            
        })
    }
}