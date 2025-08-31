
import React from 'react';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/id/10/800/600', alt: 'Children smiling' },
  { id: 2, src: 'https://picsum.photos/id/11/800/600', alt: 'Community gathering' },
  { id: 3, src: 'https://picsum.photos/id/12/800/600', alt: 'Classroom session' },
  { id: 4, src: 'https://picsum.photos/id/13/800/600', alt: 'Water distribution' },
  { id: 5, src: 'https://picsum.photos/id/14/800/600', alt: 'Food program' },
  { id: 6, src: 'https://picsum.photos/id/15/800/600', alt: 'Building a school' },
  { id: 7, src: 'https://picsum.photos/id/16/800/600', alt: 'Medical check-up' },
  { id: 8, src: 'https://picsum.photos/id/17/800/600', alt: 'Volunteer work' },
  { id: 9, src: 'https://picsum.photos/id/18/800/600', alt: 'Happy faces' },
  { id: 10, src: 'https://picsum.photos/id/19/800/600', alt: 'Group photo' },
  { id: 11, src: 'https://picsum.photos/id/21/800/600', alt: 'Learning together' },
  { id: 12, src: 'https://picsum.photos/id/22/800/600', alt: 'Clean water project' },
];


const GalleryImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={src} alt={alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{alt}</p>
        </div>
    </div>
);


const GalleryPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-dark-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Gallery</h1>
          <p className="mt-2 text-lg text-gray-300">A glimpse into the lives we've touched and the work we do.</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <GalleryImage key={image.id} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
