export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-publish-type">
            <option value="Publish all modules and items">Publish All</option>
            <option value="Publish all modules only">Publish Modules</option>
            <option value="Unpublish all modules and items">Unpublish All</option>
            <option value="Unpublish all modules and items">Unpublish Modules</option>
        </select>
        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1 - Course Introduction and Environment Setup</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                  <li className="wd-content-item">Dev Environment and Deployment</li>
                </ul>
              </li>
              <li>
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Intro and history of Web Dev</li>
                  <li className="wd-content-item">Setup Github and React App</li>
                  <li className="wd-content-item">Deploy with Netlify</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READINGS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Chapter 1 Web Dev</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2 - Formatting UI with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">HTML and the DOM </li>
                  <li className="wd-content-item">Tables, Lists, and Headings</li>
                  <li className="wd-content-item">Dropdowns and Buttons</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">React HTML structure</li>
                  <li className="wd-content-item">Implementing Basic HTML</li>
                  <li className="wd-content-item">Form elements</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READINGS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Chapter 2 Web Dev</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3 - Formatting UI with CSS</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">What is CSS?</li>
                  <li className="wd-content-item">Global Styling</li>
                  <li className="wd-content-item">Positioning and Flex</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">CSS and styling</li>
                  <li className="wd-content-item">Booststrap</li>
                  <li className="wd-content-item">Integrating CSS</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READINGS</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Chapter 3 Web Dev</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  