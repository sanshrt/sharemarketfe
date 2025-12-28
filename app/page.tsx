import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 bg-green-50 min-h-screen">

      {/* Hero / About */}
      <section className="bg-green-50 min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center md:text-left">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">
            Master the Share Market 📈
          </h1>

          {/* Paragraph */}
          <p className="text-green-900 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
            Empowering traders with practical knowledge in price action, technical
            analysis, derivatives, and disciplined trading strategies. Learn to trade
            confidently across Intraday, Swing, and Long-Term investments.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/courses"
              className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition font-semibold"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow hover:bg-green-200 transition font-semibold"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>


      {/* Courses Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          Explore Our Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <Link href="/courses" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                Price Action Trading
              </h3>
              <p className="mt-2 text-green-900">
                Intraday & long term price action training.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/courses" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                Derivative Market
              </h3>
              <p className="mt-2 text-green-900">
                Futures & Options strategies & analysis.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/courses" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-green-800 group-hover:text-green-900">
                Price Action Seminar
              </h3>
              <p className="mt-2 text-green-900">
                Intensive seminar, real world strategies.
              </p>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}
