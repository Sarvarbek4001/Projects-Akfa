import React from 'react'
import "./UnauthenticatedApp.scss"
import useToken from '../../hooks/useToken'
function UnauthenticatedApp() {
    const [token,setToken] = useToken()
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        const {email,password} = evt.target.elements;
        fetch('http://10.250.1.51:8181/login', {
            method: 'POST',
            body: JSON.stringify({
                username:email.value,
                password:password.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response=>response.json())
        .then((json)=>setToken(json.token)) 
    }
  return (
    <div className='login'>
        <div className="box">
            <form onSubmit={handleSubmit}>
                <span className="text-center">login</span>
                    <div className="input-container">		
                        <input type="email" name='email' defaultValue='tilepbaev1993@mail.ru' required/>
                        <label>Email</label>
                    </div>
                    <div className="input-container">
                        <input type="password" name='password' defaultValue='Dev@25' required/>
                        <label>Password</label>		
                    </div>
                    <button type="submit" className="btn">Login</button>`
            </form>	 
       </div>
   </div>
  )
}

export default UnauthenticatedApp