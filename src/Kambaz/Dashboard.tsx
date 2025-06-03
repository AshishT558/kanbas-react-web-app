import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "../Kambaz/Courses/reducer"
import { v4 as uuidv4 } from "uuid";
import { addEnrollment, removeEnrollment } from "./Courses/Enrollments/reducer";

export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY")
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer)
    const emptyCourse = {
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: "",
      description: "",

    }
    const [course, setCourse] = useState(emptyCourse);
    const dispatch = useDispatch();
    const [allShow, setAllShow] = useState(false)

    const HandleEnrollChange = (uid: string, cid: string) => {
      if( enrollments.some((e: any) =>(e.user === uid && e.course === cid))) {
        const eid = enrollments.find((e: any) =>(e.user === uid && e.course === cid))._id
        dispatch(removeEnrollment(eid))
      }
      else {
        dispatch(addEnrollment({_id: uuidv4(), user: uid, course: cid}))
      }

    }
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <Button className="" onClick={() => setAllShow(!allShow)}> Enrollments </Button>
      </div>
      <hr />
      {isFaculty && (<div>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => {
                  const courseWithId = { ...course, _id: uuidv4() };
                  dispatch(addCourse(courseWithId));
                  dispatch(addEnrollment({
                    _id: courseWithId._id,
                    user: currentUser._id,
                    course: courseWithId._id
                  }));
                  setCourse(emptyCourse);}} > Add </button>
          <button className="btn btn-warning float-end me-2"
                  onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      
      <FormControl value={course.name} className="mb-2" placeholder="Course Name"
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} className="mb-2" placeholder="Course Description"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <FormControl value={course.number} placeholder="Course #"
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <hr />
      </div>)}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course: any) =>
      enrollments.some(
        (enrollment: any) =>
          (enrollment.user === currentUser._id &&
          enrollment.course === course._id) || (allShow)
         ))

          .map((course: any) => (
            
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Button onClick={()=>HandleEnrollChange(currentUser._id, course._id)} className={`${allShow ? "" : "d-none"} btn btn-success 
          ${enrollments.some(
            (e: any) =>  (e.user === currentUser._id && e.course === course._id)) ?  "btn-danger": "btn-success"} justify-content-center`}>
                {enrollments.some((e: any) =>(e.user === currentUser._id && e.course === course._id)) && "Unenroll"}
                {!enrollments.some((e: any) =>(e.user === currentUser._id && e.course === course._id)) && "Enroll"}
              </Button>
          <Link to={enrollments.some(
            (e: any) =>  (e.user === currentUser._id && e.course === course._id)) ? `/Kambaz/Courses/${course._id}/Home` : `/Kambaz/Dashboard/`}
                className="wd-dashboard-course-link text-decoration-none text-dark">
{/*             
            <SlOptionsVertical className="position-absolute" style={{color: "white", right: "0px", top: "5px"}}></SlOptionsVertical> */}
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            
            <Card.Body>
            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden" style={{ color: "blue"}}>{course.name}</Card.Title>
            <Card.Subtitle>{course.number}</Card.Subtitle>
            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            {course.description}</Card.Text>
            <button className="btn btn-primary">
                    Go </button>
              <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className={`btn btn-danger mb-2 float-end ${isFaculty ? "" : "d-none"}`}
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
                className={`btn btn-warning me-2 float-end ${isFaculty ? "" : "d-none"}`} >
                Edit
              </button>

            </Card.Body>
          </Link>
          </Card>
        </Col>
        ))}
        </Row>
      </div>
    </div>

);}
