import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <ListGroup.Item className="d-flex flex-row-reverse w-25">
        <Button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
                className="btn btn-success float-end ms-2"> Add </Button>
        <Button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
                className="btn btn-warning float-end"> Update </Button>
        <FormControl value={todo.title} className="me-5"
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      </ListGroup.Item>
  );}
  
  ListGroup.Item