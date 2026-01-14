import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen space-y-20">

      {/* ================= HERO SECTION ================= */}
      
      <section className="bg-green-50">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center space-y-8">

          {/* LOGOS AT TOP */}
          <div className="flex flex-col sm:flex-row justify-center items-center 
                          gap-6 sm:gap-16 md:gap-24">

            <Image
              src="/logo.jpeg"
              alt="Company Logo"
              width={260}
              height={260}
              className="object-contain
                        w-40 h-40
                        sm:w-48 sm:h-48
                        md:w-64 md:h-64
                        lg:w-72 lg:h-72"
            />


            <Image
              src="/IQ WITH INR.png"
              alt="IQ With INR"
              width={260}
              height={260}
              className="object-contain 
                        w-36 h-36 
                        sm:w-44 sm:h-44 
                        md:w-60 md:h-60"
            />

          </div>


          {/* CONTENT BELOW */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 leading-tight drop-shadow-md">
            Learn Trading with Confidence 📈
          </h1>

          <p className="text-green-900 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Gain practical skills in price action, technical analysis, derivatives,
            and disciplined trading strategies. Learn to trade effectively across
            Intraday, Swing, and Long-Term investments.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/courses"
              className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition font-semibold"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow hover:bg-green-200 transition font-semibold"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-lg space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          About Me
        </h2>

        <p className="text-green-900 text-lg md:text-xl leading-relaxed">
          I am Karthikeyan K, a Mechanical Engineer with a Bachelor’s degree in
          Mechanical Engineering and a Master’s degree in Computer Aided Design
          (CAD). My passion for the stock market began in 2015 and has evolved
          into a professional journey rooted in analysis, discipline, and
          technology-driven trading.
        </p>

        <p className="text-green-900 text-lg md:text-xl leading-relaxed">
          Blending engineering logic with market psychology, I specialize in
          market analysis, risk management, and both manual and algorithmic
          trading strategies. My approach emphasizes clarity, data-driven
          decision-making, and consistency—helping traders understand the market
          rather than blindly follow tips.
        </p>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="max-w-6xl mx-auto space-y-12 px-6">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          Explore Our Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Price Action */}
          <CourseCard
            href="/courses/price-action"
            title="Price Action Trading"
            desc="Intraday, Swing, Long Term & SIP strategies using price action."
          />

          {/* Derivative */}
          <CourseCard
            href="/courses/derivative-market"
            title="Derivative Market (F&O)"
            desc="Futures & Options strategies, hedging, and analysis."
          />

          {/* Seminar */}
          <CourseCard
            href="/courses/price-action-seminar"
            title="Price Action Seminar"
            desc="Live seminar with advanced market strategies."
          />

          {/* SMC */}
          <CourseCard
            href="/courses/smart-money-concept"
            title="Smart Money Concept (SMC)"
            desc="Institutional trading techniques & liquidity concepts."
          />

          {/* Tradetron */}
          <CourseCard
            href="/courses/tradetron-strategy"
            title="Tradetron Strategy (GPM 3)"
            desc="Subscribe & deploy automated trading strategy on Tradetron."
          />

          {/* Other Services */}
          <CourseCard
            href="/courses/other-services"
            title="Other Services"
            desc="Stock analysis, intraday levels, calls & universal setup."
          />

        </div>
      </section>
    </div>
  );
}

/* ================= REUSABLE COURSE CARD ================= */
function CourseCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
            {title}
          </h3>
          <p className="mt-2 text-green-900 text-sm md:text-base">
            {desc}
          </p>
        </div>
        <span className="mt-4 text-green-700 font-semibold group-hover:text-green-900">
          View Details →
        </span>
      </div>
    </Link>
  );
}
