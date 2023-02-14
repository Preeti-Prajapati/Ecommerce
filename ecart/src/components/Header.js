import { Menu, ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography, Box, Badge } from '@mui/material'
import React, { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { AppContext } from '../pages/ContextProvider'

const Header = ({children}) => {
const navigate=useNavigate();
    const {state} = useContext(AppContext);
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <CssBaseline />
                <Toolbar  >
                    <IconButton color='inherit' sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" >eCart</Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <IconButton color='inherit' sx={{ mr: 2 }}   onClick={()=>navigate('/cartitems')} >
                        <Badge badgeContent={state?.cartItems.length} color="error">
                            <ShoppingCart color="inherit" />
                        </Badge>
                    </IconButton>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit" onClick={()=>navigate('/form')}>Form</Button>
                </Toolbar>
            </AppBar>
            <div>
                <Toolbar />
                <div style={{ width: '100%', height: '40px', backgroundColor: '#202A44', color: 'white', fontWeight: 'bold', display: 'flex', lineHeight: '40px', padding: '0px 50px' }}>
                    <Link to='/' style={{color:'white',textDecoration:'none',padding:'0px 10px'}}> All </Link>
                    <Link to='/category1' style={{color:'white',textDecoration:'none',padding:'0px 10px'}}> Category1 </Link>
                    <Link to='/category2' style={{color:'white',textDecoration:'none',padding:'0px 10px'}}> Category2 </Link>
                </div>
            </div>
            {children}
        </Box>

    )
}

export default Header