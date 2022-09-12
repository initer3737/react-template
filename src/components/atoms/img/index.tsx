import React from "react";

type props={
   src:string,
   className:string,
   alt:string
}

export const Image:React.FC<props>=({src,className,alt})=>{
 return (
    <>
         <img src={src} className={className} alt={alt}/>
    </>
 )
}
