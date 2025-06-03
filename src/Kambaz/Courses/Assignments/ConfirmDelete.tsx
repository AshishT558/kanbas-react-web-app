import { Modal, Button } from "react-bootstrap";
export default function AssignmentDelete({ show, handleClose, assignmentId, deleteAssignment}: {
 show: boolean; 
 handleClose: () => void; 
 assignmentId: string; 
 deleteAssignment: (assignmentId: any) => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>Are you sure you want to remove this assignment?</Modal.Title>
   </Modal.Header>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel</Button>
    <Button variant="primary"
     onClick={() => {
      deleteAssignment(assignmentId);
      handleClose();
     }} > Yes </Button>
   </Modal.Footer>
  </Modal>
);}
