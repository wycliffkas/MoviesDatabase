
const genresReducer = (state, action) => {
    switch(action.type){
        
        case 'GENRES':{
            if (action.payload){
                console.log('payload===>', action.payload.genres)
                return {
                    ...state,
                    genres: action.payload.genres,
                    loading: false
                }
            }
        }
        case 'GENRES_ERROR': {
            if (action.payload){
                return {
                    ...state,
                    message: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    genres: [],
    loading:true
}

export default (state = initialState, action) => (genresReducer(state, action));