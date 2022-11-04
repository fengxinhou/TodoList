import { useEffect, useState } from "react";
function useLocalStorage(key, initialValue) {
  const [renderTask, setRenderTask] = useState(initialValue);
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(renderTask));
  }, [key, renderTask]);
  return [setRenderTask];
}

export default useLocalStorage;
