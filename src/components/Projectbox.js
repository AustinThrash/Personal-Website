import React from 'react'
import { useNavigate } from 'react-router-dom'

function Projectbox({image, name, id}) {
    const nav = useNavigate();
  return (
    <div className="projectBox"
    onClick={() => {
        nav("/projects/" + id);
    }}>
        <div style={{backgroundImage: `url(${image})`}} className="backgroundImage"/>
        <h1> {name} </h1>

    </div>
  )
}

export default Projectbox