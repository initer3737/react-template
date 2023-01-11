import React from 'react'
import Cookies from 'js-cookie'
Cookies.set('mykukikey','valuekuki',{
    expires:1,
    path:''
})
const getCookie=Cookies.get('mykukikey')

export default function Cookie() {
  return (
    <div className='bg-4 text-light'>
        <p>
            my cookie is : {getCookie!!}
        </p>
    </div>
  )
}
