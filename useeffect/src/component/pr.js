import { useReducer, useState } from "react"

export function Ue(){
    const [img, setimage]=useState("")
    const imgRef=useRef(null)
    return(
        <div>
            <img ref={imgRef}/>
            <button onClick={}>click to change</button>

        </div>
    )
}