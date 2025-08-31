import footerBg from '../assets/Solid_black.png';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiGooglemaps, SiWaze } from 'react-icons/si';

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="
        relative col-span-12 mt-auto min-h-[250px] rounded-xl text-white bg-cover bg-center
      "
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* שכבת כהות */}
      <div className="pointer-events-none rounded-xl absolute inset-0 bg-black/20 z-0" />

      {/* קונטיינר פנימי + safe area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-10 flex flex-col gap-8 justify-between">
        {/* אייקונים */}
        <div
          className="flex justify-center gap-6 text-xl sm:text-2xl"
          dir="rtl"
        >
          <FaWhatsapp className="opacity-80 hover:opacity-100" />
          <FaInstagram className="opacity-80 hover:opacity-100" />
          <SiGooglemaps className="opacity-80 hover:opacity-100" />
          <SiWaze className="block md:hidden opacity-80 hover:opacity-100" />
        </div>

        {/* קישורים + זכויות */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div
            className="text-[10px] sm:text-xs text-gray-200 whitespace-nowrap"
            dir="rtl"
          >
            © 2022 Hez&amp;Danz – כל הזכויות שמורות
          </div>

          <nav
            aria-label="ניווט תחתון"
            className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-6 text-xs sm:text-sm text-white/90"
          >
            <a href="/terms" className="hover:underline underline-offset-4">
              תקנון
            </a>
            <a href="/privacy" className="hover:underline underline-offset-4">
              מדיניות פרטיות
            </a>
            <a href="/contact" className="hover:underline underline-offset-4">
              צור קשר
            </a>
            <a href="/refunds" className="hover:underline underline-offset-4">
              מדיניות ביטולים
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
