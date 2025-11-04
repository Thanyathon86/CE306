import React, {useEffect, useState } from "react";

const NoDependency: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const [name ,setName] = useState<string>('');

    useEffect(() => {
        console.log('No Dependency Effect: Compomemt re-rendered');
        console.log('Current Count: $ {count}, Name: ${name}' );
    });
    
    return (
        <div>
            <h2>No Dependency Array</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <br />
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
           
    );




}
export default NoDependency;