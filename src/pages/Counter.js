import React, {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  
  return (
    <div>
      <button>+1</button>
      <button>-1</button>
      <p>{number}</p>
    </div>
  );
};

export default Counter;