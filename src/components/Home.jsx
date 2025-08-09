import React, { useState } from 'react';
import AiGenerate from './AiGenerate';
import Download from './Download';

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const handleImagelist = imgUrl => {
    setImageList(prev => [imgUrl, ...prev]);
  };
  return (
    <div className="py-13 px-4 dark:bg-gray-950 ">
      <AiGenerate onImageList={handleImagelist} />
      <Download images={imageList} />
    </div>
  );
};

export default Home;
