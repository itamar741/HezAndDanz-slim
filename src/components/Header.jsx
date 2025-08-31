import { useEffect, useState, useCallback } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import '../styles/Header.css';
import menuSVG from '../assets/icons/greenMenu.svg';
import logo from '../assets/Solid_black.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // סגירה בלחיצה על ESC
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  // נעילת גלילה כשמגרה פתוח + ESC listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <header
      className="
        sticky top-0 my-4 z-50 bg-white
        grid grid-cols-12 gap-4 mx-[20px] h-[74px]
      "
    >
      <div
        id="mobileHead1"
        className="col-span-12 flex justify-between h-full items-center"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-[55px] w-auto object-contain sm:w-[8%]"
        />

        <div className="flex items-center justify-between w-[160px]">
          <div className="rounded-2xl bg-brand/10 h-[30px] w-[100px] flex items-center justify-center">
            <h2 className="font-fredoka text-center text-xs">להרשמה</h2>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="main-drawer"
          >
            <img
              src={menuSVG}
              alt="Menu"
              className="lg:w-[25px] w-[30px] object-contain"
            />
          </button>
        </div>
      </div>

      {/* Drawer – מרונדר רק כשהוא פתוח */}
      {isOpen && (
        <div
          id="main-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex"
        >
          {/* רקע כהה – קליק סוגר */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-label="סגור תפריט"
          />

          {/* המגרה עצמו */}
          <div className="relative flex translate-x-0 transition-transform duration-300 ease-in-out">
            <div
              className="
                font-Abril-Fatfac font-bold bg-white h-full shadow-md p-8
                flex flex-col items-center space-y-6
                min-[70px]:w-[70%] min-[290px]:w-[270px] min-[375px]:w-[300px]
              "
            >
              {/* כותרת המגרה */}
              <div className="flex justify-center items-center text-black w-full text-center p-2 text-2xl font-thin font-Cinzel-Decorative">
                <h1>Hez&Danz</h1>
              </div>

              {/* קישורים */}
              <a href="#" className="!h-10 header-link">
                <HeartIcon className="w-5 h-5" />
              </a>
              <a href="#" className="header-link">
                HOME
              </a>
              <a href="#" className="header-link">
                ABOUT
              </a>
              <a href="#" className="header-link">
                CONTACT
              </a>
            </div>

            {/* כפתור סגירה */}
            <button
              type="button"
              className="h-[50px] text-black bg-white text-2xl p-2 rounded-br-xl"
              onClick={() => setIsOpen(false)}
              aria-label="סגור"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
