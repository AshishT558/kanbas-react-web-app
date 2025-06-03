import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string };}) {
    const dispatch = useDispatch();
    return (
      <ListGroup.Item key={todo.id} className="d-flex flex-row-reverse w-25">
        <div className="ms-auto">
        <Button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
                className="btn btn-danger float-end ms-2"> Delete </Button>
                <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"
              className="btn btn-primary float-end"> Edit </Button>
            </div>
      {todo.title}    </ListGroup.Item>);}