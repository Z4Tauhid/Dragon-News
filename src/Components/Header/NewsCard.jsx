import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    
  } = news;

  return (
<div className='flex flex-col gap-5'>

<div className="card bg-base-100 shadow-md border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-4 pt-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">{author.name}</p>
          <p className="text-xs text-gray-500">
            {format(new Date(author.published_date), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>

      <div className="card-body px-4 pt-2">
        <h2 className="card-title text-base md:text-lg">{title}</h2>

        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-48 object-cover rounded-lg my-2"
        />

        <p className="text-sm text-gray-700">
          {details.length > 150
            ? `${details.slice(0, 150)}...`
            : details}
          <span className="text-blue-600 font-medium cursor-pointer"> Read More</span>
        </p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-orange-500 gap-1">
            <FaStar /> <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>

</div>
    
    
  );
};

export default NewsCard;
