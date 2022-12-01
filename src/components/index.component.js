import React, { useState, useEffect, useCallback } from "react";
import data from "./mockData.json";

import TableRow from "./TableRow";

const Index = (props) => {
  const [persons, setPersons] = useState([]);

  const getList = useCallback(() => {
    setPersons(data);
  }, [data]);

  useEffect(() => {
    getList();
  }, []);

  const deleteRow = (id) => {};

  const tabRow = () => {
    return persons.map((p, i) => (
      <TableRow obj={p} key={i} deletHandler={deleteRow} />
    ));
  };
  return (
    <div>
      <h3 align="center">Persons List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Age</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
};

export default Index;
