import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons({assignmentId, deleteAssignment} : { assignmentId: string; deleteAssignment: (assignmentId: string) => void;}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = (currentUser.role === "FACULTY") 
  return (
    <div className="float-end position-absolute" style={{right: 0, top: "2rem"}}>
      <GreenCheckmark />
      <FaTrash className={`text-danger me-2 mb-1 ${isFaculty ? "" : "d-none"}`} onClick={() => handleShow()}/>
      <IoEllipsisVertical className="fs-4" />
      <ConfirmDelete show={show} handleClose={handleClose} assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
    </div> );}