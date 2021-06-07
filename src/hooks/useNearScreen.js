import { useState, useEffect, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false); //Guardamos si esta cerca
  const fromRef = useRef(null); //Apunta al observer

  useEffect(() => {
    let observer;

    /* Usara referencia externa por prioridad */
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        once &&
          observer.disconnect(); /* Desconectamos el intersection observer */
      } else {
        !once && setShow(false);
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

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
