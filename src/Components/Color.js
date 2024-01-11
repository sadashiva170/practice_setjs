import React, { useState } from "react";

const FunctionClick = () => {
    const [color, setColor] = useState("red");

    const clickHandler = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomColor)
        setColor(randomColor);
    };

    return (
        <div>
            <button style={{ color: color,padding:"10px" }} onClick={clickHandler}>
                Sada shiva
            </button>
        </div>
    );
};

export default FunctionClick;
