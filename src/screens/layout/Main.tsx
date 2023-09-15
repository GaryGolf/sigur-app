import React from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { PersonalForm, personalForm as form } from "../../forms/personal";
import styles from './layout.module.css';


function Main() {
  const isLoading = useStore(store => store.personal.isLoading);
  
  return (
    <div className={styles.container}>
      { isLoading && <p>Loading...</p> }
      <PersonalForm form={form}/>
    </div>
  );
}

export default observer(Main);
