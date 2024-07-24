import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useFormData() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long.";
    }
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";
    if (!formData.dob) formErrors.dob = "Date of Birth is required";

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formErrors = validate();
      if (Object.keys(formErrors).length === 0) {
        setErrors({});
        if (localStorage.getItem("formData")) {
          let data = await JSON.parse(localStorage.getItem("formData"));
          data = [
            ...data,
            { ...formData, id: Math.random().toString(36).substr(2, 9) },
          ];
          localStorage.setItem("formData", JSON.stringify(data));
          toast.success("User Registered Successfully");
          navigate("/list");
        } else {
          localStorage.setItem(
            "formData",
            JSON.stringify([
              { ...formData, id: Math.random().toString(36).substr(2, 9) },
            ])
          );
          toast.success("User Registered Successfully");
          navigate("/list");
        }
      } else {
        setErrors(formErrors);
      }
    } catch (e) {
      toast.error("Registration Failed");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
    });
    setErrors({});
  };

  return {
    handleReset,
    handleSubmit,
    validate,
    handleChange,
    errors,
    setErrors,
    formData,
    setFormData,
  };
}

export default useFormData;
