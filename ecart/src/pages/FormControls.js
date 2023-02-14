import React, { useState } from 'react'
const initialState = {
    name: '',
    email: '',
    pwd: '',
    confpwd: '',
    terms: false,
    gender:''
}
const FormControls = () => {
    const [formData, setFormData] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        console.log(event.target)
        console.log(name, value, type, checked)
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked })

        } else {
            setFormData({ ...formData, [name]: value })
        }
     
    }

    const isFormValid = () => {
        if (formData?.name.trim().length == 0) {
            setErrorMessage("name is required");
            return false;
        }
        if (formData?.email.trim().length == 0) {
            setErrorMessage("email is required");
            return false;
        }
        return true;
    }
    const onSubmit = () => {
        if (isFormValid() == true) {
            console.log(formData)
        } else {
            console.log("Form is not valid");
        }
    }

    const handleOnFocus = () => {
        setErrorMessage("");
    }

    const handleBlur = () => {
        isFormValid();
    }
    return (
        <div>
            {/* <form> */}
            <div>
                <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
            <div style={{ padding: '8px' }}>
                <input name="name" type='text' value={formData?.name} placeholder='enter Name' onChange={handleChange} onFocus={handleOnFocus} onBlur={handleBlur} />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="email" type='email' value={formData?.email} placeholder='enter Email' onChange={handleChange} onFocus={handleOnFocus} onBlur={handleBlur} />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="pwd" type='password' placeholder='enter password' onChange={handleChange} />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="confpwd" type='password' placeholder='confirm password' onChange={handleChange} />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="number" type='text' placeholder='enter Number' />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="date" type='date' placeholder='enter date' />
            </div>
            <div style={{ padding: '8px' }}>
                <input name="time" type='time' placeholder='enter time' />
            </div>
            <div style={{ padding: '8px' }}>
                <input type='radio' value='male' name='gender' onChange={handleChange} />Male
                <input type='radio' value='female' name='gender' onChange={handleChange} />Female
                <input type='radio' value='male' name='gender' onChange={handleChange}  />Other
            </div>
            <div style={{ padding: '8px' }}>
                <input type='checkbox' value={formData?.checkbox}  name='terms' onChange={handleChange} />terms and Condition
            </div>
            <input type={"submit"} value="Submit" onClick={onSubmit} />
            {/* </form> */}
        </div>
    )
}

export default FormControls