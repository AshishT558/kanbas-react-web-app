import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../../Courses/client"
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, [cid]);
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
    setModuleName("");
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    fetchModules();
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const [moduleName, setModuleName] = useState("");

    return (
      <div>
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse}/>
        <br /><br /><br /><br />

        <ListGroup id="wd-modules">
        {modules
          .map((module: any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />
            {!module.editing && module.name}
            { module.editing && (
              <FormControl className="w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}/>
            )}

            <ModuleControlButtons
        moduleId={module._id}
        deleteModule={(moduleId) => removeModule(moduleId)}
        editModule={(moduleId) => dispatch(editModule(moduleId))}/>

              </div>
              {module.lessons && (

            <ListGroup className="wd-lessons rounded-0">
              {module.lessons.map((lesson: any) => (

              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />              {lesson.name}
               <LessonControlButtons />
              </ListGroup.Item>))}</ListGroup>)}
              </ListGroup.Item>))}</ListGroup></div>);}