import style from './taskcard.module.css';
import { useNavigate } from 'react-router-dom';
import { updateTask } from '../../api/tasks.api';

export function TaskCard({ task, updateTasks }) {

    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/tasks/${task.id}`)
    }

    const handleCheck = async () => {
        if(task.done){
            await updateTask(task.id, {...task, done: false})
        } else {
            await updateTask(task.id, {...task, done: true})
        }
        updateTasks()
    }

    return (
        <div className={style.container}>
            <div className={style.done}>
                {
                    task.done ?
                    <div onClick={handleCheck}>✅</div>
                    :
                    <div onClick={handleCheck}>❌</div>
                }
            </div>
            <div onClick={handleEdit}>
                <h1 className={task.done ? style.completed : style.title}>{task.title}</h1>
            </div>
        </div>
    )
}