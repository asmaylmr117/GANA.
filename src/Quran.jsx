import React, { useEffect, useState, useRef } from 'react';

const Quran = ({ activeSurahIndex, showSurah, closeSurah }) => {
  const firstTenSectionImages = [
    "img/mostafa.jpg",
    "img/abdoo.jpg",
    "img/Sedeq.jpg",
    "img/hosery.jpg",
    "img/bana.jpg",
    "img/agmy1.jpg",
    "img/sodes.jpg",
    "img/moeqlyi.jpeg",
    "img/unnamed.png",
    "img/mshary.jpg",
  ];
  const sectionImages = Array(114).fill(firstTenSectionImages);

  const [surahNames, setSurahNames] = useState([]);
  const [surahData, setSurahData] = useState({ name: '', pdfs: [], audio: [] });
  const [isLoading, setIsLoading] = useState(true);
  const audioRefs = useRef([]);

  // Fetch all surah names
  useEffect(() => {
    const fetchSurahNames = async () => {
      try {
        const response = await fetch('https://gana-back-plum.vercel.app/api/surahs');
        const data = await response.json();
        setSurahNames(data.map(surah => surah.name));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching surah names:', error);
        setIsLoading(false);
      }
    };
    fetchSurahNames();
  }, []);

  // Fetch data for the active surah
  useEffect(() => {
    if (activeSurahIndex !== null) {
      const fetchSurahData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`https://gana-back-plum.vercel.app/api/surahs/${activeSurahIndex + 1}`);
          const data = await response.json();
          setSurahData({
            name: data.name,
            pdfs: data.pdfs,
            audio: data.audio
          });
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching surah data:', error);
          setIsLoading(false);
        }
      };
      fetchSurahData();
    } else {
      setSurahData({ name: '', pdfs: [], audio: [] });
      setIsLoading(false);
    }
  }, [activeSurahIndex]);

  const handlePlay = (currentIndex) => {
    audioRefs.current.forEach((audio, index) => {
      if (index !== currentIndex && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
          <div className="text-white text-2xl font-bold mb-4">جارٍ التحميل...</div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-500"></div>
        </div>
      )}

      {activeSurahIndex === null && !isLoading && (
        <div className="mt-4 p-4 bg-white bg-opacity-10 text-center shadow-md">
          <h2 className="text-2xl mb-4 text-white">القرآن الكريم</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {surahNames.map((surah, index) => (
              <div
                key={index}
                className="section p-2 bg-gray-900 bg-opacity-80 rounded cursor-pointer text-center text-white"
                onClick={() => showSurah(index)}
              >
                {surah}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSurahIndex !== null && !isLoading && (
        <div className="mt-4 p-4 bg-white bg-opacity-10 shadow-md relative">
          <button className="close-button" onClick={closeSurah}>
            ×
          </button>
          <h2 className="text-2xl text-white mb-4 text-center">{surahData.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
            {sectionImages[activeSurahIndex].map((image, index) => (
              <div key={index} className="relative cursor-pointer">
                <img
                  src={image}
                  alt={`Section ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg aspect-[16/9]"
                />
                {surahData.audio[index] && (
                  <audio
                    controls
                    className="w-full mt-2"
                    ref={(el) => (audioRefs.current[index] = el)}
                    onPlay={() => handlePlay(index)}
                  >
                    <source src={surahData.audio[index]} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
          {surahData.pdfs[0] && (
            <div className="flex justify-center items-center h-screen">
              <iframe
                src={`https://drive.google.com/file/d/${surahData.pdfs[0].split('/d/')[1].split('/view')[0]}/preview`}
                width="95%"
                height="600px"
                className="border mx-auto block"
                title="Surah Preview"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quran;
