'use client';

import { useState } from 'react';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: 'none',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed');

      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        budget: 'none',
        message: '',
      });

      setShowModal(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Brand Name"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website (optional)"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              >
                <option value="none">Select Budget Range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your goals / needs"
                required
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit'}
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
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in">
          Message sent successfully
        </div>
      )}
    </section>
  );
}