import { useEffect, useState } from "react";

export default function useLocalStorage(name, val) {
  const [value, setValue] = useState(localStorage.getItem(name) || "");

  useEffect(() => {
    localStorage.setItem(name, val);
  }, [name, val]);

  return [value, setValue];
}
