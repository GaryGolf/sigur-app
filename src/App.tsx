import React from 'react';
import { observer } from "mobx-react-lite";
import './App.css';
import { useStore } from "./store";

import { PersonalForm, personalForm as form } from "./forms/personal";


function App() {
  const isLoading = useStore(store => store.personal.isLoading);
  
  return (
    <div className="App">
      { isLoading && <p>Loading...</p> }
      <PersonalForm form={form}/>
    </div>
  );
}

export default observer(App);
