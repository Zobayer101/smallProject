import ComponentA from "./components/componentA";
import { createContext, useReducer} from "react";
export const Dalivary = createContext();

const init = {
  count1: 0,
  count2:10,
};
const reducer = (state,action) => {
  switch (action.Bangla) {
    case 'incremant':
      return { ...state,count1: state.count1 + action.value };
    case 'dicremant':
      return { ...state, count1: state.count1 - action.value };
    case 'incremant2':
      return { ...state, count2: state.count2 + action.dacimal };
    case 'dicremant2':
      return { ...state, count2: state.count2 - action.dacimal };
    
    default:
      return state;
  }
}


export default function App() {
  const [state, dispach] = useReducer(reducer,init);
  let name = "habib";
  
  return (
    <>
      <h1>
        {name} {state.count1}
      </h1>
      <Dalivary.Provider value={{ name, state, dispach }}>
        <ComponentA />
      </Dalivary.Provider>
    </>
  );
}
