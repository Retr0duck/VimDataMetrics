import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Checkout() {
  const location = useLocation();
  const { email, plan } = location.state;

  const handleCheckout = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el proceso de pago
    alert('Proceeding to payment');
  };

  return (
    <div className="d-flex align-items-center py-4" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <main className="w-100 m-auto" style={{ maxWidth: '500px' }}>
        <Card className="p-4 p-md-5 shadow">
          <Card.Body>
            <h1 className="h3 mb-3 fw-normal text-center">Checkout</h1>
            <ListGroup className="mb-3">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <strong>Email</strong>
                <span>{email}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <strong>Plan</strong>
                <span>{plan}</span>
              </ListGroup.Item>
            </ListGroup>
            <div className="mb-3">
              <h5 className="fw-normal text-center">Plan Details</h5>
              <p className="text-muted text-center mb-0">
                You have chosen the <strong>{plan}</strong> plan which includes:
              </p>
              <ul className="text-muted list-unstyled text-center mt-2">
                {plan === 'basic' && (
                  <>
                    <li>10 projects</li>
                    <li>Basic support</li>
                  </>
                )}
                {plan === 'premium' && (
                  <>
                    <li>50 projects</li>
                    <li>Priority support</li>
                  </>
                )}
                {plan === 'pro' && (
                  <>
                    <li>Unlimited projects</li>
                    <li>24/7 support</li>
                  </>
                )}
              </ul>
            </div>
            <Form onSubmit={handleCheckout}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control type="text" placeholder="John Doe" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formExpirationDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCVC">
                <Form.Label>CVC</Form.Label>
                <Form.Control type="text" placeholder="123" required />
              </Form.Group>
              <Button className="w-100 py-2" type="submit">Proceed to Payment</Button>
            </Form>
            <p className="mt-5 mb-3 text-body-secondary text-center">© 2017–2024</p>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}

export default Checkout;
