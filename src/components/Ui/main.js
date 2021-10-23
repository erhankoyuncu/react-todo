import {useState} from "react"
import Item from "../TodoList/List/Item"

function Main(){


    const  [workName, setWork] = useState('')

    const onChangeInput = ((e)=> {

        setWork(e.target.value)

    })

    const [todo, setTodo] = useState([

        {
            work : " Ödev hazılanacak",
            completed : true
        },
        {
            work : " Flan filan feşmekan",
            completed : true
        },
        {
            work : " yapılacak 1",
            completed : false
        },
        {
            work : " yapılacak 2",
            completed : false
        }
    ]);


    const onSubmit = ((e)=> {

        setTodo([{work : workName, completed : false} , ...todo])
        e.preventDefault()
    })


    return(
        <section className="todoapp">
	<header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input className="new-todo" name="work" onChange={onChangeInput}   placeholder="What needs to be done?"   />
		</form>
	</header>
 
	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			
            {todo.map((eleman, index) => (
                <Item  key={index} work={eleman}   />
            ))}
		 
			 
		</ul>
	</section>
 
	<footer className="footer">
 
		<span className="todo-count">
			<strong>{todo.length}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className="selected">All</a>
			</li>
			<li>
				<a>Active</a>
			</li>
			<li>
				<a>Completed</a>
			</li>
		</ul>
 
		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
</section>
        
    )


}
export default Main