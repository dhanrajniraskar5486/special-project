import {useNavigate } from 'react-router-dom';
export default function  () {
    function App3() {
        const nevigate = useNavigate()
    
        function handlelogin () {
          nevigate('/login')
        }
        return(
            <button onClick={handlelogin}>login</button>
        )
}
}