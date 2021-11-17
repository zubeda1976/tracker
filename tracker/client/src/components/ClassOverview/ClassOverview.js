import React, { useState, useContext } from "react";
import "../ClassOverview/ClassOverview.css";
import kebabmenu from "../../assets/kebabmenu.png";
import citiesContext from "../../contexts/cityContext.js";
import PopUpModal from "../CitiesOverview/PopUpModal/PopUpModal";
import axios from "axios";

const ClassOverview = (props) => {
  const [active, setActive] = useState({ id: "", isHidden: false });
  ////////////////////////////////

  const [addShow, setAddShow] = useState(false);
  const [newClass, setNewClass] = useState({ name: "", googleSheet_URL: "" });

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const { citiesData } = useContext(citiesContext);

  const postClass = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/cityroute/city/class/${props.cityID_prop}`,
        { ...newClass }
      )
      .then(() => {
        setAddShow((prev) => !prev);
        props.setRefresh_fun((prev) => !prev);
      });
  };

  const deleteClass = async (id) => {
    await axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/cityroute/city/deleteclass/${id}/${props.cityID_prop}`
      )
      .then((res) => {
        props.setRefresh_fun((prev) => !prev);
      });
  };
  //////////////////
  const handleChange = ({ target: { name, value } }) => {
    setNewClass((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="class-overview-container">
      <header className="class_header">
        <h1>
          {citiesData.filter((city) => city._id === props.cityID_prop)[0]?.name}
        </h1>
        <button className="addClass" onClick={handleAddShow}>
          + Add Class
        </button>
        <PopUpModal
          addShow={addShow}
          handleAddClose={handleAddClose}
          handleChange={handleChange}
          newDoc={newClass}
          postDoc={postClass}
          isClass
        />
      </header>
      <div className="class_container">
        {citiesData
          .filter((city) => city._id === props.cityID_prop)[0]
          ?.classes.map((class_) => (
            <div
              key={class_._id || Math.random()}
              className="card"
              onClick={props.funcStudentsDashboard}
            >
              <div className="content">
                <p className="class"> {class_.name} </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive((prev) => ({
                      ...prev,
                      id: class_._id,
                      isHidden: !prev.isHidden,
                    }));
                  }}
                  className="menuIcon"
                >
                  <img src={kebabmenu} alt="menu"></img>
                </div>

                <ul
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive((prev) => ({
                      isHidden: !prev.isHidden,
                    }));
                  }}
                  className={`menu ${
                    active.isHidden && class_._id === active.id
                      ? "active"
                      : "inactive"
                  }`}
                >
                  <li>Edit</li>
                  <li onClick={() => deleteClass(class_._id)}>Delete</li>
                </ul>
              </div>
              <div className="footer"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClassOverview;
