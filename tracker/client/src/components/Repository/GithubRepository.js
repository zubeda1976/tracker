/*************move  up ***************************************************** */
function moveDown(db,refresh,id,parentId,nextId){
  let allModules=db[0];
  let indexModule;
  let indexCourseWork;
  let indexNextId;
  for(let i=0;i<allModules.modules.length;i++){
  if((allModules.modules[i]._id===parentId)){
    indexModule=i
  }
}
for(let j=0;j<allModules.modules[indexModule].coursework.length;j++){
  if((allModules.modules[indexModule].coursework[j]._id)===id){
    indexCourseWork=j
    break;
  }
}

for(let k=0;k<allModules.modules[indexModule].coursework.length;k++){
  if((allModules.modules[indexModule].coursework[k]._id)===nextId){
    indexNextId=k
    break;
  }
}

let temp=allModules.modules[indexModule].coursework[indexCourseWork]
if(indexCourseWork<(allModules.modules[indexModule].coursework.length)){
  allModules.modules[indexModule].coursework[indexCourseWork]=allModules.modules[indexModule].coursework[indexNextId];
  allModules.modules[indexModule].coursework[indexNextId]=temp;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(allModules);
    var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    };
    //`${process.env.REACT_APP_BASE_URL}/courseWork/course`
    fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result)

        refresh(result);
      })
      .catch((error) => console.log("error", error));
  }else{
    alert("you are at end of this course")
  }

}
/*************move  up ***************************************************** */
function moveUp(db,refresh,id,parentId,previousId){
  let allModules=db[0];
  let indexModule;
  let indexCourseWork;
  let indexPreviousId;
  for(let i=0;i<allModules.modules.length;i++){
  if((allModules.modules[i]._id===parentId)){
    indexModule=i
  }
}
for(let j=0;j<allModules.modules[indexModule].coursework.length;j++){
  if((allModules.modules[indexModule].coursework[j]._id)===id){
    indexCourseWork=j
    break;
  }
}

for(let k=0;k<allModules.modules[indexModule].coursework.length;k++){
  if((allModules.modules[indexModule].coursework[k]._id)===previousId){
    indexPreviousId=k
    break;
  }
}
let temp=allModules.modules[indexModule].coursework[indexCourseWork]
if(indexCourseWork>0){
  allModules.modules[indexModule].coursework[indexCourseWork]=allModules.modules[indexModule].coursework[indexPreviousId];
  allModules.modules[indexModule].coursework[indexPreviousId]=temp;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(allModules);
    var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result)

        refresh(result);
      })
      .catch((error) => console.log("error", error));
  }else{
    alert("you are at first course")
  }

}
/*************delete a coursework from DB***************************************************** */
  function deleteCourseWork(refresh,db,id,name,parentId,onCourseWorkDeleted){
  let allModules=db[0]
  let indexModule;
  let indexCourseWork;
  for(let i=0;i<allModules.modules.length;i++){
    if((allModules.modules[i]._id===parentId)){
      indexModule=i
    }
  }
  for(let j=0;j<allModules.modules[indexModule].coursework.length;j++){
    if((allModules.modules[indexModule].coursework[j]._id)===id){
      indexCourseWork=j
      break;
    }
  }
  allModules.modules[indexModule].coursework.splice(indexCourseWork,1)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(allModules);
    var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        onCourseWorkDeleted(result);
        //refresh(id);
        refresh(indexCourseWork)
      })
      .catch((error) => console.log("error", error));

    }

  /*************get all modules name***************************************************** */
 //`${process.env.REACT_APP_BASE_URL}/courseWork/moduleNames`
  function getModule(onSuccess) {
    fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/moduleNames`)
      .then(function (obj) {
        return obj.json();
      })
      .then(function (data) {
        onSuccess(data);
      })
      .then(function (err) {
        console.log(err);
      });
  }
  /*************post a module in DB***************************************************** */
  function postModule(onModulePosted,moduleName,db){
    let newModule={ 
      "name": moduleName,
      "coursework":[]
    }
    console.log(db)
    let document =db;
    document.modules.push(newModule);
    console.log(document)
    var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");
     let moduleData =document;
     var raw = JSON.stringify(moduleData);
     var requestOptions = {
       method: "PATCH",
       headers: myHeaders,
       body: raw,
      redirect: "follow",
     };
// //`${process.env.REACT_APP_BASE_URL}/courseWork/course` 

     fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`, requestOptions)
      .then((response) => response.text())
       .then((result) => {
         onModulePosted(result);
      })
       .catch((error) => console.log("error", error));
  }
  /*************post a coursework in DB***************************************************** */
  function postCourse(
    onCoursePosted,
    course,
    moduleId,
    githubRepository,
    task,
    rubric,db
  ) {
    let newCourseWork={ 
      "name": course, "syllabusUrl": githubRepository, "repoUrl": task, "rubricUrl": rubric
    }
    var index = null;
    let document =db[0];
    for (var i=0; i<document.modules.length; i++) {
        if ( document.modules[i]._id=== moduleId) {
            index = i;
            break;
        }
    }
    document.modules[index].coursework.push(newCourseWork);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let courseData =document;
    var raw = JSON.stringify(courseData);
    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
//`${process.env.REACT_APP_BASE_URL}/courseWork/course` 

    fetch(`${process.env.REACT_APP_BASE_URL}/courseWork/course`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        onCoursePosted(result);
      })
      .catch((error) => console.log("error", error));
  }
export {postModule,postCourse,getModule,deleteCourseWork,moveUp,moveDown}