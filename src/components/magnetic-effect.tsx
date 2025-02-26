'use client';

import { cloneElement, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap, { Expo } from 'gsap';

gsap.registerPlugin(useGSAP);

const MagneticEffect = (props: {
  children: React.ReactElement<{ ref: React.RefObject<HTMLElement | null> }>;
}) => {
  const magneticRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const xPos = gsap.quickTo(magneticRef.current, 'x', {
      duration: 2.2,
      ease: Expo.easeOut,
    });
    const yPos = gsap.quickTo(magneticRef.current, 'y', {
      duration: 2.2,
      ease: Expo.easeOut,
    });

    const mousemove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magneticRef.current!.getBoundingClientRect();
      const x = clientX - (left + width / 1.5);
      const y = clientY - (top + height / 1.5);

      xPos(x);
      yPos(y);
    };
    const mouseleave = () => {
      xPos(0);
      yPos(0);
    };

    magneticRef.current!.addEventListener('mousemove', mousemove);
    magneticRef.current!.addEventListener('mouseleave', mouseleave);

    return () => {
      magneticRef.current!.removeEventListener('mousemove', mousemove);
      magneticRef.current!.removeEventListener('mouseleave', mouseleave);
    };
  }, []);

  return cloneElement(props.children, { ref: magneticRef });
};

export { MagneticEffect };
