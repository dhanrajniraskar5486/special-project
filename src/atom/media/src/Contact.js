import {useNavigate } from 'react-router-dom';
export default function Contact () {
    function App2() {
        const nevigate = useNavigate()
    
        function handlecontact () {
          nevigate('/contact')
        }
        return(
            <button onClick={handlecontact}>Contact</button>
        )
}
}