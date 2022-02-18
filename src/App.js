import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import { useState , useEffect} from 'react';

function App() {
  const ondelete = (todo) => {
    console.log("deleting this todo", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo.")
    let sno;
    if (todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  let initTodo;
  if (localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
    <Header></Header>
    <AddTodo addTodo={addTodo}></AddTodo>
    <Todos todos={todos}> ondelete={ondelete}</Todos>
    <Footer></Footer> 
    </>
  );
}

export default App;
