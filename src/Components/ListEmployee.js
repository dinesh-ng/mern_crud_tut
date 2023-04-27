import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
// To use routing functionalities
import { Link } from "react-router-dom";
import EmployeeService from "./Services";

var divStyle = {
  margin: "8% 8%",
};

const ListEmployee = (props) => {
  const employeeService = new EmployeeService();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeeList();
  }, []);

  // To get all the employees
  const getEmployeeList = () => {
    axios
      .get("http://localhost:4000/employees")
      .then((response) => {
        // console.log(response);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // To delete any employee
  const deleteEmployee = (empid) => {
    employeeService.deleteEmployee(empid);
    getEmployeeList();
  };

  return (
    <div style={divStyle}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <Link
                      to={"editemployee/" + employee._id}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteEmployee(employee._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListEmployee;
