import {React,useState} from 'react'

import AddMovie from './AddMovie'
export default function Movie() {
    const MovieData=[{
        name: "Thupakki",
        rating: 4.5,
        director: " A.R.Murugadoss"
    },{
        name: "spiderman",
        rating: 4.9,
        director: " Jon Watt"
    }];

    const [MovieList,setMovieList] =useState(...MovieData)

    const[name,setName]=useState(" ");
    
    const[rating,setRating]=useState(" ")
    const[director,setDirector]=useState(" ")

    return (
        <div>
            <input value={name} type="text" onChange={(event)=>setName(event.target.value)}>Name</input>
            
            <input value={rating} type="text" onChange={(event)=>setRating(event.target.value)}>Rating</input>
            <input value={director} type="text" onChange={(event)=>setDirector(event.target.value)}>Director</input>
            <input type="submit"
            onClick={()=>{
                const newMovie={
                    name:name,
                    
                    rating:rating,
                    director:director
                };
                setMovieList([...MovieList,newMovie]);
               
            }}
             >Add</input>
{MovieList.map((newMovie)=><AddMovie name={newMovie.name}  rating={newMovie.rating} director={newMovie.director}/>)}

        </div>
    )
}
