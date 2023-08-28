import { employeesUrl } from "./config";

export const createEmp = async (empData) => {
    const response = await fetch(`${employeesUrl}/employees`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empData)
        });
    const employee = await response.json();
    return employee;
}

export const getEmp = async () => {
    const response = await fetch(`${employeesUrl}/employees`);
    const employees = await response.json();
    return employees
}

export const getEmp2 = async (Empid) => {
    const response = await fetch(`${employeesUrl}/employees/${Empid}`);
    const employees = await response.json();
    return employees
}

export const deleteEmployee = async (Empid) => {
    const response = await fetch(`${employeesUrl}/employees/${Empid}`,
        {
            method: 'DELETE'
        });
    const employee = response.json();
    return employee;
}

export const updateEmployees = async (Empid, empData) => {
    const response = await fetch(`${employeesUrl}/employees/${Empid}`,
        {
            method: 'PUT',
            body: JSON.stringify(empData),
            headers: { 'Content-Type': 'application/json' }
        });
    const emp = await response.json();
    return emp;
}