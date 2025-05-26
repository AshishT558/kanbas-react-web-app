import { FormGroup, FormLabel, FormControl, Form, Col, Row, } from "react-bootstrap"
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid } =  useParams()
  const assignment = db.assignments.find((course) => aid === course._id)
    return (
      <div id="wd-assignments-editor">
        <FormGroup controlId="wd-name">
            <FormLabel>Assignment</FormLabel>
            <FormControl type="name" placeholder={assignment?.title} />
        </FormGroup>
        <br />
        <FormGroup className="mb-3" controlId="wd-description">
            <FormControl as="textarea" rows={3}
            placeholder={assignment?.description} />
        </FormGroup>
        <br />
        
    <Form className="p-4">
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={2} className="text-end">
          Points
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={assignment?.points} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-group">
        <Form.Label column sm={2} className="text-end">
          Assignment Group
        </Form.Label>
        <Col sm={10}>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
        <Form.Label column sm={2} className="text-end">
          Display Grade as
        </Form.Label>
        <Col sm={10}>
          <Form.Select defaultValue="PERCENTAGE">
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER">Letter</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column sm={2} className="text-end">
          Submission Type
        </Form.Label>
        <Col sm={10} className="border p-2">
          <Form.Select className="mb-2" defaultValue="ONLINE">
            <option value="ONLINE">Online</option>
            <option value="--">--</option>
          </Form.Select>
            <span className="fw-bold">Online Entry Options</span>
          <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
          <Form.Check type="checkbox" label="Website URL" id="wd-website-url" defaultChecked />
          <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
          <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
          <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
        </Col>
      </Form.Group>

      <Row>
        <Form.Label column sm={2} className="text-end">
          Assign
        </Form.Label>
        <Col sm={10} className="border p-2">
          <Form.Group className="mb-3" controlId="wd-assign-to">
            <Form.Label  className="fw-bold" >Assign to</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-due-date">
            <Form.Label  className="fw-bold" >Due</Form.Label>
            <Form.Control type="date" defaultValue={assignment?.due_date} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-from">
            <Form.Label  className="fw-bold">Available from</Form.Label>
            <Form.Control type="date" defaultValue={assignment?.available_date} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-until">
            <Form.Label className="fw-bold">Until</Form.Label>
            <Form.Control type="date" defaultValue={assignment?.until_date} />
          </Form.Group>
        </Col>
      </Row>
      
    </Form>
    <hr />
    <Link className="btn btn-danger btn-lg me-1 float-end" id="wd-save-assignment-edit" to={`/Kambaz/Courses/${assignment?.course}/Assignments/`}>
       Save
     </Link>
     <Link className="btn btn-secondary btn-lg me-1 float-end" id="wd-save-assignment-edit" to={`/Kambaz/Courses/${assignment?.course}/Assignments/`}>
       Cancel
     </Link>
    </div>
  );}