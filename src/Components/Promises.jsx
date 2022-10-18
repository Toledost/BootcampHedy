import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Promises = () => {
    // const f1 = () => console.log("primera");
    // const f2 = () => console.log("segunda");
    // const f3 = () => console.log("tercera");

    // f1();
    // setTimeout(() => {f3(f2())},3000);
    // f2();

    const url = 'https://jsonplaceholder.typicode.com/users'
    const [todo, setTodo] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON =  await response.json()
        setTodo(responseJSON)
        console.log(todo)
        
    }
    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <>
        <ul>
            {todo.map((item,index) => {
                return(
                    <li key={item.id}>
                        
                        {"id: " + item.id + " - nombre: " + item.name + " - email: " + item.email} 
                        <br />
                        {`username: ${item.username}`}
                        <br />
                        <br />
                    </li>
                )
            })}
        </ul>
        </>
    )



    
}

export default Promises;
