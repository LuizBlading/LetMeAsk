import { useState } from "react";

export function Button(){
    // let counter = 0;

    //  Para criar um estado... 
    const [counter, setCounter] = useState(0)

    function increment(){
        // counter += 1;
        setCounter(counter + 1);
        console.log(counter)
    }

    return(
        <button onClick={increment}>{counter}</button>
    )
}

// Named export, forçando a mudar o nome do componente na importação