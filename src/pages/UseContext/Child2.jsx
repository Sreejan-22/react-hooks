import { useContext } from "react";
import { ValueContext } from "./UseContext";

export default function Child2() {
  const { val, setVal } = useContext(ValueContext);
  return (
    <div>
      <h1>Current Value: {val}</h1>
      <button onClick={() => setVal(val + 1)}>Add 1 to current value</button>
    </div>
  );
}
