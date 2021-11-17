import { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import {getModule,postModule} from '../../components/Repository/GithubRepository.js'
import '../../components/AddModule/AddModule.css'
function AddModule(props){
    const [close,setClose]=useState(false)
    const [show,setShow]=useState(true)
    const [moduleName,setModuleName]=useState(null)
    const [existingModules,setExistingModules]=useState(null)
    useEffect(function () {
      //**********get all available modules from db */
   //setShow(props.addModule);
    getModule(onSuccess)
    function onSuccess(result){
      if(result){
        setExistingModules(result)
      }
    }
  },[show])
  //********close the module windpw */
  function funcCancel(){
   setShow(false);
   setClose(true); 
    window.location.replace(process.env.REACT_APP_CLIENT_URL);
  }
   //*********************validate the input before send to back-end
   function validate() {
   
    if (moduleName === null) {
      alert("Please type the module name");
      return false;
    }
  
    return true;
  }
     //*****************************post */
     function post() {
     
      if (validate()) {
        if(existingModules){
          var found=existingModules.find(function(obj){
            return obj===moduleName
          })
          if(found===moduleName){
            alert("This Module is already exist")
          }else{
            postModule(onModulePosted,moduleName,props.db);
          }
        }
      
      }
    }
    function onModulePosted(result) {
      props.refresh(result)
      alert("Data has been saved");
    }
    return(
     
        <Modal show={show} onCancel={close} id="modal-container">
          <Modal.Body id="modal-content">
            <h1 id="module-title">Create a Module</h1>
            <label id="module-label">Name of module</label>
            <input
              type="text"
              id="addModuleInput"
              placeholder="Enter name of module"
              onChange={(e) => setModuleName(e.target.value)}
              value={moduleName}
            ></input>
              <div className="modal-buttons1" id="btn" >
                <button className="cancel-create" onClick={funcCancel} id="btn-cancel">
                  Cancel
                </button>
                <button className="add-confirm" onClick={post} id="btn-create">
                  Create
                </button>
              </div>
          </Modal.Body>
        </Modal>
   
    )
}
export default AddModule