import React, { useState, useEffect } from "react";
import CourseManagement from "../../components/CourseMagement/CourseManagement.js";
import SideBar from "../../components/SideBar/SideBar.js";
import AddCourse from "../../components/AddCourse/AddCourse.js";
import CitiesOverview from "../../components/CitiesOverview/CitiesOverview";
import ClassOverview from "../../components/ClassOverview/ClassOverview";
import StudentsDashboard from "../../components/Students/StudentsDashboard.js";
import AddStudent from "../../components/AddStudent/AddStudent.js";
import CourseWorkContext from "../../contexts/userContext.js";
import citiesContext from "../../contexts/cityContext.js";
const Dashboard = (props) => {
  const [courseManagement, setCourseManagement] = useState("start");
  const [cities, setCities] = useState(null);
  const [classes, setClasses] = useState(null);
  const [addCourse, setAddCourse] = useState(null);
  const [sideBar, setSideBar] = useState("start");
  const [studentDashboard, setStudentDashboard] = useState(null);
  const [addStudent, setAddStudent] = useState(null);
  const [modules, setModules] = useState(null);
  const [db, setDB] = useState(null);
  const [activate, setActivate] = useState(0);

  useEffect(
    function () {
      fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`)
        .then(function (obj) {
          return obj.json();
        })
        .then(function (data) {
          setDB(data);
          setModules(data[0].modules);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [activate]
  );
  /////////////
  const [citiesData, setCitiesData] = useState([]);
  const [cityID, setCityId] = useState(null);
  const [classId, setClassId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cityroute/city`)
      .then((res) => res.json())
      .then((data) => {
        setCitiesData(data);
      });
  }, [refresh]);
  ////////////
  function funcAddStudent() {
    setAddStudent("start");
    setStudentDashboard(null);
    setClasses(null);
    setCourseManagement(null);
    setCities(null);
    setAddCourse(null);
  }
  function funcStudentsDashboard() {
    setStudentDashboard("start");
    setClasses(null);
    setCourseManagement(null);
    setCities(null);
    setAddCourse(null);
    setAddStudent(null);
  }

  function funcClasses(id) {
    setCityId(id);
    setClasses("start");
    setCourseManagement(null);
    setCities(null);
    setAddCourse(null);
    setAddStudent(null);
    setStudentDashboard(null);
  }
  /** */
  function funcCities() {
    setClasses(null);
    setCourseManagement(null);
    setCities("start");
    setAddCourse(null);
    setAddStudent(null);
    setStudentDashboard(null);
  }

  //** */
  function funcAddCourse() {
    setClasses(null);
    setCourseManagement(null);
    setCities(null);
    setAddCourse("start");
    setAddStudent(null);
    setStudentDashboard(null);
  }
  function funcCourseManagement() {
    setClasses(null);
    setCourseManagement("start");
    setCities(null);
    setAddCourse(null);
    setAddStudent(null);
    setStudentDashboard(null);
  }

  return (
    <>
      <div id="page-container">
        {sideBar && (
          <SideBar
            funcGitHubLogOut={props.funcGitHubLogOut}
            funcCourseManagement={funcCourseManagement}
            funcCities={funcCities}
            setGithubUser={props.setGithubUser}
          />
        )}
        <CourseWorkContext.Provider
          value={{ database: db, refresh: setActivate }}
        >
          {courseManagement && (
            <CourseManagement
              funcAddCourse={funcAddCourse}
              gitHubPhoto={props.gitHubUser.avatar_url}
              gitHubLogin={props.gitHubUser.login}
            />
          )}
        </CourseWorkContext.Provider>
        {cities && (
          <citiesContext.Provider
            value={{
              citiesData: citiesData,
              setCityId_fun: setCityId,
            }}
          >
            <CitiesOverview
              funcClasses={funcClasses}
              setRefresh_fun={setRefresh}
            />
          </citiesContext.Provider>
        )}
        {classes && (
          <citiesContext.Provider
            value={{
              citiesData: citiesData,
              setCityId_fun: setCityId,
            }}
          >
            <ClassOverview
              funcStudentsDashboard={funcStudentsDashboard}
              cityID_prop={cityID}
              setRefresh_fun={setRefresh}
            />
          </citiesContext.Provider>
        )}
        {addCourse && (
          <AddCourse
            funcCourseManagement={funcCourseManagement}
            db={db}
            refresh={setActivate}
          />
        )}
        {studentDashboard && (
          <StudentsDashboard funcAddStudent={funcAddStudent} />
        )}
        {addStudent && <AddStudent />}
      </div>
    </>
  );
};
export default Dashboard;
