import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import UserLayout from "../Layout";
import Location from "../location/Location";
import Services from "../services/Services";

const LocationPage = (props) => (
  <>
    <UserLayout src="/building.png" alt="building hero image">
      <Container>
        <Row>
          <Services />
          <Location />
        </Row>
      </Container>
    </UserLayout>
  </>
);

export default LocationPage;
