
import React from 'react';

// Mock data
const volunteers = [
    { name: 'Wade Warren', role: 'Volunteer', image: 'https://picsum.photos/id/1005/200/200' },
    { name: 'Michelle Waldo', role: 'Team Leader', image: 'https://picsum.photos/id/1013/200/200' },
    { name: 'Dianne Pinsly', role: 'Coordinator', image: 'https://picsum.photos/id/1014/200/200' },
    { name: 'John Wing', role: 'Fundraiser', image: 'https://picsum.photos/id/1016/200/200' },
    { name: 'Jenny Wilson', role: 'Marketing', image: 'https://picsum.photos/id/1027/200/200' },
    { name: 'Robert Fox', role: 'Logistics', image: 'https://picsum.photos/id/1011/200/200' },
];

const stats = [
    { value: '0', label: 'Total Campaigns' },
    { value: '0M', label: 'Total Fund Raised' },
    { value: '0', label: 'Happy Volunteers' },
];


// Reusable Volunteer Card Component
const VolunteerCard: React.FC<{ volunteer: typeof volunteers[0] }> = ({ volunteer }) => (
    <div className="text-center group">
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            <img src={volunteer.image} alt={volunteer.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-dark-charcoal">{volunteer.name}</h3>
        <p className="text-primary-yellow">{volunteer.role}</p>
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-dark-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg text-gray-300">Learn more about our mission, vision, and the team behind My Charity.</p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-yellow font-semibold">OUR STORY</p>
              <h2 className="text-4xl font-bold text-dark-charcoal mt-2">We're on a Mission to Change the World</h2>
              <p className="mt-4 text-gray-600">My Charity was founded with a simple yet powerful belief: every child deserves a chance to succeed. We started as a small group of volunteers and have grown into a global community dedicated to providing education, healthcare, and support to underprivileged children.</p>
              <p className="mt-4 text-gray-600">Our vision is a world where poverty does not limit a child's potential. We work tirelessly to create sustainable solutions that empower communities and create lasting change.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/id/10/400/400" alt="Charity work 1" className="rounded-lg shadow-md w-full h-full object-cover"/>
                <img src="https://picsum.photos/id/20/400/400" alt="Charity work 2" className="rounded-lg shadow-md w-full h-full object-cover mt-8"/>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-yellow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-20 bg-light-bg">
          <div className="container mx-auto px-4 text-center">
              <p className="text-primary-yellow font-semibold">Meet The Team</p>
              <h2 className="text-4xl font-bold text-dark-charcoal mt-2">Our Volunteer Behind the Success Story</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
                  {volunteers.map((volunteer, index) => <VolunteerCard key={index} volunteer={volunteer} />)}
              </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;
