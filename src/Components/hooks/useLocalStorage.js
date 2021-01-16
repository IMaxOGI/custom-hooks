import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [value, setValue] = useState(localStorage.getItem("myStorage") || "");

  useEffect(() => {
    localStorage.setItem("myStorage", value);
  }, [value]);

  return [value, setValue];
}
