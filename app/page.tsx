import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen space-y-20">

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center md:text-left">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight drop-shadow-md">
            Learn Trading with Confidence 📈
          </h1>

          <p className="text-green-900 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 drop-shadow-sm">
            Gain practical skills in price action, technical analysis, derivatives, 
            and disciplined trading strategies. Learn to trade effectively across 
            Intraday, Swing, and Long-Term investments.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/courses"
              className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition font-semibold text-center"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow hover:bg-green-200 transition font-semibold text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-lg space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          About Me
        </h2>
        <p className="text-green-900 text-lg md:text-xl leading-relaxed">
          I am Karthikeyan K, a Mechanical Engineer with a Bachelor’s degree in Mechanical Engineering and a Master’s degree in Computer Aided Design (CAD). My passion for the stock market began in 2015 and has evolved into a professional journey rooted in analysis, discipline, and technology-driven trading.
        </p>
        <p className="text-green-900 text-lg md:text-xl leading-relaxed">
          Blending engineering logic with market psychology, I specialize in market analysis, risk management, and both manual and algorithmic trading strategies. My approach emphasizes clarity, data-driven decision-making, and consistency—helping traders understand the market rather than blindly follow tips.
        </p>
      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto space-y-12 px-6">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
          Explore Our Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <Link href="/courses/price-action" className="group">
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                  Price Action Trading
                </h3>
                <p className="mt-2 text-green-900 text-sm md:text-base">
                  Intraday, Swing, Long Term & SIP strategies using price action.
                </p>
              </div>
              <span className="mt-4 text-green-700 font-semibold group-hover:text-green-900">
                View Details →
              </span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/courses/derivative-market" className="group">
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                  Derivative Market (F&O)
                </h3>
                <p className="mt-2 text-green-900 text-sm md:text-base">
                  Futures & Options strategies, hedging, and analysis.
                </p>
              </div>
              <span className="mt-4 text-green-700 font-semibold group-hover:text-green-900">
                View Details →
              </span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/courses/price-action-seminar" className="group">
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                  Price Action Seminar
                </h3>
                <p className="mt-2 text-green-900 text-sm md:text-base">
                  Live seminar with advanced market strategies and insights.
                </p>
              </div>
              <span className="mt-4 text-green-700 font-semibold group-hover:text-green-900">
                View Details →
              </span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/courses/smart-money-concept" className="group">
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                  Smart Money Concept (SMC)
                </h3>
                <p className="mt-2 text-green-900 text-sm md:text-base">
                  Institutional trading techniques, liquidity, and order block strategies.
                </p>
              </div>
              <span className="mt-4 text-green-700 font-semibold group-hover:text-green-900">
                View Details →
              </span>
            </div>
          </Link>
          <Link href="/courses/tradetron-strategy" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                  Tradetron Strategy Deployment
                </h3>
                <p className="mt-2 text-green-900">
                  Hands-on guide to deploy GPM 3 strategy on Tradetron
                </p>
              </div>
              <span className="text-green-700 text-3xl">→</span>
            </div>
          </Link>


        </div>
      </section>
    </div>
  );
}
