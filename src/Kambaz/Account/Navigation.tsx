import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  
  return (
    <ListGroup id="wd-account-navigation" className="wd list-group">
      {links.map((link => (
      <ListGroup.Item as={Link} to={`/Kambaz/Account/${link}`} 
        className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} 
        </ListGroup.Item>)))}
      {/* <ListGroup.Item as={Link} to="/Kambaz/Account/Signin" 
        className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> Signin </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Account/Signup" 
        className="list-group-item text-danger border border-0"> Signup </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Account/Profile" 
        className="list-group-item text-danger border border-0"> Profile </ListGroup.Item><br /> */}
    </ListGroup>
);}