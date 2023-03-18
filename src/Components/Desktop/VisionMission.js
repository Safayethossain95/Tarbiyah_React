import React,{useEffect,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import {visionmissionAPI} from '../../utils/VisionMissionAPI';
import VisionMissionSubcomp from './SubComponents/VisionMissionSubcomp';
const VisionMission = () => {
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
        <div className="visionmission">
        <div className={screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":screenSize.dynamicWidth>=992 &&screenSize.dynamicWidth<=1199?"myContainer896":"myContainerMini"}>

            <VisionMissionSubcomp myprops={visionmissionAPI}/>
        </div>
        </div>
    </>
  )
}

export default VisionMission