import React, { useState } from "react";
import "./formpage.css";

const FormPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [profile, setProfile] = useState("");
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      firstname,
      lastname,
      userData,
    });
  };

  const handleEdit = () => {
    console.log("hello");
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="2">Table of candidate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {!isEditing ? <td>Firstname</td> : <input>hello</input>}
            <td>LastName</td>
            <td>Profile</td>
          </tr>
          <tr OnClick={handleEdit}>
            <td>{userData.firstname}</td>
            <td>{userData.lastname}</td>
            <td>{userData.profile}</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="LastName"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <select
          id="profile"
          name="profile"
          size="6"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        >
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="C#">C#</option>
          <option value="Javascrip">Javascript</option>
          <option value="audi">PHP</option>
        </select>
        <button type="submit" name="action">
          create
        </button>
      </form>
    </div>
  );
};

export default FormPage;
