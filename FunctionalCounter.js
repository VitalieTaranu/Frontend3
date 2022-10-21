import { useState } from "react";

export function FunctionalCounter(props) {
  const { initialValue } = props;

  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return (
    <div>
      <p>FunctionalCounter: {props.initialValue}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
