// app/courses/[id]/page.tsx
import React from "react";

type CourseDetails = {
  title: string;
  description: string;
  topics?: string[];
  duration: string;
  fees: string;
  offerFees?: string;
  methods: string[];
  timings?: string[];
  extra?: string[];
  steps?: {
    title: string;
    items: string[];
  }[];

};

const COURSES: Record<string, CourseDetails> = {
  "price-action": {
    title: "Price Action Trading",
    description:
      "Learn professional trading using pure price action for Intraday, Swing, Long-Term & SIP investments.",
    duration: "15 Hours",
    fees: "₹10,000 ",
    offerFees: "₹7,500",
    methods: ["Online", "/", "Offline"],
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
    fees: "₹7,500",
    offerFees: "₹5,000",
    methods: ["Online","/", "Offline"],
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
    fees: "₹5,000",
    offerFees: "₹3,000",
    methods: ["Online", "/","Offline"],

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
    fees: "₹7,500",
    offerFees: "₹5,000",
    methods: ["Online", "/","Offline"],

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
    title: "Algo Trade strategy",
    description:
      "Subscribe and deploy the GPM 3 automated trading strategy on Tradetron",
    duration: "Intraday Option Buying",
    fees: "Rs.300/Month",
    
    methods: ["Online", "/", "Offline"],
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

  "other-services": {
  title: "Premium Services",
  description:
    "Advanced trading services offering stock recommendations, precise intraday levels, expert trading calls, and a complete universal trading system for consistent market performance.",
  duration: "Ongoing / Monthly",
  fees: "Depends on Service Selected",

  methods: ["Online", "/", "Offline"],

  steps: [
    {
      title: "Our Services",
      items: [
        "Service 1: Stock Recommendations – Get expert stock analysis with precise Entry, Target & Stop-Loss levels.",
        "Service 2: Intraday Trading Levels (NIFTY & BANKNIFTY) – High-precision daily index levels for confident execution.",
        "Service 3: Intraday Calls (NIFTY & BANKNIFTY) – Expert intraday calls with accurate entry, exit & risk control.",
        "Service 4: Intraday Calls – Crude Oil (5:30 PM – 10 PM) – Specialized evening session calls with structured targets & risk management.",
        "Service 5: Universal Trading Setup – Complete system for Intraday, Swing trading & Long-Term investing."
      ],
    },
    
  ],
}




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

            {course.offerFees && (
              <>
                <p className="text-sm text-gray-500 mt-2">Offer Price</p>
                <p className="text-xl font-semibold text-red-600">
                  {course.offerFees}
                </p>
              </>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Methods</p>
            <p className="text-xl font-semibold text-green-700">
              {course.methods}
            </p>
          </div>

          
          
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
        {/* STEPS (Only for courses like Other Services) */}
        {course.steps && (
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Steps
            </h2>

            <div className="space-y-6">
              {course.steps.map((step, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">
                    {i + 1}. {step.title}
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {step.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* CTA */}
        <div className="text-center">
            <a
                href="https://forms.gle/qonBgKk4bafJJP4SA"
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg inline-block"
            >
                Enroll Now
            </a>
        </div>

      </div>
    </section>
  );
}
