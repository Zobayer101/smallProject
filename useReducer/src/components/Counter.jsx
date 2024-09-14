

import { useContext } from "react";
import { Dalivary } from "../App";
const Counter = () => {
    const countx = useContext(Dalivary);
    console.log(countx.state.count1)
    return (
      <div>
        <h1>Count:{countx.state.count1}</h1>
        <button onClick={() => countx.dispach({ Bangla: "incremant", value: 1 })}>
          Incremant
        </button>
        <button onClick={() => countx.dispach({ Bangla: "dicremant", value: 1 })}>
          Dicrimant
        </button>
        <h1>Count:{countx.state.count2}</h1>
        <button onClick={() => countx.dispach({ Bangla: "incremant2", dacimal: 10 })}>
          Incremant
        </button>
        <button onClick={() => countx.dispach({ Bangla: "dicremant2", dacimal: 10 })}>
          Dicrimant
        </button>
      </div>
    );
}
export default Counter;