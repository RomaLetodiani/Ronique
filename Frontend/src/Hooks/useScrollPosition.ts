import { useState, useEffect, RefObject } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  isAtStartX: boolean;
  isAtEndX: boolean;
  isAtStartY: boolean;
  isAtEndY: boolean;
}

/**
 * Hook to track the scroll position of the window.
 * @param containerRef - The ref of the container element to track the scroll position of.
 * @returns ScrollPosition - The current scroll position.
 */

function useScrollPosition(
  nearSpace: number = 0,
  containerRef?: RefObject<HTMLElement>
): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    isAtStartX: true,
    isAtEndX: false,
    isAtStartY: true,
    isAtEndY: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const container = containerRef.current;
        setScrollPosition({
          x: container.scrollLeft,
          y: container.scrollTop,
          isAtStartX: container.scrollLeft <= nearSpace,
          isAtEndX:
            container.scrollLeft + container.clientWidth >= container.scrollWidth - nearSpace,
          isAtStartY: container.scrollTop <= nearSpace,
          isAtEndY:
            container.scrollTop + container.clientHeight >= container.scrollHeight - nearSpace,
        });
      } else {
        setScrollPosition({
          x: window.scrollX,
          y: window.scrollY,
          isAtStartX: window.scrollX <= nearSpace,
          isAtEndX:
            window.scrollX + window.innerWidth >= document.documentElement.scrollWidth - nearSpace,
          isAtStartY: window.scrollY <= nearSpace,
          isAtEndY:
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - nearSpace,
        });
      }
    };

    const container = containerRef?.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    // Initial call to set the state based on the current scroll position
    handleScroll();

    // Clean up event listeners on unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef, containerRef?.current, nearSpace]);

  return scrollPosition;
}

export default useScrollPosition;

// Example usage

// Window
// const scrollPosition = useScrollPosition();

// Container
// const containerRef = useRef<HTMLDivElement>(null);
// const scrollPosition = useScrollPosition(containerRef);

//  Object Destructuring
// const {x, y} = useScrollPosition()

//  Near Space
// const {x, y, isAtStartX, isAtEndX, isAtStartY, isAtEndY} = useScrollPosition(100);
