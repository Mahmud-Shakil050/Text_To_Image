
import React, { useState } from 'react';

const AiGenerate = ({ onImageList }) => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [style, setStyle] = useState('cartoon');
  const [ratio, setRatio] = useState('1:1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateImage = async () => {
    setLoading(true);
    setError('');
    setImage('');

    try {
      // You can modify this logic to match your backend or API
      const formattedPrompt = `${prompt}, style: ${style}, aspect ratio: ${ratio}`;
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        formattedPrompt
      )}`;
      setImage(imageUrl);
      onImageList(imageUrl);
    } catch (error) {
      setError('Failed to create image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-200 text-black dark:bg-gray-950 dark:text-white">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
        Text to Image Generator
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && prompt.trim()) {
              handleGenerateImage();
            }
          }}
          placeholder="Enter your prompt"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium">Style</label>
            <select
              value={style}
              onChange={e => setStyle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md dark:text-white"
            >
              <option value="cartoon">Cartoon</option>
              <option value="anime">Anime</option>
              <option value="3d">3D Render</option>
              <option value="sketch">Sketch</option>
              <option value="realistic">Realistic</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium dark:text-black">Aspect Ratio</label>
            <select
              value={ratio}
              onChange={e => setRatio(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md dark:text-black"
            >
              <option value="1:1">1:1 (Square)</option>
              <option value="16:9">16:9 (Landscape)</option>
              <option value="9:16">9:16 (Portrait)</option>
              <option value="4:3">4:3</option>
              <option value="3:2">3:2</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateImage}
          disabled={loading || !prompt}
          className={`px-4 py-2 rounded-md font-medium text-white ${
            loading || !prompt
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Generated"
            className="w-full rounded-md border border-gray-200 shadow-md"
          />{' '}
          <a
            href={image}
            download={image}
            className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          
            > Download image
          </a>
        </div>
      )}
    </div>
  );
};

export default AiGenerate;



/*import React, { useState } from 'react';

const AiGenerate = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateImage = async () => {
    setLoading(true);
    setError('');
    setImage('');

    try {
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}`;
      setImage(imageUrl);
    } catch (error) {
      setError('Failed to create image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6  bg-gray-200">
      <h1 className="text-xl md:text-3xl  font-bold text-center mb-6">
        Text to Image Generator
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && prompt.trim()) {
              handleGenerateImage();
            }
          }}
          placeholder="Enter your prompt"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       
        <button
          onClick={handleGenerateImage}
          disabled={loading || !prompt}
          className={`px-4 py-2 rounded-md font-medium text-white ${
            loading || !prompt
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Generated"
            width="200px" height="250px"
            className="w-full rounded-md border border-gray-200 shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default AiGenerate;
*/