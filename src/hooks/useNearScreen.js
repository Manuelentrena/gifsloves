import { useState, useEffect, useRef } from "react";

export default function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setShow] = useState(false); //Guardamos si esta cerca
  const fromRef = useRef(null); //Apunta al observer

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect(); /* Desconectamos el intersection observer */
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance /* Distancia antes de mostrarse en pantalla */,
      });
      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
