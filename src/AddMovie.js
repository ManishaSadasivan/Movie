import React from 'react'

export default function AddMovie(newMovie) {
    console.log(newMovie.name)
    return (
        <div>
            <div>{newMovie.name}</div>
            
            <div>{newMovie.rating}</div>
            <div>{newMovie.director}</div>
        </div>
    )
}
