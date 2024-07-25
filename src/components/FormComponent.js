import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "./FormComponent.css";
import useFormData from "../hooks/useFormData";

const FormComponent = () => {
  const { errors, formData, handleChange, handleReset, handleSubmit } =
    useFormData();

  const formRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextElement = formRefs.current[index + 1];
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  return (
    <div>
      <div className="hero">Register Here</div>
      <Form className="form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            ref={(el) => (formRefs.current[0] = el)}
            value={formData.name}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={(el) => (formRefs.current[1] = el)}
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={(el) => (formRefs.current[2] = el)}
            value={formData.password}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 2)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            ref={(el) => (formRefs.current[3] = el)}
            value={formData.confirmPassword}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 3)}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            ref={(el) => (formRefs.current[4] = el)}
            value={formData.dob}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 4)}
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          className="mr-2"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={handleReset}
          className="ml-2"
        >
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
