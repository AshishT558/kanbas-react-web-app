export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description"
        value={"The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the followin: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositiories The Kanbas applciation should include a link to navigate back to the landing page."}>
        </textarea>
        <br />
        <table>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right"valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="QUIZZES">Quizzes</option>
                        <option value="EXAMS">Exams</option>
                        <option value="PROJECT">Project</option>
                    </select>

                </td>
            </tr>
            <br />
            <tr>
                <td align="right"valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as" >
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="LETTER">Letter</option>
                    </select>

                </td>
            </tr>
            <br />
            <tr>
                <td align="right"valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type" >
                        <option value="ONLINE">Online</option>
                        <option value="--">--</option>
                    </select>

                </td>
            </tr>
            <br />
            <tr>
                <td />
                <td align="left"valign="top">
                    <label>Online Entry Options</label><br/>

                    <input type="checkbox" name="check-submission" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-submission" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="check-submission" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="check-submission" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="check-submission" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>

                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-assign-to">Assign</label>
                </td>
                <td>
                    <label htmlFor="wd-assign-to">Assign to</label>
                    <br />
                    <input id="wd-assign-to" value={"Everyone"} />
                </td>
            </tr>
            <br />
            <tr>
                <td />
                <td>
                    <label htmlFor="wd-due-date">Due</label><br />
                    <input type="date"
                    id="wd-due-date"
                    value="2024-05-13"/>
                </td>
            </tr>
            <br />
            <tr>
                <td />
                <td>
                    <label htmlFor="wd-available-from">Available from</label><br />
                    <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"/>
                    
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label><br />
                    <input type="date"
                    id="wd-available-until"
                    value="2024-05-20"/>
                </td>
            </tr>
        </table>
      </div>
  );}
  