
import { useDispatch, useSelector } from "react-redux";
import { Dicremant2, Incremant2 } from "../features/countuer/counterSlice";
export default function CounterOne() {
    const Counter = useSelector((state) => state.counters);
    const dispach = useDispatch();

  return (
    <div>
      <h2>{Counter.counter2}</h2>
      <button onClick={() => dispach(Incremant2())}>
        Incremat
      </button>
      <button onClick={() => dispach(Dicremant2())}>
        Dicremant
      </button>
    </div>
  );
}

