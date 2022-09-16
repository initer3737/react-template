import React from "react";

type props={
   src:string,
   className:string,
   alt:string
}

const Image:React.FC<props>=({src,className,alt})=>{
 return (
    <>
         <img src={src} className={className} alt={alt}/>
    </>
 )
}

export default Image;
