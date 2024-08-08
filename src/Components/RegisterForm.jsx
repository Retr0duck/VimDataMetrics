import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el registro del usuario y la selección del plan
    // Simulamos el registro y redirigimos a la página de checkout
    navigate('/checkout', { state: { email, plan } });
  };

  return (
    <div className="d-flex align-items-center py-4" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '500px' }}>
        <Form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light" required>
          <h1 className="h3 mb-3 fw-normal text-center">Create an Account</h1>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label aria-required>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <h4 className="mb-3 text-center">Choose a Plan</h4>
          <Row>
            <Col md={4}>
              <Card className={`mb-4 ${plan === 'basic' ? 'border-primary' : ''}`} onClick={() => setPlan('basic')}>
                <Card.Body className="text-center">
                  <Card.Title>Basic</Card.Title>
                  <Card.Text>$10/month</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 ${plan === 'premium' ? 'border-primary' : ''}`} onClick={() => setPlan('premium')}>
                <Card.Body className="text-center">
                  <Card.Title>Premium</Card.Title>
                  <Card.Text>$20/month</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 ${plan === 'pro' ? 'border-primary' : ''}`} onClick={() => setPlan('pro')}>
                <Card.Body className="text-center">
                  <Card.Title>Pro</Card.Title>
                  <Card.Text>$30/month</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button className="w-100 py-2" type="submit">Sign Up</Button>
        </Form>
      </main>
    </div>
  );
}

export default RegisterForm;
