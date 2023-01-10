import React, { useEffect } from "react";
import { NotFound as NotFoundOrganisme } from "../../organism";
export default function NotFound() {
     useEffect(()=>{
        document.title='not-found-404'
     },[])
    return(
       <NotFoundOrganisme/>
    )
}