import { useState } from "react";

type Props = {};

const CountersItem = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      change count <span>({count})</span>
    </button>
  );
};
export default CountersItem;
