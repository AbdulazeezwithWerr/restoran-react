import React from 'react'
import { useSelector} from "react-redux";


export default function Hodimlar({name}) {
    console.log(name.taomlar.map(item => {return item.turi}));

    const taomTuri = name.taomlar.map(item => {return item.turi})
    const taomTuriAll = taomTuri.length>1 ? [...taomTuri[0], ...taomTuri[1]]:[...taomTuri[0]]
    
    console.log(taomTuriAll);
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos);
    const oshpazArr = []

for (let i = 0; i < taomTuriAll.length; i++) {
    for (let j = 0; j < todos.length; j++) {
        if (taomTuriAll[i].id ===todos[j].id) {
            console.log(todos);
            oshpazArr.push(todos[j])
            console.log(oshpazArr);
        }
        
    }
    
}

  return (
    <div>
        {name.name}
        {oshpazArr.map(item => {return <h3>{item.label} {item.sum} {item.count} ta</h3>})}

    </div>
  )
}
