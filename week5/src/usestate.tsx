import React, { useState } from 'react';
interface Counterprops{
    initialCount?: number;
}

const Counter: React.FC <Counterprops> = ({initialCount = 0}) => {
       const [count, setcount] = useState<number>(initialCount);
       const [ name, setName] = useState<string>('');
       
    
    const increment = () => {
         setcount(prevCount => prevCount + 1); 
    }
         
    const decrement = () => {
        setcount(count - 1);
    } 
        

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>Your name:{name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default Counter;

