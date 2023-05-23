import {BiSearch} from 'react-icons/bi';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  

  const[users ,setUsers]=useState([])
   
  async function fetchUsers(){
    const response=await axios.get("http://cdn-api.co-vin.in/api/v2/admin/location/states");
    setUsers(response.data.states);
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  const[filtered ,setfiltered]=useState([])
  const[search , setsearch]=useState("")

  useEffect(() => {
    if (users && users.length > 0) {
      setfiltered(
        users.filter((item) => 
          item.state_name && item.state_name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, users]);
  
  

  return (
    <div className='Main'>
     <div className="App">
      <div className='search1'>
       <div className='search2'>
        <input type='text' placeholder='search' onChange={(e)=>setsearch(e.target.value)}></input>
         <BiSearch/>
       </div>
       <div className='dropdown'>
        {filtered.map((item,index)=>{
         return(
          <div className='card' key={index}>
            <p>{item.state_name}</p>
          </div>
         )
        })}
       </div>
      </div>
     </div>
    </div> 
  );
}

export default App;
