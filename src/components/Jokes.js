import React from "react";
import '../styles/Jokes.css';

export default function Jokes(props){
    let setup = 
    <>
        <p className="title">Setup : </p>
        <p className="details">{props.setup}</p>
    </>

    let puncline = 
    <>
        <p className="title">Punchline : </p>
        <p className="details">{props.punch}</p>
    </>

    if(props.setup == null || props.setup === "") setup = "";

    return(
        <div className="jokes">
            <>{setup}</>
            <>{puncline}</>
        </div>
    )
}