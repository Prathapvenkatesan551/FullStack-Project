import React, { useEffect, useState } from 'react';
import { GetUsers, SignupService } from "../services/SignupService";


export const DataBasetable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    GetUsers()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Employee Data</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>mobile Number</th>
            <th>password</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.categoryId || index}>
              <td>{employee.categoryId}</td>
              <td>{employee.categoryName}</td>
              <td>{employee.email}</td>
              <td>{employee.mobileNumber}</td>
              <td>{employee.password}</td>
              <td>{employee.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <CreateEmp />
    </div>
  );
};

const CreateEmp = () => {
  const [categoryId, setEmpId] = useState('');
  const [categoryName, setEmpName] = useState('');

  const handleEmpIdChange = (e) => {
    setEmpId(e.target.value);
  };

  const handleEmpNameChange = (e) => {
    setEmpName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = { categoryId, categoryName };

    SignupService(employee)
      .then((response) => {
        console.log('Employee added:', response.data);
        // Optionally, refresh the table data here.
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee ID"
          value={categoryId}
          onChange={handleEmpIdChange}
        />
        <input
          type="text"
          placeholder="Employee Name"
          value={categoryName}
          onChange={handleEmpNameChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
