import React, { useEffect, useState } from 'react'
import axios from "axios"
import './atom1'

function FetchData() {
    const [image, setImage] = useState('')

   async function Handlechange() {
            await axios.get('https://dog.ceo/api/breeds/image/random')
             .then((response) => setImage(response.data.message))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        Handlechange()
    }, [])


    return (
        <div className='div1'>
            <img  src={image} />
            <button className='btn' onClick={Handlechange}>GET</button>
        </div>
    )
}

export default FetchData;