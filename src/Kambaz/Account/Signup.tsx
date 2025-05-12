import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" value="ash2"/><br/>
      <input placeholder="password" type="password" value="password2"/><br/>
      <input placeholder="verify password" type="password" value="password2" /><br/>
      <Link to="/Kambaz/Account/Profile" > Sign up </Link><br />
      <Link to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}
