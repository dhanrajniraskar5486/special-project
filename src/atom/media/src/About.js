import {useNavigate } from 'react-router-dom';
export default function About () {
    function App1() {
        const nevigate = useNavigate()
    
        function handleabout () {
          nevigate('/about')
        }
        return(
            <button onClick={handleabout}>about</button>
        )
}
}

