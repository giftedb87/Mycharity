
import React from 'react';
import { Link } from 'react-router-dom';
import { QuoteIcon } from '../components/IconComponents';

// Data for sections
const causes = [
    {
        image: 'https://picsum.photos/id/1015/400/300',
        title: 'The Thirsty are Waiting For Your Help.',
        raised: 8000,
        goal: 10000,
    },
    {
        image: 'https://picsum.photos/id/10/400/300',
        title: 'Changing a lives one meal at a time.',
        raised: 12390,
        goal: 20000,
    },
    {
        image: 'https://picsum.photos/id/20/400/300',
        title: 'Let\'s be one community in this cause.',
        raised: 16550,
        goal: 25000,
    }
];

const testimonials = [
  {
    quote: "This is the best agency for non-profit activities. I love their work so much. I wish one day they would remove all the poverty from the world. I will be there when they need.",
    name: "Elizabeth Joe",
    role: "Founder of AJRM",
    avatar: "https://picsum.photos/id/1027/100/100",
  },
  {
    quote: "Their commitment and impact are truly inspiring. Every donation is used effectively to bring real change to communities. I'm proud to be a supporter.",
    name: "Esther Howard",
    role: "Web Designer",
    avatar: "https://picsum.photos/id/1011/100/100",
  },
  {
    quote: "Seeing the smiles on the children's faces is the best reward. This organization works tirelessly and transparently to make a difference.",
    name: "Albert Flores",
    role: "Volunteer",
    avatar: "https://picsum.photos/id/1012/100/100",
  },
];

const events = [
  {
    image: 'https://picsum.photos/id/21/400/400',
    date: { day: '18', month: 'June' },
    title: 'Help for the African Poor Children',
    tag: 'Children',
  },
  {
    image: 'https://picsum.photos/id/22/400/400',
    date: { day: '25', month: 'Feb' },
    title: 'Let\'s Solve the Water Problem',
    tag: 'Water',
  },
  {
    image: 'https://picsum.photos/id/23/400/400',
    date: { day: '29', month: 'March' },
    title: 'Cloth Distribution on Their Happiness',
    tag: 'Clothes',
  },
];

const volunteers = [
    { name: 'Wade Warren', role: 'Volunteer', image: 'https://picsum.photos/id/1005/200/200' },
    { name: 'Michelle Waldo', role: 'Team Leader', image: 'https://picsum.photos/id/1013/200/200' },
    { name: 'Dianne Pinsly', role: 'Coordinator', image: 'https://picsum.photos/id/1014/200/200' },
    { name: 'John Wing', role: 'Fundraiser', image: 'https://picsum.photos/id/1016/200/200' },
]

const newsArticles = [
    { image: 'https://picsum.photos/id/30/400/250', date: '25 Nov', title: 'Your clothes give them a better life', description: 'Small acts of kindness can make a huge difference...' },
    { image: 'https://picsum.photos/id/31/400/250', date: '26 Nov', title: 'They can recieve proper food to be healthy', description: 'With your support, we can ensure no child goes hungry...' },
    { image: 'https://picsum.photos/id/32/400/250', date: '27 Nov', title: 'Help make their dreams come true', description: 'Education is the key to a brighter future. Help us...' },
]


// Component for a single Cause Card
const CauseCard: React.FC<{ cause: typeof causes[0] }> = ({ cause }) => {
    const percentage = Math.round((cause.raised / cause.goal) * 100);
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={cause.image} alt={cause.title} className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="font-bold text-xl mb-4 text-dark-charcoal">{cause.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-yellow h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

// Component for a single Testimonial Card
const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <div className="absolute top-0 left-8 -mt-5">
            <div className="bg-primary-yellow p-3 rounded-full text-white">
                <QuoteIcon />
            </div>
        </div>
        <p className="text-gray-600 mb-6">{testimonial.quote}</p>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-dark-charcoal">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
        </div>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/id/237/1600/900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <p className="text-lg font-medium text-primary-yellow">Give them a chance.</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight max-w-2xl">Give The Child The Gift Of Education.</h1>
          <p className="mt-4 max-w-xl">Quisque feugiat ex quis congue iaculis. Nunc vitae elit eu ex gravida.</p>
          <div className="mt-8 flex items-center space-x-4">
            <Link to="/about" className="bg-primary-yellow text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full max-w-md mx-auto h-96">
                  <div className="absolute w-4/5 h-4/5 top-0 left-0 overflow-hidden rounded-tl-3xl rounded-br-3xl">
                      <img src="https://picsum.photos/id/40/400/600" alt="Child" className="w-full h-full object-cover transform scale-110"/>
                  </div>
                   <div className="absolute w-3/5 h-3/5 bottom-0 right-0 overflow-hidden rounded-xl border-8 border-white shadow-2xl">
                      <img src="https://picsum.photos/id/42/400/400" alt="Child" className="w-full h-full object-cover"/>
                  </div>
              </div>
              <div>
                  <p className="text-primary-yellow font-semibold">Welcome To My Charity</p>
                  <h2 className="text-4xl font-bold text-dark-charcoal mt-2">You're the Hope of Others.</h2>
                  <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, mauris vitae accumsan blandit, velit magna dignissim leo, et feugiat magna turpis vitae velit. Maecenas sed rhoncus dui.</p>
                  <p className="mt-4 text-gray-600">Suspendisse potenti. In hac habitasse platea dictumst. Sed ac lorem enim.</p>
                  <div className="mt-8">
                     <Link to="/donate" className="bg-primary-yellow text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition-colors">
                          Donate Now
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Popular Causes Section */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 text-center">
            <p className="text-primary-yellow font-semibold">Help The People</p>
            <h2 className="text-4xl font-bold text-dark-charcoal mt-2">Find the popular cause</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                {causes.map((cause, index) => <CauseCard key={index} cause={cause} />)}
            </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-yellow font-semibold">Testimonials</p>
            <h2 className="text-4xl font-bold text-dark-charcoal mt-2">What they're talking about us.</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 text-left">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/500?grayscale&blur=2')" }}>
        <div className="container mx-auto px-4 text-center text-white bg-dark-charcoal bg-opacity-60 p-12 rounded-lg">
          <h2 className="text-3xl font-bold">Your donation means a lot to them.</h2>
          <p className="mt-2 mb-6">Donate what you can to change the lives of those in need.</p>
          <Link to="/donate" className="bg-primary-yellow text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition-colors">
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
