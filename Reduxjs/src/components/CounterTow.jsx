

import { useDispatch, useSelector } from 'react-redux';
import { Dicremant, Incremant } from '../features/countuer/counterSlice';

export default function CounterTow() {
    const counters = useSelector((state) => state.counters);
    const dispach = useDispatch();
    
  return (
    <div>
      <h2>{counters.counter1}</h2>
      <button onClick={() => dispach(Incremant())}>
        Incremant
      </button>
      <button onClick={() => dispach(Dicremant())}>
        Dicremant
      </button>
    </div>
  );
}
