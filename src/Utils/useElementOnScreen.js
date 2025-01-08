import { useRef, useState, useEffect } from "react";

const useElementsOnScreen = (options) => {
  const { root, rootMargin, threshold } = options;

  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState({});

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      setVisibleStates((prevVisibleStates) => ({
        ...prevVisibleStates,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const currentRefs = refs.current;
    const observer = new IntersectionObserver(callbackFunction, {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold,
    });
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refs, root, rootMargin, threshold]);

  return [refs, visibleStates];
};

export default useElementsOnScreen;
