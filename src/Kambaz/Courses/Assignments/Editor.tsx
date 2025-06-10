import { FormGroup, FormLabel, FormControl, Form, Col, Row, } from "react-bootstrap"
import { Link, useParams } from "react-router";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as coursesClient from "../../Courses/client"
import * as assignmentsClient from "./client"

export default function AssignmentEditor() {
  const { aid, cid } =  useParams()
  const dispatch = useDispatch();
  console.log(aid, cid)
  const isNew = (aid === "new")
  const { assignments }= useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((assignment: any) => aid === assignment._id)

  const [formData, setFormData] = useState(isNew ? {
      title: "",
      course: cid,
      description: "",
      points: 100,
      available_date: "",
      due_date: "",
      until_date: "",
      assignment_num: assignments.filter((assignment: any) => cid === assignment.course).length + 1,
      display_grade: "PERCENTAGE",
      entry_options: {
        text_entry: false,
        website_url: false,
        media_recordings: false,
        student_annotation: false,
        file_uploads: false
      }
  } : assignment)

  const SaveAssignment = async () => {
    console.log(formData)
    if (isNew) {
      const newAssignment = await coursesClient.createAssignmentForCourse(cid, formData)
      dispatch(addAssignment(newAssignment))
    }

    else {
      const updatedAssignment = await assignmentsClient.updateAssignment(formData);
      dispatch(updateAssignment(updatedAssignment))
    }
  }
    return (
      <div id="wd-assignments-editor">
        <FormGroup controlId="wd-name">
            <FormLabel>Assignment</FormLabel>
            <FormControl type="name" placeholder={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
        </FormGroup>
        <br />
        <FormGroup className="mb-3" controlId="wd-description">
            <FormControl as="textarea" rows={3}
            placeholder={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}/>
        </FormGroup>
        <br />
        
    <Form className="p-4">
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={2} className="text-end">
          Points
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={formData.points} onChange={(e) => setFormData({...formData, points: e.target.value})}/>
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
          <Form.Select defaultValue={formData.display_grade} onChange={(e) => setFormData({...formData, display_grade: e.target.value})}>
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
          <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" 
          defaultChecked={formData.entry_options.text_entry} 
          onChange={(_e) => setFormData({...formData, entry_options: {
            ...formData.entry_options,
            text_entry: !formData.entry_options.text_entry
          }})}/>
          <Form.Check type="checkbox" label="Website URL" id="wd-website-url" 
          defaultChecked={formData.entry_options.website_url}
          onChange={(_e) => setFormData({...formData, entry_options: {
            ...formData.entry_options,
            website_url: !formData.entry_options.website_url
          }})}/>
          <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" 
          defaultChecked={formData.entry_options.media_recordings}
          onChange={(_e) => setFormData({...formData, entry_options: {
            ...formData.entry_options,
            media_recordings: !formData.entry_options.media_recordings
          }})}/>
          <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" 
          defaultChecked={formData.entry_options.student_annotation}
          onChange={(_e) => setFormData({...formData, entry_options: {
            ...formData.entry_options,
            student_annotation: !formData.entry_options.student_annotation
          }})}/>
          <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" 
          defaultChecked={formData.entry_options.file_uploads} 
          onChange={(_e) => setFormData({...formData, entry_options: {
            ...formData.entry_options,
            file_uploads: !formData.entry_options.file_uploads
          }})}/>
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
            <Form.Control type="date" defaultValue={formData.due_date} onChange={(e) => setFormData({...formData, due_date: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-from">
            <Form.Label  className="fw-bold">Available from</Form.Label>
            <Form.Control type="date" defaultValue={formData.available_date} onChange={(e) => setFormData({...formData, available_date: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-available-until">
            <Form.Label className="fw-bold">Until</Form.Label>
            <Form.Control type="date" defaultValue={formData.until_date} onChange={(e) => setFormData({...formData, until_date: e.target.value})}/>
          </Form.Group>
        </Col>
      </Row>
      
    </Form>
    <hr />
    <Link className="btn btn-danger btn-lg me-1 float-end" id="wd-save-assignment-edit" to={`/Kambaz/Courses/${formData.course}/Assignments/`} onClick={() => SaveAssignment()}>
       Save
     </Link>
     <Link className="btn btn-secondary btn-lg me-1 float-end" id="wd-save-assignment-edit" to={`/Kambaz/Courses/${formData.course}/Assignments/`}>
       Cancel
     </Link>
    </div>
  );}
