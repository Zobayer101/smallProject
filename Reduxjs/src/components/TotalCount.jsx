import { useSelector } from "react-redux"



export default function TotalCount() {
    const counter = useSelector((state) => state.counters);
  return (
      <div>Our total count {counter.counter1+counter.counter2 }</div>
  )
}
