
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Listitem from '../components/Listitem'
import { AppContext } from './ContextProvider';
import axios from 'axios'


const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const loadData=async()=>{
    await axios.get('http://localhost:5000/getProducts').then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
    }
    useEffect(() => {
      loadData();
    }, [])
    
  return (
    <div style={{ display: 'flex', padding: '10px 20px' }}>
      {data.map((item, ind) => {
        return (
          <div key={item.id} style={{ padding: '10px 20px' }}>
            <Listitem onClick={() => navigate(`/viewitem/${item.id}`)} image={item.image} itemName={item.name} rate={item.price} ratereview={item.ratereview} />
          </div>
        )
      })}

    </div>
  )
}

export default Home