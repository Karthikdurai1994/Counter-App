import { useDispatch, useSelector } from "react-redux";
import allActions from "./store/actions";
function App() {
  // Destrcutring allActions to get increment, decrement, logInSwitch actions
  const { increment, decrement, logInSwitch } = allActions;
  // Getting counterData from counter Reducer
  const counterData = useSelector((state) => {
    return state.counter;
  });
  // Getting isLoggedData from isLogged reducer
  const isLoggedData = useSelector((state) => {
    return state.isLogged;
  });
  // useDispatch Hook from react-redux used to call reducer by passing action as parameter
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello {counterData}</h1>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <br />
      {isLoggedData ? (
        <button
          onClick={() => {
            dispatch(logInSwitch());
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(logInSwitch());
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
}

export default App;
