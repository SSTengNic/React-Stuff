import React from "react";
const testing = {
    name: 'wassp'

}
const Note = ({data,toggleDelete}) => {
    
    return (
        <li>
            {data.name} {data.number} {data.id}
            <button onClick={toggleDelete}>Delete</button>
        </li>
    )
      
}

export default Note