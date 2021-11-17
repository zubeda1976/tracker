import "../../components/Course/Course.css";
import DropDownCourse from "../../components/DropDown/DropDownCourse.js";
import CourseDataFile from "../../Course.json";
import CourseWorkContext from "../../contexts/userContext.js";

function Course(prop) {
  if (CourseDataFile.length > 0) {
    return (
      <>
        {prop.coursework.map((obj) => {
          return (
            <div key={Math.random()} className="course-content" id={obj._id}>
              <div className="course-title">{obj.name}</div>
              <CourseWorkContext.Consumer>
                {(value) =>
                  value.database && (
                    <DropDownCourse
                      id={obj._id}
                      db={value.database}
                      refresh={value.refresh}
                      name={obj.name}
                      parentId={prop.parentId}
                    />
                  )
                }
              </CourseWorkContext.Consumer>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>..................</h1>;
  }
}
export default Course;
