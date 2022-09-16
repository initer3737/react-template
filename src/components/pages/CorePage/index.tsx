import  React from 'react';
import { Navigate ,Routes as Switch , Route} from "react-router-dom";
import { Dashboard, Login, NotFound } from '../';
import { Footer, Header } from "../../organisms";

const CorePage=()=>{
    return(
        <>
                <Header />
                    <Switch>
                        <Route path="/pew" element={<Login />}/>
                        <Route path="dashboard" element={<Dashboard />}/>
                        <Route path="*" element={<Navigate replace to='404'/> } /> 
                    </Switch>
                <Footer />
        </>
    );
}
export default CorePage; //core page di lemparkan ke route ./config