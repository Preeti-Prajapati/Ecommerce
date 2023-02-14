
import React, { useContext, useEffect, useState } from 'react'
import { Rating, Typography, Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import { AppContext } from './ContextProvider';


const Viewitem = () => {
    const { state, setState } = useContext(AppContext);
    const { products, cartItems } = state;
    const [cartProducts, setCartProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [filteredItem, setFilteredItem] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const citems = JSON.stringify(cartItems);
        const productsArr = JSON.stringify(products);
        setCartProducts(JSON.parse(citems));
        setAllProducts(JSON.parse(productsArr))
    }, []);

    useEffect(() => {
        const currentProduct = allProducts.filter((item) => item.id === id)[0];
        console.log("currentProduct:", currentProduct);
        setFilteredItem(currentProduct)
    }, [allProducts]);

    const addToCart = () => {
        const selectedItem = cartProducts?.filter((item) => item.id === id)[0]
        if (selectedItem) {
            selectedItem.qty = selectedItem.qty + 1;
        }
       
        const remaining = cartProducts?.filter((item) => item.id !== id)
        console.log("selectedItem:", selectedItem, "remaining:", remaining)

        setCartProducts([selectedItem?selectedItem:filteredItem, ...remaining]);

        setState(prevState => ({
            ...prevState,
            cartItems: [selectedItem?selectedItem:filteredItem, ...remaining]
        }))
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '600px', height: '500px', display: 'flex', backgroundColor: '#dfdfdf', justifyContent: 'center' }}>
                <img alt='saree' src={filteredItem?.image} />
            </div>
            <div>
                <h1 style={{ marginLeft: '200px', color: 'green' }}>{filteredItem?.name}</h1>
                <p style={{ marginLeft: '200px', fontSize: '20px', color: 'orange', fontWeight: 'bold' }}><span style={{ color: 'red', fontSize: '25px', padding: '0px 10px' }}>$</span>{filteredItem?.price}</p>

                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '200px' }}>
                    <Rating
                        name="simple-controlled"
                        // value={value}
                        onChange={(event, newValue) => {
                            // setValue(newValue);
                        }}
                    />
                    <Typography variant="p" style={{ fontWeight: 'bold', color: 'blue' }}>{state?.ratereview}</Typography>
                </div>
                <div style={{ marginTop: '50px', marginLeft: '200px', }}>
                    <Button onClick={addToCart} variant="contained">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Viewitem 