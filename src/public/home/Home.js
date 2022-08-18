import { Col, Container, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import UserLayout from "../Layout";
import Services from "../services/Services";
import Location from "../location/Location";
import ContactForm from "../forms/Contact_Form";
import HomeIconLinks from "../components/HomeIconLinks";

const Home = () => (
  <>
    <UserLayout src="/hills.jpg" alt="worshiping on a hill">
      <HomeIconLinks />
      <Services />
      <Location />
      <ContactForm />

      <Container>
        <Row>
          <Col xs={12} md={9} xl={6} className="mx-auto">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  </>
);

export default Home;
