import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import data from "./mockData.json";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  useEffect(() => {
    if (params?.id) {
      const p = data.find((d) => d._id === params.id);
      setName(p.name);
      setCompany(p.company);
      setAge(p.age);
    }
  }, [params]);

  return (
    <div style={{ marginTop: 10 }}>
      <h3 align="center">Update Person Info</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Person Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Company Name: </label>
          <input
            type="text"
            className="form-control"
            value={company}
            onChange={onChangeCompany}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={onChangeAge}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update Person Info"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
