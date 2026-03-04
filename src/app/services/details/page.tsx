'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alexandria } from 'next/font/google';

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['700'],
});

export default function ServicesDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      website: formData.get('website'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setShowModal(false);
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-white min-h-screen py-20 px-6 relative">
      {/* Top-left Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
        >
          ← Back
        </button>
      </div>

      {/* Top-right Contact Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold text-sm shadow-md hover:opacity-90 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className={`${alexandria.className} text-4xl md:text-5xl font-bold text-gray-900 mb-12`}>
          Service Highlights
        </h1>

        {/* Video Grid with Descriptions */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Email Marketing */}
          <div className="flex flex-col items-center">
            <h3 className={`${alexandria.className} text-xl font-bold text-gray-800 mb-4`}>
              Email Marketing
            </h3>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow mb-4">
              <video
                src="/videos/email-marketing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Build lasting relationships and drive sales with personalized email campaigns that reach your audience at the right moment.
            </p>
          </div>

          {/* Branding */}
          <div className="flex flex-col items-center">
            <h3 className={`${alexandria.className} text-xl font-bold text-gray-800 mb-4`}>
              Branding
            </h3>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow mb-4">
  <video
    src="/videos/branding-vid.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>
            <p className="text-gray-600 text-sm">
              Shape a memorable identity that reflects your mission, values, and visual story — making you instantly recognizable.
            </p>
          </div>

          {/* SEO */}
          <div className="flex flex-col items-center">
            <h3 className={`${alexandria.className} text-xl font-bold text-gray-800 mb-4`}>
              SEO
            </h3>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow mb-4">
              <video
                src="/videos/seo-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Optimize your website to rank higher on search engines and attract the right traffic organically — without paid ads.
            </p>
          </div>
        </div>

        {/* Bottom Contact Button */}
        <div className="mt-16">
          <button
            onClick={() => setShowModal(true)}
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-left shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Tell Me About Your Project
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                name="company"
                placeholder="Company / Brand Name"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                name="website"
                placeholder="Website (optional)"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <select
                name="budget"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              >
                <option value="none">Select Budget Range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Describe your goals / needs"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-800 text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}