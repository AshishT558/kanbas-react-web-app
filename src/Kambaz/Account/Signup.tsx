import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <Form.Control id="wd-username"
             placeholder="username"
             className=""/><br />
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className=""/><br />
      <Form.Control id="wd-password"
             placeholder="verify password" type="password"
             className=""/><br />
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 ">
            Sign up </Link><br />
      <Link to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}