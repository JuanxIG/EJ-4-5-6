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
            {this.state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{this.state.nombre} {this.state.apellidos}</h3>
            <h1>Edad: {this.state.edad}</h1>
        </div>
    );
}
    

export default ComponenteF;
