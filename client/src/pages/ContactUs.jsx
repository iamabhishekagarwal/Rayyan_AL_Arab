import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 min-h-screen overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-2/3 h-80 bg-gradient-to-tr from-blue-100 via-blue-200 to-transparent rounded-b-full opacity-30" style={{ animation: 'fadeInDown 0.7s both' }}></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-80 bg-gradient-to-bl from-yellow-100 via-yellow-200 to-transparent rounded-t-full opacity-20" style={{ animation: 'fadeInUp 0.7s both' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-2xl" style={{ animation: 'pulse 2s infinite' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow mb-4" style={{ animation: 'fadeIn 1s both' }}>
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed" style={{ animation: 'fadeIn 1.5s both' }}>
            We’d love to hear from you. Reach out to discuss your next project or any inquiries!
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information Card */}
          <div className="flex-1 bg-white bg-opacity-70 shadow-xl rounded-2xl p-8 mb-8 md:mb-0" style={{ animation: 'fadeInUp 1s both' }}>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Main Office</h2>
            <div className="mb-6 flex items-start gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mr-2 text-2xl">📍</span>
              <span>
                <strong>Address:</strong>
                <br />
                Al Ameer Majid Street,
                <br />
                Al Aziziyah District, Jeddah
              </span>
            </div>
            <div className="mb-6 flex items-start gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 mr-2 text-2xl">✉️</span>
              <span>
                <strong>Email:</strong>
                <br />
                <a href="mailto:info@alrayyanalarab.co" className="text-blue-700 underline">
                  info@alrayyanalarab.co
                </a>
              </span>
            </div>
            <div className="mb-4 flex items-start gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mr-2 text-2xl">📞</span>
              <span>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+96612545933" className="text-blue-700 underline">+966 12 545 933</a>
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white bg-opacity-70 shadow-xl rounded-2xl p-8" style={{ animation: 'fadeInUp 1s 0.3s both' }}>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">Send Us a Message</h2>
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-blue-50 border border-blue-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-green-50 border border-green-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-yellow-50 border border-yellow-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition resize-none"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-full font-bold text-lg hover:bg-blue-900 transition"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-block bg-green-100 p-4 rounded-full mb-4" style={{ animation: 'pulse 2s infinite' }}>
                  <svg
                    className="w-8 h-8 text-green-600 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-700">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.25, 0.4, 0.45, 1) both;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.7s cubic-bezier(0.25, 0.4, 0.45, 1) both;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s cubic-bezier(0.25, 0.4, 0.45, 1) both;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
