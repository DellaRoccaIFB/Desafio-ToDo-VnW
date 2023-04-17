import React, { useState } from "react";

export default function App () {
  const [input, setInput] = useState([])
  const [tarefas, setTarefas] = useState([])

  const handleTarefas = ()=>{
    setTarefas
  }

  return(
    <>
      <h3>
      {input}
      </h3>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleTarefas}>Add</button>
    </>
  )
}