import React,{useEffect,useState} from 'react'
const BannerWithImg = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
            console.log(screenSize.dynamicWidth)
        })
      }, [screenSize])
  return (
    <>
        <div className="bannersectionotherpage">
            <img className='w-100' src="./assets/images/Donationpage/bannerwithimgimg.png" alt="" />

            <div className="overlay">
                <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

                    <div className="mysubpagetitle">
                        <h3  data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">Donation</h3>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default BannerWithImg