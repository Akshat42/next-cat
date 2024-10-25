import { useCallback, useEffect, useState } from "react";

export const useImageOverlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOverlayOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOverlayOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen, handleKeyDown]);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return { isOverlayOpen, openOverlay, closeOverlay };
};
