import { FaPlus } from "react-icons/fa6";
import { Button, Dropdown } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
 return (
   <div id="wd-modules-controls" className="text-nowrap pt-4">
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
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
