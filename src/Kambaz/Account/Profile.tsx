import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="thomas.ash" placeholder="username" /><br/>
      <input id="wd-password" value="ignition" placeholder="password"
             type="password" /><br/>
      <input id="wd-firstname" value="Ashish" placeholder="First Name" /><br/>
      <input id="wd-lastname" value="Thomas" placeholder="Last Name" /><br/>
      <input id="wd-dob" value="2005-03-04" type="date" /><br/>
      <input id="wd-email" value="thomas.ash@aol.edu" type="email" /><br/>
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
