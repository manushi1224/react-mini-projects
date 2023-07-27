import React, { useState } from "react";
import Custom from "./Custom";

const above18 = false;
const age = 17;

function Header(){

    const [counter, setCounter] = useState(0)

    function increase(){
        setCounter(function(oldCounterValue){
            return oldCounterValue + 1
        })
    }

    function decrease(){
        setCounter(oldCounterValue => oldCounterValue - 1)
    }
    
    return <header>
        <h1>This is header</h1>
             {/* { above18 ? <p>I am above 18</p> : null}</h1> */}
            {/* <h1>{age<18 && <p>may not be visible</p>}</h1> */}
            <h1>Counter : {counter}</h1>
            <button onClick={increase}>Decrement</button>
            <button onClick={decrease}>Increment</button>
        <Custom name = "Groot" greetingsMessage = "Hola" />
    </header>
}

export default Header