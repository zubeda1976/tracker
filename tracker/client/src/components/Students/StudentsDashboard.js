import '../Students/StudentsDashboard.css'
function StudentsDashboard(prop){
    return(
        <div id="student-dashboard-container">
            <h2>Student Dashboard</h2>
            <button onClick={prop.funcAddStudent}>Add Student</button>
        </div>
    )
}
export default StudentsDashboard