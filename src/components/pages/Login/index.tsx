import React from 'react'
import Image from '../../atoms/img';
import Logo from '../../../assets/images/register.gif'
import "./style.scss";
const Login = () => {
  return (
    <> 
    <div className="bg">
        <div className="form-login bg-dark px-2 py-4 rounded shadow gap-1 d-flex flex-column col-3">
          <div className="card bg-dark border border-primary">
            <div className="card-header">
            <h5 className='card-title text-light text-center'>Login</h5> 
            <hr className='text-primary'/>
            </div>
            <div className="card-body d-flex gap-2 flex-column">
            <input placeholder='username' className='rounded'/>
            <input placeholder='password' className='rounded'/>
            <button className='rounded-pill px-5 py-1'>login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login