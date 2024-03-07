import React from 'react'
import { Form } from 'react-bootstrap'

function Input({label,placeholder,name,onChange}) {
  return (
    <>
        <Form.Group className="mb-3">
            <Form.Label className="text-light">{label}</Form.Label>
            <Form.Control className="text-light" style={{"background":"#000"}} type="text" placeholder={placeholder} name={name} onChange={onChange} />
        </Form.Group> 
    </>
  )
}
export default Input
