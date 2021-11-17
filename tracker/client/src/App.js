import React from "react";
import { useState } from "react";
import Home from "./pages/HomePage/Home.js";
import Dashboard from "../src/pages/DashBoard/Dashboard";
import GitHubSignIn from "../src/components/GitHubSignIn";
function App() {
  const code=window.location.search.slice(window.location.search.indexOf("=") + 1);
  code && (window.localStorage.setItem("code", JSON.stringify(code)))
   const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("code"))
  );
 
 
console.log(user)
  return (
    <>
      {!user? (<Home />):(<Dashboard gitHubUser={user} setGithubUser={setUser} />)}
    </>
  );
}

export default App;
