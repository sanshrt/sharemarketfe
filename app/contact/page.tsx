export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      <h1 className="text-3xl font-bold text-green-700">
        Contact Share Market
      </h1>

      {/* CONTACT DETAILS */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <p>
          📧 <strong>Email:</strong> sharemarket@gmail.com
        </p>
        <p>
          📞 <strong>Phone:</strong> +91 97901 70278
        </p>
        <p>
          📍 <strong>Address:</strong><br />
          Share Market Academy,<br />
          Chennai, Tamil Nadu, India
        </p>
      </div>

      {/* CONTACT FORM */}
      <form className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-green-300 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-green-300 rounded"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-2 border border-green-300 rounded"
        />

        <button
          type="submit"
          className="bg-green-700 text-amber-50 px-4 py-2 rounded hover:bg-green-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
