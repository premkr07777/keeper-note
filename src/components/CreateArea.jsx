import React, { useState } from "react";

function CreateArea (props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
        <>
            <div>
                <form>
                    <input name="title" type="text" placeholder="Title" onChange={handleChange} value={note.title} />
                    <textarea name="content" id=""placeholder="Take a note..." onChange={handleChange} value={note.content} />
                    <button onClick={submitNote}>Add</button>
                </form>
            </div>
        </>
    )
}


export default CreateArea;