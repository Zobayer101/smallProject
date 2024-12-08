
import { useDispatch, useSelector } from "react-redux";
import { Dicremant2, Incremant2 } from "../features/countuer/counterSlice";
export default function CounterOne() {
    const Counter = useSelector((state) => state.counters);
    const dispach = useDispatch();

  return (
    <div>
      <h2>{Counter.counter2}</h2>
      <button onClick={() => dispach(Incremant2({value:2}))}>
        Incremat
      </button>
      <button onClick={() => dispach(Dicremant2({value:2}))}>
        Dicremant
      </button>
      <h2>{Counter.counter2}</h2>
      <button onClick={() => dispach(Incremant2({value:10}))}>
        Incremat
      </button>
      <button onClick={() => dispach(Dicremant2({value:10}))}>
        Dicremant
      </button>
    </div>
  );
}

