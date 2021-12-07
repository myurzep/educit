import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchDataAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const fetchDataHandler = () => {
    dispatch(fetchDataAction());
  };

  console.log(state.fetchData);

  return (
    <div>
      <button onClick={fetchDataHandler}>получить данные</button>
      <hr />
      {state.fetchDataLoading && <div>loading...</div>}
      {state.fetchData && !state.fetchDataLoading && (
        <ul>
          {state.fetchData.map((el, i) => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      )}
      {state.fetchDataError && state.fetchDataLoading && <div>error!</div>}
    </div>
  );
}

export default App;
