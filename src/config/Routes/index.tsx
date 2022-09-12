import React from "react";
import { BrowserRouter as Router ,Navigate,Route,Routes as Switch} from "react-router-dom";
import { Dashboard, ForgotPass, Login, Register,NotFound } from "../../components/pages";

const Routes=()=>{
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/pass" element={<ForgotPass/>} />
                <Route path="/404" element={<NotFound />} />  
                <Route path='*' element={<Navigate replace to='/404'/>} />
            </Switch>
        </Router>
    );
}
export default Routes;