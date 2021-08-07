import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounter = () => {
    dispatch({type: 'toggle'})
  }

  const increment = () => {
    dispatch({type: 'increment'})
  }

  const incrementNumber = () => {
    dispatch({type: 'incrementNumber', amount: 5})
  }
  const decrement = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <div>
      {show && <div>{counter}</div>}
      <div>Counter: {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={incrementNumber}>+ 5</button>
      <button onClick={decrement}>-</button>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </div>
  );
}

export default Counter

