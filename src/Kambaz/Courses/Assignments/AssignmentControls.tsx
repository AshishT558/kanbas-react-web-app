import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function AssignmentControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = (currentUser.role === "FACULTY") 
  const navigate = useNavigate();
 return (
   <div id="wd-modules-controls" className="text-nowrap pt-4">
     <Button variant="danger" size="lg" className={`me-1 float-end ${isFaculty ? "" : "d-none"}`} id="wd-add-assignment" onClick={() => navigate(`new`)}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <div className="border border-black rounded" style={{ width: "fit-content", padding: "0.5rem 1rem" }}>
      <CiSearch />
      <input placeholder="Search.."
                id="wd-search-assignment" 
                className="me-5"
                style={{ border: "none" }}/>
     </div>
   </div>
);}
