import { useState, useCallback } from "react";

function useCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCounter((el) => el + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((el) => el - 1);
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: reset,
  };
}

export function HookCounters({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}