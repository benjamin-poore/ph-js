import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import UserLayout from "../Layout";
import AboutUsLinks from "../components/AboutUsLinks";

const Fellowship = (props) => (
  <>
    <UserLayout src="/worldwide.jpg" alt="fellowship hero image">
      <Row>
        <Col xs={12} lg={9} className="mx-auto">
          <Card className="p-2">
            <Card.Body>
              <Row>
                <Col xs={12} lg={6}>
                  <Image
                    fulid
                    rounded
                    src="/wayman-mitchell.jpg"
                    alt="wayman mitchell"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h1>FOUNDING PASTOR</h1>
                  <p>Wayman Mitchell</p>
                  <p>
                    Wayman and Nelda Mitchell were married for 63 years, until
                    her passing in 2016. Neither of them had a religious
                    upbringing, but experienced powerful conversions in their
                    mid-20’s. After responding to the call to preach, they
                    pastored a number of churches in Canada, Arizona, Idaho,
                    Oregon, and California. In 1970 they came to Prescott to
                    take a small, struggling congregation. Shortly after
                    arriving, God saved a number of hippies and they welcomed
                    them into the church. God began a marvelous outpouring of
                    conversions and growth in connection with the “Jesus
                    Movement” of the 1970’s. As God revealed His plan for
                    discipleship, churches began to be planted throughout the
                    US, and then spreading to many other nations. The Mitchells
                    pastored as missionaries to Australia on 3 different
                    occasions to accelerate the movement there. Pastor Mitchell
                    continued to travel extensively throughout the world
                    preaching in various Potter's House conferences, rallies,
                    leadership meetings, discipleship classes and healing
                    crusades, until early in 2020. He finally went home to his
                    reward on September 21st, 2020, and left behind a
                    world-changing move of God.
                  </p>
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

export default Fellowship;
