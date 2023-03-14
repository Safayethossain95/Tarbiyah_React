import React,{useState} from 'react'
import {Row,Col} from "react-bootstrap"
const MPCcard = (props) => {
    const [rating,setrating] = useState(4.7)
  return (
    <>
        <div className="mpcCard">
            <div className="img">
                <img className='w-100' src={props.apiprops.bigimgurl} alt="cardpic1" />
                
                <div className={props.apiprops.saletag==true?"ovlay":"d-none"}>
                    <p>SALE</p>
                </div>
            </div>
            <div className="rating">
            <div className="wrapper d-flex">
                <span>{rating}</span>
                {
                    rating>4?
                    <>
                    <div className="stars">
                    <img src="./assets/images/Common/ratingpart/starfilled.png" alt="" />
                    <img src="./assets/images/Common/ratingpart/starfilled.png" alt="" />
                    <img src="./assets/images/Common/ratingpart/starfilled.png" alt="" />
                    <img src="./assets/images/Common/ratingpart/starfilled.png" alt="" />
                    <img src="./assets/images/Common/ratingpart/starempty.png" alt="" />

                    </div>
                    
                    
                    </>
                    :
                    ""
                }
                <span> &#40;30&#41;</span>
                </div>
            </div>
            <div className="title">
                <h4>{props.apiprops.head}</h4>
            </div>
            <div className="detail">
                <Row>
                    <Col xs={4} lg={4} className="m-auto text-center">
                        <p>{props.apiprops.lessons} Lessons</p>
                    </Col>
                    <Col xs={4} lg={4} className="m-auto text-center">
                        <p>{props.apiprops.days} Day</p>
                    </Col>
                    <Col xs={4} lg={4} className="m-auto text-center">
                        <p>{props.apiprops.level}</p>
                    </Col>
                </Row>
            </div>
            <div className="pricing">
                <img src={props.apiprops.imgurl} alt="" />
                <p>{props.apiprops.instructorname}</p>
                <h5>৳{props.apiprops.price}</h5>
            </div>
        </div>
    </>
  )
}

export default MPCcard