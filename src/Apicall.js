import React,{useEffect, useState} from 'react';

export default function Api_call() {

    var [abc, change] = useState([])
    
    useEffect(()=> {
        const data = fetch('https://jsonplaceholder.typicode.com/posts');
        const value = data.then((item)=> item.json());
        value.then((apidata)=> change(apidata));
        
    },[])

   

    return(
        <>
            <h1>Api call...</h1>
            {abc.map((a,b)=> {
                return (
                    <div className='box'>
                        <p>title - {a.title}</p>
                        <p>body - {b.body}</p>
                    </div>
                )
            
            })}
        </>
    )
}
