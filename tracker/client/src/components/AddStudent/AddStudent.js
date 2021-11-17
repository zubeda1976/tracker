import React from "react";
import "../AddStudent/AddStudent.css";
import icon from "../../assets/backarrow.png";

const AddStudent = () => {
  return (
    <div id="add-student-container">
      <button className="back">
        <img src={icon} alt="back to students"></img>Back students
      </button>
      <div className="addStudent">
        <h1>Add a Student</h1>
        <label>Known As</label>
        <input type="text" placeholder="Enter name of student"></input>
        <label>Github ID</label>
        <input type="text" placeholder="Enter Github ID of student"></input>
        <label>Picture of student (Optional)</label>
        <input type="file"></input>
        <div className="studentConfirmation">
          <button className="cancelStudentAdd">Cancel</button>
          <button className="addStudentButton">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
