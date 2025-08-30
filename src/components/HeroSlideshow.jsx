import { useEffect, useState, useRef } from 'react';

export default function HeroSlideshow({
  images = [], // ['/images/bg1.jpg', '/images/bg2.jpg', ...]
  interval = 2500, // מילי-שניות בין תמונות
  logoSrc, // נתיב ללוגו (נשאר סטטי)
  logoAlt = 'Logo',
  className = '', // הרחבות Tailwind חיצוניות (גובה, רדיוסים וכו')
  children, // אופציונלי: תוכן נוסף מעל (כותרת/כפתור)
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  // Preload לכל התמונות כדי למנוע הבהובים
  useEffect(() => {
    if (!images?.length) return;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // מעגל תמונות עם כיבוד prefers-reduced-motion
  useEffect(() => {
    if (!images.length) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const start = () => {
      stop();
      timerRef.current = setInterval(() => {
        setIdx((i) => (i + 1) % images.length);
      }, interval);
    };
    const stop = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };

    start();
    return stop;
  }, [images.length, interval]);

  return (
    <section
      className={
        'relative overflow-hidden rounded-xl flex justify-center ' + // בלי items-center
        'min-h-[100vh] mb-[80px] ' + // שינוי ל- min-h
        className
      }
    >
      {/* שכבת הרקע: תמונות עם fade */}
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt=""
          className={
            'absolute inset-0 w-full h-full object-cover ' +
            'transition-opacity duration-700 ease-in-out ' +
            (i === idx ? 'opacity-100' : 'opacity-0')
          }
        />
      ))}

      {/* שכבה אופציונלית להכהיה קלה */}
      {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}

      {/* הלוגו והתוכן מעל – יושב למעלה עם מרווח */}
      <div className="relative z-10 flex flex-col items-center mt-15">
        {/* אם אין לך מחלקת mt-15, החלף ל: mt-[60px] */}
        {logoSrc && (
          <img
            src={logoSrc}
            alt={logoAlt}
            className="object-contain w-[180px] h-[50px] mb-4"
          />
        )}
        {children}
      </div>
    </section>
  );
}
