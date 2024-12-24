import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

function ListTask () {
    const tasks=useSelector((state)=>state.tasks)
    return ( <>

    {tasks &&  tasks.map(el=> <TaskCard {...el} key={el.id}/>)}
    </> );
}

export default ListTask ;