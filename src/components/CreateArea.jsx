import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handelChange(event) {
        const {name, value} = event.target;

        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({ title: "",content: ""})
        event.preventDefault();
    }

    function expand() {
      setExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input 
          onChange={handelChange} 
          value={note.title} 
          name="title" 
          placeholder="Title" 
        /> : null}
        <textarea 
          onChange={handelChange} 
          onClick={expand}
          value={note.content} 
          name="content" 
          placeholder="Take a note..." 
          rows = {isExpanded ? 3 : 1} 
        />
        <button onClick={submitNote}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
