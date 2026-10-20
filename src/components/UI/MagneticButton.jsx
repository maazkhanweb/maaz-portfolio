/*
 * File: src/components/UI/MagneticButton.jsx
 * Description: Reusable magnetic interactive button for the portfolio.
 */

import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "./MagneticButton.css";

const MagneticButton = ({
  children = "VIEW PROJECT",
  onClick,
  href,
  variant = "primary",
  icon = true,
  className = "",
}) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;

    if (!button) {
      return;
    }

    const rect = button.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform = `
      translate(${x * 0.12}px, ${y * 0.12}px)
    `;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) {
      return;
    }

    button.style.transform =
      "translate(0px, 0px)";
  };

  const content = (
    <>
      <span className="magnetic-button-text">
        {children}
      </span>

      {icon && (
        <span className="magnetic-button-icon">
          <FiArrowUpRight />
        </span>
      )}
    </>
  );

  const commonProps = {
    ref: buttonRef,
    className: `
      magnetic-button
      magnetic-button-${variant}
      ${className}
    `,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default MagneticButton;