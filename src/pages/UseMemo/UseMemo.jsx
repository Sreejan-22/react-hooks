import { useState, useMemo } from "react";

// usememo hook is used to improve performance by memoizing values to prevent an expensive function from getting re-called when the component is being re-rendered due to an entirely different event occuring in the page
// read more here: https://dmitripavlutin.com/react-usememo-hook/

// here clicking the button triggers a re-render but "factorial" calculating which can be an expensive operation for higher values of "number", has nothing to do with this re-render as long as the state variable "number" is not getting modified

// after memoizing "factorial" using useMemo, it only gets called when the input value changes and not when the button is clicked

function getFactorial(n) {
  console.log("getFactorial function called");
  return n <= 0 ? 1 : n * getFactorial(n - 1);
}

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(1);

  // const factorial = getFactorial(number);
  const factorial = useMemo(() => {
    return getFactorial(number);
  }, [number]);

  const onChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const onClick = () => setCount(count + 1);

  return (
    <div>
      Factorial of &nbsp;
      <input type="number" value={number} onChange={onChange} />
      &nbsp; is {factorial}
      <br />
      <br />
      Count: {count} &nbsp; <button onClick={onClick}>Add 1</button>
    </div>
  );
};

export default UseMemo;
