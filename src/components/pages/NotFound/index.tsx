import React from 'react';
import Logo from '../../../assets/images/not-found.gif';
import  Image  from '../../atoms/img';
const NotFound = () => {
  return (
    <>
    <Image src={Logo} className={'col-12'} alt={'not found 404!'}/>
    </>
  )
}

export default NotFound ;