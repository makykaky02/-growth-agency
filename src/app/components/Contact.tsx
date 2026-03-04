'use client';

import { useState } from 'react';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Let’s <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Work Together</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Ready to take your marketing to the next level? Reach out and let's start something great.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-left shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Tell Me About Your Project
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                placeholder="Company / Brand Name"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                placeholder="Website (optional)"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <select className="w-full p-2 rounded border border-gray-300 text-gray-900">
                <option value="none">Select Budget Range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
              <textarea
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