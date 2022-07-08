import React, { useEffect, useRef } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../store/todoSlice";

function CSVDownload(props) {
  const dispatch = useDispatch();
  const btnRef = useRef(null);
  const todos = useSelector(state => state.todo.todos);
  
  useEffect(() => {
    btnRef.current?.click();
    dispatch(setTodo([]));
  }, []);
  
  return (
    <CSVLink {...props} data={todos} enclosingCharacter={""}>
      <span ref={btnRef} />
    </CSVLink>
  );
}

export default CSVDownload;
