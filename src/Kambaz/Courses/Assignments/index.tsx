import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeaderButtons from "./AssignmentHeaderButtons";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as coursesClient from "../../Courses/client"
import { useEffect } from "react";
import * as assignmentsClient from "./client"

export default function Assignments() {
    const dispatch = useDispatch()
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const fetchAssignments = async () => {
      const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    useEffect(() => {
      fetchAssignments();
    }, [cid]);
    const removeAssignment = async (assignmentId: string) => {
      await assignmentsClient.deleteAssignment(assignmentId)
      dispatch(deleteAssignment(assignmentId))
    }

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY") 
    return (
      <div id="wd-assignments" className="ms-5">
        <AssignmentControls/>
        <br /><br /><br /><br />

        <ListGroup id="wd-assignment-list">
          <ListGroup.Item className="wd-assignments-title p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary fw-bold"><BsGripVertical className="me-2 fs-3" /><IoMdArrowDropdown /> ASSIGNMENTS <AssignmentHeaderButtons />
              </div>
            <ListGroup className="rounded-0">
            {assignments
          .map((assignment: any) => (

          
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                
                <BsGripVertical className="me-2 fs-3" /> 
                <FaRegEdit className="me-4" style={{color: "green"}}/>  
                <a href={isFaculty ? `#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}` : `#/Kambaz/Courses/${assignment.course}/Assignments/`}
                    className="wd-assignment-link" style={{textDecoration: "none"}}>
                    <span className="fw-bold text-black">A{assignment.assignment_num}: {assignment.title}</span>
                    </a>  
                    <div style={{marginLeft:"5rem"}}>
                    <div><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until </span>{assignment.available_date} |</div>
                    <div><span className="fw-bold">Due </span> {assignment.due_date} | {assignment.points} pts</div>
                    </div>
                <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} />
              </ListGroup.Item>
              ))}
              </ListGroup>
              </ListGroup.Item>
              </ListGroup>
              
      </div>
  );}
  