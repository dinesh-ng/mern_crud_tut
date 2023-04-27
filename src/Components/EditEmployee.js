import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};
const EditEmployee = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // To get employee based on ID
    const getEmployeeById = () => {
      axios
        .get("http://localhost:4000/employees/editEmployee/" + id)
        .then((response) => {
          setEmployee({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            phone: response.data.phone,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getEmployeeById();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  // To update the record on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/employees/updateEmployee/" + id, employee)
      .then((response) => {
        console.log("Edit successful!");
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

export default EditEmployee;
