import "../../components/Module/Module.css";
import Course from "../../components/Course/Course.js";
import DropDownModule from "../../components/DropDown/DropDownModule.js";
function Module(prop) {
  return (
    <>
      {prop.modules.map((obj) => {
        return (
          <div key={Math.random()} className="module-container" id={obj._id}>
            <div className="module-content" id={obj._id}>
              <div className="module-title">{obj.name}</div>
              <DropDownModule id={obj._id} />
            </div>
            {obj.coursework.length > 0 && (
              <Course
                id={obj._id}
                coursework={obj.coursework}
                parentId={obj._id}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default Module;
