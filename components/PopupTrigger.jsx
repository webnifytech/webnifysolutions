"use client";

/**
 * PopupTrigger — renders any element that fires the global "open-popup" event.
 * Usage:
 *   <PopupTrigger className="...">Get Free Quote</PopupTrigger>
 *   <PopupTrigger as="a" className="...">Contact Us</PopupTrigger>
 */
export default function PopupTrigger({ as: Tag = "button", children, className, style, onClick, ...rest }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-popup"));
    if (onClick) onClick(e);
  };
  return (
    <Tag className={className} style={style} onClick={handleClick} {...rest}>
      {children}
    </Tag>
  );
}
