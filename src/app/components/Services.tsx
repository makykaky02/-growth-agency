'use client';

import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  const serviceList = [
    {
      title: 'SEO Optimization',
      description: 'Rank higher on search engines with proven strategies.',
    },
    {
      title: 'Email Marketing',
      description: 'Engage your customers through targeted campaigns.',
    },
    {
      title: 'Personal Branding',
      description: 'Create a memorable online identity.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What We{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Offer
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Select a service below to explore it further.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {serviceList.map((service, i) => (
          <div
            key={i}
            onClick={() => router.push('/services/details')}
            className="group bg-white rounded-2xl p-8 shadow-md text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-transparent cursor-pointer hover:border-pink-400"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-500 transition">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* ...and more */}
      <p className="text-center text-gray-500 mt-12 text-lg italic">
        ...and more depending on your needs.
      </p>
    </section>
  );
}