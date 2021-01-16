import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [value, setValue] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", value);
  }, [value]);

  return [value, setValue];
}
