import React from 'react'
import './nav.css'
import { useLocation } from 'react-router-dom';
import {Link} from '../../atom'
export default function Nav() {
    const location=useLocation();
        const {pathname}=location;
        const splitLokasi=pathname.split('/');
  return (
    <nav className="text-light" id='nav'>
       <div className="bg-4 d-flex gap-3 px-3 py-5 mb-2 flex-wrap">
            <Link 
                target={""}
                variant={`${splitLokasi[1]===''?'light':'info'}`}
                name={'home'} 
                href="/" 
                isIcon={true} 
                icon={"house-fill"}    
                />
        </div>         
    </nav>
  )
}
