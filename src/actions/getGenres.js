const key =  'be767a41444abd83b1fe64254fba0f81'
const moviesUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`

import axios from 'axios';

const genres =()=> {

    return (dispatch)=> {
        axios.get(moviesUrl)
        .then(data=> {
            console.log(data, 'data--->')
            dispatch({
                type:'GENRES',
                payload: data.data
            });
        })
        .catch((e)=> {
            dispatch({
                type:'GENRES_ERROR',
                payload: e
            })
        })
    }

}

export default genres;