import { useEffect, useReducer, useRef } from "react";

// implement a stopwatch using useReducer
// for more details refer: https://dmitripavlutin.com/react-usereducer/

const initialState = {
  isRunning: false,
  time: 0,
};

function reducerFunc(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const timerRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    timerRef.current = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      // timerRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      <h1>useReducer</h1>
      <h2>{state.time}s</h2>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
