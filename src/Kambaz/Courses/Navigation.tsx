import { Link, useParams, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "./client";
import { setCourses } from "./reducer"
import { useEffect } from "react";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer)
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    const courses = await coursesClient.fetchAllCourses();
    dispatch(setCourses(courses));
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  const course = courses.find((course: any) => course._id === cid);
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Courses/${course?._id}/${link}`} id="wd-course-home-link"
        className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </ListGroup.Item>
      )))}

    </ListGroup>
);}
