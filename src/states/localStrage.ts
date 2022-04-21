import { useState } from "react";
import store from "store2";

export const musicDataState = () => {
  const [strageData, setStrageData] = useState("");
  const [loading] = useState(false);

  const setStore = (key: string, data: string) => {
    store.set(key, data);
  };

  const getStore = (key: string) => {
    return store.remove(key);
  };

  const addSearchLog = (addLog: string) => {
    const logs = store.get("searchLog");
  };

  const getSearchLogs = () => {
    setStrageData(getStore("searchLog"));
  };

  return { strageData, loading, addSearchLog, getSearchLogs };
};
