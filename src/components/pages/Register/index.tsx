import React from 'react'
import Image from '../../atoms/img';
import Logo from '../../../assets/images/not-found.gif';
const Register = () => {
  return (
    <div className='container m-5'>
      <div className="col-3">
        register
      </div>
        <div className="col-6">
            <Image src={Logo} className={'img-fluid'} alt={'not found 404!'}/>
        </div>
    </div>
  );
}

export default Register;