import { useEffect } from "react";

/**
 * Custom hook that detects clicks outside of a given ref element.
 *
 * @param {object} ref - The ref of the element to detect outside clicks.
 * @param {Function} callback - Function to call when an outside click is detected.
 */
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if the click is outside the referenced element
      if (!ref.current || ref.current.contains(event.target)) {
        return; // If inside, do nothing
      }
      callback(event); // If outside, call the callback
    };

    // Attach event listeners for mousedown and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove the listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Effect runs when ref or callback changes
};
