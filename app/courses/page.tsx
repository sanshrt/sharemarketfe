import Link from "next/link";

const courses = [
  {
    title: "Price Action Trading",
    description:
      "Intraday, Swing, Long Term & SIP trading using price action",
    slug: "price-action",
  },
  {
    title: "Derivative Market (F&O)",
    description: "Futures, Options, strategies & hedging techniques",
    slug: "derivative-market",
  },
  {
    title: "Price Action Seminar",
    description: "Advanced live seminar with real market examples",
    slug: "price-action-seminar",
  },
  {
    title: "Smart Money Concept (SMC)",
    description:
      "Institutional trading concepts, liquidity & order blocks",
    slug: "smart-money-concept",
  },
  {
    title: "Premium Services",
    description:
      "Stock analysis, intraday levels, Calls Service & universal trading setup",
    slug: "other-services",
  },
  {
    title: "Algo Trade Strategy",
    description:
      "Subscribe and deploy the GPM 3 automated trading strategy on Tradetron",
    slug: "tradetron-strategy",
  },
];

export default function CoursesPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Our Courses
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                {course.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {course.description}
              </p>

              <Link
                href={`/courses/${course.slug}`}
                className="text-green-700 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
