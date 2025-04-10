import React, { useState } from "react";

const PayrollAndCompensation = () => {
  const employees = [
    {
      id: "WVD4",
      name: "Stephen Denn",
      designation: "Internship",
      gender: "Male",
      location: "Karnataka",
      department: "Pharmacy",
      bank: {
        name: "Federal Bank",
        account: "27914546566565965",
        ifsc: "FB5D00139950",
        pf: "FBLAD 0333385 000 000135",
      },
      salary: {
        basic: 29000,
        overtime: 5800,
        incomeTax: 1000,
        payableDays: "22/22 Days",
        leaves: "0/0 Days",
      },
    },
    {
      id: "EMP102",
      name: "John Doe",
      designation: "Software Engineer",
      gender: "Male",
      location: "Mumbai",
      department: "IT",
      bank: {
        name: "HDFC Bank",
        account: "2456789123456789",
        ifsc: "HDFC0001234",
        pf: "HDFCPF 1234567",
      },
      salary: {
        basic: 45000,
        overtime: 6000,
        incomeTax: 2000,
        payableDays: "20/22 Days",
        leaves: "2/22 Days",
      },
    },
    {
      id: "EMP103",
      name: "Jane Smith",
      designation: "HR Manager",
      gender: "Female",
      location: "Delhi",
      department: "Human Resources",
      bank: {
        name: "SBI Bank",
        account: "3654789123654123",
        ifsc: "SBI0005678",
        pf: "SBIPF 4567890",
      },
      salary: {
        basic: 55000,
        overtime: 4000,
        incomeTax: 3000,
        payableDays: "21/22 Days",
        leaves: "1/22 Days",
      },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Handle search and select employee
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const employee = employees.find(
      (emp) =>
        emp.id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSelectedEmployee(employee || null);
  };

  // Function to generate payslip
  const generatePayslip = () => {
    alert(`Payslip generated for ${selectedEmployee.name}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Employee by Name or ID..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border rounded-md"
        />
      </div>

      {selectedEmployee ? (
        <>
          {/* Employee Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p><strong>Employee Code:</strong> {selectedEmployee.id}</p>
              <p><strong>Employee Name:</strong> {selectedEmployee.name}</p>
              <p><strong>Designation:</strong> {selectedEmployee.designation}</p>
              <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
              <p><strong>Location:</strong> {selectedEmployee.location}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
            </div>
            <div>
              <p><strong>Bank Name:</strong> {selectedEmployee.bank.name}</p>
              <p><strong>Bank Account:</strong> {selectedEmployee.bank.account}</p>
              <p><strong>IFSC Code:</strong> {selectedEmployee.bank.ifsc}</p>
              <p><strong>PF Account:</strong> {selectedEmployee.bank.pf}</p>
              <p><strong>Payable Working Days:</strong> {selectedEmployee.salary.payableDays}</p>
              <p><strong>Take/Remaining Leaves:</strong> {selectedEmployee.salary.leaves}</p>
            </div>
          </div>

          {/* Earnings & Deductions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Earnings */}
            <div>
              <h3 className="text-lg font-bold mb-2">Earnings</h3>
              <div className="flex justify-between items-center mb-2">
                <p>Basic Salary</p>
                <input
                  type="number"
                  value={selectedEmployee.salary.basic}
                  onChange={(e) => {
                    const updatedSalary = {
                      ...selectedEmployee.salary,
                      basic: parseFloat(e.target.value) || 0,
                    };
                    setSelectedEmployee({ ...selectedEmployee, salary: updatedSalary });
                  }}
                  className="border p-2 w-32 text-right rounded-md"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p>Overtime</p>
                <input
                  type="number"
                  value={selectedEmployee.salary.overtime}
                  onChange={(e) => {
                    const updatedSalary = {
                      ...selectedEmployee.salary,
                      overtime: parseFloat(e.target.value) || 0,
                    };
                    setSelectedEmployee({ ...selectedEmployee, salary: updatedSalary });
                  }}
                  className="border p-2 w-32 text-right rounded-md"
                />
              </div>
            </div>

            {/* Deductions */}
            <div>
              <h3 className="text-lg font-bold mb-2">Deductions</h3>
              <div className="flex justify-between items-center mb-2">
                <p>Income Tax</p>
                <input
                  type="number"
                  value={selectedEmployee.salary.incomeTax}
                  onChange={(e) => {
                    const updatedSalary = {
                      ...selectedEmployee.salary,
                      incomeTax: parseFloat(e.target.value) || 0,
                    };
                    setSelectedEmployee({ ...selectedEmployee, salary: updatedSalary });
                  }}
                  className="border p-2 w-32 text-right rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Net Salary */}
          <div className="mt-4">
            <h3 className="text-lg font-bold">Total Earnings</h3>
            <p className="text-xl font-semibold">
              Net Salary Payable: {(selectedEmployee.salary.basic + selectedEmployee.salary.overtime - selectedEmployee.salary.incomeTax).toFixed(2)}
            </p>
          </div>

          {/* Generate Payslip Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={generatePayslip}
              className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition"
            >
              +Generate PaySlip
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Search for an employee to generate the payslip.</p>
      )}
    </div>
  );
};

export default PayrollAndCompensation;
