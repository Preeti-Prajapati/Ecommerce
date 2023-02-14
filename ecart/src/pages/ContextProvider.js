import React, { createContext, useState, } from 'react'

const listItem = [
  {
    id: '1',
    name: 'saree1',
    image: 'https://4.imimg.com/data4/QK/CW/ANDROID-53712198/product-500x500.jpeg',
    price: 259,
    ratereview: 357,
    Category:1,
    qty:1
  },
  {
    id: '2',
    name: 'saree2',
    image: 'https://i0.wp.com/welldonemart.com/wp-content/uploads/2021/09/350-wali-saree-min-scaled.jpg?fit=580%2C838&ssl=1',
    price: 2509,
    ratereview: 357,
    Category:2,
    qty:1
  },
  {
    id: '3',
    name: 'saree3',
    image: 'https://4.imimg.com/data4/QK/CW/ANDROID-53712198/product-500x500.jpeg',
    price: 1059,
    ratereview: 357,
    Category:1,
    qty:1
  },
  {
    id: '4',
    name: 'saree4',
    image: 'https://i0.wp.com/welldonemart.com/wp-content/uploads/2021/09/350-wali-saree-min-scaled.jpg?fit=580%2C838&ssl=1',
    price: 259,
    ratereview: 357,
    Category:2,
    qty:1
  }
]
export const AppContext = createContext(listItem)
const ContextProvider = ({ children }) => {
  const [state, setState] = useState(
    {
      products:listItem,
      cartItems:[],
    }
  )


  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>

  )
}

export default ContextProvider