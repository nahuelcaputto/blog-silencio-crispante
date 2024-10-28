import { useEffect } from "react";

export const useExitSectionOpen = (
  ref: any,
  callback: Function,
  options: any,
  avoidElementRef?: any,
  avoidDOMElement?: HTMLElement | null
) => {
  useEffect(() => {
    options.outside &&
      document.addEventListener("mousedown", handleClickOutside);
    options.escape && document.addEventListener("keyup", handleEsc);

    return () => {
      options.outside &&
        document.removeEventListener("mousedown", handleClickOutside);
      options.escape && document.removeEventListener("keyup", handleEsc);
    };
  }, [callback]);

  const modalAsyncDiv = document.getElementById("modal-async");
  const toastifyDiv = document.getElementsByClassName("Toastify__toast")[0];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (!options.isBlocker &&
        modalAsyncDiv &&
        modalAsyncDiv.contains(event.target as Node)) ||
      (toastifyDiv && toastifyDiv.contains(event.target as Node)) ||
      (avoidElementRef &&
        avoidElementRef.current &&
        avoidElementRef.current.contains(event.target as Node)) ||
      (ref && ref.current && ref.current.contains(event.target as Node)) ||
      (avoidDOMElement && avoidDOMElement.contains(event.target as Node))
    ) {
      return;
    }
    callback();
  };

  const handleEsc = (event: KeyboardEvent) =>
    event.key === "Escape" && callback();
};
