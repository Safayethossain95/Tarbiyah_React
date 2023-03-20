import React from 'react'

const BannerOtherPageMb = (props) => {
  return (
    <>
        <div className="bannerotherpagemb" >
            <img className='w-100' src="./assets/images/Mobile/contactMb/bannerbg.png" alt="" />
            <div className="overlay">
                <h4  data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">{props.text?props.text:"Contact Us"}</h4>
            </div>
        </div>
    </>
  )
}

export default BannerOtherPageMb