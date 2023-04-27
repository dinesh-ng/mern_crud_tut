import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

const AddEmployee = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  // When value changes of the fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // To add new employee when user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/employees/addEmployee", employee)
      .then((response) => {
        console.log(response.status);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <form style={customStyle} onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            value={employee.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            value={employee.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Email
          <input
            name="email"
            type="text"
            value={employee.email}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Phone No
          <input
            name="phone"
            type="text"
            value={employee.phone}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <br />
        <input type="submit" value="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default AddEmployee;
