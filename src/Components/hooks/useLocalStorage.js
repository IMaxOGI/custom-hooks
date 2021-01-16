import { useEffect, useState } from "react";

export default function useLocalStorage(name) {
  const [value, setValue] = useState(localStorage.getItem(name) || "");

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [name, value]);

  return [value, setValue];
}
