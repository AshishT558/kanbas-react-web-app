import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end position-absolute" style={{right: 0, top: "2rem"}}>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}