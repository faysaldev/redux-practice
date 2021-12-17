import React from 'react'

function TuduItem({text,done,id}) {
    return (
        <>
        {text && (
            <div className="todultem">
            <input type="checkbox" id="id" name="id" value={done}></input><p>{text}</p>
            </div>
        )}
        </>
    )
}

export default TuduItem
