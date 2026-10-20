/*
|--------------------------------------------------------------------------
| File: src/components/ScrollIndicator/ScrollIndicator.jsx
| Description: Fixed draggable right-side scroll progress indicator.
|--------------------------------------------------------------------------
*/

import { useEffect, useRef, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [progress, setProgress] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      if (dragging.current) return;

      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handlePointerDown = (event) => {
    event.preventDefault();

    dragging.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging.current) return;

    const track = event.currentTarget.parentElement;
    const rect = track.getBoundingClientRect();

    const thumbHeight = 48;
    const usableHeight = rect.height - thumbHeight;

    let position =
      event.clientY - rect.top - thumbHeight / 2;

    position = Math.max(0, Math.min(position, usableHeight));

    const newProgress =
      usableHeight > 0
        ? (position / usableHeight) * 100
        : 0;

    setProgress(newProgress);

    const pageHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    window.scrollTo({
      top: (newProgress / 100) * pageHeight,
      behavior: "auto",
    });
  };

  const handlePointerUp = (event) => {
    dragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="scroll-indicator" aria-hidden="true">
      <div className="scroll-indicator-track">
        <div
          className="scroll-indicator-progress"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div
        className="scroll-indicator-thumb"
        style={{ top: `${progress}%` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      <div className="scroll-indicator-dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default ScrollIndicator;