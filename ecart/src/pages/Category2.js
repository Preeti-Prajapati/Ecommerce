import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Listitem from '../components/Listitem'
import { AppContext } from './ContextProvider';


const Category2 = () => {
  const navigate = useNavigate();
  const {state} = useContext(AppContext);
  const {products}=state;
  return (
    <div style={{ display: 'flex', padding: '10px 20px' }}>
      {
        products.filter((item, ind) => item.Category === 2 ).map((item, ind) => {
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

export default Category2