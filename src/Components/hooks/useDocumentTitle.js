import { useEffect } from "react";

export default function useDocumentTitle(titleName) {
  useEffect(() => {
    document.title = titleName;
  }, [titleName]);
}
