import { Link, useParams, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { courses } from "../Database";

export default function CourseNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  console.log(pathname)
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Courses/${course?._id}/${link}`} id="wd-course-home-link"
        className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </ListGroup.Item>
      )))}
    </ListGroup>
);}
