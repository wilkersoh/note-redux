import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from "../store/counter"

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counterValue);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounter = () => {
    dispatch(counterActions.toggle())
  }

  const increment = () => {
    dispatch(counterActions.increment());
  }

  const incrementNumber = () => {
    dispatch(counterActions.incrementNumber(5));
  }

  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      {show && <div>{counter}</div>}
      <button onClick={increment}>+</button>
      <button onClick={incrementNumber}>+ 5</button>
      <button onClick={decrement}>-</button>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </div>
  );
}

export default Counter

