import { createRef, Component } from "react";
import { Card, Col, Container, FormGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import AlertMessage from "../AlertMessage";
import { validateForm, validation } from "../../Validation";

class Contact_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        validate: {
          required: true,
          minLength: 3,
        },
        message: [],
        value: "",
        touched: false,
      },
      email: {
        validate: {
          required: true,
          isEmail: true,
          touched: false,
        },
        message: [],
        value: "",
      },
      message: {
        validate: {
          required: true,
          minLength: 20,
          touched: false,
        },
        message: [],
        value: "",
      },
    };
  }

  recaptchaRef = createRef();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.validateInput(name, value);
  };

  validateInput(name, value) {
    const stateInputObject = { ...this.state[name] };

    let inputErrors = validation(value, stateInputObject.validate);

    stateInputObject.touched = true;
    stateInputObject.value = value;
    stateInputObject.message = [...inputErrors];
    this.setState({
      [name]: { ...stateInputObject },
    });

    return inputErrors.length === 0;
  }

  validateForm(inputs) {
    let validated = true;
    for (const name of inputs) {
      const isValid = this.validateInput(name, this.state[name].value);
      if (!isValid) {
        validated = false;
      }
    }
    return validated;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm(["name", "email", "message"]);
    if (!isValid) {
      return AlertMessage("error", "Please verify form entries");
    }
    if (!this.recaptchaRef.current.getValue()) {
      return AlertMessage("error", "Please verify that you are not a robot.");
    }
    alert("submit form");
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Container>
        <Col xs={12} md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>

              <Form
                noValidate
                // validated={}
                onSubmit={this.handleSubmit}
                className="needs-validation"
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    isInvalid={name.message.length > 0}
                    isValid={name.message.length === 0 && name.touched === true}
                    className="invalid"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name.value}
                    onChange={this.handleChange}
                  ></Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {name.message.map((error) => (
                      <li key={error} className="list-unstyled">
                        {error}
                      </li>
                    ))}
                  </Form.Control.Feedback>
                  {name.message.length === 0 && (
                    <Form.Control.Feedback>Perfect!</Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    isInvalid={email.message.length > 0}
                    isValid={
                      email.message.length === 0 && email.touched === true
                    }
                    className="invalid"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={email.value}
                    onChange={this.handleChange}
                  ></Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {email.message.map((error) => (
                      <li key={error} className="list-unstyled">
                        {error}
                      </li>
                    ))}
                  </Form.Control.Feedback>
                  {email.message.length === 0 && (
                    <Form.Control.Feedback>Perfect!</Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    isInvalid={message.message.length > 0}
                    isValid={
                      message.message.length === 0 && message.touched === true
                    }
                    className="invalid"
                    as="textarea"
                    name="message"
                    placeholder="Enter message"
                    value={message.value}
                    onChange={this.handleChange}
                    style={{ height: "200px" }}
                  ></Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {message.message.map((error) => (
                      <li key={error} className="list-unstyled">
                        {error}
                      </li>
                    ))}
                  </Form.Control.Feedback>
                  {message.message.length === 0 && (
                    <Form.Control.Feedback>Perfect!</Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formReCAPTCHA">
                  <ReCAPTCHA
                    sitekey={"6Lfup4EhAAAAAD8kFlT0r6i-1pSkIBbAdtzuKHZi"}
                    ref={this.recaptchaRef}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default Contact_Form;
