import { createContext } from "react";
import CounterOne from "./components/CounterOne";
import CounterTow from "./components/CounterTow";
import TotalCount from "./components/TotalCount";
import { useReducer } from "react";

export const Dalivar = createContext();
const initalState = {
  counter1: 0,
  counter2:5,
}

const reducer = (state,action) => {
  switch (action.type) {
    case "incremant":
      return { ...state, counter1: state.counter1 + action.value };
    case "dicremant":
      return { ...state, counter1: state.counter1 - action.value };
    case "incremant2":
      return { ...state, counter2: state.counter2 + action.value2 };
    case "dicremant2":
      return { ...state, counter2: state.counter2 - action.value2 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispach] = useReducer(reducer, initalState);
  return (
    <>
      <div>
        <Dalivar.Provider value={{state,dispach}}>
          <CounterOne />
          <CounterTow />
          <TotalCount />
        </Dalivar.Provider>
      </div>
    </>
  );
}
