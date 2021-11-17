function GitHubSignIn(props) {
let code="";
  code= window.location.search.slice(props.url.indexOf("=") + 1);
  if(code!==""){
    window.localStorage.setItem("info", JSON.stringify(code));
   // props.setGithubUser(JSON.parse(window.localStorage.getItem("info")));
  }
  return <></>;
}
export default GitHubSignIn;
