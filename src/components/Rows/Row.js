import React,{useState,useEffect} from 'react'

import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import axios from '../../axios/axios'
import classes from './Row.module.css'


const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                }).catch(error => console.log(error))
        }
    }
    
    return (
        <div className={classes.row}>
            {/*title*/} 
            <h2>{title}</h2>
            {/*container -> posters*/} 
            <div className={classes.row__posters}>
                {/*row posters*/} 
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className= {isLargeRow ? classes.row__posterLarge : classes.row__poster}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.original_name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
        </div>


    )
}

export default Row
