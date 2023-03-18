import React from 'react'
import { Button } from 'react-bootstrap'
const CommonButton = (props) => {
  return (
    <>
        <div className="commonbutton">
            <Button onClick={props.func}>{props.text}</Button>
        </div>
    </>
  )
}

export default CommonButton