import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home(props) {
  const [userData, setData] = useState(null);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((buffer) => buffer.text())
      .then((stringResponse) => JSON.parse(stringResponse))
      .then((users) => {
        setData(users);
      });
  }, []);
  return (
    <div style={{ display: "flex", margin: "10%", justifyContent: "center" }}>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((usersData, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{usersData.username}</td>
                <td>{usersData.company.name}</td>
                <td>
                  <Link to={"/post?userId=" + usersData.id}>Posts</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
