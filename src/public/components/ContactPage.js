import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import UserLayout from "../Layout";
import Location from "../location/Location";
import Services from "../services/Services";
import ContactForm from "../forms/ContactForm";

const LocationPage = (props) => (
  <>
    <UserLayout src="/welcome.jpg" alt="welcome hero image">
      <Container>
        <Row>
          <ContactForm />
        </Row>
      </Container>
    </UserLayout>
  </>
);

export default LocationPage;
