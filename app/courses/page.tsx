export default function Courses() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Price Action Trading */}
      <section>
        <h1 className="text-3xl font-bold text-green-700">
          Price Action Trading
        </h1>

        <p className="mt-2 font-semibold">
          (Intraday / Swing Trading / Long Term / SIP)
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Basics of Share Market</li>
          <li>Bull Market & Bear Market</li>
          <li>Fundamental & Technical Analysis</li>
          <li>Line Chart & Candle Sticks</li>
          <li>Dow Theory</li>
          <li>Trend Analysis & Trend Line</li>
          <li>Demand & Supply (Advanced)</li>
          <li>Support & Resistance</li>
          <li>Multi Time Frame Analysis</li>
          <li>Fibonacci Retracement & Extension</li>
          <li>Technical Indicators</li>
          <li>Patterns (Double Top, Double Bottom, Channel, Box Breakout)</li>
          <li>Money Management & Psychology</li>
        </ul>

        <div className="mt-4 bg-green-100 p-4 rounded">
          <p><strong>Fees:</strong> ₹10,000 → ₹7,500</p>
          <p><strong>Duration:</strong> 15 Hours</p>
          <p><strong>Weekdays:</strong> 7 PM – 8 PM</p>
          <p><strong>Weekends:</strong> 10 AM – 12 PM</p>
        </div>
      </section>

      {/* Derivative Market */}
      <section>
        <h1 className="text-3xl font-bold text-green-700">
          Derivative Market (Futures & Options)
        </h1>

        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Equity & Derivative Market Basics</li>
          <li>Futures & Options Contracts</li>
          <li>Types & Moneyness of Options</li>
          <li>Option Chain Analysis</li>
          <li>Hedging Methods</li>
          <li>Option Buying vs Selling</li>
          <li>Option Strategies</li>
          <li>Opstra & Sensibull</li>
          <li>Money Management & Psychology</li>
        </ul>

        <div className="mt-4 bg-green-100 p-4 rounded">
          <p><strong>Fees:</strong> ₹7,500 → ₹5,000</p>
          <p><strong>Duration:</strong> 10 Hours</p>
          <p><strong>Timing:</strong> 4 PM – 6 PM (Weekends)</p>
        </div>
      </section>

      {/* Seminar */}
      <section>
        <h1 className="text-3xl font-bold text-green-700">
          Price Action – Seminar
        </h1>

        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Line Chart & Candle Sticks</li>
          <li>Dow Theory</li>
          <li>Trend Analysis</li>
          <li>Support & Resistance</li>
          <li>Demand & Supply</li>
          <li>Multi Time Frame Analysis</li>
          <li>Fibonacci Retracement & Extension</li>
        </ul>

        <div className="mt-4 bg-green-100 p-4 rounded">
          <p><strong>Fees:</strong> ₹5,000 → ₹3,000</p>
          <p><strong>Duration:</strong> 3 Hours</p>
          <p><strong>Timing:</strong> 10 AM – 1 PM</p>
        </div>
      </section>

      <p className="text-center font-semibold text-green-700">
        ** Precise Trading Setup for Intraday, Swing & Long-Term **
      </p>

    </div>
  );
}
