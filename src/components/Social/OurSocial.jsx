import { useEffect, useRef, useState } from 'react';

export default function OurSocial({ images = [] }) {
  // נרמול: מקבלים גם מחרוזות (תמונה), גם אובייקטים (תמונה/וידאו)
  const media = images.map((item) =>
    typeof item === 'string' ? { type: 'image', src: item } : item
  );

  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const mqlRef = useRef(null);

  // אוטופליי רק ב-≤640px
  useEffect(() => {
    if (!media.length) return;

    mqlRef.current = window.matchMedia('(max-width: 639px)');

    const start = () => {
      stop();
      timerRef.current = setInterval(() => {
        setIdx((i) => (i + 1) % media.length);
      }, 4000);
    };
    const stop = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
    const onChange = (e) => {
      stop();
      if (e.matches) start();
    };

    if (mqlRef.current.matches) start();
    mqlRef.current.addEventListener('change', onChange);
    return () => {
      mqlRef.current?.removeEventListener('change', onChange);
      stop();
    };
  }, [media.length]);

  const pause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const resume = () => {
    if (!timerRef.current && mqlRef.current?.matches) {
      timerRef.current = setInterval(
        () => setIdx((i) => (i + 1) % media.length),
        3000
      );
    }
  };

  return (
    <section className="col-span-12 my-[80px] pb-[80px] bg-brand/5">
      <h1
        className="font-fredoka text-center py-[80px] 
               text-5xl lg:text-7xl 
               "
      >
        OUR SOCIAL
      </h1>

      {/* Grid לטאבלט/דסקטופ */}
      <div className="hidden sm:grid grid-cols-12 gap-4 mx-8">
        {media.map((item, i) => (
          <div
            key={(item.src || '') + i}
            className={`col-span-3 max-lg:col-span-3 ${
              i % 2 === 0 ? 'max-lg:col-start-4' : ''
            }
                        aspect-[9/16] rounded-xl overflow-hidden shadow-2xl`}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover block"
              />
            ) : (
              <img
                src={item.src}
                alt=""
                loading="eager"
                className="w-full h-full object-cover block"
              />
            )}
          </div>
        ))}
      </div>

      {/* מובייל: Fades */}
      <div className="sm:hidden px-4">
        <div
          className="relative mx-auto max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {media.map((item, i) => (
            <div
              key={(item.src || '') + i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                         ${i === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover block"
                />
              ) : (
                <img
                  src={item.src}
                  alt=""
                  loading="eager"
                  className="w-full h-full object-cover block"
                />
              )}
            </div>
          ))}

          {/* נקודות ניווט */}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full ${
                  i === idx ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
