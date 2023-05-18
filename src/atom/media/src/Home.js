import {useNavigate } from 'react-router-dom';
export default function Home () {
    function App() {
        const nevigate = useNavigate()
    function hanldehome () {
        nevigate('/home')
      }
    return (
        <button onClick={hanldehome}>home</button> 
    )
    }
}