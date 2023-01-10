import React  from "react";
    import {
        Routes as Switch, // similiar to switch
        Route ,
        Navigate
        } from 'react-router-dom'
    import {
        NotFound,
        HomePage
    } from '../pages'
    import {
        Header,
        Footer,
        Nav,
        ScrollToTop
    } from '../assembleComponent'

export default function Routes(){
    // const location=useLocation();
    //     const {pathname}=location;
    //     const path=pathname.split('/');

     return (
        < div className="d-flex flex-column">
                    <ScrollToTop/>
                    <Nav/>
                    <Header/> 
                    <Switch>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/404" element={<NotFound/>} />
                        <Route path='*' element={<Navigate replace to='/404'/>} />
                    </Switch>
                    
                <Footer/>
        </div>
     )
}