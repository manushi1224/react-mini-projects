import React, { Fragment, useState } from 'react';
import { FaTimes, FaRegEdit, FaCheck } from 'react-icons/fa'

export default function ToDO() {

    const [task, setTask] = useState([])
    const [id, setId] = useState(0)

    const handleTask = (event) => {
        if (event.key === 'Enter') {
            const value = event.target.value
            setId((i => i + 1))
            setTask(t => [
                ...t, { 'no': id, 'info': `${value}` }
            ]);
            event.target.value = ''
        }
    }

    const deleteTask = (params) => {
        setTask(task.filter(arr => !(params === arr.no)))
        setId(task.length)
    }

    const Main = (props) => {
        const [flag, setFlag] = useState(false)
        const [edit, setEdit] = useState(props.info)
        const [checked, setChecked] = useState(false)

        const style = { textDecoration: checked ? "line-through" : "none" }

        const setEditTask = (event, updateNo) => {
            setFlag(false)
            setEdit(event.target.value)
            setTask((task) =>
                task.map((t) =>
                    (updateNo === t.no ? { ...t, info: edit } : t)))

            event.target.value = edit
        }

        const handleEdit = (event, updateNo) => {
            if (event.key === 'Enter') {
                setFlag(false)
                setEdit(event.target.value)
                setTask((task) =>
                task.map((t) =>
                    (updateNo === t.no ? { ...t, info: edit } : t)))
            }
        }

        return (
            <Fragment>
                <div className="row justify-content-center">
                    <div className="col-4">
                        {flag ?
                            <div><input type="text" id="task" value={edit} onChange={(event) => { setEdit(event.target.value) }} onKeyDown={(event) => handleEdit(event, props.sno)} />
                            </div> :
                            <div className="container" key={props.sno}>
                                <input type="checkbox" className="me-3" onChange={() => setChecked(!checked)} id={props.no} />
                                <label for={props.no} style={style}>{props.info}</label>
                            </div>}</div>
                    <div className="col-4 ms-3">
                        {!flag ?
                            <button className="btn close p-0 ms-1" onClick={() => { setFlag(true) }}><FaRegEdit /></button> :
                            <button className="btn close p-0 ms-1" onClick={(event) => setEditTask(event, props.sno)}><FaCheck /></button>}
                        <button className="btn close p-0 ms-3" onClick={() => { deleteTask(props.sno) }}><FaTimes /></button>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="container tododiv">
                <center>
                    <h1>To Do List</h1>
                    <input type="text" className="me-3" id="task" onKeyDown={handleTask} />
                    <div className="container">
                        {task.map((e) => {
                            return (<Main info={e.info} sno={e.no} />)
                        })}
                    </div>
                </center>
            </div>
        </Fragment>
    )

}
