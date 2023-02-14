
import { Delete } from '@mui/icons-material';
import { Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useContext, useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../pages/ContextProvider';

const CartItems = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { state, setState } = useContext(AppContext);
  const { cartItems } = state;
  const [cartProducts, setCartProducts] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.stringify(cartItems);
    setCartProducts(JSON.parse(items))
  }, []);

  useEffect(() => {
    total();
  }, [cartProducts]);

  const total = () => {
    let totalVal = 0;
    cartProducts.map((item) => {
      totalVal += item.price * item.qty
    })
    setCartTotal(totalVal);
  };

  const handleQuantity = (e, id) => {
    const selectedItem = cartProducts?.filter((item) => item.id === id)
    selectedItem[0].qty = e.target.value;

    const remaining = cartProducts?.filter((item) => item.id !== id)
    console.log(selectedItem, remaining)

    setCartProducts([...selectedItem, ...remaining])
    setState(prevState => ({
      ...prevState,
      cartItems: [...selectedItem, ...remaining]
    }))
  }

  const handleRemoveItem = (id) => {
    setCartProducts(prevState => [...prevState.filter((item) => item.id !== id)]);

    setState(prevState => ({
      ...prevState,
      cartItems: [...cartProducts.filter((item) => item.id !== id)]
    }));
  }
  const handleClearCart = () => {
    setCartProducts([])
    setState(prevState => ({
      ...prevState,
      cartItems: []
    }))
  }

  console.log(state);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '70%', backgroundColor: '#dfdfdf', padding: ' 0px 30px', margin: '20px 20px' }}>
        <div style={{ display: 'flex', width: '80%', lineHeight: '20px' }}>
          <h1>Shopping Cart</h1>
          <div style={{ flexGrow: 1 }}></div>
          <h5 style={{ paddingLeft: '20px', flexGrow: 1 }}>price</h5>
        </div>

        {cartProducts.map((item, idx) => {
          return (

            <div key={item.id}>
              <Divider />
              <br />
              <div style={{ display: 'flex' }}>
                <div style={{ width: '100px', }}>
                  <img style={{ width: '100%', height: '100%' }} alt='item' src={item.image} />
                </div>
                <div style={{ marginLeft: '100px', }}>
                  <h3 >{item.name}</h3>
                  <p style={{ color: 'green', fontSize: '12px' }}>In Stock</p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" style={{ width: '200px' }}>Quantity</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={item.qty}
                      label="Quantity"
                      onChange={(e) => handleQuantity(e, item.id)}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ marginLeft: '100px' }}>
                  <p>{item.price}</p>
                  <IconButton style={{ color: 'red' }} onClick={() => handleRemoveItem(item.id)}>
                    <Delete />
                  </IconButton>
                </div>
              </div>
            </div>
          )
        })}

      </div>
      <div>
        <h3>SubTotal</h3>
        <p>{cartTotal}</p>
        <Button variant="contained" style={{ height: '40px', display: `${cartItems.length > 0 ? 'block' : 'none'}` }} onClick={handleClearCart}>Clear Cart</Button>
        <Button variant="contained" style={{ height: '40px', marginTop: '10px', display: `${cartItems.length > 0 ? 'block' : 'none'}` }} onClick={() => navigate('/login')}>Proceed to buy</Button>
      </div>
    </div>
  )
}

export default CartItems