import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./List.css";
import { Form } from "react-bootstrap";

const EditForm = ({ item, onSave, onClose }) => {
  const [formData, setFormData] = useState(item);
  const [errors, setErrors] = useState({});
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

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSave(formData);
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
          ref={(el) => (formRefs.current[0] = el)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
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
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          ref={(el) => (formRefs.current[1] = el)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
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
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          ref={(el) => (formRefs.current[2] = el)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
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
          value={formData.confirmPassword}
          onChange={handleChange}
          isInvalid={!!errors.confirmPassword}
          ref={(el) => (formRefs.current[3] = el)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
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
          value={formData.dob}
          onChange={handleChange}
          isInvalid={!!errors.dob}
          ref={(el) => (formRefs.current[4] = el)}
          onKeyDown={(e) => handleKeyDown(e, 4)}
        />
        <Form.Control.Feedback type="invalid">
          {errors.dob}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        ref={(el) => (formRefs.current[5] = el)}
      >
        Save Changes
      </Button>
    </Form>
  );
};

export default EditForm;
