import React, { useState } from "react";
import { List, InputText, Btn } from "../../atoms";
import TodoTask from "../../molecules/TodoTask/TodoTask";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../store";
const TodoListCopy = () => {
  const todoTasks = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState(null);
  const handleChange = (e) => {
    setTodoTask(e.target.value);
  };
  const submit = () => {
    dispatch(addTask(todoTask));
  };
  return (
    <>
      <List>
        {todoTasks.map((x, i) => {
          return <TodoTask {...x} key={i}></TodoTask>;
        })}
      </List>

      <InputText onChange={handleChange}></InputText>
      <Btn text={"Envoyer"} onClick={submit}></Btn>
    </>
  );
};

export default TodoListCopy;