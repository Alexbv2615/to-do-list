import style from './styles/tasksform.module.css'
import { useForm } from 'react-hook-form';
import { postTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export function TasksFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      async function loadTask() {
        if(params.id){
         const res = await getTask(params.id)
         setValue('title', res.title)
        }
      }
      loadTask()

    }, [])
    

    const onSubmit = handleSubmit(async data => {
      if(params.id){
        await updateTask(params.id, data)
        toast.success('Tarea editada 🎉', {position: "bottom-center" ,style: { background: "#101010", color: "#fff" }})
      } else {
        await postTask(data)
        toast.success('Tarea creada 😄', {position: "bottom-center" , style: { background: "#101010", color: "#fff" }})
      }
      navigate('/tasks')
    })

    return (
      <div className={style.container}>
        <form className={style.form} onSubmit={onSubmit}>
          <input
            className={style.input} 
            type='text' 
            placeholder='Escribir nueva tarea...'
            {...register('title', { required: true })}
          />
          {errors.title && <span className={style.error}>Este campo es requerido</span>}
          <button className={style.save}>Save</button>
        </form>
        {
          params.id && <button className={style.delete} onClick={async() => {
            const accept = window.confirm('seguro que quieres eliminar?')
            if(accept){
              await deleteTask(params.id);
              toast.success('Tarea eliminada 😌', {position: "bottom-center" , style: { background: "#101010", color: "#fff" }})
              navigate('/tasks');
            }
          }}>Delete</button>
        }
      </div>
    )
}