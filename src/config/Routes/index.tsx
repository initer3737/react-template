import React from "react";
import { BrowserRouter as Router ,Navigate,Route,Routes as Switch} from "react-router-dom";
import { Header } from "../../components";
import { ForgotPass, Login, Register ,CorePage, NotFound} from "../../components/pages"; //return pages

const Routes=()=>{
    return (
      <> 
        <Router>
            <Switch>
                <Route path="/*" element={<CorePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pass" element={<ForgotPass/>} />
                <Route path="/404" element={<NotFound/>} />
                <Route path='*' element={<Navigate replace to='/404'/>} />
            </Switch>
        </Router>
    </>
    );
}
export default Routes;