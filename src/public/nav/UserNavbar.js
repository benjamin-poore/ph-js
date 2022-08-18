import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      className="border border-secondary rounded shadow mb-3"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="./logo.png" height="75px" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/vision-method">
                Vision &amp; Method
              </NavDropdown.Item>
              <NavDropdown.Item href="/beliefs">Beliefs</NavDropdown.Item>
              <NavDropdown.Item href="/our-fellowship">
                Our Fellowship
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/location">
                Time &amp; Location
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
