import React, { useState, useContext } from "react";
import "../CitiesOverview/CitiesOverview.css";
import kebabmenu from "../../assets/kebabmenu.png";
import { Modal } from "react-bootstrap";
import citiesContext from "../../contexts/cityContext.js";
import PopUpModal from "./PopUpModal/PopUpModal";
import axios from "axios";

const CitiesOverview = (props) => {
  const [active, setActive] = useState({ id: "", isHidden: false });
  const [show, setShow] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [newCity, setNewCity] = useState("");

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const deleteCity = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/cityroute/city/${id}`)
      .then((res) => {
        props.setRefresh_fun((prev) => !prev);
      });
  };

  const { citiesData } = useContext(citiesContext);

  const postCity = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/cityroute/city`, {
        name: newCity,
      })
      .then(() => {
        setAddShow((prev) => !prev);
        props.setRefresh_fun((prev) => !prev);
      });
  };

  const handleChange = (e) => {
    setNewCity(e.target.value);
  };

  return (
    <div className="cities-overview-container">
      <header className="cityHeader">
        <h1>Cities</h1>
        <button className="addCity" onClick={handleAddShow}>
          + Add City
        </button>
        <PopUpModal
          addShow={addShow}
          handleAddClose={handleAddClose}
          newDoc={newCity}
          postDoc={postCity}
          handleChange={handleChange}
          setNewCity={setNewCity}
        />
      </header>
      <div className="cards">
        {citiesData.map((cities) => {
          return (
            <div
              key={cities._id || Math.random()}
              className="card"
              onClick={() => props.funcClasses(cities._id)}
            >
              <div className="content">
                <p className="city">{cities.name}</p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive((prev) => ({
                      ...prev,
                      id: cities._id,
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
                    active.isHidden && cities._id === active.id
                      ? "active"
                      : "inactive"
                  }`}
                >
                  <li>Edit</li>
                  <button
                    className="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShow(true);
                    }}
                  >
                    Delete
                  </button>
                  <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Body>
                      <h1 className="header">Delete the city?</h1>
                      WARNING: This can not be undone.
                      <br />
                      <br />
                      <strong>
                        Are you sure you want to delete this city?{" "}
                      </strong>
                      If you delete this city, you will permanently lose all
                      information about this city and its classes.
                    </Modal.Body>
                    <div className="modal-footer border-0">
                      <button
                        className="cancel-btn"
                        onClick={() => setShow(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          setShow(false);
                          deleteCity(cities._id);
                        }}
                      >
                        Yes, Delete City
                      </button>
                    </div>
                  </Modal>
                </ul>
              </div>
              <div className="footer"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CitiesOverview;
