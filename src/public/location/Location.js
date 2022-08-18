import { Card, Container, Row, Col, Alert } from "react-bootstrap";

const Location = () => (
  <Container>
    <Row>
      <Col xs={12} md={9} className="mx-auto text-center">
        <Card>
          <Card.Body>
            <h1>Location</h1>
            <Alert variant="info">Entrance on Washington St</Alert>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.7001431608574!2d-122.60806968442405!3d45.35486494875328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495713395496fbd%3A0x1c3ec48003c65c18!2s615%205th%20St%2C%20Oregon%20City%2C%20OR%2097045!5e0!3m2!1sen!2sus!4v1660675117253!5m2!1sen!2sus"
              width="100%"
              height="450"
              title="Potter's House Location"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Location;
