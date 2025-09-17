import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Counter Exercise - Solution
      </h2>

      
      <h1 style={{ fontSize: "48px", color: "deepskyblue", margin: "20px 0" }}>
        {count}
      </h1>

      
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button
          onClick={increment}
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + เพิ่ม
        </button>

        <button
          onClick={decrement}
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          - ลด
        </button>

        <button
          onClick={reset}
          style={{
            backgroundColor: "orange",
            color: "white",
            fontSize: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
