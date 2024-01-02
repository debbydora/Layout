import React from 'react'

const PostCards = ({title, content}) => {
  return (
    <div className="bg-lightBlue rounded-lg p-3 border border-primary text-center">
      <p className="text-primary font-medium text-center capitalize mb-2">{title}</p>
      <p className='text-black text-sm'>{content}</p>
    </div>
  );
}

export default PostCards
