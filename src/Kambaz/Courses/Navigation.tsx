import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function CourseNavigation() {
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </ListGroup.Item><br />
      <ListGroup.Item as={Link} to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </ListGroup.Item><br />
    </ListGroup>
);}
