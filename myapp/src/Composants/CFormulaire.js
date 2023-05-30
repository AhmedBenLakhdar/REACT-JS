import React from 'react'
{/* importation des composants de bootstrap */}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
{/* importation de notre fichier stylesheet */}
import './CFormulaire.css'

{/* fonction CFormulaire */}
const CFormulaire = () => {
  return (
    <div>
      <Form className='formulo'>
        <div className='name1'>        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
{/* creation d'un autre formulaire à l'aide de composant bootstrap Form */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className='btn'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>

    </div>
  )
}

export default CFormulaire
