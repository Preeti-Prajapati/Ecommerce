
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Listitem from '../components/Listitem'
import { AppContext } from './ContextProvider';


const Category1 = () => {
  const navigate = useNavigate();
  const {state} = useContext(AppContext);
  const {products}=state;

  
  let  filteredItems = products.filter((item, idx) => item.Category === 1);
  console.log("products:", products)
  return (
    <div style={{ display: 'flex', padding: '10px 20px' }}>
      {
        filteredItems.map((item, idx) => {
          return (
            <div key={item.id} style={{ padding: '10px 20px' }}>
              <Listitem onClick={() => navigate(`/viewitem/${item.id}`)} image={item.image} itemName={item.name} rate={item.price} ratereview={item.ratereview} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Category1