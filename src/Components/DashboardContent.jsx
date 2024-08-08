import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaChartLine, FaUsers, FaClipboardList } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardContent() {
  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaChartLine /> Sales</Card.Title>
              <Card.Text>
                $10,000
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaUsers /> Users</Card.Title>
              <Card.Text>
                500
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaClipboardList /> Orders</Card.Title>
              <Card.Text>
                120
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardContent;
