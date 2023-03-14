import React from 'react'

const Footerlinks = (props) => {
  return (
    <>
        <div className="footerlinkscomp">
            <h2>{props.myprops.heading}</h2>
            {
                props.myprops.data.map((item,key)=>{
                    return(
                        <Link to="/" key={key}>{item.dataname}</Link>
                    )
                })
            }
        </div>
    </>
  )
}

export default Footerlinks