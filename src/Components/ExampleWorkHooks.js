import React from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";
import useDocumentTitle from "./hooks/useDocumentTitle";
import useLocalStorage from "./hooks/useLocalStorage";

export default function ExampleOnlineStatus() {
  const [value, setValue] = useLocalStorage("name", "Bob");
  useDocumentTitle("Занятия | Hillel LMS");
  const isOnline = useOnlineStatus();

  const inputStorage = (event) => setValue(event.target.value);

  return (
    <div>
      <input value={value} type="text" onChange={inputStorage} />
      <p>{value}</p>

      <br />

      <p>{isOnline ? "online" : "offline"} </p>
    </div>
  );
}
