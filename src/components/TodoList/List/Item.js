function Item({work, id}){

    

    return(
        <li key={id} className={work.completed && 'completed'}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>{work.work}</label>
					<button className="destroy"></button>
				</div>
			</li>
    )

}

export default Item;