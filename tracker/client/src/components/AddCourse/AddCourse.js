import "../../components/AddCourse/AddCourse.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import {postCourse,getModule} from "./../Repository/GithubRepository.js";
import coursetitleImg from '../../assets/course-title.png'
import githubImg from '../../assets/github.png';
import taskImg from '../../assets/task.png';
import rubricImg from '../../assets/rubric.png'
function AddCourse(prop) {
  //*************** all state variables use to store data on back-end */
  const [course, setCourse] = useState(null);
  const [module1, setModule] = useState(null);
  const [githubRepository, setGitHubRepository] = useState(null);
  const [task, setTask] = useState(null);
  const [rubric, setRubric] = useState(null);
  const [modulesName,setModulesName]=useState([]);
  useEffect(function () {
    //*************************fetch all module names from database
    getModule(onSuccess);
    function onSuccess(result){
      //let temp=result.slice(1,result.length);
      if(result){
        setModulesName(result)
      }
      
    }
  }, []);

  //*********************validate the all input before send to back-end
  function validate() {
   
    if (course === null) {
      alert("Please type the course name");
      return false;
    }
    if (module1 === null) {
      alert("Please type the module title");
      return false;
    }
    if (githubRepository === null) {
      alert("Please type the gitHub repository");
      return false;
    }
    if (task === null) {
      alert("Please type the task");
      return false;
    }
    if (rubric === null) {
      alert("Please type the Rubric");
      return false;
    }
    return true;
  }
  //*******************************post******************** */
 
  function post() {
    if (validate()) {
      postCourse(
        onCoursePosted,
        course,
        module1,
        githubRepository,
        task,
        rubric,prop.db
      );
    }
  }
  function onCoursePosted(result) {
    prop.refresh(result)
    alert("Data has been saved");
  }

  //cancel to save the data in database
  function cancel() {
    setCourse(null);
    setModule(null);
    setGitHubRepository(null);
    setTask(null);
    setRubric(null);
  }
  return (
    <div id="add-course-container">
      <div id="go-back">
        <ArrowBackIcon id="back-arrow" />
        <a
          href="/#/dashboard"
          onClick={() => {
            prop.funcCourseManagement();
          }}
        >
          Back coursework management
        </a>
      </div>
      <div id="add-course-content-container">
        <div id="title">Create a Coursework</div>
        <div id="add-course-content">
          <div className="input-set">
            <div className="input-title">
              <img src={coursetitleImg} alt="coursetitle" />
            </div>
            <input
              type="text"
              name="txtCourse"
              className="input-txt"
              value={course}
              placeholder="e.g JS1 Week 1"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </div>
         
          <select
            className="input-txt"
            name="txtModule"
            onChange={(e)=>{setModule(e.target.value);}}>
            <option className="input-txt" selected value="Select">
              Select
            </option>
           
            {/* {modulesName && <Modules mod={modulesName} />} */}
            {modulesName && <Modules mod={prop.db[0].modules} />}
          </select>
          {/* <input type="text" id="input" placeholder="     Select" /> */}
        </div>
        <div className="input-set">
          <div className="input-title">
            <img src={githubImg} alt="github" />
          </div>
          <input
              className="input-txt"
              id="input"
              name="txtGitHub"
              value={task}
              placeholder="e.g syllabus.codeyourfuture.io/js-core-1/week-1/homework"
              onChange={(e) => {
                setGitHubRepository(e.target.value);
              }}
            />
          <div className="input-set">
            <div className="input-title">
              <img src={taskImg} alt="task" />
            </div>
            <input
              className="input-txt"
              id="input"
              name="txtTask"
              value={task}
              placeholder="e.g syllabus.codeyourfuture.io/js-core-1/week-1/homework"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>
          <div className="input-set">
            <div className="input-title">
              <img src={rubricImg} alt="rubric" />
            </div>
            <input
              type="text"
              className="input-txt"
              name="txtRubric"
              value={rubric}
              placeholder="e.g syllabus.codeyourfuture.io/guides/marking-guide"
              onChange={(e) => {
                setRubric(e.target.value);
              }}
            />
          </div>
          <div id="cancel-create-buttons">
            <div id="cancel" onClick={cancel}>
              <div>Cancel</div>
            </div>
            <div id="create" onClick={post}>
              <div>Create</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//********** return the all module from database*/
function Modules(prop) {
  if (prop.mod.length > 0) {
    return (
      <>
        {prop.mod.map((obj) => {
          return (
            <option className="input-txt" value={obj._id}>
              {obj.name}
            </option>
          );
          })}
      </>
    );
  } else {
    return <option>No module exist in database</option>;
  }
}
export default AddCourse;