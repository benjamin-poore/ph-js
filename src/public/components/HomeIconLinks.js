import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageLink from "./ImageLink";

const HomeIconLinks = () => {
  return (
    <Container fluid className="bg-info p-5">
      <Row className="justify-content-around gy-4">
        <ImageLink
          link="/vision-method"
          src="/vision.jpg"
          alt="vision"
          description="Our Vision &amp; Focus"
        />

        <ImageLink
          link="/test"
          src="/time.jpg"
          alt="clock"
          description="Location &amp; time"
        />

        <ImageLink
          link="/test"
          src="/events.jpg"
          alt="event"
          description="Upcoming Events"
        />
      </Row>
    </Container>
  );
};

export default HomeIconLinks;
