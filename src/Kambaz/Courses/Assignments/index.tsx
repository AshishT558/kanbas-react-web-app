import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeaderButtons from "./AssignmentHeaderButtons";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Assignments() {
    return (
      <div id="wd-assignments" className="ms-5">
        <AssignmentControls />
        <br /><br /><br /><br />

        <ListGroup id="wd-assignment-list">
          <ListGroup.Item className="wd-assignments-title p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary fw-bold"><BsGripVertical className="me-2 fs-3" /><IoMdArrowDropdown /> ASSIGNMENTS <AssignmentHeaderButtons />
              </div>
            <ListGroup className="rounded-0">
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                
                <BsGripVertical className="me-2 fs-3" /> 
                <FaRegEdit className="me-4" style={{color: "green"}}/>  
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link" style={{textDecoration: "none"}}>
                    <span className="fw-bold text-black">A1</span>
                    </a>  
                    <div style={{marginLeft:"5rem"}}>
                    <div><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until </span>May 6 at 12:00am |</div>
                    <div><span className="fw-bold">Due </span> May 13 at 11:59pm | 100 pts</div>
                    </div>
                <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                
                <BsGripVertical className="me-2 fs-3" /> 
                <FaRegEdit className="me-4" style={{color: "green"}}/>  
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link" style={{textDecoration: "none"}}>
                    <span className="fw-bold text-black">A2</span>
                    </a>  
                    <div style={{marginLeft:"5rem"}}>
                    <div><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until </span>May 13 at 12:00am |</div>
                    <div><span className="fw-bold">Due </span> May 20 at 11:59pm | 100 pts</div>
                    </div>
                <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                
                <BsGripVertical className="me-2 fs-3" /> 
                <FaRegEdit className="me-4" style={{color: "green"}}/>  
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link" style={{textDecoration: "none"}}>
                    <span className="fw-bold text-black">A3</span>
                    </a>  
                    <div style={{marginLeft:"5rem"}}>
                    <div><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until </span>May 20 at 12:00am |</div>
                    <div><span className="fw-bold">Due </span> May 27 at 11:59pm | 100 pts</div>
                    </div>
                <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment-list-item p-3 ps-1">
                
                <BsGripVertical className="me-2 fs-3" /> 
                <FaRegEdit className="me-4" style={{color: "green"}}/>  
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link" style={{textDecoration: "none"}}>
                    <span className="fw-bold text-black">A4</span>
                    </a>  
                    <div style={{marginLeft:"5rem"}}>
                    <div><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until </span>May 27 at 12:00am |</div>
                    <div><span className="fw-bold">Due </span> June 5 at 11:59pm | 100 pts</div>
                    </div>
                <AssignmentControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
          
        {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A1 - ENV + HTML
                </a>
                <div>
                    <div>Multiple Modules | Not Available until May 6 at 12:00am |</div>
                    <div>Due May 13 at 11:59pm | 100 pts</div>
                </div>
            </li>
            <li className="wd-assignment-list-item">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A2 - CSS + BOOTSTRAP
                </a> 
                <div>
                    <div>Multiple Modules | Not Available until May 13 at 12:00am |</div>
                    <div>Due May 20 at 11:59pm | 100 pts</div>
                </div>
            </li>
            <li className="wd-assignment-list-item">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A3 - JAVASCRIPT + REACT
                </a> 
                <div>
                    <div>Multiple Modules | Not Available until May 20 at 12:00am |</div>
                    <div>Due May 27 at 11:59pm | 100 pts</div>
                </div>
            </li>
        </ul> */}
      </div>
  );}
  