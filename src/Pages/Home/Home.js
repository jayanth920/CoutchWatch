import React, {useState,useEffect} from 'react';
import "./Home.css"

const Home = ()=>{
    const [ popularMovies , setPopularMovies] = useState([])

    useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9b857e73ed1b3ac73813003343300b97&language=en-US&page=1`)
     .then(res => res.json())
     .then(boss=>console.log(boss.results))
     .then(data => setPopularMovies(data.results))
    }, [])
    


    return(

        <div>{popularMovies.map(movie =>( 
        <span>{movie.original_title}</span>
        ))
        }</div>
    )
}
 export default Home