import React from 'react'
type props={
    src:string
}
export default function VideoFromYoutube(props:props) {
        const {src}=props;
  return (
    <div className="border-start border-info border-3 ps-3 py-1 mt-3">
      <div className="ratio ratio-16x9">
          <iframe width="560" height="315" 
          src={src} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
  )
}
