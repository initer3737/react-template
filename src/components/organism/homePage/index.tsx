import React from 'react'
import { LinkToPage,Icon} from '../../atom'
export default function HomePage()
 {
  return (
     <>
      <div className="row px-3 bg-4 text-light">
        <div className="col-12">
         <h3 className="text-center">
               ohayou minnasan
            </h3>
        </div>
         <div className="col-12">
            <p className="text-center fs-3">
               ini adalah template react ts yang mengimplementasikkan atomic design patern, 
               design patern yang sama ketika saya mendevelop web portofolio saya
            </p>
         </div>
         <div className="py-3">
            <div className="d-flex flex-column align-items-center">
               <div className="d-inline">
                  <LinkToPage href={'https://initer3737.github.io'} icon={'link'} target={'_blank'} variant={'info'} name={' web portofolio'} className={'fs-4 text-center'} />
               </div>
            </div>
         </div>
         <div className="d-flex flex-column align-items-center pb-3">
            <h3 className="text-center">
               <Icon variant={''} icon={''} name={''} />
               fitured by
            </h3>
            <div className="d-inline">
               <LinkToPage href={'https://getbootstrap.com/docs/5.3/getting-started/download/'} icon={'stars'} target={'_blank'} variant={'light'} name={'bootstrap5'} className={'fs-4 text-center'} />
            </div>
            <div className="d-inline">
               <LinkToPage href={'https://icons.getbootstrap.com/'} icon={'stars'} target={'_blank'} variant={'light'} name={'bootstrap icon'} className={'fs-4 text-center'} />
            </div>
            <div className="d-inline">
               <LinkToPage href={'https://colorhunt.co/'} icon={'stars'} target={'_blank'} variant={'light'} name={'color hunt'} className={'fs-4 text-center'} />
            </div>
         </div>
      </div>
     </>
  )
}

