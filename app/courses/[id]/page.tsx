// app/courses/[id]/page.tsx
import React from "react";

type CourseDetails = {
  title: string;
  description: string;
  topics?: string[];
  duration: string;
  fees: string;
  timings?: string[];
  extra?: string[];
};

const COURSES: Record<string, CourseDetails> = {
  "price-action": {
    title: "Price Action Trading",
    description:
      "Learn professional trading using pure price action for Intraday, Swing, Long-Term & SIP investments.",
    duration: "15 Hours",
    fees: "₹10,000 → ₹7,500",
    topics: [
      "Basics of Share Market",
      "Bull & Bear Market",
      "Technical Analysis",
      "Candlestick Patterns",
      "Dow Theory",
      "Trend Analysis",
      "Demand & Supply",
      "Support & Resistance",
      "Multi Time Frame Analysis",
      "Fibonacci Tools",
      "Chart Patterns",
      "Risk & Psychology",
    ],
    timings: ["Weekdays: 7 PM – 8 PM (Mon–Fri)", "Weekends: 10 AM – 12 PM"],
  },

  "derivative-market": {
    title: "Derivative Market (F&O)",
    description:
      "Master Futures & Options trading with strategies, option chain analysis and hedging techniques.",
    duration: "10 Hours",
    fees: "₹7,500 → ₹5,000",
    topics: [
      "Equity & Derivative Market",
      "Futures & Options",
      "Option Chain Analysis",
      "Option Buying vs Selling",
      "Option Strategies",
      "Hedging Methods",
      "Opstra / Sensibull Tools",
      "Risk Management",
      "Trading Psychology",
    ],
    timings: ["Weekends: 4 PM – 6 PM"],
  },

  "price-action-seminar": {
    title: "Price Action Seminar",
    description:
      "Advanced live seminar focusing on real-time market examples.",
    duration: "3 Hours",
    fees: "₹5,000 → ₹3,000",
    topics: [
      "Candlestick Reading",
      "Trend Analysis",
      "Support & Resistance",
      "Demand & Supply",
      "Multi Time Frame Analysis",
      "Fibonacci Tools",
    ],
    timings: ["Saturday & Sunday: 10 AM – 1 PM"],
  },

  "smart-money-concept": {
    title: "Smart Money Concept (SMC)",
    description:
      "Trade like institutions by understanding liquidity, order blocks and market manipulation.",
    duration: "10 Hours",
    fees: "₹7,500 → ₹5,000",
    topics: [
      "Market Structure",
      "Liquidity",
      "Order Blocks",
      "Fair Value Gap",
      "Premium & Discount Zones",
      "Kill Zones",
      "Inducement",
      "Multi Time Frame Analysis",
      "SMC Risk Management",
    ],
  },
  
  "tradetron-strategy": {
    title: "Deploy a Strategy on Tradetron",
    description:
      "Step-by-step guide to subscribe and deploy the GPM 3 trading strategy on the Tradetron platform, for both paper trading and live trading.",
    duration: "Self-paced",
    fees: "Free / Included",
    topics: [
      "Sign Up / Log In on Tradetron",
      "Subscribe to GPM 3 Strategy",
      "Paper Trading Setup",
      "Live Auto Trading Setup",
      "Configure Broker and Capital",
      "Activate and Monitor Strategy",
    ],
    extra: [
      "Learn hands-on deployment of automated strategies",
      "Practice risk-free with paper trading",
      "Monitor strategy performance in real time",
      "Understand execution settings and capital allocation",
    ],
  },
};

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSES[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Course not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div
  className="text-white py-20 px-6"
    style={{
        background: "linear-gradient(to right, #065f46, #047857, #064e3b)",
    }}
        >
        <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {course.title}
            </h1>
            <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto md:mx-0 drop-shadow">
            {course.description}
            </p>
        </div>
    </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* DURATION / FEES / TIMINGS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-xl font-semibold text-green-700">
              {course.duration}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Fees</p>
            <p className="text-xl font-semibold text-green-700">
              {course.fees}
            </p>
          </div>

          {course.timings && (
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-sm text-gray-500 mb-2">Timings</p>
              <ul className="text-gray-700 text-sm space-y-1">
                {course.timings.map((time, i) => (
                  <li key={i}>• {time}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* TOPICS */}
        {course.topics && (
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Topics Covered
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {course.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded"
                >
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                  {topic}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
            <a
                href="tel:+919790170278"
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg inline-block"
            >
                Enroll Now
            </a>
        </div>

      </div>
    </section>
  );
}
