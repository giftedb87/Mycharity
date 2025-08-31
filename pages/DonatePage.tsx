
import React from 'react';
import { Link } from 'react-router-dom';

const DonatePage: React.FC = () => {
  // IMPORTANT: Replace with your actual Paystack payment link
  const paystackLink = "https://paystack.com/pay/placeholder-for-my-charity";

  return (
    <div>
      {/* Page Header */}
      <section className="bg-dark-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Make a Donation</h1>
          <p className="mt-2 text-lg text-gray-300">Your contribution can change a life. Support our cause today.</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-dark-charcoal">Your Support is Vital</h2>
          <p className="mt-4 text-gray-600">
            Every donation, no matter the size, helps us provide essential resources like books, meals, and medical care to children in need. By giving today, you are investing in a brighter future and empowering the next generation. All transactions are securely processed through Paystack.
          </p>
          
          <div className="mt-10">
            <a 
              href={paystackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-yellow text-white font-bold text-xl py-4 px-12 rounded-lg hover:bg-amber-500 transition-colors shadow-lg transform hover:scale-105"
            >
              Donate Now via Paystack
            </a>
          </div>

          <div className="mt-12 text-left p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-dark-charcoal">How Your Donation Helps</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li><span className="font-semibold">$25</span> can provide school supplies for a child for a year.</li>
              <li><span className="font-semibold">$50</span> can provide a family with a month's worth of nutritious meals.</li>
              <li><span className="font-semibold">$100</span> can cover the costs of essential medical check-ups and vaccinations.</li>
            </ul>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-dark-charcoal">Thank You for Your Generosity!</h3>
            <p className="text-gray-600 mt-2">Together, we can make a difference.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
