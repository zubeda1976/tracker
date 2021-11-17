import logo from "../assets/logo.png";
import line from "../../assets/line";
import ".././SideBar/SideBar.css";

function SideBar(props) {
  function handleLogOut() {
    props.setGithubUser(null);
    window.localStorage.removeItem("code");
    
    window.location.replace(process.env.REACT_APP_CLIENT_URL);
  }
  return (
    <div id="sidebar-container">
      <img src={logo} alt="logo" id="logo" />
      <a href="/dashboard" style={{ textDecoration: "none" }}>
        <div id="txt-change-class" onClick={(e) => {}}>
          Change class
        </div>
      </a>
      <div
        className="sidebar-rows"
        onClick={() => {
          props.funcCities();
        }}
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div className="sidebar-row-txt">Cities</div>
      </div>
      <div
        className="sidebar-rows"
        onClick={() => {
          props.funcCourseManagement();
        }}
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>{" "}
        </div>
        <div className="sidebar-row-txt">Course Management</div>
      </div>
      <div className="sidebar-rows" style={{ marginLeft: "0px" }}>
        <img src={line} alt="line" style={{ marginBottom: "0.5rem" }} />
      </div>
      {/* <a href="https://github.com/" style={{textDecoration:'none',color:'black'}}> */}
      <div className="sidebar-rows" onClick={handleLogOut}>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-activity"
          >
            <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path>
            <polyline points="17 16 21 12 17 8"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
        <div className="sidebar-row-txt">Log out</div>
      </div>
      {/* </a> */}
    </div>
  );
}
export default SideBar;
