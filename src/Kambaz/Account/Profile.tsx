import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control id="wd-username"
             placeholder="username"
             value="thomas.ash"
             className=""/><br />
      <Form.Control id="wd-password"
             placeholder="password"
             value="bad_pass"
             className=""/><br />
      <Form.Control id="wd-firstname" value="Ashish" placeholder="First Name"
             className=""/><br />
      <Form.Control id="wd-lastname" value="Thomas" placeholder="Last Name"
             className=""/><br />
      <Form.Control id="wd-dob" value="2005-03-04" type="date"
             className=""/><br />
             <Form.Control id="wd-email" value="thomas.ash@aol.edu" type="email"
             className=""/><br />
      <Form.Select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select><br/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link><br />
    </div>
);}


<div id="wd-signup-screen">
      <h3>Signup</h3>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/><br />
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/><br />
      <Form.Control id="wd-password"
             placeholder="verify password" type="password"
             className="mb-2"/><br />
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link><br />
      <Link to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>