import React, {useState} from "react";

export const UseStateDemo1 = () => {

    const [count, setcount] = useState(0);

    function test() {
        alert("test function called....");
    }

    const increseCount = () => {
        setCount(count + 1);

    };
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <button onClick={test}>Click</button>
        <button 
            onClick={ () =>{
                test();

             }} 
        >
            CLICK
        </button>
        <h1>count = {count}</h1>
        <button
          onClick={() => {
            increseCount();
          }}
        >
            increse

        </button>
        </div>
  );
};
