import React, {useState,useEffect} from 'react';
import "./Home.css"

const Home = ()=>{

    useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9b857e73ed1b3ac73813003343300b97&language=en-US&page=1`)
     .then(res => res.json())
     .then(data => console.log(data))
    }, [])
    


    return(
        <>
        Home Page
        </>
    )
}
 export default Home