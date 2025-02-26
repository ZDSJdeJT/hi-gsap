'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { XIcon } from 'lucide-react';

import packageJSON from '~/package.json';
import { MagneticEffect } from '@/components/magnetic-effect';

gsap.registerPlugin(useGSAP);

const words = ['关于', '服务', '文章', '项目', '联系我'];

export default function Home() {
  const logoTextRef = useRef<HTMLHeadingElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from([logoTextRef.current, closeRef.current], {
      y: 5,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    }).from(wordsRef.current!.children, {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: {
        amount: 0.7,
      },
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 m-4">
        <h2
          ref={logoTextRef}
          className="font-[family-name:var(--font-noto-mono)] text-lg font-medium"
        >
          {`${packageJSON.author} - ${new Date().getFullYear()}`}
        </h2>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <div ref={closeRef}>
          <MagneticEffect>
            <div className="bg-black p-14 rounded-full cursor-pointer">
              <XIcon size={16} className="text-white" />
            </div>
          </MagneticEffect>
        </div>
      </div>
      <div
        ref={wordsRef}
        className="flex items-center justify-center flex-wrap max-w-3xl gap-14"
      >
        {words.map((word, index) => (
          <MagneticEffect key={index}>
            <h2 className="font-[family-name:var(--font-noto-sans)] text-8xl font-light cursor-pointer leading-none">
              {word}
              <span className="text-sm">{`（${index + 1}）`}</span>
            </h2>
          </MagneticEffect>
        ))}
      </div>
    </section>
  );
}
