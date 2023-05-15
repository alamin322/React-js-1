import React, { useState } from "react";

const ColorChanging = () => {
    const [color, setColor] = useState("red");

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "2022",
        car_color: "pink"
    });

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, car_color: 'blue'}
        })
    }

    return (
        <>
            <h1>My favorite color is: {color}</h1>
            <button onClick={() => setColor("blue")}>Change color</button>
            <h1>My favorite color is: {car.car_color}</h1>
            <button onClick={updateColor}>Change color</button>
        </>
    );
}

export default ColorChanging;