import React from 'react'

const Info = ({ info, handleDelete }) => {
    const indexStyle = {
        width: "100px"
    }

    const alignStyle = {
        display: "flex",
        gap: "10px"
    }

    const { id, nation, gold, silver, bronze } = info;

    return (
        <div style={alignStyle}>
            <div style={indexStyle}>{nation}</div>
            <div style={indexStyle}>{gold}</div>
            <div style={indexStyle}>{silver}</div>
            <div style={indexStyle}>{bronze}</div>
            <div style={indexStyle}>
                <button onClick={() => handleDelete(id)}>삭제</button>
            </div>
        </div>
    )
}

export default Info