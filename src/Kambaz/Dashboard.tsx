import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import * as db from "./Database"

export default function Dashboard() {
  const courses = db.courses
  return (
    <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
    {courses.map((course) => (
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to={`/Kambaz/Courses/${course._id}/Home`}
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical>
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>{course.name}</Card.Title>
       <Card.Subtitle>{course.number}</Card.Subtitle>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
       {course.description}</Card.Text>
        <FaEdit />
      </Card.Body>
     </Link>
    </Card>
   </Col>
   ))}
  </Row>
</div></div>

);}
