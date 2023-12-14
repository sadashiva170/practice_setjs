import React, { useState } from 'react';

function HookArray() {
  const [myArray, setMyArray] = useState([]);

  // add an item to the array
  const addItem = () => {
    setMyArray([...myArray,"hi shiva"]);
  }

  return (
    <div>
      <h1>My Array:</h1>
      <ul>
        {myArray.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
 
export default HookArray