import React, {useState} from 'react'

const AddTask = ({ onAdd }) => {

    // local states
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(!text){
            alert('Please enter a task');
            return;
        }

        // send info to parent component to add new task
        onAdd({text, day, reminder});

        // clear local state
        setText('');
        setDay('');
        setReminder(false);
    };

    // form 
    return (
        <form className='add-form' onSubmit={onSubmit}>

            {/* Text Name Input */}
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={e => setText(e.target.value)}/>
            </div>

            {/* Day & Time Input */}
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={e => setDay(e.target.value)}/>
            </div>

            {/* Reminder */}
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>


            {/* submit */}
            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask