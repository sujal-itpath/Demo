import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

const CartoonGallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Funny', 'Adventure', 'Dance', 'Action'];

  const videos = [
    {
      id: 1,
      title: 'Dancing Robot',
      description: 'Fun dance moves',
      duration: '0:15',
      category: 'Dance',
      thumbnail: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Superhero Flight',
      description: 'Action adventure',
      duration: '0:12',
      category: 'Action',
      thumbnail: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Magic Spell',
      description: 'Fantasy magic',
      duration: '0:20',
      category: 'Adventure',
      thumbnail: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Funny Chef',
      description: 'Comedy cooking',
      duration: '0:18',
      category: 'Funny',
      thumbnail: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Space Explorer',
      description: 'Sci-fi adventure',
      duration: '0:14',
      category: 'Adventure',
      thumbnail: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Pirate Adventure',
      description: 'High seas fun',
      duration: '0:16',
      category: 'Adventure',
      thumbnail: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Rock Star',
      description: 'Music performance',
      duration: '0:22',
      category: 'Dance',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Ninja Warrior',
      description: 'Martial arts action',
      duration: '0:13',
      category: 'Action',
      thumbnail: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8"style={{ maxWidth: '1500px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Cartoon Adventure
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Select from hundreds of animated videos across different categories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Load More Videos
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Face?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already making viral cartoon content. 
              Start your transformation journey today!
            </p>
            <button onClick={() => navigate('/face-swap')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2">
              <span>Start Creating Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartoonGallery;
