import logo from "../../assets/logo.png";
import "../HomePage/Home.css";
import gitHubLogo from "../../assets/gitHubImg.png";
const Home = (props) => {
  return (
    <div id="home">
      <div id="cyfLogo">
        <img src={logo} alt="logo" />
      </div>
      <div id="login">
        <div id="para1">
          <div>Welcome to the Coursework Tracker!</div>
        </div>
        <div id="para2">
          Please log in with your Github account to continue.
        </div>
        <a href={process.env.REACT_APP_GIT_AUTH}>
          <div id="btn-login">
            <div id="img-box">
              <img src={gitHubLogo} alt="gitLogo" />
            </div>
            <div id="btn-text"> Log in with Github </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Home;
