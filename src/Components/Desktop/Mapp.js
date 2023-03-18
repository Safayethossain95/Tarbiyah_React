import React from 'react'
import Iframe from 'react-iframe'
const Mapp = () => {
  return (
    <>
        <div className="mapp mappmb" data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">
            
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1626.7110371669612!2d90.36690523455624!3d23.752987944442143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfd951011473%3A0x37b0dc10398284b5!2sTarbiyah%20Online%20Madrasah!5e0!3m2!1sen!2sbd!4v1678875552365!5m2!1sen!2sbd"
        width="100%"
        height={600}
        id=""
        className=""
        display="block"
        position="relative"/>
        
        {/* <Iframe url="https://www.google.com/maps/place/Tarbiyah+Online+Madrasah/@23.7528171,90.3668542,17z/data=!4m6!3m5!1s0x3755bfd951011473:0x37b0dc10398284b5!8m2!3d23.7530784!4d90.3672502!16s%2Fg%2F11qptxpkhj"
        width="100%"
        height={600}
        id=""
        className=""
        display="block"
        position="relative"/> */}


        </div>
    </>
  )
}

export default Mapp