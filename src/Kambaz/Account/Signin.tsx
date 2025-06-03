import { Button, Form } from "react-bootstrap";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <h5>Note: Sign in with faculty id/pass for full features.</h5>
      <Form.Control 
      defaultValue={credentials.username}
      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      id="wd-username"
             placeholder="username"
             className=""/><br />
      <Form.Control 
      defaultValue={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      id="wd-password"
             placeholder="password" type="password"
             className=""/><br />
      <Button onClick={signin} id="wd-signin-btn"
            className="btn btn-primary w-100 ">
            Sign in </Button><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div> );}