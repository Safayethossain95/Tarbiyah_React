import React from 'react'
const MediumHeading = (props) => {
  return (
    <div className="mediumheading" data-aos-delay="400" data-aos="fade-in" data-aos-duration="2000">
        <h4>
            {props.text}
        </h4>
    </div>
  )
}

export default MediumHeading