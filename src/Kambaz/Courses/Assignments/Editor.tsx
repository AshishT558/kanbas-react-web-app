import { FormGroup, FormLabel, FormControl, Form, Col, Row, Button, } from "react-bootstrap"
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <FormGroup controlId="wd-name">
            <FormLabel>Assignment</FormLabel>
            <FormControl type="name" placeholder="A1" />
        </FormGroup>
        <br />
        <FormGroup className="mb-3" controlId="wd-description">
            <FormControl as="textarea" rows={3}
            placeholder="
            The assignment is available online
            Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: 
            -Your full name and section 
            -Links to each of the lab assignments 
            -Link to the Kanbas application 
            -Links to all relevant source code repositiories 
            The Kanbas applciation should include a link to navigate back to the landing page." />
        </FormGroup>
        <br />
        
    <Form className="p-4">
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={2} className="text-end">
          Points
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={100} />
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
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-from">
            <Form.Label  className="fw-bold">Available from</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-01" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-until">
            <Form.Label className="fw-bold">Until</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" />
          </Form.Group>
        </Col>
      </Row>
      
    </Form>
    <hr />
    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment-edit">
       Save
     </Button>
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment-edit">
       Cancel
     </Button>
    </div>
  );}
  