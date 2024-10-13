import React, { useRef, useState } from 'react';

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const timerId = useRef();

  function timerOn() {
    setCount(() => 0);
    timerId.current = setInterval(() => setCount((prev) => prev + 1), 1000);
  }

  function timerOff() {
    clearInterval(timerId.current);
  }

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Timer: {count}s</div>
      <div className="flex justify-between">
        <button onClick={timerOff} className="text-amber-500 font-bold">
          Stop
        </button>
        <button onClick={timerOn} className="text-green-500 font-bold">
          Start
        </button>
      </div>
    </div>
  );
}
