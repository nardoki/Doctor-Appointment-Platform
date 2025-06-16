// import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, photo } = item;

  return (
    <div 
      className="py-6 px-6 lg:px-8 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
      style={{
        backgroundColor: `${bgColor || 'white'}`,
        color: `${textColor || 'black'}`,
      }}
    >
      <div className="relative flex justify-center mb-4">
        <img 
          src={photo} 
          alt={name} 
          className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md transform transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-110"
        />
      </div>

      <h2 className="text-2xl font-semibold text-center mb-3">
        {name}
      </h2>

      <p className="text-sm text-gray-600 text-center mb-5">
        {desc}
      </p>

      <div className="flex justify-between items-center mt-5">
        <Link 
          to='/doctors' 
          className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <BsArrowRight className="text-white w-6 h-6" />
        </Link>
      
      </div>
    </div>
  );
}

export default ServiceCard;