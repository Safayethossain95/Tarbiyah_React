import React from 'react'

import { Accordion, Card } from 'react-bootstrap';
const CustomToggle = ({ children, eventKey, isOpen }) => {

    return (
        <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
          {children}
          {isOpen ? (
            <faChevronUp />
          ) : (
            <faChevronDown />
          )}
        </Accordion.Toggle>
      );
}



export default CustomToggle