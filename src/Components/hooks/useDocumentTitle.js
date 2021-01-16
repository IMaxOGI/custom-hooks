import { useEffect } from "react";

export default function useDocumentTitle() {
  useEffect(() => {
    document.title = "titleName";
  }, []);
}
