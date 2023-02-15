import React from "react";

function jest({data}){
    const {id, title, completed} = data;
    const h1 = <h1>{title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1;
    return (
        <div>
            <div role={`todo-${id}`}>{ text }</div>
            <div role='role-1'>Hello World!</div>
        </div>
    )
}

export default jest;