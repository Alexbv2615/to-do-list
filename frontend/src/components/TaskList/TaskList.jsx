import { useEffect, useState } from "react";
import { getAllTasks } from "../../api/tasks.api";
import { TaskCard } from "../TaskCard/TaskCard";
import style from "./tasklist.module.css";

export function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All')

    const updateTasks = async () => {
        const data = await getAllTasks();
        setTasks([...data]);
    };

    useEffect(() => {
        async function loadTasks() {
            const data = await getAllTasks();
            setTasks([...data]);
        };
        loadTasks();
        
    }, []);

    const handleSelect = (e) => {
        const { value } = e.target;
        setFilter(value)
    }

    return(
        <div className={style.container}>
            <div className={style.filter}>
                <select value={filter} onChange={handleSelect}>
                    <option value='All' >All</option>
                    <option value='Completed' >Completed</option>
                    <option value='Incompleted' >Incompleted</option>
                </select>
            </div>
            <div className={style.list}>
                {
                filter === 'All' && tasks && tasks.map(task => (
                    <TaskCard key={task.id} task={task} updateTasks={updateTasks}/>
                    ))
                }
                {
                filter === 'Completed' && tasks && tasks.map(task => task.done && (
                    <TaskCard key={task.id} task={task} updateTasks={updateTasks}/>
                    ))
                }
                {
                filter === 'Incompleted' && tasks && tasks.map(task => !task.done && (
                    <TaskCard key={task.id} task={task} updateTasks={updateTasks}/>
                    ))
                }
             </div>
            
        </div>

    )
}