import { useState } from 'react';
import { saveClicker } from '../network/apiHandler';

export default function Counter() {
  const [count, setCount] = useState(0);

  function onSaveClick() {
    saveClicker(count);
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={onSaveClick}>Save Clicker</button>
      </div>
    </>
  );
}
