import React,{useEffect,useState} from 'react'
import MediumHeading from '../../Desktop/SubComponents/MediumHeading';

const BlogPageComp = () => {
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
        })
      }, [screenSize])
  return (
    <>
        <div className="blogpagecomp">
            <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini d-flex":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896 d-flex":"myContainerMini d-flex"}>
                <MediumHeading text="Blogs"/>
            </div>
        </div>
    </>
  )
}

export default BlogPageComp