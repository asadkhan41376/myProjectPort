import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const LoaderData = [
  "Hello",
  "स्वागत हे",
  "خوش آمدید",
  "Ciao",
  "Olá",
  "おい"

];

const PreLoader = ({ setIsLoading }) => {
  const textRefs = useRef([]);

  useGSAP(() => {

    const ctr = gsap.context(() => {

      const tl = gsap.timeline(
        {
          onComplete: () => {
            if (typeof window !== "undefined") {
            gsap.to(".loader", {
              y: "-100%",
              borderBottomLeftRadius:"10%",
              borderBottomRightRadius:"10%",
              ease: "power1.out",
              duration: .2,
              delay:.2,
              onComplete: () => {
                setIsLoading(false)
              }
            })
          }
          }
        }
      );



      LoaderData.forEach((_, index) => {
        const el = textRefs.current[index];
        if (el) {
          tl.fromTo(
            el,
            { opacity: 0 },
            { opacity: 1, duration: 0.2 }
          ).to(el, {
            opacity: 0, duration: 0.2,
          });
        }
      });
    })

    return () => ctr.revert()

  }, []);

  return (
    <div className='loader'>
      <div className="overlay"></div>
      {LoaderData.map((text, index) => (
        <h3
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className='loadItem'
        >
          {text}
        </h3>
      ))}
    </div>
  );
};

export default PreLoader;
