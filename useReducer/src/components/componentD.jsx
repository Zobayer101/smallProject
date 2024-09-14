
import { useContext } from "react";
import { Dalivary } from "../App";
import Counter from "./Counter";
export default function ComponentD() {
    const data = useContext(Dalivary);
    
  return (
    <div>
          <div className="compontent">This is a componentD{data.name}</div>
          <Counter/>
    </div>
  );
}
