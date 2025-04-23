import { useState, useEffect, useRef } from "react";
import { VisibleStates } from "./store";

interface options {
  root: null;
  rootMargin: string;
  threshold: number;
}

export const useElementOnScreen = (options: options) => {
  const { root, rootMargin, threshold } = options;

  //   const refs = useRef<Refs>({ current: [] });
  const refs = useRef<HTMLElement[]>([]);

  const [visibleStates, setVisibleStates] = useState<VisibleStates>({
    "welcome-message": false,
    "welcome-box": false,
    "generate-section": false,
    "quiz-cards-container": false,
    "quiz-cards": false,
  });

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setVisibleStates((prevVisibleStates) => ({
        ...prevVisibleStates,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const currentRefs = Array.from(refs.current);
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
  return { refs, visibleStates };
};
