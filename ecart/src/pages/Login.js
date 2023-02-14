import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const userInfo = {
    user: '',
    password: '',
}
const Login = () => {
    const [state, setstate] = useState(userInfo)
    const { user, password} = state;
    const [isLogin, setIsLogin] = useState(false)
    const handleInput = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }
    console.log(state)
    const handleLogin =(e)=>{
        e.preventDefault();
        if(user&&password){
setIsLogin(true)
alert('success')
setstate({user:'',password:''})
        }else{
            alert('please fill all the field')
        }
    }


    return (
        <div style={{ height: '350px', width: '400px', backgroundColor: '#dfdfdf', margin: 'auto' }}>
            <h1>Login</h1>
            <label htmlFor='userid'>UserId</label><br />
            <input type='text' name='user' placeholder='enter your user id' style={{ height: '40px', width: '300px' }} value={user} onChange={handleInput} /><br />
            <label htmlFor='password'>Password</label><br />
            <input type='password' name='password' placeholder='enter your password' style={{ height: '40px', width: '300px' }} value={password} onChange={handleInput} />
            <br />
            <input type='submit' style={{ backgroundColor: 'blue', color: 'white', width: '250px', padding: '8px', marginTop: '20px' }} value='Login' onClick={handleLogin}/>
            <br />
            <div style={{ marginTop: '20px' }}>
                <Link to='/register'>Don't have an account?register</Link>
            </div>
        </div>
    )
}

export default Login