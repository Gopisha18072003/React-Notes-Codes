import {useState, useRef} from 'react';
import Modal from './Modal';
export default function NewTask({onAdd}) {
    const dialog = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick(event) {
        if(enteredTask.trim() === '') {
            dialog.current.open();
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');
    }
    return (
    <>
        <Modal ref={dialog} buttonCaption="Close">Please Enter a valid Task</Modal>
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} onChange={handleChange} />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    </>
    
);}