import { useSelector, useDispatch } from "react-redux";
import { dates } from "../../../dates";
import { addTask, decrement, increment, updateValue } from "./cardSlice";
import List from "./List";
// import { updateValue, addTask } from "../redux/todoSlice";

// import List from "./List";
const Todo = () => {
  const value = useSelector((state) => state.todo.inputTaskValue);
  const todos = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count)
  const dispatch = useDispatch();
  
  console.log(todos);
  
  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(addTask());
    }
  };

  return (
    <>
      {/* <input
        type="text"
        placeholder="Enter task"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyEnter}
      /> */}

<div >
        {dates.map(item1 => {return item1.taomlar.map(item2 => {return<span className='card'>
       <h1> {item2.nomi}</h1>
       <select value={value} onChange={handleChange} onKeyDown={handleKeyEnter}> {item2.turi.map(item3 => {return <option>{item3.name}</option>})}</select>
         </span>}) })}
    </div>
    <button onClick={()=> dispatch(increment())}>+</button> {count}<button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addTask())}>Add</button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px"
        }}
      >
        {todos.length ? (
          todos.map((todo) => <List key={todo.id} {...todo} />)
        ) : (
          <h3>Ovqat tanlang...</h3>
        )}
      </div>
    </>
  );
};

export default Todo;
