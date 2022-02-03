import React from 'react';

const TagContent = (props) => {
  const { title, tags } = props;
  return (
    <div className='tagContent text-center flex-col'>
      <h3 className='tagContent-title font-mono mb-3 font-semibold text-indigo-900'>
        {title}
      </h3>

      <div className='tagContent-list flex flex-col md:flex-row md:flex-wrap'>
        {tags.map((tag) => (
          <div
            className={`h-10 flex text-white font-semibold items-center justify-center w-auto my-2 min-w-36 border rounded-tl-full rounded-br-full px-4 py-6 ${tag.bgColor}`}
            key={tag.id}
          >
            {tag.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagContent;
