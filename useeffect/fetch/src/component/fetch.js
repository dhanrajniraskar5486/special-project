import React ,{useEffect, useState} from 'react'

export function FetchData()
{
    const [ image,setImage]=useState('')

    useEffect(()=>
    {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  


    },[])

    return(
        <img src={image} />
    )
}

export default FetchData;

