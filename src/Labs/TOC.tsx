// import { Link } from "react-router-dom";
// export default function TOC() {
//  return (
//   <ul>
//    <li><Link to="/Labs"      id="wd-a"> Labs </Link></li>
//    <li><Link to="/Labs/Lab1" id="wd-a1">Lab 1</Link></li>
//    <li><Link to="/Labs/Lab2" id="wd-a2">Lab 2</Link></li>
//    <li><Link to="/Labs/Lab3" id="wd-a3">Lab 3</Link></li>
//    <li><Link to="/Kambaz"    id="wd-k"> Kambaz</Link></li>
//   </ul>
//  );
// }

import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function TOC() {
  const { pathname } = useLocation();
 return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab1" as={Link} active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab2" as={Link} active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab3" as={Link} active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab4" as={Link} active={pathname.includes("Lab4")}>Lab 4</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/AshishT558">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
);}
