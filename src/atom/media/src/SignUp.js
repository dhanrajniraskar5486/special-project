import {useNavigate } from 'react-router-dom';
export default function  () {
    function App4() {
        const nevigate = useNavigate()
    
        function handlesignup () {
          nevigate('/signup')
        }
        return(
            <button onClick={handlesignup}>signup</button>
        )
}
}