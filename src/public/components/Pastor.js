import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import UserLayout from "../Layout";
import AboutUsLinks from "../components/AboutUsLinks";

const Vision = (props) => (
  <>
    <UserLayout src="/rememberance.jpg" alt="pastor hero image">
      <Row>
        <Col xs={12} lg={9} className="mx-auto">
          <Card className="p-2">
            <Card.Body>
              <Row>
                <Col xs={12} lg={6}>
                  <Image
                    fulid
                    rounded
                    src="/no-image.jpg"
                    alt="image coming soon"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h1>Our Pastor</h1>
                  <p>Mike Stovall</p>
                  <p>Bio coming soon...</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <AboutUsLinks />
      </Row>
    </UserLayout>
  </>
);

export default Vision;
