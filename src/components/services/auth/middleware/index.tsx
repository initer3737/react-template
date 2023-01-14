import {Outlet,useNavigate} from 'react-router-dom'

function TokenExist(){
        const token=localStorage.getItem('token');
    if(token){
        return true;
    }else{
        return false;
    }
}
export default function Middleware(){
     const navigatsi=useNavigate()
    return !TokenExist?navigatsi('/login'):<Outlet/>
}