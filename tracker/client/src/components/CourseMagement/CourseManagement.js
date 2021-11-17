import "../CourseMagement/CourseManagement.css";
import Module from "../../components/Module/Module.js";
import DropDown from "../../components/DropDown/DropDownContentManagement.js";
import "../../pages/DashBoard/Dshboard.css";
import CourseWorkContext from "../../contexts/userContext.js";
import AddNewModule from '../../components/AddModule/AddModule.js'
import { useState } from "react";
function CourseManagement(props) {
  /****************************add module */
  const [addModule,setAddModule]=useState(false)

  /*********************************add coursework */
  function funcAddCourseCall() {
    props.funcAddCourse();
  }
  return (
    <div id="course-management-container"> 
      <div id="course-management-title-bar">
        <div id="coursework-title">Coursework Management</div>
        {/* <div id="github-photo">
          <img
            src={props.gitHubPhoto}
            alt="pic"
            style={{ borderRadius: "50%" }}
          />
        </div> */}
      </div>
      <div id="course-management-content">
        <div id="course-management-content-title-bar">
          <div id="sub-title">
            <div id="sub-title">All Coursework</div>
          </div>
          <DropDown funcAddCourseCall={funcAddCourseCall} setAddModule={setAddModule} />
        </div>
        <CourseWorkContext.Consumer>
          {(value) =>
            value.database && <Module modules={value.database[0].modules}  />
            
          }
        </CourseWorkContext.Consumer>
        <CourseWorkContext.Consumer>
          {(value) =>
           ( value.database && addModule) && <AddNewModule db={value.database[0]} refresh={value.refresh} addModule={addModule} setAddModule={setAddModule} />
          }
        </CourseWorkContext.Consumer>
      </div>
    </div>
  );
}
export default CourseManagement;
