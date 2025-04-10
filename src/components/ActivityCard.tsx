import React from 'react';

// Props interface remains the same
type Props = {
  bgImage: string;
  title: string;
  description: string;
  date: string;
}

export default function ActivityCard({ bgImage, title, description, date }: Props) {
  return (
    
    <div className=" rounded-lg overflow-hidden shadow-lg flex flex-col">

      {/* Image Section */}
      
      <div className="w-full h-40 md:h-48"> 
        <img
          src={bgImage}
          alt={`Activity: ${title}`} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-white mb-2"> 
          {title}
        </h2>

        
        <p className="text-md text-gray-300 mb-3 flex-grow"> 
          {description}
        </p>

        <p className="text-xs text-gray-400 text-center mt-auto pt-2"> 
          {date}
        </p>
      </div>

    </div>
  )
}