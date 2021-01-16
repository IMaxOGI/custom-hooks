import React from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";
import useDocumentTitle from "./hooks/useDocumentTitle";
import useLocalStorage from "./hooks/useLocalStorage";

export default function ExampleOnlineStatus() {
  const [value, setValue] = useLocalStorage("name", "vlad");
  useDocumentTitle("Занятия | Hillel LMS");
  const isOnline = useOnlineStatus();

  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>

      <br />

      <p>{isOnline ? "online" : "offline"} </p>
    </div>
  );
}
