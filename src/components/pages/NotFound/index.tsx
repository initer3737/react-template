import React from 'react';
import Logo from '../../../assets/images/not-found.jpg';
import { Image } from '../../atoms/img';
const NotFound = () => {
  return (
    <>
    <Image src={Logo} className={'w-100'} alt={'not found 404!'}/>
    </>
  )
}

export default NotFound ;