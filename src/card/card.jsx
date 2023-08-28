import "./card.css"; // Import your CSS file for styling
import { getEmp, deleteEmployee } from "../empcrud";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeCard = () => {
  const [Employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const response = await getEmp();
    setEmployees(response);
  };

  const removeEmployees = async (empid) => {
    await deleteEmployee(empid);
    const newresponse = Employees.filter(({ id }) => empid !== id);
    setEmployees(newresponse);
  };

  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ padding: "10px", display: "flex" }}>
        {Employees.map(
          (data, i) => (
            i,
            (
              <div className="col-xs-12 col-sm-4">
                <div className="employee-card">
                  <img
                    src={data.url}
                    alt={`${data.name}'s profile`}
                    className="employee-image"
                  />
                  <div className="employee-info">
                    <h2 className="employee-name">{data.name} </h2>

                    <p className="employee-age">Age: {data.age}</p>
                    <p className="employee-dob">Date of Birth: {data.dob}</p>
                    <p className="employee-address">Gender: {data.gender}</p>
                    <p className="employee-address">Contact: {data.contact}</p>
                    <p className="employee-address">Address: {data.address}</p>
                  </div>
                  <div className="options">
                    <div
                      className="delete"
                      onClick={() => removeEmployees(data.id)}
                    >
                      <a>
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </div>
                    <Link to={`/edit?id=${data.id}`}>
                      <div className="edit">
                        <a>
                          <i className="fa-solid fa-edit"></i>
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
