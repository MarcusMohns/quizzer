import { useRef, useState, useEffect } from "react";

const useElementsOnScreen = (options) => {
  const { root, rootMargin, treshold } = options;

  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState({});

  //   console.log(refs.current[0].id);

  const callbackFunction = (entries) => {
    entries.map((entry) => {
      setVisibleStates(
        (prevVisibleStates) =>
          (prevVisibleStates = {
            ...prevVisibleStates,
            [entry.target.id]: entry.isIntersecting,
          })
      );
    });
  };

  useEffect(() => {
    const currentRefs = refs.current;
    const observer = new IntersectionObserver(callbackFunction, {
      root: root,
      rootMargin: rootMargin,
      threshold: treshold,
    });
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refs]);

  return [refs, visibleStates];
};

export default useElementsOnScreen;
