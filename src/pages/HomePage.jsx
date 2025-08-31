// pages/HomePage.jsx (SLIM)
import SiteFooter from '@/components/SiteFooter';
import '../styles/HomePage.css';
import OurSocial from '../components/Social/OurSocial';
import RegisterButton from '@/components/RegisterButton';
import HeroSlideshow from '@/components/HeroSlideshow';

import black from '@/assets/Solid_black.png';

function HomePage() {
  return (
    <div id="main-HP" className="grid grid-cols-12 gap-4 mx-[20px]">
      {/* Hero slideshow */}
      <div className="col-span-12">
        <HeroSlideshow images={[black, black, black, black]} logoSrc={black} />
      </div>

      {/* About section */}
      <div className="col-span-12 flex justify-center items-center my-[160px]">
        <div
          dir="rtl"
          className="text-center max-w-2xl text-sm leading-relaxed font-fredoka p-4"
        >
          בסטודיו שלנו, הממוקם בלב מתחם <span dir="ltr">G</span> ראשון לציון,
          תמצאי חווית אימון ייחודית המשלבת מקצועיות בלתי מתפשרת עם אווירה
          אלגנטית ומרוממת. האימונים מתקיימים בקבוצות קטנות ואיכותיות, ומיועדים
          לכל הרמות – מהצעדים הראשונים בעולם הכושר ועד מתאמנות מנוסות. התוכנית
          משלבת אימוני כוח מתקדמים לצד עבודה אירובית מגוונת, ובנוסף מוצעת תוכנית
          תזונה אישית למעוניינות בתוצאות מיטביות.
          <br />
          <br />
          הצטרפי למשפחת{' '}
          <span className="font-semibold" dir="ltr">
            Hez&amp;Danz
          </span>
          .
        </div>
      </div>

      {/* Nutrition + Training */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 mt-[80px]">
        {/* Nutrition */}
        <div className="md:col-span-6 h-[600px] rounded-xl relative">
          <img
            src={black}
            alt=""
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end font-fredoka text-center px-4">
            <div className="mb-16">
              <h2 className="text-brand/50 text-2xl md:text-4xl font-light mb-4">
                תוכנית תזונה מותאמת אישית
              </h2>
              <p className="text-brand/50 text-xs md:text-sm mb-6">
                משלבת תפריט חכם עם הליווי שמחזיק אותך במסלול{' '}
              </p>
              <RegisterButton href="#signup" className="text-sm md:text-base">
                לבניית התוכנית
              </RegisterButton>
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="md:col-span-6 h-[600px] rounded-xl overflow-hidden relative">
          {/* מחליף את הוידאו בתמונה שחורה */}
          <img
            src={black}
            alt=""
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center font-fredoka text-center px-4">
            <h2 className="text-white text-2ל md:text-4xl font-light mb-4">
              חווית אימון אחרת
              <br /> בלב ראשון לציון
            </h2>
            <p dir="rtl" className="text-white text-xs md:text-sm mb-6">
              10 אימונים ראשונים במחיר מיוחד
            </p>
            <RegisterButton href="#signup" className="text-sm md:text-base">
              לפרטים וחבילות
            </RegisterButton>
          </div>
        </div>
      </div>

      {/* Social section */}
      <div className="col-span-12">
        <OurSocial images={[black, black, black, black]} />
      </div>

      <section className="grid grid-cols-12 col-span-12 mb-[2%]">
        <SiteFooter />
      </section>
    </div>
  );
}

export default HomePage;
