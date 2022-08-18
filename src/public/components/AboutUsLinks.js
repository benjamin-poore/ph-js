import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageLink from "./ImageLink";
import { useLocation } from "react-router-dom";

const IconLinks = (props) => {
  const location = useLocation().pathname;

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
          link="/beliefs"
          src="/bible.jpg"
          alt="bible"
          description="What We Believe"
        />

        <ImageLink
          link="/our-fellowship"
          src="/ph-globe.png"
          alt="potter's house logo"
          description="Our Fellowship"
        />

        <ImageLink
          link="/our-pastor"
          src="/rememberance.jpg"
          alt="event"
          description="Our Pastor"
        />
      </Row>
    </Container>
  );
};

export default IconLinks;
