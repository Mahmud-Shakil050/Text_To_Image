import React from 'react';

const Download = ({ images }) => {
  const itmesToProcess = images?.length ? images : [];
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Generated Image List</h2>
      <div className="grid grid-cols-2 gap-4">
        {itmesToProcess.map((img, index) => (
          <div key={index} className="border rounded overflow-hidden">
            <img src={img} alt={`Generated ${index}`} className="w-full" />
            <a
              href={img}
              download={`image-${index + 1}.jpg`}
              className="block text-center py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
