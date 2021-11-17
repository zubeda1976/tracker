import React from "react";
import { Modal } from "react-bootstrap";

function PopUpModal({
  addShow,
  handleAddClose,
  handleChange,
  newDoc,
  postDoc,
  isClass,
}) {
  return (
    <Modal show={addShow} onHide={handleAddClose}>
      <Modal.Body>
        <h1 className="addCityHeader">
          Add a {`${isClass ? "Class" : "City"}`}
        </h1>
        <label>Name of {`${isClass ? "Class" : "City"}`}</label>
        <input
          type="text"
          className="addCityInput"
          name="name"
          placeholder={`Enter name of ${isClass ? "Class" : "City"}`}
          onChange={handleChange}
          value={newDoc.name}
        ></input>
        {isClass && <label>Google Sheet Link for marking</label>}
        {isClass && (
          <input
            type="text"
            name="googleSheet_URL"
            className="addCityInput"
            placeholder="eg https://drive.google.com/...."
            onChange={handleChange}
            value={newDoc.googleSheet_URL}
          ></input>
        )}
        <div className="modal-buttons">
          <button className="cancel-add" onClick={handleAddClose}>
            Cancel
          </button>
          <button className="add-confirm" onClick={postDoc}>
            Add
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PopUpModal;
