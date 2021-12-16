import { createContext, useState } from "react";
import Child1 from "./Child1";

export const ValueContext = createContext();

const UseContenxt = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <ValueContext.Provider value={{ val, setVal }}>
        <Child1 />
      </ValueContext.Provider>
    </div>
  );
};

export default UseContenxt;
