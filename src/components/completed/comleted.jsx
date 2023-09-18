import { useState } from "react"
import Task from "../task/task"

export default function Completed({ title, id, removeTask, handleClick, checked }) {

    const usst = [
        { id: 2, title: 'html', active: true, },
        { id: 3, title: 'csss', active: true, },
        { id: 5, title: 'car', active: false, },
        { id: 4, title: 'soo', active: false, },
        { id: 1, title: 'duck', active: true, },
    ]

    const [value, newState] = useState("")
    const [tasks, setTasks] = useState(usst)

    const handleClick = (id) => {

        const a = tasks.find(el => el.id === id)
        setTasks(el => [...el], a.active = !a.active)

    }

    const statusHandler = (value) => {
        if (value == 'all') {
            setTasks(usst)
        }
        if (value == 'active') {
            setTasks(arr => arr.filter(el => el.active === false))
        } if (value == 'comleted') {
            setTasks(usst.filter(el => el.active === true))
        }
    }

    function removeTask(id) {
        setTasks(arr => arr.filter(el => el.id !== id))
    }

    return (
        <div className="todo-list">
            {tasks.map(el => (
                <Task checked={el?.active} removeTask={removeTask} handleClick={handleClick} id={el.id} title={el.title} />
            ))}
        </div>
    )
}