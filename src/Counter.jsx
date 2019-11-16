import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  let handleChange = event => {
    setCount(eval(event.target.value));
  };
  return (
    <div>
      <form className="MyTitleForm">
        <label htmlFor="title">Enter number </label>
        <input type="number" onChange={handleChange} />
      </form>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
