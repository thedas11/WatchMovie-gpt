import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name: "movie",
    initialState: {
        nowPlayingmovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {

        addnowplayingMovies: (state,action)=>{

            state.nowPlayingmovies = action.payload
        },

        addMovieTrailer : (state,action)=>{

        state.movieTrailer = action.payload

        },

        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
    
    },

    addTopratedMovies: (state, action)=>{

        state.topRatedMovies = action.payload
    },
    addUpcomingMovies: (state, action)=>{

        state.upcomingMovies = action.payload
    }
}
})

export const { addnowplayingMovies , addMovieTrailer, addPopularMovies, addTopratedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer