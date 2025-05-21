import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>CS1234 React JS</Card.Title>
       <Card.Subtitle>CS1234</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" >
        Full Stack software developer</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
  </Row>
</div></div>

);}
