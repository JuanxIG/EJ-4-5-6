import React, { useEffect } from 'react';

const ComponenteF = (props) => {

    useEffect(() => {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
        return () => {
            clearInterval(this.timerID)
        };
    }, []);

    return (
        <div>
            <h2>
            Hora Actual:
            {props.fecha.toLocaleTimeString()}
            </h2>
            <h3>{props.nombre} {props.apellidos}</h3>
            <h1>Edad: {props.edad}</h1>
        </div>
    );
}
    

export default ComponenteF;
