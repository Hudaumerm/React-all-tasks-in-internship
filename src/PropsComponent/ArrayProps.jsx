import React from "react";
import { Table } from "react-bootstrap";

function ArrayProps({data}) {
  console.log(data);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        {data.map((i) => 
        {
          return (
            
              <tbody>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.place}</td>
                </tr>
              </tbody>
            
          
        )})};
      </Table>
    </div>
  );
}

export default ArrayProps;
