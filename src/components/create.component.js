import React, { useReducer } from "react";

const Create = () => {
  const [person, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "name":
          return { ...state, name: action.value };
        case "company":
          return { ...state, company: action.value };
        case "age":
          return { ...state, age: action.value };
        case "reset":
          return { name: "", company: "", age: "" };

        default:
          return state;
      }
    },
    { name: "", company: "", age: "" }
  );

  const handleOnChange = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "reset" });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add New Person</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Add Person Name: </label>
          <input
            id="name"
            name="name"
            value={person.name}
            onChange={handleOnChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Add Company Name: </label>
          <input
            id="company"
            name="company"
            value={person.company}
            onChange={handleOnChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Add Age: </label>
          <input
            id="age"
            name="age"
            value={person.age}
            onChange={handleOnChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Register Business"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
