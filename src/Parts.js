import React from 'react';

const Parts = ({ parts }) => {

    return (
        <>
            {parts.map(part => {
                return <p key={part.id}>{part.name + ' ' + part.exercises}</p>
            })}
            <b>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b>
        </>
    )

}

export default Parts;
