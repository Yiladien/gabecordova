import React, { useState } from "react";

//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// bootstrap icons
import {
  ClipboardFill,
  ClipboardCheckFill,
  EnvelopeFill,
} from "react-bootstrap-icons";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    emailTo: "gcordova9918@gmail.com",
    emailSubject: "Hello Gabe",
    emailBody: "Hello Gabe, I would like to connect!",
  });

  const [copyToggle, setCopyToggle] = useState(false);

  const handleCopy = (event) => {
    if (event.target.name === "copyEmailTo") {
      navigator.clipboard.writeText(formData.emailTo);
    }

    setCopyToggle(true);

    setTimeout(() => {
      setCopyToggle(false);
    }, 2000);
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormClear = () => {
    console.log("clear");

    setFormData({
      ...formData,
      emailSubject: "",
      emailBody: "",
    });
  };

  return (
    <Card bg="secondary" text="white" className="border-0">
      <Card.Header>
        <h4 className="text-light mt-1">
          <EnvelopeFill className="me-2 pb-1" />
          Send an Email
        </h4>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>To:</Form.Label>
          <InputGroup size="sm" className="mb-3">
            <Form.Control
              id="emailTo"
              size="sm"
              type="email"
              defaultValue={formData.emailTo}
              title="gcordova9918@gmail.com"
              readOnly
              disabled
            />
            <Button
              variant={copyToggle ? "success" : "dark"}
              id="button-addon2"
              className="d-flex align-items-center focus-ring"
              title="Copy"
              name="copyEmailTo"
              onClick={handleCopy}
            >
              {!copyToggle ? (
                <ClipboardFill className="pe-none" />
              ) : (
                <ClipboardCheckFill
                  className="pe-none"
                  style={{
                    transform: "scale(1.5)",
                  }}
                />
              )}
            </Button>
          </InputGroup>
          <Form.Group className="mb-3" controlId="emailSubject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              value={formData.emailSubject}
              className="focus-ring"
              name="emailSubject"
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailBody">
            <Row className="justify-content-between">
              <Col>
                <Form.Label>Body:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label>
                  {formData.emailBody.length > 0
                    ? formData.emailBody.length
                    : null}
                </Form.Label>
              </Col>
            </Row>
            <Form.Control
              size="sm"
              as="textarea"
              rows={5}
              value={formData.emailBody}
              className="focus-ring"
              name="emailBody"
              onChange={handleFormChange}
            />
            <Form.Text id="emailDisclaimer" className="text-white-50">
              A draft email will open in your default email application.
            </Form.Text>
          </Form.Group>
          <Row className="justify-content-between">
            <Col xs="auto">
              <Button
                variant="dark"
                name="clear"
                onClick={handleFormClear}
                disabled={
                  formData.emailSubject === "" && formData.emailBody === ""
                    ? true
                    : false
                }
              >
                Clear
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="success"
                name="create"
                href={`mailto:${formData.emailTo}?subject=${encodeURIComponent(
                  formData.emailSubject
                )}&body=${encodeURIComponent(formData.emailBody)}`}
                disabled={
                  formData.emailSubject === "" || formData.emailBody === ""
                    ? true
                    : false
                }
              >
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmailForm;
