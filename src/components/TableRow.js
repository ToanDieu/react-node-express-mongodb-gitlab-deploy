import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ obj, deletHandler }) => {
  return (
    <tr>
      <td>{obj.name}</td>
      <td>{obj.company}</td>
      <td>{obj.age}</td>
      <td>
        <Link to={`/edit/${obj._id}`} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => deletHandler(obj._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
